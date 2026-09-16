import { capabilityGroups, publicProjects } from '@/lib/data';

export default function AIAndSystems() {
  return (
    <section id="ai-systems" aria-labelledby="ai-systems-heading" className="py-12 sm:py-16">
      <div className="container-main">
        <h2 id="ai-systems-heading" className="section-title-editorial">Applied AI and operational systems</h2>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <p className="text-[var(--text-secondary)]">
              Alongside creator partnerships and program operations, I design and use AI-assisted systems for research, reporting, documentation, coding and task coordination.
            </p>
            <p className="mt-4 text-[var(--text-secondary)]">
              The useful part is the operating model around the model: clear inputs, reliable sources, safe handovers, human review and work that can still be inspected after it is done.
            </p>

            <div className="mt-8 border-t border-[var(--border)] pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)] mb-4">Capability map</h3>
              <div className="space-y-5">
                {capabilityGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-2">{group.title}</h4>
                    <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <article className="border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
              <h3 className="headline-display text-xl mb-3">How I work with AI</h3>
              <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
                <li className="pl-1">Use AI-assisted tools for bounded research, analysis, drafting, coding and documentation, treating generated output as a working draft rather than an authority.</li>
                <li className="pl-1">Design workflows with explicit inputs, source links, handovers, review points and closure conditions so work can continue without losing context.</li>
                <li className="pl-1">Connect agents to tools through CLI, MCP and REST interfaces, while keeping credentials, permissions and external sends behind explicit boundaries.</li>
                <li className="pl-1">Build local-first, auditable state with structured memory, task history, provenance and recoverable changes instead of opaque generated output.</li>
                <li className="pl-1">Verify meaningful outputs against source material, tests, build results and the intended destination before treating them as finished.</li>
              </ul>
            </article>

            <div className="mt-8 space-y-8">
              {publicProjects.map((project) => (
                <article key={project.name} className="border-t-2 border-[var(--border)] pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="headline-display text-xl">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                      >
                        {project.name}
                      </a>
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">{project.label}</p>
                  </div>
                  <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
                    {project.bullets.map((bullet) => <li key={bullet} className="pl-1">{bullet}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
