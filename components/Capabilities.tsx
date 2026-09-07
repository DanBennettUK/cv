export default function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="py-12 sm:py-16">
      <div className="container-main">
        <h2 id="capabilities-heading" className="section-title-editorial">Selected workflow examples</h2>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <p className="text-[var(--text-secondary)]">How I connect requirements, delivery and review in Partner operations and personal project work.</p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <article className="practice-card border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
              <h3 className="headline-display text-xl mb-2">Partner campaign tracking and evidence review</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">Ongoing contribution to Partner Programme operations</p>
              <div className="space-y-3 text-[var(--text-secondary)]">
                <p>Partner campaigns need clear requirements and follow-through across creators and internal teams. I contribute to this operating approach by maintaining trackers from briefing and submission through review, completion and follow-up, alongside Partner-facing guidance.</p>
                <p>I use campaign and Partner activity to prepare reporting, work on data quality and lead cross-functional evidence reviews. Recommendations distinguish programme-controlled actions from wider product and market factors. The working outputs are campaign progress records, reporting and prioritised follow-up actions.</p>
              </div>
            </article>
            <article className="practice-card border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
              <h3 className="headline-display text-xl mb-2">Agent-assisted CV and project workflow</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">Personal project work, supported by a private system</p>
              <div className="space-y-3 text-[var(--text-secondary)]">
                <p>Revising my CV website means turning positioning advice into concrete changes while keeping content review separate from implementation. I commission the work, define requirements and coordinate AI-assisted implementation, splitting scoping, implementation and independent verification into distinct steps.</p>
                <p>My private personal system supports task and documentation handovers, with research and coding agents given bounded assignments. The review process checks builds, GitHub changes and deployment state, while I retain approval over publication. For this CV website, the outputs include a reviewable code change, build checks and browser checks before publication.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
