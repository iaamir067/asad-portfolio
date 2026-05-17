'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolio';

const words = PERSONAL_INFO.title.split(' ');

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep background layers */}
      <div className="absolute inset-0 bg-[hsl(240,10%,4%)]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          x: mousePos.x * 20,
          y: mousePos.y * 20,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          x: mousePos.x * -15,
          y: mousePos.y * -15,
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern mask-radial opacity-60" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Mouse-follow glow */}
      <motion.div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)',
          left: '50%',
          top: '50%',
          x: mousePos.x * 80,
          y: mousePos.y * 80,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 mb-10 px-5 py-2.5 glass rounded-full"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
          </span>
          <span className="text-sm text-zinc-300 font-medium tracking-wide">
            Available for Projects
          </span>
          <Sparkles size={14} className="text-cyan-400" />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
            <span className="text-gradient">{PERSONAL_INFO.name.split(' ')[0]}</span>
            <br />
            <span className="text-white">{PERSONAL_INFO.name.split(' ').slice(1).join(' ')}</span>
          </h1>
        </motion.div>

        {/* Title with staggered word animation */}
        <motion.div className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                delay: 0.6 + i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light tracking-wide"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          {PERSONAL_INFO.shortBio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="#projects"
            className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              View Projects
              <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </Link>

          <Link
            href="#contact"
            className="group px-8 py-4 rounded-xl font-semibold text-white glass hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2"
          >
            Get in Touch
            <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </Link>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl font-medium text-zinc-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            Resume
          </a>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {['Flutter', 'Dart', 'Firebase', 'Clean Architecture', 'MVVM', 'Riverpod'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium text-zinc-500 glass rounded-full tracking-wide"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-zinc-700 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
