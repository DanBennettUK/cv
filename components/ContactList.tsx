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

  if (print) {
    const list = (items: ContactLink[], className: string, label: string) => (
      <ul className={className} aria-label={label}>
        {items.map((link) => {
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
                <span className="contact-text">
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

  const webList = (items: ContactLink[], label: string) => (
    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1" aria-label={label}>
      {items.map((link) => {
        const Icon = link.icon;
        const address = link.address && link.address.startsWith('http')
          ? printAddress(link.address)
          : link.address;
        return (
          <li key={link.label}>
            <a
              href={link.href}
              className="inline-flex min-h-11 items-center gap-1.5 py-1 text-sm font-semibold text-accent hover:underline"
              {...(link.pdf ? { download: true } : {})}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon className="size-4 shrink-0" aria-hidden="true" />
              <span>
                {address ? (
                  <span className="visually-hidden">{link.label}</span>
                ) : (
                  <span>{link.label}</span>
                )}
                {address && <span>{address}</span>}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {webList(contacts, 'Contact')}
      {downloads.length > 0 && webList(downloads, 'CV downloads')}
    </>
  );
}
