import { SiteConfig } from '@/lib/types';
import { Github, Twitter, Instagram, Linkedin, Mail, Globe } from 'lucide-react';

interface HeaderProps {
  config: SiteConfig;
}

export default function Header({ config }: HeaderProps) {
  const socialLinks = [
    { name: 'github', username: config.github_username, icon: Github, url: `https://github.com/${config.github_username}` },
    { name: 'twitter', username: config.twitter_username, icon: Twitter, url: `https://twitter.com/${config.twitter_username}` },
    { name: 'instagram', username: config.instagram_username, icon: Instagram, url: `https://instagram.com/${config.instagram_username}` },
    { name: 'linkedin', username: config.linkedin_username, icon: Linkedin, url: `https://linkedin.com/in/${config.linkedin_username}` },
  ].filter(link => link.username);

  return (
    <header className="pt-20 sm:pt-24 pb-10">
      <div className="container-main">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-5 no-print">
          Curriculum Vitae
        </p>

        {/* Name */}
        <h1 className="headline-display text-5xl sm:text-6xl mb-4">
          {config.name}
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-8">
          {config.title}
        </p>

        {/* Contact strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--text-muted)]">
          {config.email && (
            <a
              href={`mailto:${config.email}`}
              className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
            >
              <Mail className="w-4 h-4" />
              {config.email}
            </a>
          )}
          {config.website && (
            <a
              href={config.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
            >
              <Globe className="w-4 h-4" />
              {config.website.replace(/^https?:\/\//, '')}
            </a>
          )}
        </div>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap items-center gap-3 no-print">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              aria-label={link.name}
              title={link.name}
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
