'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_ITEMS } from '@/constants/portfolio';

const socialIcons: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />,
  Mail: <Mail size={18} />,
};

const Footer = () => {
  return (
    <footer className="relative border-t border-zinc-800/50">
      <div className="absolute inset-0 bg-[hsl(240,10%,4%)]" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-sm font-semibold text-white tracking-tight">
                {PERSONAL_INFO.name.split(' ')[0]}
                <span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Flutter Developer building production-grade mobile applications for international clients.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium mb-4">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium mb-4">Connect</p>
            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.slice(0, 4).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors group"
                >
                  {socialIcons[link.icon as keyof typeof socialIcons]}
                  <span>{link.name}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium mb-4">Get Started</p>
            <div className="flex flex-col gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all w-fit"
              >
                Hire Me
              </Link>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
