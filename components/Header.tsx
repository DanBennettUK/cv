import { SiteConfig } from '@/lib/types';
import ContactList from '@/components/ContactList';
import ThemeToggle from '@/components/ThemeToggle';

interface HeaderProps {
  config: SiteConfig;
}

const sections = [
  ['profile', 'Profile'],
  ['experience', 'Experience'],
  ['impact', 'Selected impact'],
  ['skills', 'Skills'],
  ['ai-systems', 'AI and systems'],
  ['contact', 'Contact'],
];

export default function Header({ config }: HeaderProps) {
  return (
    <header className="cv-header">
      <a className="skip-link no-print" href="#profile">Skip to profile</a>
      <div className="header-tools">
        <ThemeToggle />
      </div>

      <h1>{config.name}</h1>
      <p className="cv-title">{config.title}</p>
      <p className="cv-place">KRAFTON, Amsterdam</p>

      {config.tagline && <p className="lede">{config.tagline}</p>}
      <p>
        At KRAFTON since December 2020. Earlier work includes APT Solutions, PriorsVLE, HowToMoodle and Capita ITS, plus community roles with PUBG Reddit, EGX, SpecialEffect and NovaFM.
      </p>

      <ContactList config={config} showPdf />

      <nav aria-label="CV sections" className="no-print">
        <ul className="cv-nav">
          {sections.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
