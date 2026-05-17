'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '@/hooks/use-scroll-progress';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 group"
        >
          <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(240,10%,4%)]/80 backdrop-blur-xl border border-zinc-800 group-hover:border-cyan-500/40 transition-all duration-300 shadow-lg shadow-black/30">
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 48 48"
              aria-hidden
            >
              <circle
                cx="24"
                cy="24"
                r="21"
                stroke="currentColor"
                className="text-zinc-800/60"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="21"
                stroke="url(#scroll-progress-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={2 * Math.PI * 21}
                strokeDashoffset={(1 - progress / 100) * 2 * Math.PI * 21}
                style={{ transition: 'stroke-dashoffset 120ms linear' }}
              />
              <defs>
                <linearGradient
                  id="scroll-progress-gradient"
                  x1="0"
                  y1="0"
                  x2="48"
                  y2="48"
                >
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <ArrowUp
              size={18}
              className="text-zinc-400 group-hover:text-cyan-400 transition-colors"
              aria-hidden
            />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
