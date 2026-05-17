import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Analytics from '@/components/Analytics';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { buildHomepageStructuredData } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/constants/site-config';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
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

  return (
    <html lang={SITE_CONFIG.language} suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
      </head>
      <body className="bg-[hsl(240,10%,4%)] text-white antialiased font-sans">
        <JsonLd id="ld-portfolio" data={structuredData} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-black focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <Analytics />
          <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'rgba(24, 24, 27, 0.9)',
                border: '1px solid rgba(63, 63, 70, 0.5)',
                backdropFilter: 'blur(20px)',
                color: '#fff',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
