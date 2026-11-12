import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  headingId: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function Section({ id, headingId, title, intro, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={headingId} className="mt-14 scroll-mt-6 md:mt-16">
      <h2 id={headingId} className="text-[1.875rem] leading-tight tracking-[-0.03em] text-foreground">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-[68ch] text-muted-foreground">{intro}</p>
      ) : null}
      <div className={intro ? 'mt-6' : 'mt-5'}>{children}</div>
    </section>
  );
}
