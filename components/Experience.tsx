import { Experience } from '@/lib/types';
import ReactMarkdown from 'react-markdown';
import Section from '@/components/ui/section';
import { Timeline, TimelineItem } from '@/components/ui/timeline';

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
    <Section
      id="experience"
      headingId="experience-heading"
      title="Experience"
      intro="Employment and community work, most recent first."
    >
      <Timeline>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </Timeline>
    </Section>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  const { company, link, job_title, dates, concurrentWith, description, clusters } = experience;
  const anchor = roleAnchor[company];

  return (
    <TimelineItem id={anchor}>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-sans text-xl font-semibold leading-snug">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              {company}
            </a>
          ) : (
            company
          )}
        </h3>
        <p className="text-base tabular-nums text-muted-foreground sm:text-right">{dates}</p>
      </div>

      {experience.titles && experience.titles.length > 0 ? (
        <ul className="mt-2 space-y-1">
          {experience.titles.map((item) => (
            <li key={item.title} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <span className="font-semibold text-accent">{item.title}</span>
              <span className="tabular-nums text-foreground">{item.dates}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-1 font-semibold text-accent">{job_title}</p>
      )}
      {concurrentWith && <p className="mt-1 text-muted-foreground">Concurrent with {concurrentWith}</p>}

      <div className="max-w-[68ch]">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="mt-3 text-[1.0625rem] leading-relaxed">{children}</p>,
            ul: ({ children }) => <ul className="mt-2 list-disc space-y-2 ps-5">{children}</ul>,
            li: ({ children }) => <li className="text-[1.0625rem] leading-relaxed">{children}</li>,
            strong: ({ children }) => <strong>{children}</strong>,
          }}
        >
          {description}
        </ReactMarkdown>
      </div>

      {clusters?.map((cluster) => (
        <div key={cluster.title} className="mt-4 max-w-[68ch]">
          <h4 className="font-sans text-[1.0625rem] font-semibold">{cluster.title}</h4>
          <ul className="mt-2 list-disc space-y-2 ps-5">
            {cluster.bullets.map((bullet) => (
              <li key={bullet} className="text-[1.0625rem] leading-relaxed">{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </TimelineItem>
  );
}
