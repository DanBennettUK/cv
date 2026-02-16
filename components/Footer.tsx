import { SiteConfig } from '@/lib/types';

interface FooterProps {
  config: SiteConfig;
}

export default function Footer({ config }: FooterProps) {
  return (
    <footer className="py-16 mt-12">
      <div className="container-main">
        <p className="text-center italic text-[var(--muted)] text-lg">
          {config.name} -{' '}
          <a 
            href={`mailto:${config.email}`}
            className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            {config.email}
          </a>
          {config.footer_show_references && (
            <span> - References on request</span>
          )}
        </p>
      </div>
    </footer>
  );
}
