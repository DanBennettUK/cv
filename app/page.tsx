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
      <Experience experiences={experiences} title={config.experience_title} />
      <Footer config={config} />
    </main>
  );
}
