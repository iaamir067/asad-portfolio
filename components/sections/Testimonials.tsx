'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, TESTIMONIALS_PLACEHOLDER } from '@/constants/testimonials';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

const Testimonials = () => {
  const hasTestimonials = TESTIMONIALS.length > 0;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="gradient" glow="cyan" glowPosition="top" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>{TESTIMONIALS_PLACEHOLDER.heading}</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="testimonials-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Notes from</span>{' '}
          <span className="text-gradient">collaborators.</span>
        </motion.h2>

        {hasTestimonials ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <li
                key={t.id}
                className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all"
              >
                <Quote className="text-cyan-400 mb-4" aria-hidden />
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
                <footer>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">
                    {t.role} · {t.company}
                  </p>
                </footer>
              </li>
            ))}
          </ul>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-10 sm:p-14 text-center max-w-3xl mx-auto"
          >
            <span
              aria-hidden
              className="inline-flex w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 items-center justify-center mb-6"
            >
              <Quote size={22} className="text-cyan-400" />
            </span>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {TESTIMONIALS_PLACEHOLDER.emptyTitle}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
              {TESTIMONIALS_PLACEHOLDER.emptyDescription}
            </p>
            <Link
              href={TESTIMONIALS_PLACEHOLDER.ctaHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              {TESTIMONIALS_PLACEHOLDER.ctaLabel}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
