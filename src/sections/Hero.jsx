import { profile } from '../data/content';
import { ArrowUpRight } from '../components/Icons';

const RING_TEXT = 'See my work • See my work • ';

export default function Hero() {
  const { hero, workedWith } = profile;

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="hero__hello rise" style={{ '--d': 0 }}>
          <span className="wave" aria-hidden="true">
            👋
          </span>
          , {hero.hello}
        </p>

        <h1 id="hero-title" className="hero__title display">
          <span className="hero__line hero__line--one">
            <span className="w hero__drift" style={{ '--d': 1 }}>
              <span>{hero.line1}</span>
            </span>
            {/* Decorative duplicate of the "You need a developer" button. */}
            <a href="#work" className="hero__orb" aria-hidden="true" tabIndex={-1}>
              <svg className="hero__ring" viewBox="0 0 100 100" focusable="false">
                <defs>
                  <path id="ring-path" d="M50 50 m-40 0 a40 40 0 1 1 80 0 a40 40 0 1 1 -80 0" />
                </defs>
                <text>
                  <textPath href="#ring-path" textLength="251" lengthAdjust="spacing">
                    {RING_TEXT}
                  </textPath>
                </text>
              </svg>
              <ArrowUpRight />
            </a>
          </span>
          <span className="hero__line hero__line--two">
            <span className="w hero__drift" style={{ '--d': 2 }}>
              <span className="outline">{hero.line2}</span>
            </span>
            <span className="hero__portrait" aria-hidden="true">
              <picture>
                <source srcSet="./youssef-portrait.webp" type="image/webp" />
                <img src="./youssef-portrait.png" alt="" width="960" height="1173" fetchpriority="high" />
              </picture>
            </span>
          </span>
          <span className="sr-only"> {hero.after}</span>
        </h1>

        <div className="hero__foot">
          <p className="hero__after rise" style={{ '--d': 3 }} aria-hidden="true">
            {hero.after}
          </p>
          <div className="hero__worked rise" style={{ '--d': 4 }}>
            <p className="sr-only">Worked with</p>
            <ul>
              {workedWith.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero__ctas rise" style={{ '--d': 5 }}>
          <a className="btn btn--solid" href="#work">
            You need a developer
          </a>
          <a className="btn btn--line" href="#contact">
            You have a project
          </a>
        </div>
      </div>
    </section>
  );
}
