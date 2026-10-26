import { aiMethod, capabilityGroups, publicRepos } from '@/lib/data';

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
        <p>{aiMethod}</p>
        <ul className="repo-list">
          {publicRepos.map((repo) => (
            <li key={repo.url}>
              <a href={repo.url}>{repo.name}</a>
              <span className="repo-url">{repo.url}</span>
              <span className="repo-note">{repo.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
