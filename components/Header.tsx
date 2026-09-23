import { SiteConfig } from '@/lib/types';
import { Github, Twitter, Instagram, Linkedin, Mail, Globe, FileDown } from 'lucide-react';

interface HeaderProps {
  config: SiteConfig;
}

export default function Header({ config }: HeaderProps) {
  const socialLinks = [
    { label: 'GitHub', username: config.github_username, icon: Github, url: `https://github.com/${config.github_username}` },
    { label: 'Twitter', username: config.twitter_username, icon: Twitter, url: `https://twitter.com/${config.twitter_username}` },
    { label: 'Instagram', username: config.instagram_username, icon: Instagram, url: `https://instagram.com/${config.instagram_username}` },
    { label: 'LinkedIn', username: config.linkedin_username, icon: Linkedin, url: `https://linkedin.com/in/${config.linkedin_username}` },
  ].filter(link => link.username);

  return (
    <header className="pt-20 sm:pt-24 pb-10">
      <a className="skip-link no-print" href="#main-content">Skip to main content</a>
      <div className="container-main">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-5 no-print">
          KRAFTON | PUBG WEST
        </p>

        {/* Name */}
        <h1 className="headline-display text-5xl sm:text-6xl mb-4">
          {config.name}
        </h1>

        {/* Title */}
        <p className="text-2xl sm:text-3xl font-medium text-[var(--text-primary)] mb-2">
          {config.title}
        </p>

        {/* Tagline */}
        {config.tagline && (
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-6">
            {config.tagline}
          </p>
        )}

        {/* Contact strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--text-muted)]">
          {config.email && (
            <a
              href={`mailto:${config.email}`}
              className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
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
              <Globe className="w-4 h-4" aria-hidden="true" />
              {config.website.replace(/^https?:\/\//, '')}
            </a>
          )}
          <a
            href="/Dan-Bennett-CV.pdf"
            download
            className="no-print flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
          >
            <FileDown className="w-4 h-4" aria-hidden="true" />
            Download CV PDF
          </a>
        </div>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap items-center gap-3 no-print">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              aria-label={`Open ${link.label}`}
              title={link.label}
            >
              <link.icon className="w-4 h-4" aria-hidden="true" />
            </a>
          ))}
        </div>
        <nav aria-label="CV sections" className="mt-8 border-t border-[var(--border)] pt-4 no-print">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[var(--text-secondary)]">
            {[
              ['profile', 'Profile'],
              ['current-role', 'Current role'],
              ['impact', 'Selected impact'],
              ['ai-systems', 'AI and systems'],
              ['earlier-employment', 'Earlier employment'],
              ['community', 'Community and events'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className="inline-block py-2 hover:text-[var(--accent)] underline underline-offset-4">{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
