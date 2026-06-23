'use client';

import { useState } from 'react';
import { useForm, type UseFormRegisterReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { ArrowUpRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import Magnetic from '@/components/interactive/Magnetic';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { SOCIAL_LINKS, CONTACT_ITEMS } from '@/constants/social-links';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations';
import { sendContactEmail } from '@/lib/email';

export default function Contact() {
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
    <section id="contact" className="relative z-10 section-pad">
      <div className="grid-shell">
        <SectionHeading
          index="07"
          label="Contact"
          title="Let's build something that ships."
          description="Open to freelance, contract and remote roles. Replies usually within 24 hours."
          align="between"
        />

        <div className="mt-16 blueprint-grid gap-y-12">
          {/* coordinates */}
          <div className="col-span-4 self-start md:col-span-4 flex flex-col gap-px border border-line bg-line">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.id === 'location' ? '_blank' : undefined}
                  rel={item.id === 'location' ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col gap-2 bg-ink p-6 transition-colors hover:bg-ink-raised"
                >
                  <div className="flex items-center justify-between">
                    <span className="label-mono">{item.label}</span>
                    <Icon className="h-4 w-4 text-signal" strokeWidth={1.5} />
                  </div>
                  <span className="break-all font-mono text-sm text-paper transition-colors group-hover:text-signal">
                    {item.value}
                  </span>
                </a>
              );
            })}
            <div className="flex flex-col gap-3 bg-ink p-6">
              <span className="label-mono">Connect</span>
              <ul className="flex flex-col gap-2">
                {SOCIAL_LINKS.filter((l) => l.isExternal).map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                        className="link-edge inline-flex items-center gap-2 text-sm text-paper-dim"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* form */}
          <Reveal className="col-span-4 md:col-span-7 md:col-start-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-6 border border-line p-7 sm:p-9"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  error={errors.name?.message}
                  registration={register('name')}
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="you@email.com"
                  autoComplete="email"
                  error={errors.email?.message}
                  registration={register('email')}
                />
              </div>

              <Field
                id="subject"
                label="Subject"
                type="text"
                placeholder="Flutter freelance inquiry"
                autoComplete="off"
                error={errors.subject?.message}
                registration={register('subject')}
              />

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="label-mono">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Project details, timeline, budget range, references."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full resize-none border-b border-line bg-transparent py-2 text-sm text-paper outline-none transition-colors placeholder:text-paper-faint focus:border-signal"
                  {...register('message')}
                />
                {errors.message && <FieldError id="message" msg={errors.message.message} />}
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

              <Magnetic strength={0.3} className="self-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="group inline-flex items-center gap-3 bg-signal px-7 py-4 font-mono text-sm uppercase tracking-wider text-ink transition-colors hover:bg-paper disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span
                        aria-hidden
                        className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink"
                      />
                      Sending
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </Magnetic>

              {status === 'success' && (
                <p role="status" className="flex items-center gap-2 font-mono text-sm text-signal">
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  Message sent. I will reply within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="flex items-center gap-2 font-mono text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" aria-hidden />
                  Sending failed. Email instead: {PERSONAL_INFO.email}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  error?: string;
  registration: UseFormRegisterReturn;
};

function Field({ id, label, type, placeholder, autoComplete, error, registration }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label-mono">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full border-b border-line bg-transparent py-2 text-sm text-paper outline-none transition-colors placeholder:text-paper-faint focus:border-signal"
        {...registration}
      />
      {error && <FieldError id={id} msg={error} />}
    </div>
  );
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  return (
    <p id={`${id}-error`} role="alert" className="flex items-center gap-1 font-mono text-xs text-destructive">
      <AlertCircle className="h-3 w-3" aria-hidden />
      {msg}
    </p>
  );
}
