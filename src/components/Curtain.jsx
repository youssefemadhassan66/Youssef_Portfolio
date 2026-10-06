import { useState } from 'react';
import Logo from './Logo';

/**
 * Load curtain: the logo draws itself, then the panel lifts to reveal the page.
 * Only shown when the inline script in index.html added the `intro` class
 * (it skips it for visitors who prefer reduced motion).
 */
export default function Curtain() {
  const [done, setDone] = useState(() => !document.documentElement.classList.contains('intro'));
  if (done) return null;
  return (
    <div
      className="curtain"
      aria-hidden="true"
      onAnimationEnd={(e) => e.target === e.currentTarget && setDone(true)}
    >
      <span className="curtain__logo">
        <Logo />
      </span>
    </div>
  );
}
