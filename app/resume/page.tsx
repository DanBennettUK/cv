import Link from 'next/link';
import {
  aiLine,
  aiMethod,
  capabilityGroups,
  communityOrder,
  earlierEmploymentOrder,
  experienceByCompany,
  getConfig,
  impactHighlights,
  publicRepos,
} from '@/lib/data';
import ContactList from '@/components/ContactList';
import Projects from '@/components/Projects';
import ThemeToggle from '@/components/ThemeToggle';
import { pdfVariants } from '@/lib/pdf-variants';

function RoleLines({ company }: { company: string }) {
  const role = experienceByCompany(company);
  const lines = role.summaryLines ?? [];
  if (lines.length === 0) return null;

  return (
    <article className="role">
      <div className="role-top">
        <h3>{role.company}</h3>
        <p className="role-dates">{role.dates}</p>
      </div>
      <p className="role-title">{role.job_title}</p>
      <ul>
        {lines.map((line) => <li key={line}>{line}</li>)}
      </ul>
    </article>
  );
}

export default function ResumePage() {
  const config = getConfig();
  const krafton = experienceByCompany('KRAFTON');

  return (
    <main className="cv">
      <div className="header-tools">
        <ThemeToggle />
      </div>
      <p className="page-note no-print">
        <Link href="/">View full CV</Link>
        {pdfVariants.map((variant) => (
          <span key={variant.id}>
            {' · '}
            <a href={`/${variant.fileName}`} download>{variant.label}</a>
          </span>
        ))}
      </p>

      <header>
        <h1>{config.name}</h1>
        <p className="cv-title">{config.title}</p>
        <p className="cv-place">{config.location}</p>
        <p>{config.workRights}</p>
        <p className="lede">{config.tagline}</p>
        <p>{config.earlierWork}</p>
        <ContactList config={config} showPdf />
      </header>

      <section aria-labelledby="resume-profile-heading">
        <h2 id="resume-profile-heading">Profile</h2>
        {config.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section aria-labelledby="resume-impact-heading">
        <h2 id="resume-impact-heading">Current work</h2>
        {impactHighlights.map((highlight) => (
          <article key={highlight.title} className="impact-item">
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="resume-experience-heading">
        <h2 id="resume-experience-heading">Experience</h2>
        <article className="role">
          <div className="role-top">
            <h3>{krafton.company}</h3>
            <p className="role-dates">{krafton.dates}</p>
          </div>
          {krafton.titles && (
            <ul className="role-titles">
              {krafton.titles.map((item) => (
                <li key={item.title}>
                  <span className="role-title">{item.title}</span>
                  <span className="role-title-dates">{item.dates}</span>
                </li>
              ))}
            </ul>
          )}
          <p>{krafton.description}</p>
          {krafton.clusters?.map((cluster) => (
            <div key={cluster.title}>
              <h4>{cluster.title}</h4>
              <ul>
                {cluster.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          ))}
        </article>
      </section>

      <Projects />

      <section aria-labelledby="resume-earlier-heading">
        <h2 id="resume-earlier-heading">Earlier experience</h2>
        {earlierEmploymentOrder.map((company) => <RoleLines key={company} company={company} />)}
      </section>

      <section aria-labelledby="resume-community-heading">
        <h2 id="resume-community-heading">Community and volunteering</h2>
        {communityOrder.map((company) => <RoleLines key={company} company={company} />)}
      </section>

      <section aria-labelledby="resume-ai-heading">
        <h2 id="resume-ai-heading">AI and tools</h2>
        <p>{aiLine}</p>
        <p>{aiMethod}</p>
        <ul className="repo-list">
          {publicRepos.map((repo) => (
            <li key={repo.url}>
              <a href={repo.url}>{repo.name}</a>
              <span className="repo-url">{repo.url}</span>
              <span className="repo-note">{repo.description}</span>
            </li>
          ))}
        </ul>
        {capabilityGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <p>{group.items.join('. ')}.</p>
          </div>
        ))}
      </section>
    </main>
  );
}
