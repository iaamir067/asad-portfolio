export const ENV_KEYS = {
  emailjsServiceId: 'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
  emailjsTemplateId: 'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
  emailjsPublicKey: 'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY',
  siteUrl: 'NEXT_PUBLIC_SITE_URL',
  siteName: 'NEXT_PUBLIC_SITE_NAME',
  gaId: 'NEXT_PUBLIC_GA_ID',
  posthogKey: 'NEXT_PUBLIC_POSTHOG_KEY',
  posthogHost: 'NEXT_PUBLIC_POSTHOG_HOST',
  umamiId: 'NEXT_PUBLIC_UMAMI_ID',
  clarityId: 'NEXT_PUBLIC_CLARITY_ID',
} as const;

export const ENV = {
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://asadbangash.dev',
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'Asad Bangash',
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
    posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
    posthogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
    umamiId: process.env.NEXT_PUBLIC_UMAMI_ID || '',
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || '',
  },
} as const;

export const isEmailJsConfigured = (): boolean =>
  Boolean(ENV.emailjs.serviceId && ENV.emailjs.templateId && ENV.emailjs.publicKey);
