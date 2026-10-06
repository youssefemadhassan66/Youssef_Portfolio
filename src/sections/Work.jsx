import { featured, githubRepos, moreWork, profile } from '../data/content';
import SectionHead from '../components/SectionHead';
import Proof from '../components/Proofs';
import Words from '../components/Words';

const accessLabel = {
  private: 'Private repository',
  client: 'Client work',
};

const newTab = <span className="sr-only"> (opens in a new tab)</span>;

function CaseStudy({ project: p, index }) {
  const num = String(index).padStart(2, '0');
  return (
    <li className="case" aria-labelledby={`${p.id}-name`}>
      <div className="case__head">
        <span className="case__num display outline" aria-hidden="true" data-speed="0.1">
          {num}
        </span>
        <div>
          <h3 id={`${p.id}-name`} className="case__name display split">
            <Words text={p.name} />
          </h3>
          <p className="case__meta reveal" style={{ '--d': 2 }}>
            <span>{p.kind}</span>
            <span>{p.year}</span>
            {accessLabel[p.access] && <span className="case__access">{accessLabel[p.access]}</span>}
          </p>
        </div>
      </div>

      <div className="case__body">
        <div className="case__text reveal" style={{ '--d': 1 }}>
          <p className="case__summary">{p.summary}</p>
          <ul className="case__points">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="case__stack">
            <span className="sr-only">Stack: </span>
            {p.stack.join(' / ')}
          </p>
          {p.links.length > 0 && (
            <p className="case__links">
              {p.links.map((l) => (
                <a key={l.url} className="link" href={l.url} target="_blank" rel="noreferrer">
                  {l.label}
                  {newTab}
                </a>
              ))}
            </p>
          )}
        </div>
        <div className="case__proof reveal" style={{ '--d': 2 }} data-speed="0.05">
          <Proof type={p.proof} />
        </div>
      </div>
    </li>
  );
}

export default function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHead
          id="work-title"
          solid="Selected"
          outline="work"
          aside="Four systems I designed and built, from a multi-tenant SaaS to a hospital."
        />

        <ol className="cases">
          {featured.map((p, i) => (
            <CaseStudy key={p.id} project={p} index={i + 1} />
          ))}
        </ol>

        <div className="more">
          <h3 className="more__title display split">
            <Words text="More" />{' '}
            <span className="outline">
              <Words text="projects" start={1} />
            </span>
          </h3>
          <ul className="more__list">
            {moreWork.map((m) => (
              <li key={m.name} className="more__row reveal">
                <a href={m.url} target="_blank" rel="noreferrer" className="more__link">
                  <span className="more__name">
                    {m.name}
                    {m.tag && <span className="more__tag">{m.tag}</span>}
                  </span>
                  <span className="more__what">{m.what}</span>
                  <span className="more__stack">{m.stack}</span>
                  <span className="more__year">{m.year}</span>
                  <span className="more__go">{m.linkLabel}</span>
                  {newTab}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="more" aria-labelledby="github-title">
          <h3 id="github-title" className="more__title display split">
            <Words text="More on" />{' '}
            <span className="outline">
              <Words text="GitHub" start={2} />
            </span>
          </h3>
          <ul className="repos">
            {githubRepos.map((r, i) => (
              <li key={r.url} className="reveal" style={{ '--d': i % 3 }}>
                <a href={r.url} target="_blank" rel="noreferrer" className="repo">
                  <span className="repo__name">{r.name}</span>
                  <span className="repo__what">{r.what}</span>
                  <span className="repo__meta">
                    {r.tech} · {r.year}
                  </span>
                  {newTab}
                </a>
              </li>
            ))}
          </ul>
          <p className="more__all reveal">
            <a className="btn btn--line" href={profile.github} target="_blank" rel="noreferrer">
              See all repositories on GitHub
              {newTab}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
