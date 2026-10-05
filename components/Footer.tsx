import { SiteConfig } from '@/lib/types';
import ContactList from '@/components/ContactList';

interface FooterProps {
  config: SiteConfig;
}

export default function Footer({ config }: FooterProps) {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="cv-footer">
      <h2 id="contact-heading">Contact</h2>
      <p>Currently based in Amsterdam.</p>
      <ContactList config={config} showPdf />
      <p className="cv-colophon">© {new Date().getFullYear()} {config.name}. Built with Next.js & Tailwind.</p>
    </footer>
  );
}
