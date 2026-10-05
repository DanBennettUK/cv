import Link from 'next/link';
import {
  capabilityGroups,
  getConfig,
  impactHighlights,
  resumeRoles,
} from '@/lib/data';
import ContactList from '@/components/ContactList';
import ThemeToggle from '@/components/ThemeToggle';

export default function ResumePage() {
  const config = getConfig();
  const profileParagraphs = config.about_content.split(/\n\n/).slice(0, 2);

  return (
    <main className="cv">
      <div className="header-tools">
        <ThemeToggle />
      </div>
      <p className="page-note no-print">
        <Link href="/">View full CV</Link>
        {' · '}
        <a href="/Dan-Bennett-CV.pdf" download>Download CV PDF</a>
      </p>

      <header>
        <h1>{config.name}</h1>
        <p className="cv-title">{config.title}</p>
        <p className="cv-place">KRAFTON, Amsterdam</p>
        {config.tagline && <p className="lede">{config.tagline}</p>}
        <p>
          At KRAFTON since December 2020. Earlier work includes APT Solutions, PriorsVLE, HowToMoodle and Capita ITS, plus community roles with PUBG Reddit, EGX, SpecialEffect and NovaFM.
        </p>
        <ContactList config={config} />
      </header>

      <section aria-labelledby="resume-profile-heading">
        <h2 id="resume-profile-heading">Profile</h2>
        {profileParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section aria-labelledby="resume-impact-heading">
        <h2 id="resume-impact-heading">Selected impact</h2>
        <p className="section-intro">
          The thread running through my work: make people, processes and evidence easier to work with.
        </p>
        {impactHighlights.map((highlight) => (
          <article key={highlight.title} className="impact-item">
            <h3>{highlight.title}</h3>
            <p className="role-meta">{highlight.label}</p>
            <p>{highlight.description}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="resume-experience-heading">
        <h2 id="resume-experience-heading">Experience</h2>
        <p className="section-intro">
          A shorter view. The full CV also includes EGX & epic.LAN, Chicken4Charity - SpecialEffect and NovaFM.
        </p>
        {resumeRoles.map((role) => (
          <article key={`${role.company}-${role.title}`} className="role">
            <div className="role-top">
              <h3>{role.company}</h3>
              <p className="role-dates">{role.dates}</p>
            </div>
            <p className="role-title">{role.title}</p>
            {role.concurrentWith && <p className="role-meta">Concurrent with {role.concurrentWith}</p>}
            {role.tenure && <p className="role-meta">{role.tenure}</p>}
            {role.previousRole && (
              <p className="role-meta">Previous role: {role.previousRole.title}, {role.previousRole.dates}</p>
            )}
            {role.summary && <p>{role.summary}</p>}
            <ul>
              {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section aria-labelledby="resume-ai-heading">
        <h2 id="resume-ai-heading">Applied AI and systems</h2>
        <p>
          I design and use AI-assisted systems for research, reporting, documentation, coding and task coordination. The focus is the operating model around the model: clear inputs, reliable sources, safe handovers, human review and inspectable work.
        </p>
        {capabilityGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </section>

      <p className="page-note">
        Full history and links: <a href="https://cv.danbennett.me/">cv.danbennett.me</a>
      </p>
    </main>
  );
}
