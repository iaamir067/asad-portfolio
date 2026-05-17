'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, type UseFormRegisterReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Globe,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { SOCIAL_LINKS, CONTACT_ITEMS } from '@/constants/social-links';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations';
import { sendContactEmail } from '@/lib/email';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { LivePing } from '@/components/ui/pill';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', subject: '', message: '', honeypot: '' },
    mode: 'onBlur',
  });

  const onSubmit = async (values: ContactFormValues) => {
    const result = await sendContactEmail(values);
    if (result.success) {
      setStatus('success');
      reset();
      toast.success('Message sent. I will reply within 24 hours.');
    } else {
      setStatus('error');
      toast.error(result.errorMessage || 'Failed to send message.');
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative section-padding overflow-hidden"
    >
      <SectionBackground variant="gradient" glow="cyan" glowPosition="bottom" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <SectionEyebrow>Contact</SectionEyebrow>
        </motion.div>

        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Let&rsquo;s build</span>{' '}
          <span className="text-gradient">together.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 space-y-4"
            aria-label="Contact information"
          >
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.id === 'location' ? '_blank' : undefined}
                  rel={item.id === 'location' ? 'noopener noreferrer' : undefined}
                  className="block glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      aria-hidden
                      className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors"
                    >
                      <Icon size={18} className="text-cyan-400" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                    </div>
                  </div>
                  <p className="text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium break-all">
                    {item.value}
                  </p>
                </a>
              );
            })}

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden
                  className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center"
                >
                  <Clock size={18} className="text-cyan-400" />
                </span>
                <p className="text-sm font-semibold text-white">Response Time</p>
              </div>
              <p className="text-sm text-zinc-300 font-medium">Usually within 24 hours</p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden
                  className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center"
                >
                  <Globe size={18} className="text-cyan-400" />
                </span>
                <p className="text-sm font-semibold text-white">Availability</p>
              </div>
              <div className="flex items-center gap-2">
                <LivePing />
                <p className="text-sm text-emerald-400 font-medium">
                  {PERSONAL_INFO.availability}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium mb-4">
                Connect
              </p>
              <ul className="space-y-2">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target={link.isExternal ? '_blank' : undefined}
                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        aria-label={link.ariaLabel}
                        className="flex items-center gap-3 py-1.5 text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
                      >
                        <Icon size={14} aria-hidden />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="glass-card rounded-2xl p-8 sm:p-10"
              aria-labelledby="contact-form-heading"
            >
              <div className="flex items-center gap-3 mb-8">
                <span
                  aria-hidden
                  className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center"
                >
                  <MessageSquare size={18} className="text-cyan-400" />
                </span>
                <div>
                  <h3
                    id="contact-form-heading"
                    className="text-lg font-semibold text-white"
                  >
                    Send a message
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Tell me about your project, timeline, and stack.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <FormField
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  error={errors.name?.message}
                  registration={register('name')}
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="you@email.com"
                  autoComplete="email"
                  error={errors.email?.message}
                  registration={register('email')}
                />
              </div>

              <div className="mb-5">
                <FormField
                  id="subject"
                  label="Subject"
                  type="text"
                  placeholder="Flutter freelance inquiry"
                  autoComplete="off"
                  error={errors.subject?.message}
                  registration={register('subject')}
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Project details, timeline, budget range, and any references."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full px-4 py-3 bg-zinc-800/30 border border-zinc-700/50 text-white rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm placeholder:text-zinc-600 resize-none"
                  {...register('message')}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="mt-2 text-xs text-rose-400 flex items-center gap-1"
                  >
                    <AlertCircle size={12} aria-hidden />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="absolute -left-[9999px]" aria-hidden>
                <label htmlFor="honeypot">Leave blank</label>
                <input
                  id="honeypot"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register('honeypot')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      aria-hidden
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} aria-hidden />
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <p
                  role="status"
                  className="mt-4 text-sm text-emerald-400 flex items-center gap-2"
                >
                  <CheckCircle2 size={14} aria-hidden />
                  Message sent. I will reply within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p
                  role="alert"
                  className="mt-4 text-sm text-rose-400 flex items-center gap-2"
                >
                  <AlertCircle size={14} aria-hidden />
                  Sending failed. Try email instead: {PERSONAL_INFO.email}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type FormFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  error?: string;
  registration: UseFormRegisterReturn;
};

const FormField = ({
  id,
  label,
  type,
  placeholder,
  autoComplete,
  error,
  registration,
}: FormFieldProps) => (
  <div>
    <label
      htmlFor={id}
      className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className="w-full px-4 py-3 bg-zinc-800/30 border border-zinc-700/50 text-white rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm placeholder:text-zinc-600"
      {...registration}
    />
    {error && (
      <p
        id={`${id}-error`}
        role="alert"
        className="mt-2 text-xs text-rose-400 flex items-center gap-1"
      >
        <AlertCircle size={12} aria-hidden />
        {error}
      </p>
    )}
  </div>
);

export default Contact;
