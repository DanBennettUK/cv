import Link from 'next/link';
import { capabilityGroups, getConfig, resumeRoles } from '@/lib/data';

export default function ResumePage() {
  const config = getConfig();
  const profileParagraphs = config.about_content.split(/\n\n/).map((paragraph) => paragraph.trim()).filter(Boolean);

  return (
    <main id="main-content">
      <header className="site-header">
        <div className="wrap">
          <p className="page-tools no-print">
            <Link href="/">Full CV</Link>
            <a href="/Dan-Bennett-CV.pdf" download>Download CV (PDF)</a>
          </p>
          <h1>{config.name}</h1>
          <p className="job-title">{config.title}</p>
          <p className="place">
            <a href="https://www.krafton.com" target="_blank" rel="noopener noreferrer">KRAFTON</a>, based in Amsterdam
          </p>
          <p className="tagline">{config.tagline}</p>
          <ul className="contact-list">
            <li><a href={`mailto:${config.email}`}>{config.email}</a></li>
            <li><a href={config.website} target="_blank" rel="noopener noreferrer">{config.website.replace(/^https?:\/\//, '')}</a></li>
            <li><a href={`https://www.linkedin.com/in/${config.linkedin_username}`} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={`https://github.com/${config.github_username}`} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </header>

      <section className="section" aria-labelledby="resume-profile-heading">
        <div className="wrap">
          <h2 id="resume-profile-heading">Profile</h2>
          {profileParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {config.current_focus && (
            <p className="focus-line"><strong>Current focus. </strong>{config.current_focus}</p>
          )}
        </div>
      </section>

      <section className="section" aria-labelledby="resume-experience-heading">
        <div className="wrap">
          <h2 id="resume-experience-heading">Experience</h2>
          {resumeRoles.map((role) => (
            <article key={`${role.company}-${role.title}`} className="role">
              <div className="role-head">
                <h3>{role.company}</h3>
                {!role.previousRole && <p className="role-dates">{role.dates}</p>}
              </div>
              {role.previousRole ? (
                <>
                  {role.tenure && <p className="role-note">{role.tenure}</p>}
                  <div className="role-post">
                    <p className="role-title">{role.title}</p>
                    <p className="role-dates">{role.dates}</p>
                  </div>
                  <div className="role-post">
                    <p className="role-title">
                      <span className="role-label">Previous role. </span>
                      {role.previousRole.title}
                    </p>
                    <p className="role-dates">{role.previousRole.dates}</p>
                  </div>
                </>
              ) : (
                <p className="role-title">{role.title}</p>
              )}
              {role.concurrentWith && <p className="role-note">Concurrent with {role.concurrentWith}</p>}
              <div className="role-copy">
                {role.summary && <p>{role.summary}</p>}
                <ul>
                  {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="resume-ai-heading">
        <div className="wrap">
          <h2 id="resume-ai-heading">Applied AI and operational systems</h2>
          <p>
            I design and use AI-assisted systems for research, reporting, documentation, coding and task coordination. The focus is the operating model around the model: clear inputs, reliable sources, safe handovers, human review and inspectable work.
          </p>
          {capabilityGroups.map((group) => (
            <div key={group.title} className="capability">
              <h3>{group.title}</h3>
              <p>{group.items.join(' · ')}</p>
            </div>
          ))}
          <p className="end-note">
            Community events and the full history are on the <Link href="/">full CV</Link>. <a href="https://cv.danbennett.me/">cv.danbennett.me</a>
          </p>
        </div>
      </section>
    </main>
  );
}
