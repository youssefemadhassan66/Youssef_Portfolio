import { useCallback, useEffect, useState } from 'react';

const query = '(prefers-color-scheme: dark)';

function currentTheme() {
  const set = document.documentElement.getAttribute('data-theme');
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia(query).matches ? 'dark' : 'light';
}

/** Light/dark theme that follows the system until the visitor picks one. */
export default function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setTheme(currentTheme());
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage blocked: theme still applies for this visit */
    }
    setTheme(next);
  }, []);

  return [theme, toggle];
}
