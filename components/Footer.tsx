'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { SOCIAL_LINKS } from '@/constants/social-links';
import { FOOTER_LINKS } from '@/constants/navigation';
import { SITE_CONFIG } from '@/constants/site-config';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="relative border-t border-zinc-800/50"
    >
      <div className="absolute inset-0 bg-[hsl(240,10%,4%)]" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                aria-hidden
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
              >
                <span className="text-white font-bold text-sm">
                  {PERSONAL_INFO.initials}
                </span>
              </span>
              <span className="text-sm font-semibold text-white tracking-tight">
                {PERSONAL_INFO.firstName}
                <span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-4">
              {PERSONAL_INFO.combinedTitle} based in {PERSONAL_INFO.location}.
              Building scalable mobile apps for international teams.
            </p>
            <p className="text-xs text-zinc-600">{PERSONAL_INFO.email}</p>
            <p className="text-xs text-zinc-600">{PERSONAL_INFO.phoneDisplay}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium mb-4">
              Navigate
            </p>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium mb-4">
              Resources
            </p>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.resources.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium mb-4">
              Connect
            </p>
            <ul className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      aria-label={link.ariaLabel}
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors group"
                    >
                      <Icon size={14} aria-hidden />
                      <span>{link.name}</span>
                      {link.isExternal && (
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-hidden
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {year} {PERSONAL_INFO.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700 flex items-center gap-1.5">
            Built with Next.js, TypeScript, Tailwind &amp; Framer Motion
            <Heart size={11} className="text-cyan-400/70 fill-current" aria-hidden />
          </p>
        </div>

        <p className="sr-only">
          {SITE_CONFIG.name} — {PERSONAL_INFO.combinedTitle} from{' '}
          {PERSONAL_INFO.location}. Available for hire.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
