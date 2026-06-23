'use client';

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ParticleField from './ParticleField';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { supportsWebGL } from '@/lib/webgl';

/** Persistent full-viewport field behind the whole page. One scene, scroll-reactive. */
export default function Scene() {
  const reduced = useReducedMotion();
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setWebgl(supportsWebGL());
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const fallback = reduced || webgl === false;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {fallback || webgl === null ? (
        <StaticField />
      ) : (
        <Canvas
          frameloop={visible ? 'always' : 'demand'}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
          camera={{ position: [0, 0, 18], fov: 40 }}
        >
          <ParticleField />
        </Canvas>
      )}
      {/* legibility wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
    </div>
  );
}

function StaticField() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-blueprint opacity-60" />
      <div
        className="absolute left-1/2 top-1/3 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(255,178,0,0.18), transparent 70%)',
        }}
      />
    </div>
  );
}
