import { getConfig, getExperience } from '@/lib/data';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import ImpactHighlights from '@/components/ImpactHighlights';
import AIAndSystems from '@/components/AIAndSystems';

export default function Home() {
  const config = getConfig();
  const experiences = getExperience();
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
    <main id="main-content" className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Header config={config} />
      <About config={config} />
      <Experience id="current-role" experiences={experiences.filter(exp => exp.category === 'current')} title="Current role" />
      <ImpactHighlights />
      <AIAndSystems />
      <Experience id="earlier-employment" experiences={experiences.filter(exp => exp.category === 'employment')} title="Earlier employment" />
      <Experience id="community" experiences={experiences.filter(exp => exp.category === 'community')} title="Community, events and media" />
      <Footer config={config} />
    </main>
  );
}
