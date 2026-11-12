import { impactHighlights } from '@/lib/data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Section from '@/components/ui/section';

export default function ImpactHighlights() {
  return (
    <Section id="impact" headingId="impact-heading" title="Current work">
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
  );
}
