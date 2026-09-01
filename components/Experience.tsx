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

        <div>
          {experiences.map((exp, index) => (
            <div key={index}>
              {exp.group && (
                <div className="pt-8 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    {exp.group}
                  </p>
                </div>
              )}
              <ExperienceItem experience={exp} first={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, first = false }: { experience: Experience; first?: boolean }) {
  const { company, link, job_title, dates, quote, description } = experience;

  return (
    <article
      className={`experience-item pb-10 last:pb-0 ${
        first
          ? 'pt-0'
          : 'border-t-2 border-[var(--border)] pt-10'
      }`}
    >
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left - Company & Meta */}
        <div className="lg:col-span-4">
          <h3 className="headline-display text-2xl mb-1.5">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                {company}
              </a>
            ) : (
              company
            )}
          </h3>

          <p className="text-sm font-medium text-[var(--accent)] mb-2">
            {job_title}
          </p>

          <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
            {dates}
          </p>
        </div>

        {/* Right - Description */}
        <div className="lg:col-span-8">
          {quote && (
            <p className="quote-editorial">
              {quote}
            </p>
          )}

          <div className="prose prose-lg max-w-none text-[var(--text-secondary)]">
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mt-4 space-y-1.5 pl-5 list-disc">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="pl-1">{children}</li>
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
