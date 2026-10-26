import { getConfig, getExperience, metaDescription } from '@/lib/data';
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
  'Chicken4Charity for SpecialEffect',
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
  const sameAs = [config.website, config.githubUrl, config.linkedinUrl];

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.name,
    url: 'https://cv.danbennett.me/',
    jobTitle: config.title,
    description: metaDescription,
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
      <ImpactHighlights />
      <Experience experiences={experiences} />
      <AIAndSystems />
      <Footer config={config} />
    </main>
  );
}
