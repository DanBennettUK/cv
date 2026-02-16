import { Experience } from '@/lib/types';
import ReactMarkdown from 'react-markdown';

interface ExperienceProps {
  experiences: Experience[];
  title?: string;
}

export default function ExperienceSection({ experiences, title = 'Experience' }: ExperienceProps) {
  if (experiences.length === 0) return null;

  return (
    <section className="py-16">
      <div className="container-main">
        <div className="section-title-editorial">{title}</div>
        
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, index }: { experience: Experience; index: number }) {
  const { company, link, job_title, dates, quote, description } = experience;
  
  return (
    <article className="experience-card group">
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left - Company & Meta */}
        <div className="lg:col-span-4">
          {/* Company name */}
          <h3 className="headline-display text-2xl sm:text-3xl mb-2">
            {link ? (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors border-b-2 border-transparent hover:border-[var(--accent)]"
              >
                {company}
              </a>
            ) : (
              company
            )}
          </h3>
          
          {/* Job title */}
          <p className="text-[var(--accent)] font-medium mb-3">
            {job_title}
          </p>
          
          {/* Dates as tag */}
          <span className="tag">
            {dates}
          </span>
          
          {/* Index number - editorial touch */}
          <div className="mt-6 text-6xl font-light text-[var(--border)] opacity-50 leading-none">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Right - Description */}
        <div className="lg:col-span-8">
          {quote && (
            <blockquote className="quote-editorial">
              &ldquo;{quote}&rdquo;
            </blockquote>
          )}
          
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)]">
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 mt-4 ml-0 pl-0 list-none">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)] mt-1.5">—</span>
                    <span>{children}</span>
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-[var(--text-primary)]">{children}</strong>
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
}
