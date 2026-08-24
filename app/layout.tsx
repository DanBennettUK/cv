import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY || '';
const repoName = repo.split('/')[1] || 'cv';
const siteUrl = isGithubActions
  ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${repoName}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dan Bennett | Associate Creator Partnerships Manager, PUBG West | KRAFTON',
  description:
    'Associate Creator Partnerships Manager for the PUBG Partner Program at KRAFTON. Creator partnerships, campaign operations and community events across Western markets.',
  icons: {
    icon: 'favicon.svg',
  },
  openGraph: {
    title: 'Dan Bennett | Associate Creator Partnerships Manager, PUBG West | KRAFTON',
    description:
      'Creator partnerships, campaign operations and community events across Western markets.',
    url: siteUrl,
    siteName: 'Dan Bennett',
    type: 'website',
    images: [
      {
        url: 'assets/dan.jpg',
        alt: 'Dan Bennett',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Dan Bennett | Associate Creator Partnerships Manager, PUBG West | KRAFTON',
    description:
      'Creator partnerships, campaign operations and community events across Western markets.',
    images: ['assets/dan.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </head>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
