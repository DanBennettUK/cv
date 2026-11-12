import Image from 'next/image';
import { SiteConfig } from '@/lib/types';
import ContactList from '@/components/ContactList';
import Hero from '@/components/ui/hero';
import ThemeToggle from '@/components/ThemeToggle';

interface HeaderProps {
  config: SiteConfig;
}

const sections = [
  ['profile', 'Profile'],
  ['impact', 'Current work'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['ai-systems', 'AI and tools'],
  ['contact', 'Contact'],
];

export default function Header({ config }: HeaderProps) {
  const photo = config.about_profile_image
    ? (config.about_profile_image.startsWith('/')
      ? config.about_profile_image
      : `/${config.about_profile_image}`)
    : undefined;

  return (
    <header className="cv-header">
      <a className="skip-link no-print" href="#profile">Skip to profile</a>
      <Hero>
        <div className="header-tools">
          <ThemeToggle />
        </div>

        <div className="mt-2 grid grid-cols-[minmax(0,1fr)_6rem] items-start gap-4 sm:grid-cols-[minmax(0,1fr)_7.5rem] sm:gap-6">
          <div>
            <h1 className="text-[2.5rem] leading-[1.08] tracking-[-0.03em] text-foreground md:text-[3.25rem]">
              {config.name}
            </h1>
            <p className="mt-3 text-xl font-semibold leading-snug text-accent">{config.title}</p>
            <p className="mt-2 font-semibold text-muted-foreground">{config.location}</p>
            <p className="mt-1 text-muted-foreground">{config.workRights}</p>
          </div>

          {photo && (
            <div className="no-print sm:justify-self-end">
              <Image
                src={photo}
                alt="Portrait of Dan Bennett"
                width={400}
                height={400}
                className="h-24 w-24 rounded-2xl border border-border object-cover sm:h-[7.5rem] sm:w-[7.5rem]"
              />
              <p className="mt-2 max-w-[12rem] text-sm leading-snug text-muted-foreground">
                Dan Bennett, Amsterdam, Netherlands
              </p>
            </div>
          )}
        </div>

        {config.tagline && (
          <p className="mt-5 max-w-[68ch] text-[1.0625rem] leading-relaxed">{config.tagline}</p>
        )}
        <p className="mt-3 max-w-[68ch] text-[1.0625rem] leading-relaxed">{config.earlierWork}</p>

        <ContactList config={config} showPdf />

        <nav aria-label="CV sections" className="no-print mt-4 border-t border-border pt-3">
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {sections.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="inline-flex min-h-11 items-center font-semibold text-muted-foreground hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Hero>
    </header>
  );
}
