'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS, BLOG_PLACEHOLDER } from '@/constants/blog';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

const Blog = () => {
  const hasPosts = BLOG_POSTS.length > 0;

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="dots" glow="cyan" glowPosition="bottom" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>{BLOG_PLACEHOLDER.heading}</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="blog-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Notes on</span>{' '}
          <span className="text-gradient">shipping.</span>
        </motion.h2>

        {hasPosts ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BLOG_POSTS.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all"
                >
                  <p className="text-xs uppercase tracking-wider text-cyan-400/80 mb-3">
                    {post.tags[0]}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
                    <Clock size={12} aria-hidden />
                    {post.readingTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-10 sm:p-14"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <span
                aria-hidden
                className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0"
              >
                <BookOpen size={22} className="text-cyan-400" />
              </span>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {BLOG_PLACEHOLDER.emptyTitle}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {BLOG_PLACEHOLDER.emptyDescription}
                </p>

                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 font-medium mb-4">
                  Upcoming topics
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {BLOG_PLACEHOLDER.upcomingTopics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-sm text-zinc-400"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Get notified when articles ship
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
