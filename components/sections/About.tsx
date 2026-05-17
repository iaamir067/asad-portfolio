'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code as Code2,
  Zap,
  Target,
  Users,
  Smartphone,
  Rocket,
  Shield,
  Globe,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { STATISTICS } from '@/constants/statistics';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

const HIGHLIGHTS = [
  { icon: Code2, label: 'Clean Architecture', desc: 'SOLID + MVVM' },
  { icon: Zap, label: 'Performance', desc: 'Smooth on real devices' },
  { icon: Target, label: 'Pixel Precision', desc: 'Faithful to design' },
  { icon: Users, label: 'Team Collaboration', desc: 'Agile + Scrum' },
  { icon: Smartphone, label: 'Cross-Platform', desc: 'iOS and Android' },
  { icon: Rocket, label: 'Production Releases', desc: 'App Store + Play Store' },
  { icon: Shield, label: 'Secure Integrations', desc: 'Auth, payments, storage' },
  { icon: Globe, label: 'International Clients', desc: 'UK, USA, EU' },
] as const;

const About = () => {
  const ref = useRef(null);
  useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="gradient" glow="cyan" glowPosition="top" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>About</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Engineering apps</span>
          <br />
          <span className="text-gradient">that ship.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {PERSONAL_INFO.introParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-lg sm:text-xl text-zinc-300 leading-relaxed font-light'
                    : 'text-base text-zinc-500 leading-relaxed'
                }
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-6 space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400/80 font-medium">
                Core Expertise
              </p>
              <ul className="space-y-3">
                {[
                  'Shipping Flutter apps to Google Play Store and Apple App Store',
                  'Clean Architecture and MVVM for scalable, maintainable codebases',
                  'Realtime systems: chat, video calls, push notifications, payments',
                  'Firebase backend integration: Firestore, Auth, FCM, Storage',
                  'Payment gateways: Stripe and Reloadly API for global delivery',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 w-5 h-5 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    </span>
                    <span className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {STATISTICS.map((stat, i) => (
                <motion.div
                  key={stat.id}
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
                  <p className="text-sm font-semibold text-white mb-0.5">
                    {stat.label}
                  </p>
                  <p className="text-xs text-zinc-500">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {HIGHLIGHTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group p-5 glass-card rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                >
                  <span
                    aria-hidden
                    className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <Icon size={18} className="text-cyan-400" />
                  </span>
                  <p className="text-sm font-semibold text-white mb-0.5">
                    {item.label}
                  </p>
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
