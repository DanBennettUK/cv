export default function AIAndSystems() {
  return (
    <section id="ai-systems" aria-labelledby="ai-systems-heading" className="py-12 sm:py-16">
      <div className="container-main">
        <h2 id="ai-systems-heading" className="section-title-editorial">AI and operational systems</h2>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <p className="text-[var(--text-secondary)]">
              A supporting capability alongside creator partnerships and programme operations.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="list-disc pl-5 space-y-3 text-[var(--text-secondary)]">
              <li className="pl-1">Use AI-assisted tools for bounded research, drafting, documentation and workflow support where they reduce repetitive preparation.</li>
              <li className="pl-1">Design practical workflows around clear inputs, handovers, sources and review points rather than treating generated output as final.</li>
              <li className="pl-1">Keep human judgement, access boundaries and approval visible when automation supports operational work.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
