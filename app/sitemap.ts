import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/site-config';
import { NAV_ITEMS } from '@/constants/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, '');
  const lastModified = new Date();

  const home = {
    url: `${baseUrl}/`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 1,
  };

  const sections = NAV_ITEMS.map((item) => ({
    url: `${baseUrl}/${item.href}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [home, ...sections];
}
