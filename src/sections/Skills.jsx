import { profile, skillGroups } from '../data/content';
import SectionHead from '../components/SectionHead';

// Core stack shown two per line; alternate lines drift in opposite directions on scroll.
const rows = [];
for (let i = 0; i < profile.coreStack.length; i += 2) rows.push(profile.coreStack.slice(i, i + 2));

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead
          id="skills-title"
          solid="Skills"
          outline="& tools"
          aside="Filled: what I use every day. Outlined: what I have shipped with in real projects."
        />

        <p className="stack-wall display reveal" aria-label={`Core stack: ${profile.coreStack.join(', ')}`}>
          {rows.map((pair, r) => (
            <span key={pair[0]} className="stack-row" aria-hidden="true" data-drift={r % 2 ? -90 : 90}>
              <span>{pair[0]}</span> {pair[1] && <span className="outline">{pair[1]}</span>}
            </span>
          ))}
        </p>

        <div className="skills">
          {skillGroups.map((g, i) => (
            <div key={g.area} className="skills__row reveal" style={{ '--d': i % 3 }}>
              <span className="skills__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="skills__area display">{g.area}</h3>
              <ul className="skills__list">
                {g.items.map((it) => (
                  <li key={it.name} className={it.core ? 'is-core' : undefined}>
                    {it.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
