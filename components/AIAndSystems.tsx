import { aiMethod, capabilityGroups, publicRepos } from '@/lib/data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Section from '@/components/ui/section';

export default function AIAndSystems() {
  return (
    <>
      <Section id="skills" headingId="skills-heading" title="Skills">
        <div className="grid gap-4 md:grid-cols-2">
          {capabilityGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <h3 className="font-sans text-xl font-semibold leading-snug">{group.title}</h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 ps-5">
                  {group.items.map((item) => (
                    <li key={item} className="text-[1.0625rem] leading-relaxed">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="ai-systems" headingId="ai-systems-heading" title="AI and tools">
        <p className="max-w-[68ch] text-[1.0625rem] leading-relaxed">{aiMethod}</p>
        <ul className="mt-4 max-w-[68ch] space-y-4">
          {publicRepos.map((repo) => (
            <li key={repo.url}>
              <a href={repo.url} className="font-semibold text-accent hover:underline">{repo.name}</a>
              <span className="mt-0.5 block text-sm text-muted-foreground">{repo.url}</span>
              <span className="mt-1 block text-[1.0625rem] leading-relaxed">{repo.description}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
