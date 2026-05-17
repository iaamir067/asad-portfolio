'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '@/constants/achievements';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

const Achievements = () => {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="gradient" glow="cyan" glowPosition="center" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>Achievements</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="achievements-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Highlights</span>{' '}
          <span className="text-gradient">that matter.</span>
        </motion.h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <Icon size={20} className="text-cyan-400" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
