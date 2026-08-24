import { SiteConfig } from '@/lib/types';
import ReactMarkdown from 'react-markdown';

interface AboutProps {
  config: SiteConfig;
}

export default function About({ config }: AboutProps) {
  return (
    <section className="py-16">
      <div className="container-main">
        <div className="section-title-editorial">About</div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Profile Image */}
          {config.about_profile_image && (
            <div className="lg:col-span-4 no-print">
              <img
                src={config.about_profile_image}
                alt="Portrait of Dan Bennett"
                className="w-full aspect-square object-cover border border-[var(--border)]"
              />
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-3">
                Dan Bennett — Amsterdam, NL
              </p>
            </div>
          )}

          {/* Content */}
          <div className={`${config.about_profile_image ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
            <div className="prose prose-lg max-w-none text-[var(--text-primary)] leading-relaxed">
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="text-lg leading-relaxed mb-4 text-[var(--text-secondary)]">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-[var(--text-primary)]">{children}</strong>
                  ),
                }}
              >
                {config.about_content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
