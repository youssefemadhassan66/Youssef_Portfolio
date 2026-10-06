import { certificates, education, experience } from '../data/content';
import SectionHead from '../components/SectionHead';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHead id="experience-title" solid="Experience" outline="& training" />

        <ol className="xp">
          {experience.map((x, i) => (
            <li key={x.role + x.org} className="xp__row reveal">
              <p className="xp__period">{x.period}</p>
              <div className="xp__who">
                <h3 id={`xp-${i}`} className="xp__role display">
                  {x.role}
                </h3>
                <p className="xp__org">{x.org}</p>
              </div>
              <ul className="xp__points">
                {x.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="creds">
          <div className="creds__col reveal">
            <h3 className="label">Education</h3>
            <p className="creds__item">
              <strong>{education.degree}</strong>
              <span>
                {education.org} · {education.year}
              </span>
            </p>
          </div>
          <div className="creds__col reveal" style={{ '--d': 1 }}>
            <h3 className="label">Certificates</h3>
            <ul>
              {certificates.map((c) => (
                <li key={c.name} className="creds__item">
                  <strong>{c.name}</strong>
                  <span>
                    {c.org} · {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
