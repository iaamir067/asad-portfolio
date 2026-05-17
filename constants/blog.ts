export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  readingTime: string;
  coverImage?: string;
};

export const BLOG_POSTS: readonly BlogPost[] = [] as const;

export const BLOG_PLACEHOLDER = {
  heading: 'Writing',
  subheading: 'Notes on Flutter, mobile architecture, and shipping',
  emptyTitle: 'Articles coming soon',
  emptyDescription:
    'Working on long form notes about Flutter architecture, performance, payments integration, and shipping cross-platform apps to production.',
  upcomingTopics: [
    'Clean Architecture in Flutter without over-engineering',
    'Riverpod vs Provider vs GetX in production',
    'Integrating Stripe with Flutter for global payments',
    'Real-time chat patterns on Firebase',
    'Shipping a Flutter app on App Store and Play Store',
  ],
} as const;
