'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '@/constants/skills';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const ActiveIcon = SKILLS[activeCategory].icon;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="lines" glow="blue" glowPosition="bottom" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>Skills</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="skills-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Technical</span>{' '}
          <span className="text-gradient">arsenal.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
          role="tablist"
          aria-label="Skill categories"
        >
          {SKILLS.map((group, idx) => {
            const Icon = group.icon;
            const isActive = activeCategory === idx;
            return (
              <button
                key={group.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`skills-panel-${group.id}`}
                id={`skills-tab-${group.id}`}
                onClick={() => setActiveCategory(idx)}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 glow-cyan'
                    : 'glass text-zinc-400 hover:text-zinc-200 hover:border-zinc-600'
                }`}
              >
                <Icon
                  size={16}
                  className={
                    isActive
                      ? 'text-cyan-400'
                      : 'text-zinc-500 group-hover:text-zinc-400'
                  }
                  aria-hidden
                />
                <span className="hidden sm:inline">{group.category}</span>
              </button>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                id={`skills-panel-${SKILLS[activeCategory].id}`}
                role="tabpanel"
                aria-labelledby={`skills-tab-${SKILLS[activeCategory].id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {SKILLS[activeCategory].skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-zinc-600 font-mono tabular-nums">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow={skill.proficiency}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency`}
                      className="h-1.5 bg-zinc-800/80 rounded-full overflow-hidden"
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, hsl(188, 94%, 43%) 0%, hsl(220, 70%, 55%) ${skill.proficiency}%)`,
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + i * 0.06,
                          ease: [0.25, 0.4, 0.25, 1],
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.aside
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl p-8 sticky top-24"
              >
                <span
                  aria-hidden
                  className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6"
                >
                  <ActiveIcon size={28} className="text-cyan-400" />
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {SKILLS[activeCategory].category}
                </h3>
                <p className="text-sm text-zinc-500 mb-6">
                  {SKILLS[activeCategory].description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {SKILLS[activeCategory].skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-800/50 border border-zinc-700/50 rounded-lg hover:border-cyan-500/30 hover:text-cyan-300 transition-all cursor-default"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.aside>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 font-medium mb-6">
            Full Stack Overview
          </p>
          <ul className="flex flex-wrap gap-2">
            {SKILLS.flatMap((g) => g.skills).map((skill, i) => (
              <motion.li
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                className="px-3 py-1.5 text-xs font-medium text-zinc-500 glass rounded-lg hover:text-cyan-300 hover:border-cyan-500/30 transition-all cursor-default"
              >
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
