export type ProjectLink = {
  appStore?: string;
  playStore?: string;
  website?: string;
  caseStudy?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  description: string;
  longDescription: string;
  technologies: readonly string[];
  features: readonly string[];
  highlights: readonly string[];
  links: ProjectLink;
  status: 'Published' | 'In Development' | 'Archived';
  deployment: readonly string[];
  featured: boolean;
  client?: string;
  year: string;
  image: string;
  imageAlt: string;
};

export const PROJECTS: readonly Project[] = [
  {
    id: 'liquid-canvas',
    slug: 'liquid-canvas',
    title: 'Liquid Canvas',
    subtitle: 'Art Streaming & Display App',
    category: 'Cross-Platform Streaming',
    industry: 'Art & Media',
    description:
      'A cross-platform Flutter app turning smart TVs and mobile devices into dynamic digital art galleries with curated browsing and TV streaming.',
    longDescription:
      'Liquid Canvas transforms smart televisions and mobile devices into dynamic digital art galleries. The app combines curated browsing, smart TV streaming, secure media uploads, and custom playlist management to deliver smooth real-time playback across screen sizes.',
    technologies: ['Flutter', 'Firebase', 'REST APIs', 'Smart TV Streaming'],
    features: [
      'Custom playlist management',
      'Secure media uploads',
      'Rendering optimizations',
      'Smooth real-time playback',
      'Smart TV streaming support',
      'Curated art browsing',
    ],
    highlights: [
      'Shipped to Google Play Store and Apple App Store',
      'Optimized rendering pipeline for smooth playback',
      'Secure media upload and storage workflow',
    ],
    links: {
      appStore: 'https://apps.apple.com/us/app/liquid-canvas/id6478953093',
      playStore: 'https://play.google.com/store/apps/details?id=com.metasense.lqdcnvs_mobile',
    },
    status: 'Published',
    deployment: ['Google Play Store', 'Apple App Store'],
    featured: true,
    year: '2025',
    image: '/images/Premium_portfolio_cover_Liquid_C…_202607220952-2.jpeg',
    imageAlt: 'Liquid Canvas Flutter art streaming app',
  },
  {
    id: 'my-uni',
    slug: 'my-uni',
    title: 'MY UNI',
    subtitle: 'University Student Platform App',
    category: 'EdTech',
    industry: 'Education',
    description:
      'A comprehensive university student platform built for a United Kingdom client using Flutter and Firebase, featuring real-time messaging and collaboration tools.',
    longDescription:
      'MY UNI is a comprehensive student platform built for a UK client with Flutter and Firebase. It supports one-to-one chat, group chat, assignment management, grade calculation, university news feed, real-time push notifications, and a responsive cross-platform UI.',
    technologies: ['Flutter', 'Firebase', 'Cloud Messaging', 'Real-Time Chat'],
    features: [
      'One-to-one chat',
      'Group chat',
      'Assignment management',
      'Grade calculation',
      'University news feed',
      'Student collaboration system',
      'Push notifications',
      'Real-time messaging',
      'Fully responsive cross-platform UI',
    ],
    highlights: [
      'Delivered for a United Kingdom client',
      'Shipped to Apple App Store',
      'Real-time messaging powered by Firebase',
    ],
    links: {
      appStore: 'https://apps.apple.com/tr/app/my-uni/id1009390410',
    },
    status: 'Published',
    deployment: ['Apple App Store'],
    featured: true,
    client: 'United Kingdom Client',
    year: '2025',
    image: '/images/My_Uni_app_portfolio_thumbnail_202607220939.jpeg',
    imageAlt: 'MY UNI Flutter university student platform app',
  },
  {
    id: 'nurse-hiring',
    slug: 'nurse-hiring',
    title: 'Nurse Hiring App',
    subtitle: 'Healthcare Two-Sided Marketplace',
    category: 'Healthcare Marketplace',
    industry: 'Healthcare',
    description:
      'A two-sided healthcare marketplace connecting patients with nurses, with real-time booking, live tracking, Stripe payments, and FCM notifications.',
    longDescription:
      'A two-sided marketplace architected to connect patients with qualified nurses. The platform supports real-time appointment booking and acceptance workflows, live tracking via Google Maps SDK, Stripe payments, and Firebase Cloud Messaging notifications backed by a scalable backend.',
    technologies: [
      'Flutter',
      'Firebase',
      'Google Maps SDK',
      'Stripe',
      'REST APIs',
    ],
    features: [
      'Real-time appointment booking',
      'Live tracking',
      'Google Maps SDK integration',
      'Stripe payments',
      'Firebase Cloud Messaging notifications',
      'Scalable backend support',
    ],
    highlights: [
      'Two-sided marketplace architecture',
      'Realtime booking and acceptance flow',
      'Integrated Stripe payments and live tracking',
    ],
    links: {},
    status: 'Published',
    deployment: ['Apple App Store', 'Google Play Store'],
    featured: true,
    year: '2023',
    image: '/images/nurse_hiring.jpeg',
    imageAlt: 'Nurse Hiring Flutter healthcare marketplace app',
  },
  {
    id: 'fintech-app',
    slug: 'fintech-mobile-application',
    title: 'Fintech Mobile Application',
    subtitle: 'Top-Up & Gift Card Platform',
    category: 'Fintech',
    industry: 'Financial Technology',
    description:
      'Developed a production-ready fintech mobile application for a Spain-based client, enabling global mobile top-ups and digital gift card purchases.',
    longDescription:
      'Developed a production-ready fintech mobile application for a Spain-based client, enabling global mobile top-ups and digital gift card purchases. The application features secure payments with Stripe, real-time wallet balance management, multi-currency support, and seamless digital product delivery through Reloadly. Built using Flutter with Firebase as the backend, focusing on performance, scalability, and a smooth user experience. My role covered end-to-end Flutter development, payment integration, backend setup, wallet and transaction flows, performance optimization, and publishing builds for client testing on Android and iOS.',
    technologies: ['Flutter', 'Firebase', 'Stripe', 'Reloadly API', 'REST API'],
    features: [
      'International mobile top-ups',
      'Digital gift card marketplace',
      'Secure card payments via Stripe',
      'Real-time wallet balance updates',
      'Transaction history and payment tracking',
      'Firebase Authentication & Cloud Firestore',
      'Reloadly API integration for digital products',
    ],
    highlights: [
      'Successfully delivered to a Spain-based client',
      'Secure Stripe payment integration',
      'Global mobile top-ups and gift card delivery',
      'Real-time wallet and transaction management',
      'Scalable Firebase backend architecture',
    ],
    links: {},
    status: 'Published',
    deployment: ['Apple App Store', 'Google Play Store'],
    featured: false,
    year: '2024',
    image: '/images/fintect_app.png',
    imageAlt: 'Fintech Flutter top-up and gift card platform',
  },
  {
    id: 'language-learning',
    slug: 'language-learning-app',
    title: 'Language Learning App',
    subtitle: 'Live Tutor Sessions & Community',
    category: 'EdTech',
    industry: 'Education',
    description:
      'An edtech platform enabling learners to book live one-to-one video and chat sessions with tutors using ZEGOCLOUD real-time systems.',
    longDescription:
      'An edtech platform where learners book live one-to-one video and chat sessions with tutors. Built on Flutter with ZEGOCLOUD for real-time video and chat, Stripe for payments, and Firebase for notifications and community features.',
    technologies: ['Flutter', 'Firebase', 'ZEGOCLOUD', 'Stripe'],
    features: [
      'Video calling',
      'Live chat',
      'Tutor booking',
      'Community forums',
      'Stripe payments',
      'Firebase-powered notifications',
    ],
    highlights: [
      'Realtime video and chat with ZEGOCLOUD',
      'Stripe-powered tutor session payments',
      'Community forum integration',
    ],
    links: {},
    status: 'Published',
    deployment: ['Apple App Store', 'Google Play Store'],
    featured: false,
    year: '2025',
    image: '/images/langua_learning_app.jpg',
    imageAlt: 'Language Learning Flutter app with live tutors',
  },
] as const;
