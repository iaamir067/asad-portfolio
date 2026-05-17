'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code as Code2, Zap, Target, Users, Smartphone, Rocket, Shield, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolio';

const highlights = [
  { icon: Code2, label: 'Clean Architecture', desc: 'SOLID & MVVM' },
  { icon: Zap, label: 'High Performance', desc: '60fps smooth' },
  { icon: Target, label: 'Pixel Perfect', desc: 'UI precision' },
  { icon: Users, label: 'Team Player', desc: 'Collaborative' },
  { icon: Smartphone, label: 'Cross-Platform', desc: 'iOS & Android' },
  { icon: Rocket, label: 'Fast Delivery', desc: 'On schedule' },
  { icon: Shield, label: 'Secure Code', desc: 'Best practices' },
  { icon: Globe, label: 'International', desc: 'Global clients' },
];

const stats = [
  { value: '2+', label: 'Years', sublabel: 'Production Experience' },
  { value: '5+', label: 'Apps', sublabel: 'Published to Stores' },
  { value: '50K+', label: 'Downloads', sublabel: 'Across All Apps' },
  { value: '4.8', label: 'Stars', sublabel: 'Average App Rating' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,10%,4%)] via-[hsl(240,10%,5%)] to-[hsl(240,10%,4%)]" />
      <div className="absolute inset-0 dot-pattern mask-fade-b opacity-40" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-medium">
            About
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
            <span className="text-white">Engineering apps</span>
            <br />
            <span className="text-gradient">that scale.</span>
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light">
              I build production-grade mobile applications with Flutter. My focus is on
              clean architecture, scalable state management, and delivering experiences
              that users love.
            </p>
            <p className="text-base text-zinc-500 leading-relaxed">
              {PERSONAL_INFO.fullBio.split('\n\n')[1]?.trim() || ''}
            </p>

            {/* Key expertise */}
            <div className="pt-6 space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400/80 font-medium">
                Core Expertise
              </p>
              <div className="space-y-3">
                {[
                  'Shipping production Flutter apps to App Store & Play Store',
                  'Clean Architecture, MVVM, and scalable app structures',
                  'Real-time systems, payment integrations, and Firebase',
                  '50K+ downloads and 4.8+ star ratings across apps',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1.5 w-5 h-5 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    </div>
                    <span className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group p-6 glass-card rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
                >
                  <p className="text-4xl sm:text-5xl font-bold text-gradient mb-1 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-white mb-0.5">{stat.label}</p>
                  <p className="text-xs text-zinc-500">{stat.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group p-5 glass-card rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <p className="text-sm font-semibold text-white mb-0.5">{item.label}</p>
                  <p className="text-xs text-zinc-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
