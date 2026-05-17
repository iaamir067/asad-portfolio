import { SITE_CONFIG } from '@/constants/portfolio';

export const generateMetadata = (
  title?: string,
  description?: string,
  ogImage?: string,
) => {
  const siteTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const siteDescription = description || SITE_CONFIG.description;

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: SITE_CONFIG.keywords.join(', '),
    author: SITE_CONFIG.author,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    themeColor: '#0f0f0f',
    openGraph: {
      type: 'website',
      url: SITE_CONFIG.url,
      title: siteTitle,
      description: siteDescription,
      images: [
        {
          url: ogImage || SITE_CONFIG.image,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      title: siteTitle,
      description: siteDescription,
      images: [ogImage || SITE_CONFIG.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: SITE_CONFIG.url,
    },
  };
};

export const generateSchemaMarkup = (type: string, data?: any) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author,
    },
  };

  switch (type) {
    case 'Person':
      return {
        ...baseSchema,
        jobTitle: 'Flutter Developer & Mobile Application Engineer',
        url: SITE_CONFIG.url,
        sameAs: [
          'https://github.com/asadbangash',
          'https://linkedin.com/in/asadbangash',
          'https://twitter.com/asadbangash',
        ],
      };

    case 'BreadcrumbList':
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${SITE_CONFIG.url}${item.url}`,
        })),
      };

    case 'Article':
      return {
        ...baseSchema,
        '@type': 'BlogPosting',
        headline: data.title,
        description: data.description,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: {
          '@type': 'Person',
          name: SITE_CONFIG.author,
        },
      };

    default:
      return baseSchema;
  }
};

export const generateSitemap = (pages: string[]) => {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapEntries = pages.map((page) => ({
    loc: `${baseUrl}${page}`,
    lastmod: currentDate,
    changefreq: page === '/' ? 'weekly' : 'monthly',
    priority: page === '/' ? '1.0' : '0.8',
  }));

  return sitemapEntries;
};

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /_next/
Disallow: /.next/
Disallow: /api/

Sitemap: ${SITE_CONFIG.url}/sitemap.xml

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /`;
};
