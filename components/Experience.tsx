import { Experience } from '@/lib/types';
import ReactMarkdown from 'react-markdown';

interface ExperienceProps {
  experiences: Experience[];
  title: string;
  id: string;
}

export default function ExperienceSection({ experiences, title, id }: ExperienceProps) {
  if (experiences.length === 0) return null;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-12 sm:py-16">
      <div className="container-main">
        <h2 id={`${id}-heading`} className="section-title-editorial">{title}</h2>

        <div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.company} experience={exp} first={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, first = false }: { experience: Experience; first?: boolean }) {
  const { company, link, job_title, dates, tenure, previousRole, concurrentWith, quote, description, clusters } = experience;

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

          {concurrentWith && <p className="experience-concurrency">Concurrent with {concurrentWith}</p>}
          {previousRole ? (
            <div className="experience-role-timeline">
              <p className="experience-company-tenure">{tenure}</p>
              <div className="experience-role-period">
                <p className="experience-role-period-label">Previous role</p>
                <p className="experience-role-period-title">{previousRole.title}</p>
                <p className="experience-role-period-dates">{previousRole.dates}</p>
              </div>
              <div className="experience-role-period">
                <p className="experience-role-period-label">Current role</p>
                <p className="experience-role-period-title">{job_title}</p>
                <p className="experience-role-period-dates">{dates}</p>
              </div>
            </div>
          ) : (
            <>
              <p className="text-sm font-medium text-[var(--accent)] mb-2">{job_title}</p>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">{dates}</p>
              {tenure && <p className="mt-3 text-sm text-[var(--text-secondary)]">Company tenure: {tenure}</p>}
            </>
          )}
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
          {clusters?.map((cluster) => (
            <div key={cluster.title} className="role-cluster mt-7">
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">{cluster.title}</h4>
              <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
                {cluster.bullets.map((bullet) => <li key={bullet} className="pl-1">{bullet}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
