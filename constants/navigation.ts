export type NavItem = {
  id: string;
  label: string;
  href: string;
  ariaLabel: string;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'about', label: 'About', href: '#about', ariaLabel: 'Navigate to About section' },
  { id: 'work', label: 'Work', href: '#work', ariaLabel: 'Navigate to Selected Work section' },
  { id: 'skills', label: 'Skills', href: '#skills', ariaLabel: 'Navigate to Skills section' },
  { id: 'experience', label: 'Experience', href: '#experience', ariaLabel: 'Navigate to Experience section' },
  { id: 'tech-stack', label: 'Stack', href: '#tech-stack', ariaLabel: 'Navigate to Tech Stack section' },
  { id: 'contact', label: 'Contact', href: '#contact', ariaLabel: 'Navigate to Contact section' },
] as const;

export const FOOTER_LINKS = {
  navigation: [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  resources: [
    { id: 'resume', label: 'Download Resume', href: '/resume/asad-bangash-resume.pdf', isExternal: true },
    { id: 'sitemap', label: 'Sitemap', href: '/sitemap.xml', isExternal: false },
    { id: 'robots', label: 'Robots', href: '/robots.txt', isExternal: false },
  ],
} as const;

export const CTA_BUTTONS = {
  hero: [
    { id: 'view-work', label: 'View My Work', href: '#projects', variant: 'primary' as const },
    { id: 'contact-me', label: 'Get in Touch', href: '#contact', variant: 'outline' as const },
  ],
  contact: [
    { id: 'send-message', label: 'Send Message', variant: 'primary' as const },
  ],
} as const;
