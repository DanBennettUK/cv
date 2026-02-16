import { SiteConfig } from '@/lib/types';
import { Mail } from 'lucide-react';

interface FooterProps {
  config: SiteConfig;
}

export default function Footer({ config }: FooterProps) {
  return (
    <footer className="py-20 mt-20 border-t border-[var(--border)]">
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Left - Brand */}
          <div className="lg:col-span-6">
            <p className="headline-display text-4xl sm:text-5xl mb-4">
              Let&apos;s work together.
            </p>
            <p className="text-[var(--text-muted)] max-w-md">
              Currently based in Amsterdam. Open to remote opportunities and collaborations.
            </p>
          </div>

          {/* Right - Contact */}
          <div className="lg:col-span-6 lg:text-right">
            <a 
              href={`mailto:${config.email}`}
              className="inline-flex items-center gap-3 text-xl sm:text-2xl font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group"
            >
              <Mail className="w-6 h-6" />
              <span className="border-b-2 border-[var(--border)] group-hover:border-[var(--accent)] transition-colors">
                {config.email}
              </span>
            </a>
            
            {config.footer_show_references && (
              <p className="mt-4 text-sm text-[var(--text-muted)]">
                References available on request
              </p>
            )}
          </div>
        </div>
        
        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-[var(--border-light)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {config.name}</p>
          <p>Built with Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
