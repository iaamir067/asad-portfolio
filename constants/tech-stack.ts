export type TechItem = {
  id: string;
  name: string;
  category: string;
};

export const TECH_STACK: readonly TechItem[] = [
  { id: 'flutter', name: 'Flutter', category: 'Mobile' },
  { id: 'dart', name: 'Dart', category: 'Language' },
  { id: 'firebase', name: 'Firebase', category: 'Backend' },
  { id: 'firestore', name: 'Firestore', category: 'Database' },
  { id: 'firebase-auth', name: 'Firebase Auth', category: 'Auth' },
  { id: 'fcm', name: 'Firebase Cloud Messaging', category: 'Messaging' },
  { id: 'firebase-storage', name: 'Firebase Storage', category: 'Storage' },
  { id: 'riverpod', name: 'Riverpod', category: 'State' },
  { id: 'provider', name: 'Provider', category: 'State' },
  { id: 'getx', name: 'GetX', category: 'State' },
  { id: 'rest', name: 'REST APIs', category: 'API' },
  { id: 'stripe', name: 'Stripe', category: 'Payments' },
  { id: 'reloadly', name: 'Reloadly', category: 'Payments' },
  { id: 'zegocloud', name: 'ZEGOCLOUD', category: 'Realtime' },
  { id: 'google-maps', name: 'Google Maps SDK', category: 'Maps' },
  { id: 'clean-architecture', name: 'Clean Architecture', category: 'Architecture' },
  { id: 'mvvm', name: 'MVVM', category: 'Architecture' },
  { id: 'git', name: 'Git', category: 'Tools' },
  { id: 'github', name: 'GitHub', category: 'Tools' },
  { id: 'android-studio', name: 'Android Studio', category: 'Tools' },
  { id: 'vscode', name: 'VS Code', category: 'Tools' },
  { id: 'postman', name: 'Postman', category: 'Tools' },
  { id: 'play-store', name: 'Google Play Store', category: 'Deployment' },
  { id: 'app-store', name: 'Apple App Store', category: 'Deployment' },
] as const;

export const TECH_CATEGORIES = [
  'Mobile',
  'Language',
  'Architecture',
  'State',
  'Backend',
  'Database',
  'Auth',
  'Messaging',
  'Storage',
  'API',
  'Payments',
  'Realtime',
  'Maps',
  'Tools',
  'Deployment',
] as const;
