import { useEffect, useState } from 'react';

/** Returns the id of the section currently crossing the middle of the viewport. */
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(null);
  const key = ids.join(',');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    key.split(',').forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [key]);

  return active;
}
