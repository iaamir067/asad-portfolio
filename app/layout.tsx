import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/portfolio';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.image, width: 1200, height: 630, alt: SITE_CONFIG.name }],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.image],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_CONFIG.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="theme-color" content="#0a0a0c" />
      </head>
      <body className="bg-[hsl(240,10%,4%)] text-white antialiased font-sans">
        <Providers>
          <Navbar />
          {children}
          <Footer />
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
