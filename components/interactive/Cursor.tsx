'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

type Mode = 'default' | 'link' | 'view';

/** Morphing crosshair cursor. DOM always mounts (so refs exist); listeners gate on pointer:fine. */
export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [mode, setMode] = useState<Mode>('default');
  const [label, setLabel] = useState('');
  const reduced = useReducedMotion();
  const active = useRef(false);

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;
    active.current = true;

    gsap.set([ring, dot], { xPercent: -50, yPercent: -50 });

    const xRing = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3' });
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power2' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power2' });

    let shown = false;
    const move = (e: MouseEvent) => {
      if (!shown) {
        shown = true;
        gsap.to([ring, dot], { autoAlpha: 1, duration: 0.3 });
      }
      xRing(e.clientX);
      yRing(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);

      const el = (e.target as HTMLElement)?.closest<HTMLElement>(
        '[data-cursor], a, button, input, textarea, label',
      );
      const next: Mode = !el
        ? 'default'
        : el.dataset.cursor === 'view'
          ? 'view'
          : 'link';
      setMode(next);
      setLabel(next === 'view' ? el?.dataset.cursorLabel || 'View' : '');
    };

    const hide = () => gsap.to([ring, dot], { autoAlpha: 0, duration: 0.2 });

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', hide);
    };
  }, [reduced]);

  useEffect(() => {
    if (!active.current) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;
    gsap.to(ring, {
      width: mode === 'view' ? 88 : mode === 'link' ? 52 : 26,
      height: mode === 'view' ? 88 : mode === 'link' ? 52 : 26,
      backgroundColor: mode === 'view' ? 'rgba(255,178,0,1)' : 'rgba(255,178,0,0)',
      borderColor: mode === 'default' ? 'rgba(237,234,227,0.45)' : 'rgba(255,178,0,0.9)',
      duration: 0.35,
      ease: 'power3.out',
    });
    gsap.to(dot, { opacity: mode === 'default' ? 1 : 0, duration: 0.2 });
    if (labelRef.current)
      gsap.to(labelRef.current, { opacity: mode === 'view' ? 1 : 0, duration: 0.25 });
  }, [mode]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[200] hidden md:block">
      <div
        ref={ringRef}
        className="invisible absolute left-0 top-0 flex items-center justify-center rounded-full border opacity-0 will-change-transform"
        style={{ width: 26, height: 26, borderColor: 'rgba(237,234,227,0.45)' }}
      >
        <span
          ref={labelRef}
          className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink opacity-0"
        >
          {label}
        </span>
      </div>
      <div
        ref={dotRef}
        className="invisible absolute left-0 top-0 h-1 w-1 rounded-full bg-signal opacity-0 will-change-transform"
      />
    </div>
  );
}
