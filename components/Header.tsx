import Image from 'next/image';
import { SiteConfig } from '@/lib/types';

interface HeaderProps {
  config: SiteConfig;
}

interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

export default function Header({ config }: HeaderProps) {
  const links: ContactLink[] = [];

  if (config.email) links.push({ label: config.email, href: `mailto:${config.email}` });
  if (config.website) {
    links.push({
      label: config.website.replace(/^https?:\/\//, ''),
      href: config.website,
      external: true,
    });
  }
  if (config.linkedin_username) {
    links.push({
      label: 'LinkedIn',
      href: `https://linkedin.com/in/${config.linkedin_username}`,
      external: true,
    });
  }
  if (config.github_username) {
    links.push({
      label: 'GitHub',
      href: `https://github.com/${config.github_username}`,
      external: true,
    });
  }
  if (config.twitter_username) {
    links.push({
      label: 'Twitter',
      href: `https://twitter.com/${config.twitter_username}`,
      external: true,
    });
  }
  if (config.instagram_username) {
    links.push({
      label: 'Instagram',
      href: `https://instagram.com/${config.instagram_username}`,
      external: true,
    });
  }
  links.push({ label: 'Download CV (PDF)', href: '/Dan-Bennett-CV.pdf', download: true });

  return (
    <header className="site-header">
      <div className="wrap">
        <div className="identity">
          {config.about_profile_image && (
            <Image
              src={config.about_profile_image}
              alt="Portrait of Dan Bennett"
              width={96}
              height={96}
              priority
              className="portrait"
            />
          )}
          <div>
            <h1>{config.name}</h1>
            <p className="job-title">{config.title}</p>
            <p className="place">
              <a href="https://www.krafton.com" target="_blank" rel="noopener noreferrer">KRAFTON</a>, based in Amsterdam
            </p>
            {config.tagline && <p className="tagline">{config.tagline}</p>}
          </div>
        </div>

        <ul className="contact-list">
          {links.map((link) => (
            <li key={link.label} className={link.download ? 'no-print' : undefined}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                {...(link.download ? { download: true } : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <nav className="site-nav no-print" aria-label="CV sections">
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#community">Community and events</a></li>
            <li><a href="#ai-systems">AI and systems</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
