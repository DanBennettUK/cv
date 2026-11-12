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
import ThemeToggle from '@/components/ThemeToggle';
import { pdfVariants } from '@/lib/pdf-variants';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import { Timeline, TimelineItem } from '@/components/ui/timeline';

function RoleLines({ company }: { company: string }) {
  const role = experienceByCompany(company);
  const lines = role.summaryLines ?? [];
  if (lines.length === 0) return null;

  return (
    <TimelineItem>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-sans text-xl font-semibold leading-snug">{role.company}</h3>
        <p className="tabular-nums text-muted-foreground sm:text-right">{role.dates}</p>
      </div>
      <p className="mt-1 font-semibold text-accent">{role.job_title}</p>
      <ul className="mt-2 max-w-[68ch] list-disc space-y-2 ps-5">
        {lines.map((line) => <li key={line} className="text-[1.0625rem] leading-relaxed">{line}</li>)}
      </ul>
    </TimelineItem>
  );
}

export default function ResumePage() {
  const config = getConfig();
  const krafton = experienceByCompany('KRAFTON');

  return (
    <main className="site mx-auto max-w-[50rem] px-4 pb-16 pt-4 md:px-6 md:pt-8">
      <Hero>
        <div className="header-tools">
          <ThemeToggle />
        </div>
        <p className="page-note no-print mt-2 text-sm font-semibold">
          <Link href="/" className="text-accent hover:underline">View full CV</Link>
          {pdfVariants.map((variant) => (
            <span key={variant.id}>
              {' · '}
              <a href={`/${variant.fileName}`} download className="text-accent hover:underline">{variant.label}</a>
            </span>
          ))}
        </p>

        <header className="mt-4">
          <h1 className="text-[2.5rem] leading-[1.08] tracking-[-0.03em] md:text-[3.25rem]">{config.name}</h1>
          <p className="mt-3 text-xl font-semibold leading-snug text-accent">{config.title}</p>
          <p className="mt-2 font-semibold text-muted-foreground">{config.location}</p>
          <p className="mt-1 text-muted-foreground">{config.workRights}</p>
          <p className="mt-5 max-w-[68ch] text-[1.0625rem] leading-relaxed">{config.tagline}</p>
          <p className="mt-3 max-w-[68ch] text-[1.0625rem] leading-relaxed">{config.earlierWork}</p>
          <ContactList config={config} showPdf />
        </header>
      </Hero>

      <Section id="resume-profile" headingId="resume-profile-heading" title="Profile">
        <div className="max-w-[68ch] space-y-4">
          {config.aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-[1.0625rem] leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="resume-impact" headingId="resume-impact-heading" title="Current work">
        <div className="grid gap-4 md:grid-cols-3">
          {impactHighlights.map((highlight) => (
            <Card key={highlight.title}>
              <CardHeader>
                <h3 className="font-sans text-xl font-semibold leading-snug">{highlight.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-[1.0625rem] leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="resume-experience" headingId="resume-experience-heading" title="Experience">
        <Timeline>
          <TimelineItem>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-sans text-xl font-semibold leading-snug">{krafton.company}</h3>
              <p className="tabular-nums text-muted-foreground sm:text-right">{krafton.dates}</p>
            </div>
            {krafton.titles && (
              <ul className="mt-2 space-y-1">
                {krafton.titles.map((item) => (
                  <li key={item.title} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <span className="font-semibold text-accent">{item.title}</span>
                    <span className="tabular-nums">{item.dates}</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-3 max-w-[68ch] text-[1.0625rem] leading-relaxed">{krafton.description}</p>
            {krafton.clusters?.map((cluster) => (
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
        </Timeline>
      </Section>

      <Section id="resume-earlier" headingId="resume-earlier-heading" title="Earlier experience">
        <Timeline>
          {earlierEmploymentOrder.map((company) => <RoleLines key={company} company={company} />)}
        </Timeline>
      </Section>

      <Section id="resume-community" headingId="resume-community-heading" title="Community and volunteering">
        <Timeline>
          {communityOrder.map((company) => <RoleLines key={company} company={company} />)}
        </Timeline>
      </Section>

      <Section id="resume-ai" headingId="resume-ai-heading" title="AI and tools">
        <p className="max-w-[68ch] text-[1.0625rem] leading-relaxed">{aiLine}</p>
        <p className="mt-3 max-w-[68ch] text-[1.0625rem] leading-relaxed">{aiMethod}</p>
        <ul className="mt-4 max-w-[68ch] space-y-4">
          {publicRepos.map((repo) => (
            <li key={repo.url}>
              <a href={repo.url} className="font-semibold text-accent hover:underline">{repo.name}</a>
              <span className="mt-0.5 block text-sm text-muted-foreground">{repo.url}</span>
              <span className="mt-1 block text-[1.0625rem] leading-relaxed">{repo.description}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {capabilityGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <h3 className="font-sans text-xl font-semibold leading-snug">{group.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-[1.0625rem] leading-relaxed">{group.items.join('. ')}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
