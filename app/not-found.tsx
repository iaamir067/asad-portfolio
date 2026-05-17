import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass, ArrowLeft, Home, Mail } from 'lucide-react';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[hsl(240,10%,4%)]" />
      <div className="absolute inset-0 grid-pattern mask-radial opacity-30" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 mb-8">
          <Compass size={32} className="text-cyan-400" aria-hidden />
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-medium mb-3">
          Error 404
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Page not found.</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto mb-10">
          The page you were looking for has either moved, been renamed, or never existed.
          Head back to the portfolio or send a quick message and I will help.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            <Home size={16} aria-hidden />
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white glass hover:border-cyan-500/40 transition-all"
          >
            <Mail size={16} aria-hidden />
            Contact {PERSONAL_INFO.firstName}
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} aria-hidden />
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
