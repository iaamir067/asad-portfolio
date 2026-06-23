/** Cheap one-time WebGL capability probe. */
let cached: boolean | null = null;

export const supportsWebGL = (): boolean => {
  if (cached !== null) return cached;
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    cached = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    cached = false;
  }
  return cached;
};
