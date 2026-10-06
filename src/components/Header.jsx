import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/content';
import useScrollSpy from '../hooks/useScrollSpy';
import useTheme from '../hooks/useTheme';
import Logo from './Logo';

// Include the hero so no nav item is highlighted while it is in view.
const ids = ['top', ...navLinks.map((l) => l.id)];

function ThemeToggle() {
  const [theme, toggle] = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button type="button" className="text-btn" onClick={toggle} aria-label={`Switch to ${next} theme`}>
      {next === 'dark' ? 'Dark' : 'Light'}
    </button>
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
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resume} download>
                Résumé
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <a className="btn btn--solid btn--sm header__cta" href="#contact">
            Let's talk
          </a>
          <button
            type="button"
            className="text-btn header__menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile" hidden={!open}>
        <ul className="container">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="display" onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} download className="display" onClick={close}>
              Résumé
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="display" onClick={close}>
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
