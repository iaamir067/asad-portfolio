import type { Metadata } from 'next';
import { SITE_CONFIG, SITE_KEYWORDS } from '@/constants/site-config';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { SEO } from '@/constants/seo';

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: readonly string[];
  noIndex?: boolean;
};

const absoluteUrl = (path = '/') => {
  const base = SITE_CONFIG.url.replace(/\/$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
};

export const buildMetadata = ({
  title,
  description,
  path = '/',
  image,
  keywords,
  noIndex = false,
}: BuildMetadataInput = {}): Metadata => {
  const finalTitle = title
    ? `${title} | ${PERSONAL_INFO.fullName}`
    : SEO.defaultTitle;
  const finalDescription = description || SEO.defaultDescription;
  const finalImage = image || SITE_CONFIG.ogImage;
  const finalKeywords = (keywords || SITE_KEYWORDS) as readonly string[];
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: finalTitle,
    description: finalDescription,
    keywords: [...finalKeywords],
    authors: [{ name: PERSONAL_INFO.fullName, url: SITE_CONFIG.url }],
    creator: PERSONAL_INFO.fullName,
    publisher: PERSONAL_INFO.fullName,
    applicationName: SITE_CONFIG.name,
    referrer: 'origin-when-cross-origin',
    formatDetection: { email: false, address: false, telephone: false },
    category: SITE_CONFIG.category,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_CONFIG.name,
      title: finalTitle,
      description: finalDescription,
      locale: SITE_CONFIG.locale,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: `${PERSONAL_INFO.fullName} — ${PERSONAL_INFO.combinedTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      title: SITE_CONFIG.shortName,
      statusBarStyle: 'black-translucent',
    },
    other: {
      'theme-color': SITE_CONFIG.themeColor,
    },
  };
};

export const absoluteSiteUrl = absoluteUrl;
