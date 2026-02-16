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
    <header className="min-h-[70vh] flex flex-col justify-center py-16 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--accent-light)] to-transparent opacity-50 -z-10" />
      
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Left - Name and Title */}
          <div className="lg:col-span-8 animate-fade-in-up">
            {/* Eyebrow */}
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Curriculum Vitae
            </p>
            
            {/* Name - massive display */}
            <h1 className="headline-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl mb-6">
              {config.name.split(' ')[0]}
              <span className="block text-[var(--accent)]">{config.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            {/* Title - refined */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              {config.title}
            </p>
            
            {/* Contact strip */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-[var(--text-muted)]">
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
          </div>

          {/* Right - Social Links */}
          <div className="lg:col-span-4 lg:text-right animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4">
              Connect
            </p>
            <div className="flex lg:justify-end gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  title={link.name}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 no-print">
          <div className="w-px h-16 bg-gradient-to-b from-[var(--border)] to-transparent" />
        </div>
      </div>
    </header>
  );
}
