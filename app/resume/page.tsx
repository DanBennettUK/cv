import Link from 'next/link';
import {
  capabilityGroups,
  getConfig,
  impactHighlights,
  publicProjects,
  resumeRoles,
} from '@/lib/data';

export default function ResumePage() {
  const config = getConfig();
  const profileParagraphs = config.about_content.split(/\n\n/).slice(0, 2);
  const currentRole = resumeRoles[0];
  const earlierRoles = resumeRoles.slice(1);

  return (
    <main className="resume-page">
      <div className="resume-shell">
        <div className="resume-actions no-print" aria-label="Resume actions">
          <Link href="/" className="resume-action-link">View full CV</Link>
          <a href="/Dan-Bennett-CV.pdf" download className="resume-action-link">Download PDF</a>
        </div>

        <header className="resume-header">
          <div>
            <p className="resume-kicker">Curriculum vitae</p>
            <h1>{config.name}</h1>
            <p className="resume-title">{config.title}</p>
            <p className="resume-tagline">{config.tagline}</p>
          </div>
          <address className="resume-contact">
            <a href={`mailto:${config.email}`}>{config.email}</a>
            <a href={config.website}>{config.website.replace(/^https?:\/\//, '')}</a>
            <a href={`https://www.linkedin.com/in/${config.linkedin_username}`}>linkedin.com/in/{config.linkedin_username}</a>
            <a href={`https://github.com/${config.github_username}`}>github.com/{config.github_username}</a>
          </address>
        </header>

        <section className="resume-section" aria-labelledby="resume-profile-heading">
          <h2 id="resume-profile-heading">Profile</h2>
          {profileParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>

        <section className="resume-section" aria-labelledby="resume-impact-heading">
          <h2 id="resume-impact-heading">Selected impact</h2>
          <div className="resume-impact-grid">
            {impactHighlights.map((highlight) => (
              <article key={highlight.title} className="resume-impact-card">
                <p className="resume-label">{highlight.label}</p>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" aria-labelledby="resume-experience-heading">
          <h2 id="resume-experience-heading">Experience</h2>
          <ResumeRole role={currentRole} current />
          {earlierRoles.map((role) => <ResumeRole key={`${role.company}-${role.title}`} role={role} />)}
        </section>

        <section className="resume-section resume-ai-section" aria-labelledby="resume-ai-heading">
          <h2 id="resume-ai-heading">Applied AI and systems</h2>
          <div className={publicProjects.length > 0 ? 'resume-ai-grid' : 'resume-ai-content'}>
            <div>
              <p>
                I design and use AI-assisted systems for research, reporting, documentation, coding and task coordination. The focus is the operating model around the model: clear inputs, reliable sources, safe handovers, human review and inspectable work.
              </p>
              <div className="resume-capabilities">
                {capabilityGroups.map((group) => (
                  <div key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.items.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </div>
            {publicProjects.length > 0 && <div className="resume-projects">
              <p className="resume-label">Selected public projects</p>
              {publicProjects.map((project) => (
                <article key={project.name} className="resume-project">
                  <h3><a href={project.href}>{project.name}</a></h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>}
          </div>
        </section>

        <div className="resume-footer">
          <span>Full history and links</span>
          <a href="https://cv.danbennett.me/">cv.danbennett.me</a>
        </div>
      </div>
    </main>
  );
}

function ResumeRole({ role, current = false }: { role: typeof resumeRoles[number]; current?: boolean }) {
  return (
    <article className={`resume-role${current ? ' resume-role-current' : ''}`}>
      <div className="resume-role-meta">
        <h3>{role.company}</h3>
        {role.concurrentWith && <p className="resume-role-concurrency">Concurrent with {role.concurrentWith}</p>}
        {role.previousRole ? (
          <div className="resume-role-timeline">
            <p className="resume-role-tenure">{role.tenure}</p>
            <div className="resume-role-period">
              <p className="resume-role-period-label">Previous role</p>
              <p className="resume-role-title">{role.previousRole.title}</p>
              <p className="resume-dates">{role.previousRole.dates}</p>
            </div>
            <div className="resume-role-period">
              <p className="resume-role-period-label">Current role</p>
              <p className="resume-role-title">{role.title}</p>
              <p className="resume-dates">{role.dates}</p>
            </div>
          </div>
        ) : (
          <>
            <p className="resume-role-title">{role.title}</p>
            <p className="resume-dates">{role.dates}</p>
            {role.tenure && <p className="resume-role-history">Company tenure: {role.tenure}</p>}
          </>
        )}
      </div>
      <div>
        {role.summary && <p className="resume-role-summary">{role.summary}</p>}
        <ul>
          {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </div>
    </article>
  );
}
