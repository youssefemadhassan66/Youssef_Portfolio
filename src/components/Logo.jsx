/**
 * Wordmark. The "Y" is drawn as a git merge: two branches (commits at the tips)
 * join at a red merge commit and continue as one trunk.
 */
export default function Logo() {
  return (
    <span className="logo__word" aria-hidden="true">
      <svg className="logo__y" viewBox="0 0 34 46" focusable="false">
        <path className="logo__branches" d="M7 8 L17 27 L27 8 M17 27 V46" pathLength="1" />
        <circle className="logo__commit" cx="7" cy="8" r="6.6" />
        <circle className="logo__commit" cx="27" cy="8" r="6.6" />
        <circle className="logo__merge" cx="17" cy="27" r="6.4" />
      </svg>
      oussef
    </span>
  );
}
