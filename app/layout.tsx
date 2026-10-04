import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const siteUrl = 'https://cv.danbennett.me/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  authors: [{ name: 'Dan Bennett', url: siteUrl }],
  creator: 'Dan Bennett',
  title: 'Dan Bennett | Associate Creator Partnerships Manager, PUBG West | KRAFTON',
  description:
    'Associate Creator Partnerships Manager at KRAFTON. Creator partnerships, Partner Program operations and practical reporting workflows for PUBG: BATTLEGROUNDS across Western markets.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Dan Bennett | Associate Creator Partnerships Manager, PUBG West | KRAFTON',
    description:
      'Creator partnerships, Partner Program operations and practical reporting workflows across Western markets.',
    url: siteUrl,
    siteName: 'Dan Bennett',
    type: 'website',
    images: [
      {
        url: '/assets/dan.jpg',
        alt: 'Dan Bennett',
      },
    ],
  },
  twitter: {
    card: 'summary',
    creator: '@DanBennettUK',
    title: 'Dan Bennett | Associate Creator Partnerships Manager, PUBG West | KRAFTON',
    description:
      'Creator partnerships, Partner Program operations and practical reporting workflows across Western markets.',
    images: ['/assets/dan.jpg'],
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
