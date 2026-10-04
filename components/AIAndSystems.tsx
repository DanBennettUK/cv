import { capabilityGroups, publicProjects } from '@/lib/data';

export default function AIAndSystems() {
  return (
    <>
      <section id="skills" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        {capabilityGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="ai-systems" aria-labelledby="ai-systems-heading">
        <h2 id="ai-systems-heading">Applied AI and operational systems</h2>
        <p>
          Alongside creator partnerships and program operations, I design and use AI-assisted systems for research, reporting, documentation, coding and task coordination.
        </p>
        <p>
          The useful part is the operating model around the model: clear inputs, reliable sources, safe handovers, human review and work that can still be inspected after it is done.
        </p>

        <h3>How I work with AI</h3>
        <ul>
          <li>Use AI-assisted tools for bounded research, analysis, drafting, coding and documentation, treating generated output as a working draft rather than an authority.</li>
          <li>Design workflows with explicit inputs, source links, handovers, review points and closure conditions so work can continue without losing context.</li>
          <li>Connect agents to tools through CLI, MCP and REST interfaces, while keeping credentials, permissions and external sends behind explicit boundaries.</li>
          <li>Build local-first, auditable state with structured memory, task history, provenance and recoverable changes instead of opaque generated output.</li>
          <li>Verify meaningful outputs against source material, tests, build results and the intended destination before treating them as finished.</li>
        </ul>

        {publicProjects.length > 0 && (
          <>
            <h3>Selected public work</h3>
            {publicProjects.map((project) => (
              <article key={project.name} className="project">
                <h4>
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </h4>
                <p className="role-meta">{project.label}</p>
                <p>{project.description}</p>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </>
        )}
      </section>
    </>
  );
}
