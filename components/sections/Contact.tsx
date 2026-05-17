'use client';

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, ArrowRight, MessageSquare, Clock, Globe } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/constants/portfolio';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Message sent! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send. Please try again.');
      }
    } catch {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,10%,4%)] via-[hsl(240,10%,5%)] to-[hsl(240,10%,4%)]" />
      <div className="absolute inset-0 grid-pattern mask-radial opacity-20" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-medium">
            Contact
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
            <span className="text-white">Let's build</span>{' '}
            <span className="text-gradient">together.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 space-y-4"
          >
            {/* Email card */}
            <div className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <p className="text-xs text-zinc-500">Direct line</p>
                </div>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Response time */}
            <div className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Clock size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Response Time</p>
                  <p className="text-xs text-zinc-500">Usually within</p>
                </div>
              </div>
              <p className="text-sm text-zinc-300 font-medium">24 hours</p>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Globe size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Availability</p>
                  <p className="text-xs text-zinc-500">Current status</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <p className="text-sm text-emerald-400 font-medium">Available for work</p>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium mb-4">Connect</p>
              <div className="space-y-2">
                {SOCIAL_LINKS.slice(0, 3).map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <MessageSquare size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Send a message</p>
                  <p className="text-xs text-zinc-500">I'd love to hear about your project</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/30 border border-zinc-700/50 text-white rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm placeholder:text-zinc-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/30 border border-zinc-700/50 text-white rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm placeholder:text-zinc-600"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/30 border border-zinc-700/50 text-white rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm placeholder:text-zinc-600"
                  placeholder="Project discussion"
                />
              </div>

              <div className="mb-8">
                <label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-800/30 border border-zinc-700/50 text-white rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm placeholder:text-zinc-600 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
