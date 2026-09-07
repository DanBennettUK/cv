export default function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="py-12 sm:py-16">
      <div className="container-main">
        <h2 id="capabilities-heading" className="section-title-editorial">Operational capabilities</h2>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <p className="text-[var(--text-secondary)]">Practical systems to support creator relationships and programme delivery.</p>
          </div>
          <div className="lg:col-span-8">
            <dl className="space-y-5 text-[var(--text-secondary)]">
              <div>
                <dt className="font-semibold text-[var(--text-primary)]">Reporting and follow-up</dt>
                <dd>Campaign reporting, operational trackers and data quality, with recommendations grounded in what programme activity can explain.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--text-primary)]">Workflow and evidence</dt>
                <dd>Clear requirements, submission and review stages, completion tracking, feedback routes and evidence-led cross-team reviews.</dd>
              </div>
            </dl>
            <article className="practice-card mt-8 border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
              <h3 className="headline-display text-xl mb-2">Personal AI-assisted workflow practice</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">Personal, private experimentation</p>
              <p className="text-[var(--text-secondary)]">Outside my employment, I use AI assistance to organise personal tasks, draft documentation and explore research questions. I check sources and review drafts before using them, keeping decisions and follow-up with me.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
