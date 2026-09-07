import { getConfig, getExperience } from '@/lib/data';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  const config = getConfig();
  const experiences = getExperience();

  return (
    <main className="min-h-screen">
      <Header config={config} />
      <About config={config} />
      <Experience id="current-role" experiences={experiences.filter(exp => exp.category === 'current')} title="Current role" />
      <Experience id="earlier-employment" experiences={experiences.filter(exp => exp.category === 'employment')} title="Earlier employment" />
      <Experience id="community" experiences={experiences.filter(exp => exp.category === 'community')} title="Community, events and media" />
      <Footer config={config} />
    </main>
  );
}
