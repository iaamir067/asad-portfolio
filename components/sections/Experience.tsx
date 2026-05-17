'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, Briefcase } from 'lucide-react';
import { EXPERIENCE } from '@/constants/portfolio';

const Experience = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,10%,4%)] via-[hsl(240,10%,5%)] to-[hsl(240,10%,4%)]" />
      <div className="absolute inset-0 grid-pattern mask-radial opacity-30" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-medium">
            Experience
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            <span className="text-white">Where I've</span>{' '}
            <span className="text-gradient">built.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-zinc-700/50 to-transparent" />

          <div className="space-y-6">
            {EXPERIENCE.map((exp, idx) => {
              const isExpanded = expandedIdx === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <button
                    onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                    className="w-full text-left group"
                  >
                    <div className="relative flex gap-6">
                      {/* Timeline dot */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isExpanded
                            ? 'bg-cyan-500/20 border border-cyan-500/50 glow-cyan'
                            : 'bg-zinc-800/50 border border-zinc-700/50 group-hover:border-cyan-500/30'
                        }`}>
                          <Briefcase size={18} className={isExpanded ? 'text-cyan-400' : 'text-zinc-500 group-hover:text-cyan-400'} />
                        </div>
                      </div>

                      {/* Content card */}
                      <div className={`flex-1 glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                        isExpanded ? 'border-cyan-500/30 glow-cyan' : 'hover:border-zinc-600'
                      }`}>
                        <div className="p-6 sm:p-8">
                          {/* Header */}
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                                {exp.position}
                              </h3>
                              <p className="text-cyan-400 font-medium text-sm">{exp.company}</p>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-500 text-sm flex-shrink-0">
                              <Calendar size={14} />
                              <span>{exp.startDate} — {exp.endDate}</span>
                            </div>
                          </div>

                          {/* Duration badge */}
                          <div className="mb-4">
                            <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                              {exp.duration}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                            {exp.description}
                          </p>

                          {/* Expand indicator */}
                          <div className="flex items-center gap-1 text-xs text-zinc-500 group-hover:text-cyan-400 transition-colors">
                            <span>{isExpanded ? 'Show less' : 'Show more'}</span>
                            <motion.div
                              animate={{ rotate: isExpanded ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight size={14} />
                            </motion.div>
                          </div>
                        </div>

                        {/* Expanded content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-zinc-700/30">
                                {/* Achievements */}
                                <div className="mb-6">
                                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/80 font-medium mb-4">
                                    Key Achievements
                                  </p>
                                  <ul className="space-y-3">
                                    {exp.achievements.map((achievement, aidx) => (
                                      <motion.li
                                        key={aidx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: aidx * 0.05 }}
                                        className="flex items-start gap-3 text-sm text-zinc-400"
                                      >
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                                        <span>{achievement}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/80 font-medium mb-3">
                                    Technologies
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, tidx) => (
                                      <motion.span
                                        key={tidx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: tidx * 0.03 }}
                                        className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-lg"
                                      >
                                        {tech}
                                      </motion.span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
