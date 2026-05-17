import { SITE_CONFIG } from '@/constants/site-config';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { SOCIAL_LINKS } from '@/constants/social-links';
import { EXPERIENCE } from '@/constants/experience';
import { PROJECTS } from '@/constants/projects';
import { EDUCATION } from '@/constants/education';
import { LANGUAGES } from '@/constants/languages';
import { SKILLS } from '@/constants/skills';
import { FAQ_ITEMS } from '@/constants/seo';

const absoluteUrl = (path = '/') => {
  const base = SITE_CONFIG.url.replace(/\/$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
};

export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': absoluteUrl('/#person'),
  name: PERSONAL_INFO.fullName,
  givenName: PERSONAL_INFO.firstName,
  familyName: PERSONAL_INFO.lastName,
  alternateName: PERSONAL_INFO.initials,
  description: PERSONAL_INFO.summary,
  jobTitle: PERSONAL_INFO.combinedTitle,
  email: `mailto:${PERSONAL_INFO.email}`,
  telephone: PERSONAL_INFO.phone,
  url: SITE_CONFIG.url,
  image: absoluteUrl(SITE_CONFIG.ogImage),
  address: {
    '@type': 'PostalAddress',
    addressLocality: PERSONAL_INFO.city,
    addressCountry: PERSONAL_INFO.country,
  },
  sameAs: SOCIAL_LINKS.filter((l) => l.isExternal).map((l) => l.url),
  knowsLanguage: LANGUAGES.map((l) => l.name),
  knowsAbout: SKILLS.flatMap((g) => g.skills.map((s) => s.name)),
  alumniOf: EDUCATION.map((edu) => ({
    '@type': 'CollegeOrUniversity',
    name: edu.institution,
    address: {
      '@type': 'PostalAddress',
      addressLocality: edu.location.split(',')[0]?.trim(),
      addressCountry: edu.location.split(',')[1]?.trim() || PERSONAL_INFO.country,
    },
  })),
  hasOccupation: {
    '@type': 'Occupation',
    name: PERSONAL_INFO.primaryTitle,
    occupationLocation: {
      '@type': 'Country',
      name: PERSONAL_INFO.country,
    },
    skills: SKILLS.flatMap((g) => g.skills.map((s) => s.name)).join(', '),
  },
  worksFor: EXPERIENCE.filter((e) => e.current).map((e) => ({
    '@type': 'Organization',
    name: e.company,
  })),
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  url: SITE_CONFIG.url,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  inLanguage: SITE_CONFIG.language,
  publisher: { '@id': absoluteUrl('/#person') },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_CONFIG.url}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': absoluteUrl('/#organization'),
  name: PERSONAL_INFO.fullName,
  legalName: PERSONAL_INFO.fullName,
  url: SITE_CONFIG.url,
  logo: absoluteUrl(SITE_CONFIG.ogImage),
  email: PERSONAL_INFO.email,
  telephone: PERSONAL_INFO.phone,
  founder: { '@id': absoluteUrl('/#person') },
  contactPoint: {
    '@type': 'ContactPoint',
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.phone,
    contactType: 'Hiring Inquiries',
    availableLanguage: LANGUAGES.map((l) => l.name),
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: PERSONAL_INFO.city,
    addressCountry: PERSONAL_INFO.country,
  },
});

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
});

export const faqSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const projectsSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': absoluteUrl('/#projects'),
  name: 'Asad Bangash Projects',
  itemListElement: PROJECTS.map((project, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    item: {
      '@type': 'CreativeWork',
      '@id': absoluteUrl(`/#project-${project.slug}`),
      name: project.title,
      alternateName: project.subtitle,
      description: project.description,
      keywords: project.technologies.join(', '),
      genre: project.category,
      author: { '@id': absoluteUrl('/#person') },
      datePublished: project.year,
      url: project.links.website || SITE_CONFIG.url,
    },
  })),
});

export const portfolioPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': absoluteUrl('/#profile'),
  url: SITE_CONFIG.url,
  name: `${PERSONAL_INFO.fullName} — Portfolio`,
  description: SITE_CONFIG.description,
  inLanguage: SITE_CONFIG.language,
  mainEntity: { '@id': absoluteUrl('/#person') },
  about: { '@id': absoluteUrl('/#person') },
  isPartOf: { '@id': absoluteUrl('/#website') },
});

export const buildHomepageStructuredData = () => [
  personSchema(),
  websiteSchema(),
  organizationSchema(),
  portfolioPageSchema(),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/#about' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Experience', url: '/#experience' },
    { name: 'Contact', url: '/#contact' },
  ]),
  projectsSchema(),
  faqSchema(),
];
