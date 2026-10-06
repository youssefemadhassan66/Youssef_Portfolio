import { useState } from 'react';
import { profile } from '../data/content';
import Words from '../components/Words';

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked: the mailto link still works */
    }
  }
  return (
    <button type="button" className="contact__copy" onClick={copy}>
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="contact__title display split">
          <Words text="Let's work" />{' '}
          <span className="outline">
            <Words text="together." start={2} />
          </span>
        </h2>

        <p className="contact__lead reveal" style={{ '--d': 1 }}>
          Hiring for a role, or need a web app, dashboard or API built? Send a line. I usually reply within a day.
        </p>

        <div className="contact__email-row reveal" style={{ '--d': 2 }}>
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <CopyEmail />
        </div>

        <ul className="contact__links reveal" style={{ '--d': 3 }}>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={profile.phoneHref}>{profile.phone}</a>
          </li>
          <li>
            <a href={profile.resume} download>
              Résumé (PDF)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
