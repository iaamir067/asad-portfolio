export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [] as const;

export const TESTIMONIALS_PLACEHOLDER = {
  heading: 'Testimonials',
  subheading: 'Notes from teammates and clients',
  emptyTitle: 'Testimonials coming soon',
  emptyDescription:
    'Detailed testimonials from international clients and collaborators will be published here. References are available on request.',
  ctaLabel: 'Request References',
  ctaHref: '#contact',
} as const;
