import { SiteConfig } from '@/lib/types';
import ContactList from '@/components/ContactList';
import ThemeToggle from '@/components/ThemeToggle';

interface HeaderProps {
  config: SiteConfig;
}

const sections = [
  ['profile', 'Profile'],
  ['impact', 'Current work'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['ai-systems', 'AI and tools'],
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
      <p className="cv-place">{config.location}</p>
      <p>{config.workRights}</p>

      {config.tagline && <p className="lede">{config.tagline}</p>}
      <p>{config.earlierWork}</p>

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
