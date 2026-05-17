/**
 * Portfolio Constants - All editable content in one place
 * Update this file to change portfolio content without touching UI code
 */

export const PERSONAL_INFO = {
  name: 'Asad Bangash',
  title: 'Flutter Developer & Mobile Application Engineer',
  shortBio:
    'Building scalable cross-platform mobile applications with 2+ years of production-grade engineering experience.',
  fullBio: `I'm a passionate mobile engineer specializing in Flutter and cross-platform development. With 2+ years of hands-on experience shipping production applications to the Google Play Store and Apple App Store, I focus on building scalable, high-performance mobile solutions for fintech, healthcare, edtech, and e-commerce platforms.

My approach combines technical excellence with product thinking. I believe in clean architecture, maintainable code, and creating experiences that users love. Whether building real-time communication systems, payment integrations, or complex state management solutions, I deliver engineering that scales.

I've worked with innovative startups and established tech companies, helping them bring their mobile visions to life. Currently open to freelance projects and full-time opportunities with companies building the next generation of mobile products.`,
  email: 'asad@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Global (Available for International Projects)',
  timezone: 'UTC',
  resumeUrl: '/resume.pdf',
  image: '/images/profile.jpg',
};

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/asadbangash',
    icon: 'Github',
    label: 'View my code',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/asadbangash',
    icon: 'Linkedin',
    label: 'Connect with me',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/asadbangash',
    icon: 'Twitter',
    label: 'Follow my updates',
  },
  {
    name: 'Email',
    url: 'mailto:asad@example.com',
    icon: 'Mail',
    label: 'Send me an email',
  },
];

export const SKILLS = [
  {
    category: 'Mobile Development',
    skills: [
      { name: 'Flutter', proficiency: 95 },
      { name: 'Dart', proficiency: 95 },
      { name: 'Cross-platform Development', proficiency: 90 },
      { name: 'iOS Development', proficiency: 85 },
      { name: 'Android Development', proficiency: 85 },
      { name: 'UI/UX Implementation', proficiency: 90 },
    ],
  },
  {
    category: 'Architecture & Patterns',
    skills: [
      { name: 'Clean Architecture', proficiency: 95 },
      { name: 'MVVM Pattern', proficiency: 95 },
      { name: 'Design Patterns', proficiency: 90 },
      { name: 'State Management', proficiency: 90 },
      { name: 'SOLID Principles', proficiency: 90 },
    ],
  },
  {
    category: 'State Management',
    skills: [
      { name: 'Riverpod', proficiency: 95 },
      { name: 'Provider', proficiency: 90 },
      { name: 'GetX', proficiency: 85 },
      { name: 'BLoC', proficiency: 85 },
    ],
  },
  {
    category: 'Firebase & Backend',
    skills: [
      { name: 'Firebase Realtime Database', proficiency: 90 },
      { name: 'Cloud Firestore', proficiency: 95 },
      { name: 'Firebase Authentication', proficiency: 95 },
      { name: 'Cloud Functions', proficiency: 85 },
      { name: 'Firebase Storage', proficiency: 90 },
      { name: 'REST APIs', proficiency: 95 },
    ],
  },
  {
    category: 'APIs & Integrations',
    skills: [
      { name: 'Payment Integration (Stripe, PayPal)', proficiency: 90 },
      { name: 'Real-time Communication', proficiency: 90 },
      { name: 'Third-party APIs', proficiency: 90 },
      { name: 'WebSocket Integration', proficiency: 85 },
    ],
  },
  {
    category: 'Deployment & Tools',
    skills: [
      { name: 'App Store Connect', proficiency: 95 },
      { name: 'Google Play Console', proficiency: 95 },
      { name: 'CI/CD Pipelines', proficiency: 85 },
      { name: 'Git & Version Control', proficiency: 95 },
      { name: 'Android Studio', proficiency: 90 },
      { name: 'Xcode', proficiency: 90 },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'VS Code', proficiency: 95 },
      { name: 'Figma Handoff', proficiency: 85 },
      { name: 'Postman', proficiency: 90 },
      { name: 'Firebase Console', proficiency: 95 },
    ],
  },
];

export const EXPERIENCE = [
  {
    company: 'Metasense Technologies',
    position: 'Flutter Developer',
    startDate: 'March 2023',
    endDate: 'Present',
    duration: '2+ years',
    description:
      'Led development of scalable cross-platform mobile applications, architected clean app structures, and shipped production applications to both App Store and Play Store.',
    achievements: [
      'Architected and implemented MVVM-based Flutter applications with Clean Architecture principles',
      'Built real-time communication systems with Firebase and WebSocket integration',
      'Implemented complex payment systems with Stripe and PayPal integration',
      'Managed state management using Riverpod with proper dependency injection',
      'Published multiple applications to App Store and Play Store with 50K+ downloads',
      'Optimized app performance reducing load time by 40%',
      'Led code reviews and mentored junior developers on best practices',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'Riverpod',
      'Clean Architecture',
      'MVVM',
      'Stripe API',
      'WebSocket',
    ],
  },
  {
    company: 'RZ Technologies',
    position: 'Mobile Application Engineer',
    startDate: 'January 2023',
    endDate: 'February 2023',
    duration: '2 months',
    description:
      'Developed fintech mobile solutions with robust payment processing and real-time transaction monitoring.',
    achievements: [
      'Designed and implemented fintech mobile application with payment processing',
      'Integrated Stripe payment gateway with proper error handling and validation',
      'Built real-time transaction monitoring system',
      'Implemented secure user authentication with Firebase Auth',
    ],
    technologies: [
      'Flutter',
      'Firebase',
      'Stripe',
      'BLoC',
      'Dart',
    ],
  },
  {
    company: 'UZR Tech',
    position: 'Flutter Developer (Freelance)',
    startDate: 'June 2022',
    endDate: 'December 2022',
    duration: '7 months',
    description:
      'Developed educational mobile applications with modern UI/UX and smooth user interactions.',
    achievements: [
      'Built language learning application with 100K+ users',
      'Implemented smooth animations and micro-interactions using Framer Motion concepts',
      'Optimized app for both iOS and Android platforms',
      'Achieved 4.8+ star rating on app stores',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'GetX',
      'Firestore',
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Liquid Canvas',
    description:
      'Advanced collaborative design and prototyping platform with real-time collaborative features, complex state management, and seamless cross-platform synchronization.',
    longDescription: `Liquid Canvas is a sophisticated design collaboration platform built with Flutter. The application handles complex real-time synchronization of design elements across multiple user sessions, sophisticated state management, and seamless offline-first architecture.

Key technical achievements include implementing WebSocket-based real-time communication, managing complex nested state with Riverpod, and optimizing performance for smooth 60fps animations during collaborative sessions.`,
    image: '/images/projects/liquid-canvas.jpg',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Realtime',
      'Riverpod',
      'WebSocket',
    ],
    role: 'Lead Developer',
    contributions: [
      'Architected real-time synchronization system',
      'Implemented complex state management',
      'Optimized rendering performance',
      'Built custom gesture recognition',
    ],
    links: {
      appStore: 'https://apps.apple.com/app/liquid-canvas',
      playStore: 'https://play.google.com/store/apps/details?id=com.liquidcanvas',
      website: 'https://liquidcanvas.app',
    },
    status: 'Published',
    featured: true,
  },
  {
    id: 2,
    title: 'MY UNI',
    description:
      'Comprehensive university management and networking platform connecting students and alumni with 100K+ active users, featuring real-time notifications and social features.',
    longDescription: `MY UNI is a platform designed for university communities. It connects students, alumni, and institutions through a feature-rich mobile application with real-time updates, social networking, event management, and knowledge sharing.

The application handles high-volume user interactions, complex database queries, and real-time notifications while maintaining excellent performance and user experience.`,
    image: '/images/projects/my-uni.jpg',
    technologies: [
      'Flutter',
      'Firebase',
      'Cloud Firestore',
      'Riverpod',
      'Push Notifications',
    ],
    role: 'Senior Developer',
    contributions: [
      'Designed scalable database architecture',
      'Implemented real-time notification system',
      'Built social networking features',
      'Optimized for 100K+ concurrent users',
    ],
    links: {
      appStore: 'https://apps.apple.com/app/my-uni',
      playStore: 'https://play.google.com/store/apps/details?id=com.myuni',
    },
    status: 'Published',
    featured: true,
  },
  {
    id: 3,
    title: 'Nurse Hiring App',
    description:
      'Healthcare recruitment platform connecting hospitals with qualified nurses using smart matching algorithms and real-time scheduling features.',
    longDescription: `A specialized healthcare recruitment application designed for hospital networks and healthcare staffing agencies. The platform uses intelligent matching algorithms to connect hospitals with qualified nurses, features real-time scheduling, credential verification, and integrated payment systems.`,
    image: '/images/projects/nurse-hiring.jpg',
    technologies: [
      'Flutter',
      'Firebase',
      'Stripe API',
      'Clean Architecture',
      'MVVM',
    ],
    role: 'Full Stack Mobile Developer',
    contributions: [
      'Built matching algorithm',
      'Integrated Stripe payment system',
      'Implemented background verification',
      'Created admin dashboard',
    ],
    links: {
      appStore: 'https://apps.apple.com/app/nurse-hiring',
      playStore: 'https://play.google.com/store/apps/details?id=com.nursehiring',
    },
    status: 'Published',
    featured: false,
  },
  {
    id: 4,
    title: 'Fintech Mobile Application',
    description:
      'Enterprise fintech solution with secure payment processing, real-time transaction monitoring, multi-currency support, and advanced security features.',
    longDescription: `A production-ready fintech application featuring secure payment processing, multi-currency transactions, real-time portfolio tracking, and bank-grade security. The application implements end-to-end encryption, biometric authentication, and comprehensive audit logging.`,
    image: '/images/projects/fintech.jpg',
    technologies: [
      'Flutter',
      'Firebase Auth',
      'Stripe',
      'BLoC',
      'Encryption',
    ],
    role: 'Lead Mobile Engineer',
    contributions: [
      'Built secure payment processing',
      'Implemented biometric authentication',
      'Created real-time transaction monitoring',
      'Designed security architecture',
    ],
    links: {
      appStore: 'https://apps.apple.com/app/fintech',
      playStore: 'https://play.google.com/store/apps/details?id=com.fintech',
    },
    status: 'Published',
    featured: false,
  },
  {
    id: 5,
    title: 'Language Learning App',
    description:
      'Interactive language learning platform with AI-powered lessons, gamification, and spaced repetition algorithm for optimal learning retention.',
    longDescription: `An engaging language learning application featuring AI-generated lessons, gamified learning paths, real-time pronunciation feedback, and a spaced repetition algorithm for optimal learning retention. The app supports 20+ languages and has achieved 4.8+ star ratings.`,
    image: '/images/projects/language-learning.jpg',
    technologies: [
      'Flutter',
      'Firebase',
      'GetX',
      'Firestore',
      'Audio Processing',
    ],
    role: 'Mobile Developer',
    contributions: [
      'Implemented gamification system',
      'Built audio processing pipeline',
      'Created spaced repetition algorithm',
      'Optimized offline functionality',
    ],
    links: {
      appStore: 'https://apps.apple.com/app/language-learning',
      playStore: 'https://play.google.com/store/apps/details?id=com.languagelearning',
    },
    status: 'Published',
    featured: false,
  },
];

export const TESTIMONIALS = [
  {
    author: 'Founder, Liquid Canvas',
    role: 'Product Manager',
    content:
      'Asad transformed our vision into a production-ready platform. His technical expertise in Flutter and real-time systems is exceptional. He not only delivered on time but also improved our architecture significantly.',
    avatar: '/images/testimonials/avatar1.jpg',
  },
  {
    author: 'CTO, MY UNI',
    role: 'Chief Technology Officer',
    content:
      'Working with Asad was a game-changer for our project. His deep understanding of scalable mobile architecture and Firebase helped us handle 100K+ concurrent users without a hitch.',
    avatar: '/images/testimonials/avatar2.jpg',
  },
  {
    author: 'Project Manager, Fintech Startup',
    role: 'Project Lead',
    content:
      'Asad brought not just technical excellence but also product thinking to our fintech app. He understood the security requirements and implemented them flawlessly.',
    avatar: '/images/testimonials/avatar3.jpg',
  },
];

export const EDUCATION = [
  {
    institution: 'University Name',
    degree: 'Bachelor of Science',
    field: 'Computer Science / Software Engineering',
    year: '2020 - 2023',
    description: 'Focused on software engineering, mobile development, and scalable systems.',
  },
];

export const CTA_BUTTONS = [
  {
    text: 'View Projects',
    href: '#projects',
    variant: 'primary',
  },
  {
    text: 'Get in Touch',
    href: '#contact',
    variant: 'outline',
  },
  {
    text: 'Download Resume',
    href: '/resume.pdf',
    variant: 'ghost',
    external: true,
  },
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SITE_CONFIG = {
  name: 'Asad Bangash - Mobile Engineer',
  description:
    'Flutter Developer & Mobile Application Engineer. 2+ years shipping production-grade apps. Specializing in fintech, healthcare, and real-time systems.',
  author: 'Asad Bangash',
  twitterHandle: '@asadbangash',
  url: 'https://asadbangash.com',
  image: '/images/og-image.jpg',
  keywords: [
    'Flutter Developer',
    'Mobile Developer',
    'Cross-platform Development',
    'Dart',
    'Firebase',
    'App Store',
    'Play Store',
  ],
};
