import emailjs from '@emailjs/browser';
import { ENV, isEmailJsConfigured } from '@/constants/env';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { SITE_CONFIG } from '@/constants/site-config';
import type { ContactFormValues } from './validations';

export type SendContactEmailResult = {
  success: boolean;
  errorCode?: 'not_configured' | 'send_failed' | 'rate_limited';
  errorMessage?: string;
};

const RATE_LIMIT_KEY = 'asad-portfolio-contact-last-send';
const RATE_LIMIT_WINDOW_MS = 30 * 1000;

const isRateLimited = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const last = window.localStorage.getItem(RATE_LIMIT_KEY);
    if (!last) return false;
    const lastTs = parseInt(last, 10);
    if (Number.isNaN(lastTs)) return false;
    return Date.now() - lastTs < RATE_LIMIT_WINDOW_MS;
  } catch {
    return false;
  }
};

const markSent = () => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
  } catch {
    /* ignore storage errors */
  }
};

export const sendContactEmail = async (
  data: ContactFormValues,
): Promise<SendContactEmailResult> => {
  if (data.honeypot && data.honeypot.length > 0) {
    return { success: true };
  }
 console.log("=== EMAILJS DEBUG ===");
  console.log("Configured:", isEmailJsConfigured());
  console.log("Service ID:", ENV.emailjs.serviceId);
  console.log("Template ID:", ENV.emailjs.templateId);
  console.log("Public Key:", ENV.emailjs.publicKey);
  console.log("=====================");
  if (!isEmailJsConfigured()) {
    return {
      success: false,
      errorCode: 'not_configured',
      errorMessage:
        'Email service is not configured. Please email directly at ' +
        PERSONAL_INFO.email,
    };
  }

  if (isRateLimited()) {
    return {
      success: false,
      errorCode: 'rate_limited',
      errorMessage: 'Please wait a moment before sending another message.',
    };
  }

  try {
    await emailjs.send(
      ENV.emailjs.serviceId,
      ENV.emailjs.templateId,
      {
        from_name: data.name,
        from_email: data.email,
        reply_to: data.email,
        subject: data.subject,
        message: data.message,
        to_name: PERSONAL_INFO.fullName,
        site_name: SITE_CONFIG.name,
        site_url: SITE_CONFIG.url,
        submitted_at: new Date().toISOString(),
      },
      { publicKey: ENV.emailjs.publicKey },
    );
    markSent();
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return {
      success: false,
      errorCode: 'send_failed',
      errorMessage: `Failed to send: ${message}`,
    };
  }
};
