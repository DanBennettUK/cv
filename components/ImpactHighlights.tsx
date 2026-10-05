import { impactHighlights } from '@/lib/data';

export default function ImpactHighlights() {
  return (
    <section id="impact" aria-labelledby="impact-heading">
      <h2 id="impact-heading">Current work</h2>

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
