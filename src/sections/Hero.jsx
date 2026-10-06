import { useEffect, useState } from 'react';
import { profile } from '../data/content';
import { ArrowUpRight } from '../components/Icons';

const RING_TEXT = 'See my work • See my work • ';

/** Current time in the given zone as HH:MM, refreshed every 20 seconds. */
function useClock(timeZone) {
  const read = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone }).format(
      new Date(),
    );
  const [time, setTime] = useState(read);
  useEffect(() => {
    const id = setInterval(() => setTime(read()), 20000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

export default function Hero() {
  const { hero, timeZone, location } = profile;
  const time = useClock(timeZone);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__top">
          <p className="hero__hello rise" style={{ '--d': 0 }}>
            {hero.hello}
          </p>
          <p className="hero__time rise" style={{ '--d': 1 }} aria-hidden="true">
            <span>{location}</span>
            <time>{time}</time>
          </p>
        </div>

        <h1 id="hero-title" className="hero__title display">
          <span className="hero__line hero__line--one">
            <span className="w hero__drift" style={{ '--d': 1 }}>
              <span>{hero.line1}</span>
            </span>
          </span>
          <span className="hero__line hero__line--two">
            <span className="w hero__drift" style={{ '--d': 2 }}>
              <span>
                <span className="outline">{hero.line2}</span>
                <span className="hero__stop">.</span>
              </span>
            </span>
          </span>
        </h1>

        {/* Decorative: the portrait stands on a red disc, the logo's merge dot enlarged. */}
        <div className="hero__stage" aria-hidden="true">
          <span className="hero__disc" />
          <span className="hero__portrait">
            <picture>
              <source srcSet="./youssef-portrait.webp" type="image/webp" />
              <img src="./youssef-portrait.png" alt="" width="960" height="1173" fetchpriority="high" />
            </picture>
          </span>
          <a href="#work" className="hero__orb" tabIndex={-1}>
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
        </div>

        <div className="hero__copy">
          <p className="hero__summary rise" style={{ '--d': 3 }}>
            {hero.summary}
          </p>
          <div className="hero__ctas rise" style={{ '--d': 4 }}>
            <a className="btn btn--solid" href="#work">
              You need a developer
            </a>
            <a className="btn btn--line" href="#contact">
              You have a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
