import { SiteConfig } from '@/lib/types';

interface AboutProps {
  config: SiteConfig;
}

export default function About({ config }: AboutProps) {
  const paragraphs = config.about_content
    .split(/\n\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section id="profile" aria-labelledby="profile-heading" className="section">
      <div className="wrap">
        <h2 id="profile-heading">Profile</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {config.current_focus && (
          <p className="focus-line">
            <strong>Current focus. </strong>
            {config.current_focus}
          </p>
        )}
      </div>
    </section>
  );
}
