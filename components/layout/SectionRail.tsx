'use client';

import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { useActiveSection } from '@/hooks/use-active-section';
import { NAV_ITEMS } from '@/constants/navigation';

const IDS = NAV_ITEMS.map((n) => n.id);

/** Fixed left rail: scroll progress line + current section index. Desktop only. */
export default function SectionRail() {
  const progress = useScrollProgress();
  const active = useActiveSection(IDS);
  const idx = Math.max(0, IDS.indexOf(active));
  const label = active ? NAV_ITEMS[idx].label : 'Intro';

  return (
    <div className="pointer-events-none fixed left-6 top-1/2 z-[90] hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
      <span className="font-mono text-[11px] tabular-nums text-signal">
        {String(active ? idx + 1 : 0).padStart(2, '0')}
      </span>
      <div className="relative h-40 w-px bg-line-strong">
        <div
          className="absolute left-0 top-0 w-px bg-signal transition-[height] duration-150"
          style={{ height: `${progress}%` }}
        />
      </div>
      <span className="font-mono text-[11px] uppercase tracking-label text-paper-dim [writing-mode:vertical-rl]">
        {label}
      </span>
    </div>
  );
}
