'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye, Briefcase, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

const RESUME_HIGHLIGHTS = [
  {
    icon: Briefcase,
    title: 'Work history',
    description: 'Roles at Metasense Technologies, RZ Technologies, UZR Tech.',
  },
  {
    icon: Sparkles,
    title: 'Project case studies',
    description:
      'Production Flutter apps shipped to App Store and Play Store with detailed stacks.',
  },
  {
    icon: FileText,
    title: 'Stack and skills',
    description:
      'Flutter, Dart, Firebase, Riverpod, Stripe, Reloadly, ZEGOCLOUD, and more.',
  },
] as const;

const Resume = () => {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="grid" glow="cyan" glowPosition="center" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>Resume</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="resume-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Download the</span>{' '}
          <span className="text-gradient">full resume.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 glass-card rounded-2xl p-8 sm:p-10"
          >
            <div className="flex items-start gap-4 mb-6">
              <span
                aria-hidden
                className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0"
              >
                <FileText size={20} className="text-cyan-400" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {PERSONAL_INFO.fullName} — Flutter Developer Resume
                </h3>
                <p className="text-sm text-zinc-500">
                  PDF · Updated regularly · Ready for recruiters and hiring managers
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
              The full resume covers work history, project case studies, technologies, education,
              and references. Open it directly or download the PDF for offline review.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeFileName}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                aria-label="Download resume PDF"
              >
                <Download
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform"
                  aria-hidden
                />
                Download PDF
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white glass hover:border-cyan-500/40 transition-all"
                aria-label="View resume in new tab"
              >
                <Eye size={16} aria-hidden />
                View Online
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 space-y-3"
            aria-label="What is in the resume"
          >
            {RESUME_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-cyan-500/30 transition-all"
                >
                  <span
                    aria-hidden
                    className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0"
                  >
                    <Icon size={16} className="text-cyan-400" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-xs text-zinc-500">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Resume;
