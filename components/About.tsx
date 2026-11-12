import { SiteConfig } from '@/lib/types';
import Section from '@/components/ui/section';

interface AboutProps {
  config: SiteConfig;
}

export default function About({ config }: AboutProps) {
  return (
    <Section id="profile" headingId="profile-heading" title="Profile">
      <div className="max-w-[68ch] space-y-4">
        {config.aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="text-[1.0625rem] leading-relaxed">{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
