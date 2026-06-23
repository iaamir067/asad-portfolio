'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { useSmoothScroll } from '@/components/providers/SmoothScroll';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const progress = useScrollProgress();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const r = 18;
  const circ = 2 * Math.PI * r;

  return (
    <button
      type="button"
      onClick={() => scrollTo('#top')}
      aria-label="Scroll to top"
      className={cn(
        'group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center border border-line-strong bg-ink/80 backdrop-blur-md transition-all duration-300',
        show
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 48 48"
        aria-hidden
      >
        <circle cx="24" cy="24" r={r} className="stroke-line-strong" strokeWidth="1.5" fill="none" />
        <circle
          cx="24"
          cy="24"
          r={r}
          stroke="#FFB200"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circ}
          strokeDashoffset={(1 - progress / 100) * circ}
          style={{ transition: 'stroke-dashoffset 120ms linear' }}
        />
      </svg>
      <ArrowUp className="h-4 w-4 text-paper-dim transition-colors group-hover:text-signal" aria-hidden />
    </button>
  );
}
