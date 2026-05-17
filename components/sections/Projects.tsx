'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Apple,
  Globe,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { PROJECTS } from '@/constants/portfolio';

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 9.479l2.71-2.712 5.39 3.108a1 1 0 010 1.738l-5.39 3.108-2.71-2.712zm-1.414 1.414L2.876 22.465l10.21-5.9zm0-2.828L13.085 7.435l-10.21-5.9z" />
  </svg>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(240,10%,4%)]" />
      <div className="absolute inset-0 dot-pattern mask-radial opacity-30" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-500/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-medium">
            Projects
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
            <span className="text-white">Shipped</span>{' '}
            <span className="text-gradient">products.</span>
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-8 mb-20">
          {featured.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Project visual */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" />
                    <div className="absolute inset-0 grid-pattern opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                      >
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center glow-cyan">
                          <Smartphone size={48} className="text-cyan-400/60" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/40 animate-pulse-glow" />
                      </motion.div>
                    </div>
                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="mb-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-cyan-400/60 font-medium">
                        Featured Project
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-cyan-50 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {project.longDescription}
                    </p>

                    {/* Role */}
                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium mb-1">Role</p>
                      <p className="text-sm text-zinc-300">{project.role}</p>
                    </div>

                    {/* Contributions */}
                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium mb-3">Contributions</p>
                      <ul className="space-y-2">
                        {project.contributions.slice(0, 3).map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                            <div className="mt-1.5 w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 border border-zinc-700/50 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {project.links.appStore && (
                        <a
                          href={project.links.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 px-4 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors"
                        >
                          <Apple size={16} />
                          App Store
                          <ExternalLink size={12} className="opacity-50 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {project.links.playStore && (
                        <a
                          href={project.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 px-4 py-2.5 glass rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:border-cyan-500/30 transition-all"
                        >
                          <PlayStoreIcon />
                          Play Store
                          <ExternalLink size={12} className="opacity-50 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 px-4 py-2.5 glass rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:border-cyan-500/30 transition-all"
                        >
                          <Globe size={16} />
                          Website
                          <ExternalLink size={12} className="opacity-50 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 font-medium mb-8">
              Other Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {other.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group glass-card rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 text-[10px] font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full uppercase tracking-wider">
                      {project.status}
                    </span>
                    <Smartphone size={20} className="text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-50 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] font-medium text-zinc-500 bg-zinc-800/50 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.links.appStore && (
                      <a href={project.links.appStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-zinc-500 hover:text-cyan-400 transition-colors">
                        <Apple size={12} /> iOS
                      </a>
                    )}
                    {project.links.playStore && (
                      <a href={project.links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-zinc-500 hover:text-cyan-400 transition-colors">
                        <PlayStoreIcon /> Android
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
