'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ArrowRight } from 'lucide-react';
import {
  CERTIFICATIONS,
  CERTIFICATIONS_PLACEHOLDER,
} from '@/constants/certifications';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

const Certifications = () => {
  const hasCerts = CERTIFICATIONS.length > 0;

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="lines" glow="blue" glowPosition="right" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>{CERTIFICATIONS_PLACEHOLDER.heading}</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="certifications-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Verifiable</span>{' '}
          <span className="text-gradient">credentials.</span>
        </motion.h2>

        {hasCerts ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert.id}
                className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Award size={18} className="text-cyan-400" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {cert.title}
                    </p>
                    <p className="text-xs text-zinc-500">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mb-3">Issued {cert.issuedDate}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Verify <ExternalLink size={12} aria-hidden />
                  </a>
                )}
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
              <Award size={22} className="text-cyan-400" />
            </span>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {CERTIFICATIONS_PLACEHOLDER.emptyTitle}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
              {CERTIFICATIONS_PLACEHOLDER.emptyDescription}
            </p>
            <a
              href={CERTIFICATIONS_PLACEHOLDER.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              {CERTIFICATIONS_PLACEHOLDER.ctaLabel}
              <ArrowRight size={16} aria-hidden />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
