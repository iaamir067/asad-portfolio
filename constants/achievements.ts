import type { LucideIcon } from 'lucide-react';
import { Award, Globe2, Rocket, Layers } from 'lucide-react';

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    id: 'production-apps',
    title: 'Production Apps on Both Stores',
    description:
      'Published production-ready Flutter applications on both Google Play Store and Apple App Store.',
    icon: Rocket,
  },
  {
    id: 'international-clients',
    title: 'International Client Delivery',
    description:
      'Collaborated with international clients from the United Kingdom, United States, Spain, and Germany.',
    icon: Globe2,
  },
  {
    id: 'realtime-systems',
    title: 'Real-Time Systems at Scale',
    description:
      'Built real-time applications featuring one-to-one chat, group chat, video calling, payments, and live notifications.',
    icon: Award,
  },
  {
    id: 'scalable-architecture',
    title: 'Scalable Flutter Architectures',
    description:
      'Delivered scalable Flutter applications using Clean Architecture and MVVM patterns across multiple production codebases.',
    icon: Layers,
  },
] as const;
