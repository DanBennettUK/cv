import { getConfig, getExperience } from '@/lib/data';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import ImpactHighlights from '@/components/ImpactHighlights';
import AIAndSystems from '@/components/AIAndSystems';

const experienceOrder = [
  'KRAFTON',
  'APT Solutions',
  'PUBG Reddit (r/PUBATTLEGROUNDS)',
  'PriorsVLE',
  'EGX & epic.LAN',
  'Chicken4Charity - SpecialEffect',
  'HowToMoodle',
  'NovaFM',
  'Capita ITS (ex-i2Q Education)',
];

export default function Home() {
  const config = getConfig();
  const listed = getExperience();
  const experiences = [
    ...experienceOrder.flatMap((company) => listed.filter((item) => item.company === company)),
    ...listed.filter((item) => !experienceOrder.includes(item.company)),
  ];
  const sameAs = [
    config.website,
    config.github_username && `https://github.com/${config.github_username}`,
    config.linkedin_username && `https://www.linkedin.com/in/${config.linkedin_username}`,
    config.twitter_username && `https://twitter.com/${config.twitter_username}`,
    config.instagram_username && `https://www.instagram.com/${config.instagram_username}`,
  ].filter((value): value is string => Boolean(value));

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.name,
    url: 'https://cv.danbennett.me/',
    jobTitle: config.title,
    description: config.tagline,
    worksFor: {
      '@type': 'Organization',
      name: 'KRAFTON',
      url: 'https://www.krafton.com/',
    },
    sameAs,
  };

  return (
    <main id="main-content" className="cv">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Header config={config} />
      <About config={config} />
      <Experience experiences={experiences} />
      <ImpactHighlights />
      <AIAndSystems />
      <Footer config={config} />
    </main>
  );
}
