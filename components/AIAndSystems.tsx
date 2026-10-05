import { capabilityGroups } from '@/lib/data';

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
        <h2 id="ai-systems-heading">AI and tools</h2>
        <p>
          As well as creator partnerships, I build AI tools for research, reporting, documentation, coding and task coordination.
        </p>
        <p>
          I write down the inputs and the sources. A person reviews the result. I write the handover so the next person can check it and continue.
        </p>

        <h3>How I work with AI</h3>
        <ul>
          <li>I use AI tools for research, analysis, drafting, coding and documentation. I treat the output as a draft, and I check it.</li>
          <li>I write the inputs, the source links, the handover, the review and what done means, so the next session can continue.</li>
          <li>I connect agents to tools through CLI, MCP and REST. Credentials, permissions and anything sent outside stay behind a check I approve.</li>
          <li>I keep memory, task history and changes in files I can read and undo. I do not leave the record as model output I cannot check.</li>
          <li>I check the output against the source, the tests, the build and the place it is meant to go before I call it finished.</li>
        </ul>
      </section>
    </>
  );
}
