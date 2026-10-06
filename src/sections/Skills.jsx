import { profile, stack } from '../data/content';
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
          aside="Grouped by where it sits in a product. No percentages, just what I ship with."
        />

        <p className="stack-wall display reveal" aria-label={`Core stack: ${profile.coreStack.join(', ')}`}>
          {rows.map((pair, r) => (
            <span key={pair[0]} className="stack-row" aria-hidden="true" data-drift={r % 2 ? -90 : 90}>
              <span>{pair[0]}</span> {pair[1] && <span className="outline">{pair[1]}</span>}
            </span>
          ))}
        </p>

        <div className="stack-cols">
          {stack.map((g, i) => (
            <div key={g.area} className="stack-col reveal" style={{ '--d': i }}>
              <h3 className="label">{g.area}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
