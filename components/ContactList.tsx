import { FileDown, Github, Globe, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SiteConfig } from '@/lib/types';

interface ContactListProps {
  config: SiteConfig;
  showPdf?: boolean;
}

interface ContactLink {
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
  pdf?: boolean;
}

export default function ContactList({ config, showPdf = false }: ContactListProps) {
  const links: ContactLink[] = [
    { href: `mailto:${config.email}`, label: 'Email', icon: Mail },
    { href: config.website, label: 'Site', icon: Globe, external: true },
  ];

  if (config.linkedin_username) {
    links.push({
      href: `https://linkedin.com/in/${config.linkedin_username}`,
      label: 'LinkedIn',
      icon: Linkedin,
      external: true,
    });
  }

  if (config.github_username) {
    links.push({
      href: `https://github.com/${config.github_username}`,
      label: 'GitHub',
      icon: Github,
      external: true,
    });
  }

  if (config.twitter_username) {
    links.push({
      href: `https://twitter.com/${config.twitter_username}`,
      label: 'Twitter',
      icon: Twitter,
      external: true,
    });
  }

  if (config.instagram_username) {
    links.push({
      href: `https://instagram.com/${config.instagram_username}`,
      label: 'Instagram',
      icon: Instagram,
      external: true,
    });
  }

  if (showPdf) {
    links.push({
      href: '/Dan-Bennett-CV.pdf',
      label: 'CV PDF',
      icon: FileDown,
      pdf: true,
    });
  }

  return (
    <ul className="contact-list">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.label} className={link.pdf ? 'no-print' : undefined}>
            <a
              href={link.href}
              {...(link.pdf ? { download: true } : {})}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon className="contact-mark" aria-hidden="true" />
              <span>{link.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
