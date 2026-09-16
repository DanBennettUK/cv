import { impactHighlights } from '@/lib/data';

export default function ImpactHighlights() {
  return (
    <section id="impact" aria-labelledby="impact-heading" className="py-10 sm:py-14">
      <div className="container-main">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <h2 id="impact-heading" className="section-title-editorial mb-0">Selected impact</h2>
          <p className="text-sm text-[var(--text-muted)] max-w-md">
            The thread running through my work: make people, processes and evidence easier to work with.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {impactHighlights.map((highlight) => (
            <article
              key={highlight.title}
              className="border border-[var(--border)] bg-[var(--bg-secondary)] p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)] mb-4">
                {highlight.label}
              </p>
              <h3 className="headline-display text-xl mb-3">{highlight.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
