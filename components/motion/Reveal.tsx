'use client';

import {
  useLayoutEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from 'react';
import { gsap, EASE, SplitText } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  /** Stagger direct children instead of the element itself. */
  stagger?: number;
  start?: string;
};

/** Rise + fade on scroll. With `stagger`, animates direct children sequentially. */
export function Reveal({
  children,
  as: Tag = 'div',
  className,
  delay = 0,
  y = 28,
  stagger,
  start = 'top 85%',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const targets =
      stagger != null ? (Array.from(el.children) as HTMLElement[]) : el;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.9,
        delay,
        ease: EASE.out,
        stagger: stagger ?? 0,
        scrollTrigger: { trigger: el, start },
      });
    }, el);

    return () => ctx.revert();
  }, [reduced, delay, y, stagger, start]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

type RevealTextProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  start?: string;
};

/** Line-by-line clip reveal using SplitText. */
export function RevealText({
  children,
  as: Tag = 'p',
  className,
  delay = 0,
  start = 'top 85%',
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let split: SplitText | null = null;

    const ctx = gsap.context(() => {
      split = new SplitText(el, { type: 'lines', linesClass: 'split-line' });

      gsap.from(split.lines, {
        yPercent: 110,
        duration: 1,
        delay,
        ease: EASE.expo,
        stagger: 0.08,
        scrollTrigger: { trigger: el, start },
      });
    }, el);

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, [reduced, delay, start]);

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
