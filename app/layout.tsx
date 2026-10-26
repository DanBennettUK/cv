import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Source_Sans_3 } from 'next/font/google';
import { getConfig, metaDescription } from '@/lib/data';
import './globals.css';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const siteUrl = 'https://cv.danbennett.me/';
const config = getConfig();
const pageTitle = `${config.name} | ${config.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  authors: [{ name: config.name, url: siteUrl }],
  creator: config.name,
  title: pageTitle,
  description: metaDescription,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: pageTitle,
    description: metaDescription,
    url: siteUrl,
    siteName: config.name,
    type: 'website',
    images: [
      {
        url: '/assets/dan.jpg',
        alt: config.name,
      },
    ],
  },
  twitter: {
    card: 'summary',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#141414' },
  ],
};

// Apply the saved/system theme before first paint to avoid a flash of the wrong theme.
const darkModeScript = `(function () {
  try {
    var saved = localStorage.getItem('darkMode');
    var dark = saved !== null ? saved === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={sourceSans.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
