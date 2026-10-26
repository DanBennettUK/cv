import Image from 'next/image';
import { SiteConfig } from '@/lib/types';

interface AboutProps {
  config: SiteConfig;
}

export default function About({ config }: AboutProps) {
  const photo = config.about_profile_image
    ? (config.about_profile_image.startsWith('/')
      ? config.about_profile_image
      : `/${config.about_profile_image}`)
    : undefined;

  return (
    <section id="profile" aria-labelledby="profile-heading">
      <h2 id="profile-heading">Profile</h2>

      <div className="profile">
        {photo && (
          <div className="no-print">
            <Image
              src={photo}
              alt="Portrait of Dan Bennett"
              width={400}
              height={400}
              className="profile-photo"
            />
            <p className="profile-caption">Dan Bennett, Amsterdam, Netherlands</p>
          </div>
        )}

        <div className="profile-copy">
          {config.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
