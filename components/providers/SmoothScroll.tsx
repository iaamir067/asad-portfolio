'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

type ScrollTo = (target: string | number | HTMLElement, offset?: number) => void;

type LenisCtx = {
  scrollTo: ScrollTo;
  stop: () => void;
  start: () => void;
};

const LenisContext = createContext<LenisCtx>({
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
});

export const useSmoothScroll = () => useContext(LenisContext);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const reduced = useReducedMotion();
  const [ctx, setCtx] = useState<LenisCtx>({
    scrollTo: (target) => {
      if (typeof window === 'undefined') return;
      const el =
        typeof target === 'string' ? document.querySelector(target) : null;
      if (el instanceof HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      }
    },
    stop: () => {
      if (typeof document !== 'undefined')
        document.documentElement.style.overflow = 'hidden';
    },
    start: () => {
      if (typeof document !== 'undefined')
        document.documentElement.style.overflow = '';
    },
  });

  useEffect(() => {
    if (reduced) return; // native scroll fallback handles motion-sensitive users

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const onRaf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    setCtx({
      scrollTo: (target, offset = -80) => {
        lenis.scrollTo(target as string, { offset });
      },
      stop: () => lenis.stop(),
      start: () => lenis.start(),
    });

    return () => {
      gsap.ticker.remove(onRaf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  return <LenisContext.Provider value={ctx}>{children}</LenisContext.Provider>;
}
