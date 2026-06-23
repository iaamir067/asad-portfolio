import { SIMPLEX_3D } from '@/lib/glsl-noise';

/**
 * COMPILE field. Points assemble into a luminous screen (home positions),
 * sweep with an amber "render" band, repel from the cursor, and disperse into
 * an ambient star-field as `uDisperse` rises with scroll.
 */
export const particleVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uDisperse;
  uniform vec2  uMouse;
  uniform float uSize;
  uniform float uPixelRatio;

  attribute vec3  aTarget;
  attribute float aRand;

  varying float vMix;
  varying float vAlpha;

  ${SIMPLEX_3D}

  void main() {
    // assembled: home + gentle curl drift
    vec3 home = position;
    vec3 drift = curlNoise(home * 0.16 + uTime * 0.06) * 0.22;
    vec3 assembled = home + drift;

    // cursor repulsion (only while assembled)
    vec2 toMouse = assembled.xy - uMouse;
    float dM = length(toMouse);
    float push = smoothstep(3.0, 0.0, dM) * 1.8;
    assembled.xy += normalize(toMouse + 1e-4) * push * (1.0 - uDisperse);

    // dispersed: drifting star-field
    vec3 disp = aTarget + curlNoise(aTarget * 0.1 + uTime * 0.04) * 1.4;

    float e = uDisperse * uDisperse * (3.0 - 2.0 * uDisperse); // smoothstep
    vec3 pos = mix(assembled, disp, e);

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    float size = uSize * (0.5 + aRand * 0.9);
    gl_PointSize = size * uPixelRatio * (4.0 / -mv.z);

    // amber render-sweep across the screen, fades out as it disperses
    float sweep = sin(home.x * 0.32 + home.y * 0.12 - uTime * 1.0);
    vMix = smoothstep(0.45, 1.0, sweep) * (1.0 - uDisperse * 0.85);

    vAlpha = mix(0.95, 0.16, e);
  }
`;

export const particleFragmentShader = /* glsl */ `
  precision highp float;
  uniform vec3 uBase;
  uniform vec3 uAmber;
  varying float vMix;
  varying float vAlpha;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float edge = smoothstep(0.5, 0.06, d);
    vec3 col = mix(uBase, uAmber, vMix);
    // hot core on swept points
    col += uAmber * vMix * (1.0 - smoothstep(0.0, 0.32, d)) * 0.7;
    gl_FragColor = vec4(col, edge * vAlpha);
  }
`;
