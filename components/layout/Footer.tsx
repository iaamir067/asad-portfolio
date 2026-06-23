'use client';

import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from '@/components/providers/SmoothScroll';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { FOOTER_LINKS } from '@/constants/navigation';
import { SOCIAL_LINKS } from '@/constants/social-links';

export default function Footer() {
  const { scrollTo } = useSmoothScroll();
  const year = new Date().getFullYear();

  const go = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollTo(href);
    }
  };

  return (
    <footer className="relative z-10 border-t border-line bg-ink-deep">
      <div className="grid-shell py-16">
        <div className="blueprint-grid gap-y-12">
          <div className="col-span-4 md:col-span-5 flex flex-col gap-5">
            <p className="font-mono text-xs uppercase tracking-label text-signal">
              {PERSONAL_INFO.availability}
            </p>
            <p className="max-w-sm text-balance font-serif text-2xl leading-tight text-paper">
              {PERSONAL_INFO.heroTagline}
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="link-edge w-fit font-mono text-sm text-paper-dim"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="col-span-2 md:col-span-3 md:col-start-7 flex flex-col gap-3"
          >
            <span className="label-mono mb-1">Index</span>
            {FOOTER_LINKS.navigation.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={go(link.href)}
                className="link-edge w-fit font-mono text-sm text-paper-dim"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="col-span-2 md:col-span-3 md:col-start-10 flex flex-col gap-3">
            <span className="label-mono mb-1">Connect</span>
            {SOCIAL_LINKS.filter((l) => l.isExternal).map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="link-edge w-fit font-mono text-sm text-paper-dim"
              >
                {link.name}
              </a>
            ))}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="link-edge w-fit font-mono text-sm text-paper-dim"
            >
              Résumé
            </a>
          </div>
        </div>

        {/* oversized wordmark */}
        <div
          aria-hidden
          className="mt-16 select-none overflow-hidden border-t border-line pt-8"
        >
          <span className="block font-serif text-[clamp(3rem,16vw,13rem)] font-medium leading-none tracking-tight text-paper/[0.06]">
            {PERSONAL_INFO.fullName}
          </span>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-paper-faint">
            © {year} {PERSONAL_INFO.fullName}. Built from scratch — Next.js,
            Three.js, GSAP.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-paper-faint">
              {PERSONAL_INFO.location} · {PERSONAL_INFO.timezone}
            </span>
            <button
              type="button"
              onClick={() => scrollTo('#top')}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-paper-dim transition-colors hover:text-signal"
            >
              Top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
