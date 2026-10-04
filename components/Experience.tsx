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
    <section id={id} aria-labelledby={`${id}-heading`} className="section">
      <div className="wrap">
        <h2 id={`${id}-heading`}>{title}</h2>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  const { company, link, job_title, dates, tenure, previousRole, concurrentWith, quote, description, clusters } = experience;

  return (
    <article className="role">
      <div className="role-head">
        <h3>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">{company}</a>
          ) : (
            company
          )}
        </h3>
        {!previousRole && <p className="role-dates">{dates}</p>}
      </div>

      {previousRole ? (
        <>
          {tenure && <p className="role-note">{tenure}</p>}
          <div className="role-post">
            <p className="role-title">{job_title}</p>
            <p className="role-dates">{dates}</p>
          </div>
          <div className="role-post">
            <p className="role-title">
              <span className="role-label">Previous role. </span>
              {previousRole.title}
            </p>
            <p className="role-dates">{previousRole.dates}</p>
          </div>
        </>
      ) : (
        <p className="role-title">{job_title}</p>
      )}

      {concurrentWith && <p className="role-note">Concurrent with {concurrentWith}</p>}

      <div className="role-copy">
        {quote && <p>{quote}</p>}
        <ReactMarkdown
          components={{
            p: ({ children }) => <p>{children}</p>,
            ul: ({ children }) => <ul>{children}</ul>,
            li: ({ children }) => <li>{children}</li>,
            strong: ({ children }) => <strong>{children}</strong>,
          }}
        >
          {description}
        </ReactMarkdown>
        {clusters?.map((cluster) => (
          <div key={cluster.title} className="cluster">
            <h4>{cluster.title}</h4>
            <ul>
              {cluster.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
