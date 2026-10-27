import { projects } from '@/lib/data';

const facts = [
  ['problem', 'Problem'],
  ['built', 'Built'],
  ['tools', 'Tools'],
  ['result', 'Result'],
] as const;

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>

      {projects.map((project) => (
        <article key={project.title} className="project">
          <h3>{project.title}</h3>
          <dl className="project-facts">
            {facts.map(([key, label]) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{project[key]}</dd>
              </div>
            ))}
          </dl>
        </article>
      ))}
    </section>
  );
}
