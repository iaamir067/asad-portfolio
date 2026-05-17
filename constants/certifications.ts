export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
};

export const CERTIFICATIONS: readonly Certification[] = [] as const;

export const CERTIFICATIONS_PLACEHOLDER = {
  heading: 'Certifications',
  subheading: 'Verifiable credentials',
  emptyTitle: 'Certifications in progress',
  emptyDescription:
    'Active learning continues alongside production work. Earned certifications will be added here with verification links.',
  ctaLabel: 'See my GitHub',
  ctaHref: 'https://github.com/AsadBangash34',
} as const;
