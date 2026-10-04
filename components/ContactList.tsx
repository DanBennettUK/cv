import { SiteConfig } from '@/lib/types';

interface ContactListProps {
  config: SiteConfig;
  showPdf?: boolean;
}

export default function ContactList({ config, showPdf = false }: ContactListProps) {
  const links: { href: string; label: string; external?: boolean; pdf?: boolean }[] = [
    { href: `mailto:${config.email}`, label: config.email },
    {
      href: config.website,
      label: config.website.replace(/^https?:\/\//, ''),
      external: true,
    },
  ];

  if (config.linkedin_username) {
    links.push({
      href: `https://linkedin.com/in/${config.linkedin_username}`,
      label: `linkedin.com/in/${config.linkedin_username}`,
      external: true,
    });
  }

  if (config.github_username) {
    links.push({
      href: `https://github.com/${config.github_username}`,
      label: `github.com/${config.github_username}`,
      external: true,
    });
  }

  if (config.twitter_username) {
    links.push({
      href: `https://twitter.com/${config.twitter_username}`,
      label: `twitter.com/${config.twitter_username}`,
      external: true,
    });
  }

  if (config.instagram_username) {
    links.push({
      href: `https://instagram.com/${config.instagram_username}`,
      label: `instagram.com/${config.instagram_username}`,
      external: true,
    });
  }

  return (
    <ul className="contact-list">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {link.label}
          </a>
        </li>
      ))}
      {showPdf && (
        <li className="no-print">
          <a href="/Dan-Bennett-CV.pdf" download>
            Download CV PDF
          </a>
        </li>
      )}
    </ul>
  );
}
