/**
 * Single source of truth for image slots. Swap a final asset by changing one
 * `src` here (drop the real file in /public and point to it). See IMAGES.md.
 */

export type ImageSlot = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const IMAGES = {
  profile: {
    src: '/placeholders/profile-800x1000.svg',
    width: 800,
    height: 1000,
    alt: 'Asad Bangash, Flutter Developer based in Kohat, Pakistan',
  },
  og: {
    src: '/placeholders/og-1200x630.svg',
    width: 1200,
    height: 630,
    alt: 'Asad Bangash — Flutter Developer & Mobile Application Engineer',
  },
} satisfies Record<string, ImageSlot>;

/** Project id -> hero image slot. Keys match PROJECTS[].id. */
export const PROJECT_IMAGES: Record<string, ImageSlot> = {
  'liquid-canvas': {
    src: '/placeholders/work-liquid-canvas-1600x1000.svg',
    width: 1600,
    height: 1000,
    alt: 'Liquid Canvas — smart TV digital art gallery app',
  },
  'my-uni': {
    src: '/placeholders/work-my-uni-1600x1000.svg',
    width: 1600,
    height: 1000,
    alt: 'MY UNI — university student platform with real-time chat',
  },
  'nurse-hiring': {
    src: '/placeholders/work-nurse-hiring-1600x1000.svg',
    width: 1600,
    height: 1000,
    alt: 'Nurse Hiring — healthcare marketplace with booking and live tracking',
  },
  'fintech-app': {
    src: '/placeholders/work-fintech-1600x1000.svg',
    width: 1600,
    height: 1000,
    alt: 'Fintech mobile top-up and gift card platform',
  },
  'language-learning': {
    src: '/placeholders/work-language-learning-1600x1000.svg',
    width: 1600,
    height: 1000,
    alt: 'Language Learning app with live tutor video sessions',
  },
};

export const getProjectImage = (id: string): ImageSlot =>
  PROJECT_IMAGES[id] ?? {
    src: '/placeholders/work-liquid-canvas-1600x1000.svg',
    width: 1600,
    height: 1000,
    alt: 'Project preview placeholder',
  };
