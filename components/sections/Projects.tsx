'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Apple,
  Globe,
  Smartphone,
  Building2,
} from 'lucide-react';
import { PROJECTS } from '@/constants/projects';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { Pill } from '@/components/ui/pill';

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 9.479l2.71-2.712 5.39 3.108a1 1 0 010 1.738l-5.39 3.108-2.71-2.712zm-1.414 1.414L2.876 22.465l10.21-5.9zm0-2.828L13.085 7.435l-10.21-5.9z" />
  </svg>
);

const ProjectLinks = ({
  links,
  size = 'md',
}: {
  links: (typeof PROJECTS)[number]['links'];
  size?: 'sm' | 'md';
}) => {
  const base = size === 'md' ? 'px-4 py-2.5 text-sm' : 'px-3 py-1.5 text-xs';
  return (
    <div className="flex flex-wrap gap-3">
      {links.appStore && (
        <a
          href={links.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/link inline-flex items-center gap-2 ${base} bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors`}
          aria-label="View on Apple App Store"
        >
          <Apple size={size === 'md' ? 16 : 12} aria-hidden />
          App Store
          <ExternalLink
            size={12}
            className="opacity-50 group-hover/link:opacity-100 transition-opacity"
            aria-hidden
          />
        </a>
      )}
      {links.playStore && (
        <a
          href={links.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/link inline-flex items-center gap-2 ${base} glass rounded-lg font-medium text-zinc-300 hover:text-white hover:border-cyan-500/30 transition-all`}
          aria-label="View on Google Play Store"
        >
          <PlayStoreIcon />
          Play Store
          <ExternalLink
            size={12}
            className="opacity-50 group-hover/link:opacity-100 transition-opacity"
            aria-hidden
          />
        </a>
      )}
      {links.website && (
        <a
          href={links.website}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/link inline-flex items-center gap-2 ${base} glass rounded-lg font-medium text-zinc-300 hover:text-white hover:border-cyan-500/30 transition-all`}
          aria-label="Visit website"
        >
          <Globe size={size === 'md' ? 16 : 12} aria-hidden />
          Website
          <ExternalLink
            size={12}
            className="opacity-50 group-hover/link:opacity-100 transition-opacity"
            aria-hidden
          />
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="dots" glow="blue" glowPosition="right" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>Projects</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Shipped</span>{' '}
          <span className="text-gradient">products.</span>
        </motion.h2>

        <div className="space-y-8 mb-20">
          {featured.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group"
              aria-labelledby={`project-${project.id}-title`}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" />
                    <div className="absolute inset-0 grid-pattern opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                        aria-hidden
                      >
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center glow-cyan">
                          <Smartphone size={48} className="text-cyan-400/60" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/40 animate-pulse-glow" />
                      </motion.div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Pill variant="cyan" size="sm">
                        {project.status}
                      </Pill>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/60 font-medium mb-2">
                      Featured Project · {project.industry}
                    </p>

                    <h3
                      id={`project-${project.id}-title`}
                      className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-50 transition-colors"
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-cyan-400/80 mb-4">{project.subtitle}</p>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {project.longDescription}
                    </p>

                    {project.client && (
                      <div className="mb-4 inline-flex items-center gap-1.5 text-xs text-zinc-500">
                        <Building2 size={12} aria-hidden />
                        {project.client}
                      </div>
                    )}

                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium mb-3">
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-zinc-400"
                          >
                            <span
                              aria-hidden
                              className="mt-1.5 w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ul className="mb-8 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 border border-zinc-700/50 rounded-md"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4 text-xs text-zinc-500">
                      Deployed to:{' '}
                      <span className="text-zinc-300">
                        {project.deployment.join(' · ')}
                      </span>
                    </div>

                    <ProjectLinks links={project.links} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {other.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group glass-card rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Pill variant="cyan" size="sm">
                      {project.status}
                    </Pill>
                    <Smartphone
                      size={20}
                      className="text-zinc-600 group-hover:text-cyan-400 transition-colors"
                      aria-hidden
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-50 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-400/80 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <li
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-medium text-zinc-500 bg-zinc-800/50 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <ProjectLinks links={project.links} size="sm" />
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
