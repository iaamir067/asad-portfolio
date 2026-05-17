import { SITE_CONFIG, SITE_KEYWORDS } from './site-config';
import { PERSONAL_INFO } from './personal-info';
import { SOCIAL_LINKS } from './social-links';

export const SEO = {
  defaultTitle: SITE_CONFIG.title,
  titleTemplate: `%s | ${PERSONAL_INFO.fullName}`,
  defaultDescription: SITE_CONFIG.description,
  keywords: SITE_KEYWORDS,
  ogType: 'website',
  twitterHandle: SITE_CONFIG.twitterHandle,
  twitterCard: 'summary_large_image',
  authorUrl: SITE_CONFIG.url,
  locale: SITE_CONFIG.locale,
  alternateLocales: [] as readonly string[],
} as const;

export const PAGE_METADATA = {
  home: {
    title: `${PERSONAL_INFO.fullName} — ${PERSONAL_INFO.combinedTitle}`,
    description: SITE_CONFIG.description,
    path: '/',
  },
  notFound: {
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    path: '/404',
  },
} as const;

export const STRUCTURED_DATA_CONFIG = {
  person: {
    type: 'Person',
    name: PERSONAL_INFO.fullName,
    jobTitle: PERSONAL_INFO.combinedTitle,
    description: PERSONAL_INFO.summary,
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.phone,
    address: {
      addressLocality: PERSONAL_INFO.city,
      addressCountry: PERSONAL_INFO.country,
    },
    sameAs: SOCIAL_LINKS.filter((l) => l.isExternal).map((l) => l.url),
    knowsAbout: [
      'Flutter Development',
      'Dart Programming',
      'Cross-Platform Mobile Development',
      'Clean Architecture',
      'MVVM',
      'Riverpod',
      'Provider',
      'GetX',
      'Firebase',
      'Firestore',
      'Firebase Cloud Messaging',
      'Stripe Payments',
      'Reloadly API',
      'ZEGOCLOUD',
      'Google Maps SDK',
      'REST API Integration',
    ],
    alumniOf: {
      type: 'CollegeOrUniversity',
      name: 'Kohat University of Science and Technology',
    },
  },
  organization: {
    type: 'Organization',
    name: PERSONAL_INFO.fullName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    description: SITE_CONFIG.description,
    founder: PERSONAL_INFO.fullName,
    contactPoint: {
      email: PERSONAL_INFO.email,
      telephone: PERSONAL_INFO.phone,
      contactType: 'Hiring Inquiries',
      availableLanguage: ['English', 'Urdu', 'Pashto'],
    },
  },
  website: {
    type: 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: SITE_CONFIG.language,
    publisher: PERSONAL_INFO.fullName,
  },
} as const;

export const FAQ_ITEMS = [
  {
    question: 'Who is Asad Bangash?',
    answer:
      'Asad Bangash is a Flutter Developer and Mobile Application Engineer based in Kohat, Pakistan with 2+ years of experience building cross-platform mobile applications for fintech, healthcare, edtech, and e-commerce.',
  },
  {
    question: 'What technologies does Asad Bangash work with?',
    answer:
      'Flutter, Dart, Firebase, Firestore, Firebase Auth, Cloud Messaging, Storage, REST APIs, Stripe, Reloadly, ZEGOCLOUD, Google Maps SDK, Riverpod, Provider, GetX, Clean Architecture, and MVVM.',
  },
  {
    question: 'Is Asad Bangash available for hire?',
    answer:
      'Yes. Asad is available for freelance Flutter projects, contract work, and full-time remote roles with international clients.',
  },
  {
    question: 'What kind of applications has Asad shipped?',
    answer:
      'Production Flutter applications across fintech, healthcare, edtech, and e-commerce on both the Apple App Store and Google Play Store, including real-time chat, video calling, payments, and live notifications.',
  },
  {
    question: 'How can I contact Asad Bangash?',
    answer:
      'Email assadbangash.kust@gmail.com or use the contact form on this site. Phone: (+92) 333-9636238.',
  },
] as const;
