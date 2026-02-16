import { Experience } from '@/lib/types';
import ReactMarkdown from 'react-markdown';

interface ExperienceProps {
  experiences: Experience[];
  title?: string;
}

export default function ExperienceSection({ experiences, title = 'Experience' }: ExperienceProps) {
  if (experiences.length === 0) return null;

  return (
    <section className="py-8">
      <div className="container-main">
        <h3 className="section-title">{title}</h3>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  const { company, link, job_title, dates, quote, description, layout } = experience;
  
  // Default to 'left' layout (company on left, details on right)
  const isLeftLayout = layout === 'left' || !layout;
  
  return (
    <div className={`flex flex-col md:flex-row gap-6 ${!isLeftLayout ? 'md:flex-row-reverse' : ''}`}>
      {/* Left/Top - Company Info */}
      <div className={`md:w-1/3 ${isLeftLayout ? 'md:text-left' : 'md:text-right'}`}>
        <h4 className="text-2xl sm:text-3xl font-medium mb-1">
          {link ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              {company}
            </a>
          ) : (
            company
          )}
        </h4>
        <p className="text-lg text-[var(--muted)] italic mb-1">{job_title}</p>
        <p className="text-base text-[var(--muted)]">{dates}</p>
      </div>

      {/* Right/Bottom - Description */}
      <div className="md:w-2/3">
        {quote && (
          <blockquote className="text-lg italic text-[var(--muted)] mb-4 py-4 px-6 border-l-4 border-[var(--accent)] bg-[var(--background)]">
            &ldquo;{quote}&rdquo;
          </blockquote>
        )}
        <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--foreground)]">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
