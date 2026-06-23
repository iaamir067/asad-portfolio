'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, EASE } from '@/lib/gsap';
import { useSmoothScroll } from '@/components/providers/SmoothScroll';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { PERSONAL_INFO } from '@/constants/personal-info';

const fireReady = () => {
  (window as unknown as { __appReady?: boolean }).__appReady = true;
  window.dispatchEvent(new Event('app:ready'));
};

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const { stop, start } = useSmoothScroll();
  const reduced = useReducedMotion();

  useEffect(() => {
    const seen =
      typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem('pre-seen');
    if (reduced || seen) {
      fireReady();
      setDone(true);
      return;
    }
    try {
      sessionStorage.setItem('pre-seen', '1');
    } catch {
      /* ignore */
    }

    stop();
    window.scrollTo(0, 0);
    const el = root.current!;

    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          start();
          fireReady();
          setDone(true);
        },
      });

      tl.from('[data-pre-name] span', {
        yPercent: 110,
        duration: 0.9,
        ease: EASE.expo,
        stagger: 0.04,
      })
        .from('[data-pre-meta]', { opacity: 0, duration: 0.5 }, '<')
        .to(
          counter,
          {
            v: 100,
            duration: 2.1,
            ease: 'power2.inOut',
            onUpdate: () => setCount(Math.round(counter.v)),
          },
          '<',
        )
        .to('[data-pre-bar]', { scaleX: 1, duration: 2.1, ease: 'power2.inOut' }, '<')
        .to('[data-pre-inner]', { yPercent: -100, duration: 0.8, ease: EASE.expo }, '+=0.15')
        .to(el, { yPercent: -100, duration: 0.9, ease: EASE.expo }, '-=0.5');
    }, el);

    return () => ctx.revert();
  }, [reduced, stop, start]);

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[300] flex flex-col justify-between overflow-hidden bg-ink"
    >
      <div data-pre-inner className="flex h-full flex-col justify-between p-6 sm:p-10">
        <div data-pre-meta className="flex items-center justify-between font-mono text-[11px] uppercase tracking-label text-paper-dim">
          <span>Compiling Portfolio</span>
          <span className="text-signal">{PERSONAL_INFO.locationShort}</span>
        </div>

        <div className="flex flex-col gap-8">
          <h1
            data-pre-name
            className="overflow-hidden font-serif text-[clamp(3rem,12vw,10rem)] font-medium leading-[0.9] tracking-tight text-paper"
          >
            <span className="inline-block">{PERSONAL_INFO.firstName}</span>{' '}
            <span className="inline-block">{PERSONAL_INFO.lastName}</span>
          </h1>

          <div className="flex items-end justify-between gap-6">
            <div className="h-px w-full max-w-md origin-left bg-line-strong">
              <div data-pre-bar className="h-px origin-left scale-x-0 bg-signal" />
            </div>
            <span className="font-mono text-2xl tabular-nums text-paper sm:text-4xl">
              {String(count).padStart(3, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
