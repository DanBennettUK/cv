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
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Profile Image - asymmetric placement */}
          {config.about_profile_image && (
            <div className="lg:col-span-4 no-print">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--accent)] -z-10" />
                
                {/* Image */}
                <div
                  className="aspect-square bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage: `url(${config.about_profile_image})`,
                  }}
                />
                
                {/* Caption */}
                <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-4">
                  Dan Bennett — Amsterdam, NL
                </p>
              </div>
            </div>
          )}

          {/* Content */}
          <div className={`${config.about_profile_image ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
            <div className="prose prose-lg max-w-none text-[var(--text-primary)] leading-relaxed">
              <ReactMarkdown 
                components={{
                  p: ({ children }) => (
                    <p className="text-lg leading-relaxed mb-4 text-[var(--text-secondary)] first:text-[var(--text-primary)] first:text-xl first:font-medium">
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
