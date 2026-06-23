'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

type MarqueeProps = {
  children: ReactNode;
  speed?: number; // base px/sec
  reverse?: boolean;
  className?: string;
};

/** Seamless marquee. Base drift + scroll-velocity boost. */
export default function Marquee({
  children,
  speed = 60,
  reverse = false,
  className,
}: MarqueeProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return;
    const el = track.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const dir = reverse ? 1 : -1;
      const half = el.scrollWidth / 2;
      const base = (half / speed) * (1 / 1); // seconds per loop
      let lastScroll = window.scrollY;
      let boost = 0;

      const x = gsap.quickSetter(el, 'x', 'px');
      let pos = 0;

      const tick = (_t: number, dt: number) => {
        const sec = dt / 1000;
        const v = window.scrollY - lastScroll;
        lastScroll = window.scrollY;
        boost += (Math.abs(v) - boost) * 0.1;
        pos += dir * (speed + boost * 6) * sec;
        if (pos <= -half) pos += half;
        if (pos >= 0 && dir === 1) pos -= half;
        x(pos);
      };

      gsap.ticker.add(tick);
      void base;
      return () => gsap.ticker.remove(tick);
    }, wrap);

    return () => ctx.revert();
  }, [reduced, speed, reverse]);

  return (
    <div ref={wrap} className={className} aria-hidden>
      <div ref={track} className="flex w-max flex-nowrap will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
}
