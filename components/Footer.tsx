import { SiteConfig } from '@/lib/types';

interface FooterProps {
  config: SiteConfig;
}

export default function Footer({ config }: FooterProps) {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="site-footer">
      <div className="wrap">
        <h2 id="contact-heading">Contact</h2>
        <p>Currently based in Amsterdam.</p>
        <p>
          <a href={`mailto:${config.email}`}>{config.email}</a>
        </p>
        {config.footer_show_references && <p>References available on request.</p>}
        <p className="legal">© {new Date().getFullYear()} {config.name}. Built with Next.js and Tailwind.</p>
      </div>
    </footer>
  );
}
