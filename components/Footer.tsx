import { SiteConfig } from '@/lib/types';
import ContactList from '@/components/ContactList';

interface FooterProps {
  config: SiteConfig;
}

export default function Footer({ config }: FooterProps) {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="mt-16 scroll-mt-6 border-t border-border pt-10">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-12">
        <div>
          <h2 id="contact-heading" className="text-[1.875rem] leading-tight tracking-[-0.03em]">
            Contact
          </h2>
          <p className="mt-3 max-w-[68ch] text-[1.0625rem] leading-relaxed">
            {config.location}. {config.workRights}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {config.name}. Built with Next.js & Tailwind.
          </p>
        </div>
        <ContactList config={config} showPdf />
      </div>
    </footer>
  );
}
