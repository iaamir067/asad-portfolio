'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK, TECH_CATEGORIES } from '@/constants/tech-stack';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === activeCategory);

  const allFilters = ['All', ...TECH_CATEGORIES] as const;

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="dots" glow="blue" glowPosition="left" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>Tech Stack</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="tech-stack-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">My daily</span>{' '}
          <span className="text-gradient">toolset.</span>
        </motion.h2>

        <div className="mb-10 flex flex-wrap gap-2">
          {allFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300'
                  : 'glass text-zinc-400 hover:text-zinc-200'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.ul
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {filtered.map((tech, i) => (
            <motion.li
              key={tech.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 10) * 0.03 }}
              whileHover={{ y: -3 }}
              className="group glass-card rounded-xl px-4 py-3 hover:border-cyan-500/30 transition-all duration-300"
            >
              <p className="text-sm font-semibold text-white">{tech.name}</p>
              <p className="text-[10px] uppercase tracking-wider text-zinc-500 mt-0.5">
                {tech.category}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default TechStack;
