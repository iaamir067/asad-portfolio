'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Languages } from 'lucide-react';
import { EDUCATION } from '@/constants/education';
import { LANGUAGES } from '@/constants/languages';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { Pill } from '@/components/ui/pill';

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="grid" glow="cyan" glowPosition="bottom" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>Education &amp; Languages</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="education-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Academic</span>{' '}
          <span className="text-gradient">foundation.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-4">
            {EDUCATION.map((edu, idx) => (
              <motion.article
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all duration-300"
                aria-labelledby={`edu-${edu.id}-title`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    aria-hidden
                    className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0"
                  >
                    <GraduationCap size={20} className="text-cyan-400" />
                  </span>
                  <div className="flex-1">
                    <h3
                      id={`edu-${edu.id}-title`}
                      className="text-xl font-bold text-white"
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-cyan-400 font-medium">
                      {edu.institution} ({edu.institutionShort})
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500 mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} aria-hidden />
                    {edu.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={12} aria-hidden />
                    {edu.location}
                  </span>
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-zinc-400"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 glass-card rounded-2xl p-6 sm:p-8"
            aria-labelledby="languages-heading"
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                aria-hidden
                className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center"
              >
                <Languages size={18} className="text-cyan-400" />
              </span>
              <h3 id="languages-heading" className="text-lg font-semibold text-white">
                Languages
              </h3>
            </div>

            <ul className="space-y-4">
              {LANGUAGES.map((lang) => (
                <li key={lang.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-zinc-200 font-medium">
                      {lang.name}
                    </span>
                    <Pill variant="zinc" size="sm">
                      {lang.proficiency}
                    </Pill>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuenow={lang.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${lang.name} proficiency level`}
                    className="h-1 bg-zinc-800/80 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Education;
