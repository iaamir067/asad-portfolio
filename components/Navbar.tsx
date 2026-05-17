'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navigation';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { useActiveSection } from '@/hooks/use-active-section';
import { useScrollProgress } from '@/hooks/use-scroll-progress';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[hsl(240,10%,4%)]/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="max-w-6xl mx-auto px-6"
        >
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label={`${PERSONAL_INFO.fullName} homepage`}
            >
              <span className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                <span className="text-white font-bold text-sm relative z-10">
                  {PERSONAL_INFO.initials}
                </span>
                <span className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
              <span className="hidden sm:block text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors tracking-tight">
                {PERSONAL_INFO.firstName}
                <span className="text-cyan-400">.</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-label={item.ariaLabel}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-cyan-400'
                        : 'text-zinc-500 hover:text-zinc-200'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeFileName}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                aria-label="Download resume PDF"
              >
                <Download size={14} aria-hidden />
                Resume
              </a>
              <Link
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Hire Me
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </button>
          </div>
        </nav>

        <span
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800/50 overflow-hidden"
        >
          <span
            className="block h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </span>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[hsl(240,10%,4%)]/95 backdrop-blur-xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-semibold text-zinc-300 hover:text-cyan-400 transition-colors"
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                className="flex flex-col items-center gap-3 mt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg"
                >
                  Hire Me
                </Link>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download={PERSONAL_INFO.resumeFileName}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-zinc-300 border border-zinc-700 rounded-lg hover:border-cyan-500/40 hover:text-white transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={14} aria-hidden />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
