import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { PAGE_METADATA } from '@/constants/seo';
import { PERSONAL_INFO } from '@/constants/personal-info';

export const metadata: Metadata = buildMetadata({
  title: PAGE_METADATA.notFound.title,
  description: PAGE_METADATA.notFound.description,
  path: PAGE_METADATA.notFound.path,
  noIndex: true,
});

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="relative flex min-h-screen items-center overflow-hidden bg-blueprint"
    >
      <div className="grid-shell w-full py-32">
        <div className="flex items-center gap-3">
          <span className="label-mono text-signal">ERR / 404</span>
          <span className="h-px w-10 bg-line-strong" />
          <span className="label-mono">Route not found</span>
        </div>

        <h1 className="mt-8 font-serif text-[clamp(3.5rem,14vw,11rem)] font-medium leading-[0.9] tracking-tight text-paper">
          404
        </h1>

        <p className="mt-8 max-w-lg text-pretty text-lg leading-relaxed text-paper-dim">
          This page moved, was renamed, or never existed. Head back to the
          portfolio or send a message and I will point you the right way.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-signal px-7 py-4 font-mono text-sm uppercase tracking-wider text-ink transition-colors hover:bg-paper"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 border border-line-strong px-7 py-4 font-mono text-sm uppercase tracking-wider text-paper transition-colors hover:border-signal hover:text-signal"
          >
            Contact {PERSONAL_INFO.firstName}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
