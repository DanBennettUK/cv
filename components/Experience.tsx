import { Experience } from '@/lib/types';
import ReactMarkdown from 'react-markdown';

interface ExperienceProps {
  experiences: Experience[];
}

const roleAnchor: Record<string, string> = {
  KRAFTON: 'current-role',
  'APT Solutions': 'earlier-employment',
  'PUBG Reddit (r/PUBATTLEGROUNDS)': 'community',
};

export default function ExperienceSection({ experiences }: ExperienceProps) {
  if (experiences.length === 0) return null;

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      <p className="section-intro">Employment and community work, most recent first.</p>

      <div>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  const { company, link, job_title, dates, tenure, previousRole, concurrentWith, description, clusters } = experience;
  const anchor = roleAnchor[company];

  return (
    <article className="role" id={anchor}>
      <div className="role-top">
        <h3>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
        </h3>
        <p className="role-dates">{dates}</p>
      </div>

      {experience.titles && experience.titles.length > 0 ? (
        <ul className="role-titles">
          {experience.titles.map((item) => (
            <li key={item.title}>
              <span className="role-title">{item.title}</span>
              <span className="role-title-dates">{item.dates}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="role-title">{job_title}</p>
      )}
      {concurrentWith && <p className="role-meta">Concurrent with {concurrentWith}</p>}
      {!experience.titles?.length && tenure && <p className="role-meta">{tenure}</p>}
      {!experience.titles?.length && previousRole && (
        <p className="role-meta">Previous role: {previousRole.title}, {previousRole.dates}</p>
      )}

      <div>
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
      </div>

      {clusters?.map((cluster) => (
        <div key={cluster.title} className="role-cluster">
          <h4>{cluster.title}</h4>
          <ul>
            {cluster.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  );
}
