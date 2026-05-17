export type Experience = {
  id: string;
  company: string;
  companyUrl?: string;
  position: string;
  level: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract' | 'Freelance';
  summary: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
  current: boolean;
};

export const EXPERIENCE: readonly Experience[] = [
  {
    id: 'metasense',
    company: 'Metasense Technologies',
    position: 'Mid-Level Flutter Developer',
    level: 'Mid-Level',
    startDate: 'Jul 2025',
    endDate: 'Present',
    duration: 'Current Role',
    location: 'Remote',
    type: 'Full-time',
    summary:
      'Leading end-to-end Flutter application development using Clean Architecture and MVVM patterns, integrating Firebase services and shipping production releases on Agile cycles.',
    responsibilities: [
      'Led end-to-end Flutter application development using Clean Architecture and MVVM for scalable, maintainable codebases.',
      'Integrated Firebase services including Firestore, Authentication, Cloud Messaging, and Storage to power real-time systems.',
      'Collaborated closely with designers and backend engineers within Agile and Scrum workflows to deliver high-quality releases.',
      'Optimized application performance by profiling rendering bottlenecks, improving app responsiveness and production stability across releases.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Clean Architecture',
      'MVVM',
      'Firebase',
      'Firestore',
      'Firebase Auth',
      'FCM',
      'Firebase Storage',
      'REST APIs',
    ],
    current: true,
  },
  {
    id: 'rz-technologies',
    company: 'RZ Technologies',
    position: 'Flutter Developer',
    level: 'Mid-Level',
    startDate: 'Feb 2024',
    endDate: 'Jun 2025',
    duration: '1 year 5 months',
    location: 'Remote',
    type: 'Full-time',
    summary:
      'Built cross-platform fintech and e-commerce applications for international markets, integrating Stripe and Reloadly for payment processing and digital product delivery.',
    responsibilities: [
      'Developed and deployed cross-platform fintech and e-commerce applications using Flutter and Dart for international markets.',
      'Integrated Stripe and Reloadly APIs for secure payment processing, mobile top-ups, and digital product delivery.',
      'Improved scalability and app performance by adopting Provider and GetX state management across multiple projects.',
      'Delivered responsive, multilingual applications with localization support for diverse international user bases.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Stripe',
      'Reloadly API',
      'Firebase',
      'Provider',
      'GetX',
      'Localization',
    ],
    current: false,
  },
  {
    id: 'uzr-tech',
    company: 'UZR Tech',
    position: 'Flutter Intern → Junior Flutter Developer',
    level: 'Junior',
    startDate: '2022',
    endDate: 'Jan 2024',
    duration: '~2 years',
    location: 'Pakistan',
    type: 'Full-time',
    summary:
      'Started as a Flutter intern during university and grew into a junior developer role, contributing to client projects from build through store deployment.',
    responsibilities: [
      'Started as a Flutter intern during university, transitioning from C++ to Dart and Flutter mobile development.',
      'Applied Flutter fundamentals, Firebase integration, REST APIs, and responsive cross-platform UI development across real client projects.',
      'Contributed to 5+ projects from development through production deployment, implementing real-time features, push notifications, and Firebase backend integrations.',
      'Collaborated with international clients and senior developers to improve app quality and meet delivery timelines.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'REST APIs',
      'Push Notifications',
      'Git',
    ],
    current: false,
  },
] as const;
