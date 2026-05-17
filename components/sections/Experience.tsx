'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, Briefcase, MapPin } from 'lucide-react';
import { EXPERIENCE } from '@/constants/experience';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { Pill } from '@/components/ui/pill';

const Experience = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="grid" glow="cyan" glowPosition="left" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>Experience</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Where I have</span>{' '}
          <span className="text-gradient">built.</span>
        </motion.h2>

        <ol className="relative">
          <span
            aria-hidden
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-zinc-700/50 to-transparent"
          />

          <div className="space-y-6">
            {EXPERIENCE.map((exp, idx) => {
              const isExpanded = expandedIdx === idx;
              return (
                <motion.li
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="list-none"
                >
                  <button
                    onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                    className="w-full text-left group"
                    aria-expanded={isExpanded}
                    aria-controls={`experience-details-${exp.id}`}
                  >
                    <div className="relative flex gap-6">
                      <div className="relative flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isExpanded
                              ? 'bg-cyan-500/20 border border-cyan-500/50 glow-cyan'
                              : 'bg-zinc-800/50 border border-zinc-700/50 group-hover:border-cyan-500/30'
                          }`}
                        >
                          <Briefcase
                            size={18}
                            className={
                              isExpanded
                                ? 'text-cyan-400'
                                : 'text-zinc-500 group-hover:text-cyan-400'
                            }
                            aria-hidden
                          />
                        </div>
                      </div>

                      <article
                        className={`flex-1 glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                          isExpanded
                            ? 'border-cyan-500/30 glow-cyan'
                            : 'hover:border-zinc-600'
                        }`}
                      >
                        <div className="p-6 sm:p-8">
                          <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                                {exp.position}
                              </h3>
                              <p className="text-cyan-400 font-medium text-sm">
                                {exp.company}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-500 text-sm flex-shrink-0">
                              <Calendar size={14} aria-hidden />
                              <time>
                                {exp.startDate} — {exp.endDate}
                              </time>
                            </div>
                          </header>

                          <div className="mb-4 flex flex-wrap gap-2 items-center">
                            <Pill variant="cyan" size="sm">
                              {exp.duration}
                            </Pill>
                            <Pill variant="zinc" size="sm">
                              {exp.type}
                            </Pill>
                            <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
                              <MapPin size={12} aria-hidden />
                              {exp.location}
                            </span>
                          </div>

                          <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                            {exp.summary}
                          </p>

                          <div className="flex items-center gap-1 text-xs text-zinc-500 group-hover:text-cyan-400 transition-colors">
                            <span>{isExpanded ? 'Show less' : 'Show more'}</span>
                            <motion.span
                              aria-hidden
                              animate={{ rotate: isExpanded ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight size={14} />
                            </motion.span>
                          </div>
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              id={`experience-details-${exp.id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-zinc-700/30">
                                <div className="mb-6">
                                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/80 font-medium mb-4">
                                    Responsibilities
                                  </p>
                                  <ul className="space-y-3">
                                    {exp.responsibilities.map((item, aidx) => (
                                      <motion.li
                                        key={aidx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: aidx * 0.05 }}
                                        className="flex items-start gap-3 text-sm text-zinc-400"
                                      >
                                        <span
                                          aria-hidden
                                          className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"
                                        />
                                        <span>{item}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/80 font-medium mb-3">
                                    Technologies
                                  </p>
                                  <ul className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, tidx) => (
                                      <motion.li
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: tidx * 0.03 }}
                                      >
                                        <Pill variant="cyan" size="sm">
                                          {tech}
                                        </Pill>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </article>
                    </div>
                  </button>
                </motion.li>
              );
            })}
          </div>
        </ol>
      </div>
    </section>
  );
};

export default Experience;
