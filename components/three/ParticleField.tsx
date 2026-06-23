'use client';

import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { particleVertexShader, particleFragmentShader } from './particleShaders';

const COLS = 104;
const ROWS = 150;
const COUNT = COLS * ROWS;
const PLANE_W = 8;
const PLANE_H = 13;

export default function ParticleField() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const disperse = useRef(0);
  const { viewport } = useThree();

  const { geometry, uniforms } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const targets = new Float32Array(COUNT * 3);
    const rand = new Float32Array(COUNT);

    let i = 0;
    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS; r++) {
        const x = (c / (COLS - 1) - 0.5) * PLANE_W;
        const y = (r / (ROWS - 1) - 0.5) * PLANE_H;
        const z = (Math.random() - 0.5) * 0.6;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // dispersed star-field target — outward shell
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 9 + Math.random() * 11;
        targets[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        targets[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        targets[i * 3 + 2] = radius * Math.cos(phi) - 6;

        rand[i] = Math.random();
        i++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aTarget', new THREE.BufferAttribute(targets, 3));
    geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));

    const u = {
      uTime: { value: 0 },
      uDisperse: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uSize: { value: 15 },
      uPixelRatio: { value: 1 },
      uBase: { value: new THREE.Color('#8d8a82') },
      uAmber: { value: new THREE.Color('#FFB200') },
    };

    return { geometry: geo, uniforms: u };
  }, []);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const mat = matRef.current;
    if (mat) {
      mat.uniforms.uTime.value += dt;
      mat.uniforms.uPixelRatio.value = Math.min(state.gl.getPixelRatio(), 1.5);

      // scroll-driven dispersion (assembled in hero -> star-field below)
      const sp =
        typeof window !== 'undefined'
          ? window.scrollY / Math.max(window.innerHeight, 1)
          : 0;
      const target = Math.min(Math.max(sp * 1.05, 0), 1);
      disperse.current += (target - disperse.current) * 0.06;
      mat.uniforms.uDisperse.value = disperse.current;

      // smoothed cursor in world space at z=0
      const mx = (state.pointer.x * viewport.width) / 2;
      const my = (state.pointer.y * viewport.height) / 2;
      mouse.current.x += (mx - mouse.current.x) * 0.08;
      mouse.current.y += (my - mouse.current.y) * 0.08;
      mat.uniforms.uMouse.value.copy(mouse.current);
    }

    // subtle whole-field parallax toward cursor
    const g = groupRef.current;
    if (g) {
      const ty = state.pointer.x * 0.18;
      const tx = -state.pointer.y * 0.12;
      g.rotation.y += (ty - g.rotation.y) * 0.03;
      g.rotation.x += (tx - g.rotation.x) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={geometry} frustumCulled={false}>
        <shaderMaterial
          ref={matRef}
          vertexShader={particleVertexShader}
          fragmentShader={particleFragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </points>
    </group>
  );
}
