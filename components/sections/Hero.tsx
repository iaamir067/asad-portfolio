'use client';

import { useEffect, useRef } from 'react';
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';
import Magnetic from '@/components/interactive/Magnetic';
import { useSmoothScroll } from '@/components/providers/SmoothScroll';
import { gsap, EASE, SplitText } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { STATISTICS } from '@/constants/statistics';

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    if (reduced) return;
    const el = root.current;
    if (!el) return;

    let ctx: gsap.Context | null = null;
    const play = () => {
      ctx = gsap.context(() => {
        const headline = el.querySelector<HTMLElement>('[data-hero-headline]');
        const split = headline
          ? new SplitText(headline, { type: 'lines', linesClass: 'split-line' })
          : null;

        const tl = gsap.timeline({ defaults: { ease: EASE.expo } });
        tl.fromTo(
          '[data-hero-meta] > *',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.06 },
        )
          .from(split ? (split.lines as HTMLElement[]) : [], { yPercent: 110, duration: 1.1, stagger: 0.12 }, '-=0.2')
          .fromTo(
            '[data-hero-fade]',
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 },
            '-=0.6',
          );
      }, el);
    };

    if ((window as unknown as { __appReady?: boolean }).__appReady) {
      play();
    } else {
      // hide until preloader lifts
      gsap.set(el.querySelectorAll('[data-hero-meta] > *, [data-hero-fade]'), { opacity: 0 });
      window.addEventListener('app:ready', play, { once: true });
    }
    return () => {
      window.removeEventListener('app:ready', play);
      ctx?.revert();
    };
  }, [reduced]);

  const onCta = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="grid-shell relative z-10 w-full pb-24 pt-28">
        <div data-hero-meta className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="label-mono text-signal">00 / PORTFOLIO — 2026</span>
          <span className="hidden h-px w-10 bg-line-strong sm:block" />
          <span className="label-mono">{PERSONAL_INFO.location}</span>
          <span className="flex items-center gap-2 label-mono">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            {PERSONAL_INFO.availability}
          </span>
        </div>

        <h1 className="mt-10 max-w-5xl">
          <span className="sr-only">
            {PERSONAL_INFO.fullName} — {PERSONAL_INFO.combinedTitle}
          </span>
          <span
            data-hero-headline
            aria-hidden
            className="block text-balance font-serif text-[clamp(3rem,11.5vw,9.5rem)] font-medium leading-[0.9] tracking-[-0.02em] text-paper [text-shadow:0_2px_40px_rgba(0,0,0,0.5)]"
          >
            {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}
          </span>
        </h1>

        <div data-hero-fade className="mt-8 flex flex-col gap-1 font-mono text-sm uppercase tracking-[0.2em] text-paper-dim sm:text-base">
          <span>{PERSONAL_INFO.primaryTitle}</span>
          <span className="text-paper-faint">{PERSONAL_INFO.secondaryTitle}</span>
        </div>

        <p data-hero-fade className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-paper-dim sm:text-xl">
          {PERSONAL_INFO.shortBio}
        </p>

        <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic strength={0.5}>
            <a
              href="#work"
              onClick={onCta('#work')}
              className="group inline-flex items-center gap-3 bg-signal px-7 py-4 font-mono text-sm uppercase tracking-wider text-ink transition-colors hover:bg-paper"
            >
              Selected Work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </Magnetic>
          <a
            href="#contact"
            onClick={onCta('#contact')}
            className="group inline-flex items-center gap-3 border border-line-strong px-7 py-4 font-mono text-sm uppercase tracking-wider text-paper transition-colors hover:border-signal hover:text-signal"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={PERSONAL_INFO.resumeUrl}
            className="link-edge inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-paper-dim"
            download
          >
            <Download className="h-4 w-4" />
            Résumé
          </a>
        </div>

        <dl data-hero-fade className="mt-16 grid max-w-3xl grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
          {STATISTICS.map((stat) => (
            <div key={stat.id} className="bg-ink/70 p-5 backdrop-blur-sm">
              <dt className="font-serif text-3xl font-medium text-paper sm:text-4xl">{stat.value}</dt>
              <dd className="mt-1 label-mono">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="label-mono">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-signal to-transparent" />
      </div>
    </section>
  );
}
