import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/content';
import useScrollSpy from '../hooks/useScrollSpy';
import useTheme from '../hooks/useTheme';
import Logo from './Logo';

// Include the hero so no nav item is highlighted while it is in view.
const ids = ['top', ...navLinks.map((l) => l.id)];
// Contact is the "Let's talk" button on desktop, so it is left out of the centre links.
const primary = navLinks.filter((l) => l.id !== 'contact');
const newTab = <span className="sr-only"> (opens in a new tab)</span>;

/** Two-option text switch, active option underlined. */
function ThemeSwitch() {
  const [theme, toggle] = useTheme();
  return (
    <div className="theme-switch" role="group" aria-label="Colour theme">
      <button type="button" aria-pressed={theme === 'light'} onClick={() => theme !== 'light' && toggle()}>
        Light
      </button>
      <span aria-hidden="true">/</span>
      <button type="button" aria-pressed={theme === 'dark'} onClick={() => theme !== 'dark' && toggle()}>
        Dark
      </button>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container header__bar">
        <a href="#top" className="logo" aria-label={`${profile.name}, back to top`} onClick={close}>
          <Logo />
        </a>

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {primary.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub{newTab}
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <div className="header__desktop">
            <ThemeSwitch />
            <a className="btn btn--line btn--sm" href={profile.resume} download>
              Resume
            </a>
          </div>
          <a className="btn btn--solid btn--sm header__cta" href="#contact">
            Let's talk
          </a>
          <button
            type="button"
            className="header__menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile" hidden={!open}>
        <div className="container">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="display" onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav__foot">
            <a className="link" href={profile.resume} download onClick={close}>
              Resume (PDF)
            </a>
            <a className="link" href={profile.github} target="_blank" rel="noreferrer">
              GitHub{newTab}
            </a>
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
}
