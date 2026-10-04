import { impactHighlights } from '@/lib/data';

export default function ImpactHighlights() {
  return (
    <section id="impact" aria-labelledby="impact-heading">
      <h2 id="impact-heading">Selected impact</h2>
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
  );
}
