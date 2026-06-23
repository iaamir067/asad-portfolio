'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useSmoothScroll } from '@/components/providers/SmoothScroll';
import { useActiveSection } from '@/hooks/use-active-section';
import { NAV_ITEMS } from '@/constants/navigation';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { cn } from '@/lib/utils';

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

export default function Header() {
  const { scrollTo } = useSmoothScroll();
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[120] transition-colors duration-500',
        scrolled
          ? 'border-b border-line bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="grid-shell flex h-16 items-center justify-between md:h-20"
      >
        <a
          href="#top"
          onClick={go('#top')}
          className="group flex items-center gap-3"
          aria-label={`${PERSONAL_INFO.fullName} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-line-strong font-serif text-sm font-semibold text-paper transition-colors group-hover:border-signal group-hover:text-signal">
            {PERSONAL_INFO.initials}
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-mono text-sm text-paper">
              {PERSONAL_INFO.fullName}
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-label text-paper-faint">
              {PERSONAL_INFO.primaryTitle}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={go(item.href)}
                aria-label={item.ariaLabel}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'font-mono text-xs uppercase tracking-wider transition-colors',
                  active === item.id
                    ? 'text-signal'
                    : 'text-paper-dim hover:text-paper',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={go('#contact')}
            className="hidden items-center gap-2 border border-line-strong px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:border-signal hover:text-signal lg:inline-flex"
          >
            Hire Me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-line-strong text-paper lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 top-16 z-[110] origin-top bg-ink transition-transform duration-300 lg:hidden',
          open ? 'scale-y-100' : 'pointer-events-none scale-y-0',
        )}
      >
        <ul className="grid-shell flex flex-col divide-y divide-line border-t border-line">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={go(item.href)}
                className="flex items-center justify-between py-5"
              >
                <span className="font-serif text-2xl text-paper">
                  {item.label}
                </span>
                <span className="label-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="grid-shell mt-6">
          <a
            href="#contact"
            onClick={go('#contact')}
            className="inline-flex w-full items-center justify-center gap-2 bg-signal px-6 py-4 font-mono text-sm uppercase tracking-wider text-ink"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
