import type { ReactNode } from 'react';
import ContactList from '@/components/ContactList';
import {
  aiLine,
  aiMethod,
  communityOrder,
  earlierEmploymentOrder,
  experienceByCompany,
  getConfig,
  kraftonBullets,
  publicRepos,
  toolsLine,
  usCommunityLine,
  usEarlierLine,
  type KraftonBulletId,
} from '@/lib/data';
import type { PdfVariantId } from '@/lib/pdf-variants';

function PdfShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  const config = getConfig();
  return (
    <main className={`cv pdf-cv${className ? ` ${className}` : ''}`}>
      <header>
        <h1>{config.name}</h1>
        <p className="cv-title">{config.title}</p>
        <p className="cv-place">{config.location}</p>
        <p>{config.workRights}</p>
        <ContactList config={config} print />
      </header>
      {children}
    </main>
  );
}

function ProfileBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section aria-labelledby="pdf-profile-heading">
      <h2 id="pdf-profile-heading">Profile</h2>
      <div className="profile-copy">
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}

function KraftonBlock({ ids, intro = false }: { ids: KraftonBulletId[]; intro?: boolean }) {
  const role = experienceByCompany('KRAFTON');
  return (
    <article className="role">
      <div className="role-top">
        <h3>{role.company}</h3>
        <p className="role-dates">{role.dates}</p>
      </div>
      {role.titles && (
        <ul className="role-titles">
          {role.titles.map((item) => (
            <li key={item.title}>
              <span className="role-title">{item.title}</span>
              <span className="role-title-dates">{item.dates}</span>
            </li>
          ))}
        </ul>
      )}
      {intro && <p>{role.description}</p>}
      <ul>
        {ids.map((id) => <li key={id}>{kraftonBullets[id]}</li>)}
      </ul>
    </article>
  );
}

function SummaryRoles({ companies, detailedCompany }: { companies: string[]; detailedCompany?: string }) {
  return (
    <>
      {companies.map((company) => {
        const role = experienceByCompany(company);
        const lines = company === detailedCompany ? (role.detailLines ?? role.summaryLines ?? []) : (role.summaryLines ?? []);
        return (
          <article key={company} className="role">
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
      })}
    </>
  );
}

function RepoList() {
  return (
    <ul className="repo-list">
      {publicRepos.map((repo) => (
        <li key={repo.url}>
          <a href={repo.url}>{repo.name}</a>
          <span className="repo-url">{repo.url}</span>
          <span className="repo-note">{repo.description}</span>
        </li>
      ))}
    </ul>
  );
}

function CreatorPdf() {
  const config = getConfig();
  return (
    <PdfShell>
      <ProfileBlock paragraphs={[config.tagline]} />
      <section aria-labelledby="pdf-experience-heading">
        <h2 id="pdf-experience-heading">Experience</h2>
        <KraftonBlock
          intro
          ids={['scope', 'commercial', 'people', 'campaign', 'completion', 'regions', 'campaignPlans', 'migration', 'agents', 'dashboard', 'sentiment']}
        />
      </section>
      <section aria-labelledby="pdf-earlier-heading">
        <h2 id="pdf-earlier-heading">Earlier experience</h2>
        <SummaryRoles companies={earlierEmploymentOrder} />
      </section>
      <section aria-labelledby="pdf-community-heading">
        <h2 id="pdf-community-heading">Community and volunteering</h2>
        <SummaryRoles companies={communityOrder} />
      </section>
      <section aria-labelledby="pdf-ai-heading">
        <h2 id="pdf-ai-heading">AI and tools</h2>
        <p>{aiLine}</p>
      </section>
    </PdfShell>
  );
}

function AiPdf() {
  const config = getConfig();
  return (
    <PdfShell className="pdf-ai">
      <ProfileBlock paragraphs={[config.tagline, aiMethod]} />
      <section aria-labelledby="pdf-ai-heading">
        <h2 id="pdf-ai-heading">AI and tools</h2>
        <ul>
          {(['agents', 'dashboard', 'sentiment', 'playerReports'] as KraftonBulletId[]).map((id) => (
            <li key={id}>{kraftonBullets[id]}</li>
          ))}
        </ul>
        <p>{toolsLine}.</p>
        <RepoList />
      </section>
      <section aria-labelledby="pdf-experience-heading">
        <h2 id="pdf-experience-heading">Experience</h2>
        <KraftonBlock ids={['scope', 'commercial', 'campaign', 'campaignPlans', 'migration']} />
      </section>
      <section aria-labelledby="pdf-earlier-heading">
        <h2 id="pdf-earlier-heading">Earlier experience</h2>
        <SummaryRoles companies={earlierEmploymentOrder} detailedCompany="HowToMoodle" />
      </section>
      <section aria-labelledby="pdf-community-heading">
        <h2 id="pdf-community-heading">Community and volunteering</h2>
        <SummaryRoles companies={communityOrder} />
      </section>
    </PdfShell>
  );
}

function UsPdf() {
  const config = getConfig();
  return (
    <PdfShell className="pdf-us">
      <ProfileBlock paragraphs={[config.tagline]} />
      <section aria-labelledby="pdf-experience-heading">
        <h2 id="pdf-experience-heading">Experience</h2>
        <KraftonBlock ids={['scope', 'commercial', 'campaign', 'campaignPlans', 'migration', 'agents', 'dashboard', 'sentiment', 'playerReports']} />
        <p>{usEarlierLine}</p>
        <p>{usCommunityLine}</p>
      </section>
      <section aria-labelledby="pdf-ai-heading">
        <h2 id="pdf-ai-heading">AI and tools</h2>
        <p>{`${aiLine} ${aiMethod}`}</p>
        <p>{toolsLine}.</p>
        <RepoList />
      </section>
    </PdfShell>
  );
}

export default function PdfDocument({ id }: { id: PdfVariantId }) {
  if (id === 'creator') return <CreatorPdf />;
  if (id === 'ai') return <AiPdf />;
  return <UsPdf />;
}
