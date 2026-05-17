import type { LucideIcon } from 'lucide-react';
import {
  Smartphone,
  Layers,
  Cpu,
  Cloud,
  Plug,
  Wrench,
  Rocket,
  Workflow,
} from 'lucide-react';

export type Skill = {
  name: string;
  proficiency: number;
};

export type SkillCategory = {
  id: string;
  category: string;
  description: string;
  icon: LucideIcon;
  skills: readonly Skill[];
};

export const SKILLS: readonly SkillCategory[] = [
  {
    id: 'mobile-development',
    category: 'Mobile Development',
    description: 'Cross-platform mobile development with Flutter and Dart for iOS and Android.',
    icon: Smartphone,
    skills: [
      { name: 'Flutter', proficiency: 95 },
      { name: 'Dart', proficiency: 95 },
      { name: 'Cross-Platform Development', proficiency: 92 },
      { name: 'Responsive UI', proficiency: 92 },
      { name: 'Animations', proficiency: 88 },
    ],
  },
  {
    id: 'architecture',
    category: 'Architecture & Patterns',
    description: 'Maintainable code structures used across production projects.',
    icon: Layers,
    skills: [
      { name: 'Clean Architecture', proficiency: 92 },
      { name: 'MVVM', proficiency: 92 },
      { name: 'MVC', proficiency: 88 },
      { name: 'SOLID Principles', proficiency: 90 },
    ],
  },
  {
    id: 'state-management',
    category: 'State Management',
    description: 'State management approaches selected per project complexity.',
    icon: Cpu,
    skills: [
      { name: 'Riverpod', proficiency: 92 },
      { name: 'Provider', proficiency: 92 },
      { name: 'GetX', proficiency: 88 },
    ],
  },
  {
    id: 'backend',
    category: 'Backend & APIs',
    description: 'Realtime services, payments, and REST integrations.',
    icon: Cloud,
    skills: [
      { name: 'Firebase', proficiency: 95 },
      { name: 'Firestore', proficiency: 92 },
      { name: 'Firebase Auth', proficiency: 92 },
      { name: 'Firebase Cloud Messaging', proficiency: 90 },
      { name: 'Firebase Storage', proficiency: 90 },
      { name: 'REST APIs', proficiency: 92 },
      { name: 'Stripe', proficiency: 88 },
      { name: 'Reloadly API', proficiency: 85 },
    ],
  },
  {
    id: 'integrations',
    category: 'Integrations',
    description: 'Realtime, payments, mapping, and messaging integrations shipped to production.',
    icon: Plug,
    skills: [
      { name: 'ZEGOCLOUD', proficiency: 88 },
      { name: 'Google Maps SDK', proficiency: 88 },
      { name: 'Push Notifications', proficiency: 90 },
      { name: 'Stripe Payment Gateway', proficiency: 88 },
    ],
  },
  {
    id: 'tools',
    category: 'Tools',
    description: 'Daily toolset for development, debugging, and version control.',
    icon: Wrench,
    skills: [
      { name: 'Git', proficiency: 92 },
      { name: 'GitHub', proficiency: 92 },
      { name: 'Android Studio', proficiency: 92 },
      { name: 'VS Code', proficiency: 95 },
      { name: 'Postman', proficiency: 90 },
    ],
  },
  {
    id: 'deployment',
    category: 'Deployment',
    description: 'Store publishing and release management.',
    icon: Rocket,
    skills: [
      { name: 'Google Play Store', proficiency: 92 },
      { name: 'Apple App Store', proficiency: 90 },
    ],
  },
  {
    id: 'practices',
    category: 'Development Practices',
    description: 'Workflow methodologies and collaboration practices.',
    icon: Workflow,
    skills: [
      { name: 'Agile', proficiency: 90 },
      { name: 'Scrum', proficiency: 90 },
      { name: 'Git-based Workflows', proficiency: 92 },
    ],
  },
] as const;

export const TOP_SKILLS = [
  'Flutter',
  'Dart',
  'Firebase',
  'Riverpod',
  'Clean Architecture',
  'MVVM',
  'Stripe',
  'REST APIs',
] as const;
