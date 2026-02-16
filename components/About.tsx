import { SiteConfig } from '@/lib/types';
import ReactMarkdown from 'react-markdown';

interface AboutProps {
  config: SiteConfig;
}

export default function About({ config }: AboutProps) {
  return (
    <section className="py-8">
      <div className="container-main">
        <h3 className="section-title">About Me</h3>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image */}
          {config.about_profile_image && (
            <div className="md:w-1/3 lg:w-1/4 flex-shrink-0 no-print">
              <div
                className="w-48 h-48 mx-auto rounded-full bg-cover bg-center shadow-inner"
                style={{
                  backgroundImage: `url(${config.about_profile_image})`,
                  boxShadow: 'inset 0 0 20px #636161',
                }}
              />
            </div>
          )}

          {/* Content */}
          <div className={`flex-1 ${config.about_profile_image ? 'md:w-2/3 lg:w-3/4' : 'w-full'}`}>
            <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--foreground)]">
              <ReactMarkdown>{config.about_content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
