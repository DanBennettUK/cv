import { FileDown, Github, Globe, Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { pdfVariants } from '@/lib/pdf-variants';
import { SiteConfig } from '@/lib/types';

interface ContactListProps {
  config: SiteConfig;
  showPdf?: boolean;
  print?: boolean;
}

interface ContactLink {
  href: string;
  label: string;
  address?: string;
  icon: LucideIcon;
  external?: boolean;
  pdf?: boolean;
}

function printAddress(address: string): string {
  return address.replace(/^https:\/\/(?:www\.)?/i, '');
}

export default function ContactList({ config, showPdf = false, print = false }: ContactListProps) {
  const links: ContactLink[] = [
    { href: `mailto:${config.email}`, label: 'Email', address: config.email, icon: Mail },
    { href: config.website, label: 'Site', address: print ? printAddress(config.website) : config.website, icon: Globe, external: true },
    { href: config.linkedinUrl, label: 'LinkedIn', address: print ? printAddress(config.linkedinUrl) : config.linkedinUrl, icon: Linkedin, external: true },
    { href: config.githubUrl, label: 'GitHub', address: print ? printAddress(config.githubUrl) : config.githubUrl, icon: Github, external: true },
  ];

  if (showPdf) {
    for (const variant of pdfVariants) {
      links.push({
        href: `/${variant.fileName}`,
        label: variant.label,
        icon: FileDown,
        pdf: true,
      });
    }
  }

  const contacts = links.filter((link) => !link.pdf);
  const downloads = links.filter((link) => link.pdf);

  const list = (items: ContactLink[], className: string, label: string) => (
    <ul className={className} aria-label={label}>
      {items.map((link) => {
        const Icon = link.icon;
        const address = link.address && link.address.startsWith('http')
          ? printAddress(link.address)
          : link.address;
        return (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.pdf ? { download: true } : {})}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {print ? null : <Icon className="contact-mark" aria-hidden="true" />}
              <span className="contact-text">
                {print ? null : (
                  link.address
                    ? <span className="visually-hidden">{link.label}</span>
                    : <span className="contact-label">{link.label}</span>
                )}
                {address && <span className="contact-address">{address}</span>}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {list(contacts, 'contact-list', 'Contact')}
      {downloads.length > 0 && list(downloads, 'contact-list contact-downloads no-print', 'CV downloads')}
    </>
  );
}
