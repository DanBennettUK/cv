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
    <header className="pt-12 pb-8">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Left - Name and Title */}
          <div className="lg:flex-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-2 text-[var(--foreground)]">
              {config.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-light text-[var(--muted)]">
              {config.title}
            </h2>
          </div>

          {/* Right - Social Links and Contact */}
          <div className="lg:text-right">
            {/* Social Icons */}
            <ul className="flex flex-wrap lg:justify-end gap-3 mb-4 no-print">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-14 h-14 rounded-full bg-[var(--button-bg)] text-[var(--button-fg)] hover:scale-110 transition-all duration-300"
                    title={`${link.name} link`}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-1 text-lg">
              {config.email && (
                <p>
                  Email:{' '}
                  <a
                    href={`mailto:${config.email}`}
                    className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium"
                  >
                    {config.email}
                  </a>
                </p>
              )}
              {config.website && (
                <p>
                  Web:{' '}
                  <a
                    href={config.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium"
                  >
                    {config.website}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
