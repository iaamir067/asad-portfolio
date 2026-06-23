import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Fraunces, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import dynamic from 'next/dynamic';
import Providers from '@/components/Providers';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Cursor from '@/components/interactive/Cursor';
import Preloader from '@/components/Preloader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionRail from '@/components/layout/SectionRail';
import ScrollToTop from '@/components/ScrollToTop';
import Analytics from '@/components/Analytics';

const Scene = dynamic(() => import('@/components/three/Scene'), { ssr: false });
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { buildHomepageStructuredData } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/constants/site-config';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: SITE_CONFIG.themeColor,
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = buildHomepageStructuredData();
  const fontVars = `${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`;

  return (
    <html lang={SITE_CONFIG.language} suppressHydrationWarning className={fontVars}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
      </head>
      <body className="bg-ink text-paper antialiased">
        <JsonLd id="ld-portfolio" data={structuredData} />
        <a
          href="#main-content"
          className="sr-only rounded-sm focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ink"
        >
          Skip to main content
        </a>
        <Providers>
          <SmoothScroll>
            <Preloader />
            <Scene />
            <Cursor />
            <SectionRail />
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </SmoothScroll>
          <Analytics />
          <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#141417',
                border: '1px solid rgba(237, 234, 227, 0.16)',
                color: '#EDEAE3',
                borderRadius: '2px',
                fontFamily: 'var(--font-space-grotesk)',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
