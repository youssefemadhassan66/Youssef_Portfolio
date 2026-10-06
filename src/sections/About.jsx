import { profile } from '../data/content';
import SectionHead from '../components/SectionHead';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead id="about-title" solid="About" outline="me" />

        <div className="about">
          <figure className="about__photo reveal">
            <div className="about__media" data-speed="-0.05">
              <picture>
                <source srcSet="./youssef-portrait.webp" type="image/webp" />
                <img
                  src="./youssef-portrait.png"
                  alt="Portrait of Youssef Emad Hussin"
                  width="960"
                  height="1173"
                  loading="lazy"
                />
              </picture>
              {/* Colour version fades in on hover. */}
              <img
                className="about__color"
                src="./youssef-portrait-color.webp"
                alt=""
                width="960"
                height="1173"
                loading="lazy"
              />
            </div>
          </figure>

          <div className="about__text">
            <p className="about__lead reveal">{profile.intro}</p>
            <p className="reveal" style={{ '--d': 1 }}>
              I studied Computer Science and AI at Cairo University, then went deep on the parts of a product
              most people skip: the schema, the sync job, the webhook that has to be idempotent, the page that
              has to load in two seconds on a mid-range phone.
            </p>
            <p className="reveal" style={{ '--d': 2 }}>
              I work across Node.js, .NET and Python on the back end and React or Angular on the front. I also
              taught programming to 100+ students at iSchool, which is where I learned to explain a system in
              one sentence.
            </p>
            <p className="about__cta reveal" style={{ '--d': 3 }}>
              <a className="btn btn--solid" href={profile.resume} download>
                Download resume
              </a>
              <a className="btn btn--line" href="#contact">
                Contact me
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
