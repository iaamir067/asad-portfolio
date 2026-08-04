import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export type SocialLink = {
  id: string;
  name: string;
  url: string;
  username: string;
  icon: LucideIcon;
  label: string;
  ariaLabel: string;
  isExternal: boolean;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/asad115123',
    username: 'AsadBangash34',
    icon: Github,
    label: 'GitHub Portfolio',
    ariaLabel: 'Visit Asad Bangash GitHub portfolio',
    isExternal: true,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/asad-bangash-894b30269/',
    username: 'asad-bangash',
    icon: Linkedin,
    label: 'LinkedIn Profile',
    ariaLabel: 'Connect with Asad Bangash on LinkedIn',
    isExternal: true,
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:assadbangash.kust@gmail.com',
    username: 'assadbangash.kust@gmail.com',
    icon: Mail,
    label: 'Send Email',
    ariaLabel: 'Send an email to Asad Bangash',
    isExternal: false,
  },
  {
    id: 'phone',
    name: 'Phone',
    url: 'tel:+923339636238',
    username: '(+92) 333-9636238',
    icon: Phone,
    label: 'Call',
    ariaLabel: 'Call Asad Bangash',
    isExternal: false,
  },
] as const;

export const CONTACT_ITEMS = [
  {
    id: 'email',
    label: 'Email',
    value: 'assadbangash.kust@gmail.com',
    href: 'mailto:assadbangash.kust@gmail.com',
    icon: Mail,
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '(+92) 333-9636238',
    href: 'tel:+923339636238',
    icon: Phone,
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Kohat, Pakistan',
    href: 'https://www.google.com/maps/place/Kohat',
    icon: MapPin,
  },
] as const;
