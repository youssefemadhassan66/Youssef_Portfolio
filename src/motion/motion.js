import Lenis from 'lenis';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
const HEADER_OFFSET = 80;

/**
 * Scroll-driven motion, all from one requestAnimationFrame loop:
 * - inertial wheel scrolling (Lenis) and smooth anchor links
 * - hero parallax (`--hero-p` scroll progress, `--mx` pointer position)
 * - text ring and marquee rows that speed up with scrolling
 * - element parallax via `data-speed` (vertical) and `data-drift` (horizontal)
 * - header that hides on scroll down and returns on scroll up
 *
 * Does nothing for visitors who prefer reduced motion. Returns a cleanup function.
 */
export function startMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const lenis = new Lenis({ autoRaf: false, lerp: 0.085, smoothWheel: true });

  const hero = document.querySelector('.hero');
  const header = document.querySelector('.header');
  const ring = document.querySelector('.hero__ring');
  const rows = [...document.querySelectorAll('[data-marquee]')].map((el) => ({
    el,
    dir: Number(el.dataset.marquee) || 1,
    copy: 0,
    visible: true,
  }));
  const items = [...document.querySelectorAll('[data-speed], [data-drift]')].map((el) => ({
    el,
    speed: parseFloat(el.dataset.speed || '0'),
    drift: parseFloat(el.dataset.drift || '0'),
    top: 0,
    h: 0,
  }));

  let heroH = 1;

  // Cache untransformed positions so the loop never reads layout.
  function measure() {
    const y = window.scrollY;
    heroH = hero ? hero.offsetHeight : 1;
    for (const it of items) {
      it.el.style.translate = 'none';
      const r = it.el.getBoundingClientRect();
      it.top = r.top + y;
      it.h = r.height;
    }
    for (const r of rows) r.copy = r.el.firstElementChild ? r.el.firstElementChild.offsetWidth : 0;
  }
  measure();
  const ro = new ResizeObserver(measure);
  ro.observe(document.body);
  document.fonts?.ready.then(measure);
  window.addEventListener('load', measure);

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const row = rows.find((r) => r.el === e.target);
      if (row) row.visible = e.isIntersecting;
    }
  });
  rows.forEach((r) => io.observe(r.el));

  // Anchor links: eased scroll with header offset, then move focus for keyboard users.
  function onClick(e) {
    const a = e.target.closest?.('a[href^="#"]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const id = a.getAttribute('href').slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    e.preventDefault();
    const toTop = id === 'top' || id === 'main';
    lenis.scrollTo(toTop ? 0 : target, {
      offset: toTop ? 0 : -HEADER_OFFSET,
      duration: 1.4,
      easing: easeOutQuart,
      onComplete: () => {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      },
    });
  }
  document.addEventListener('click', onClick);

  // Pointer position for the hero (fine pointers only).
  let mxTarget = 0;
  let mx = 0;
  const onMove = (e) => {
    mxTarget = (e.clientX / window.innerWidth) * 2 - 1;
  };
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (finePointer) window.addEventListener('pointermove', onMove, { passive: true });

  let raf = 0;
  let lastT = performance.now();
  let lastY = window.scrollY;
  let ringDeg = 0;
  let headerHidden = false;
  const t0 = lastT;

  function frame(now) {
    lenis.raf(now);
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    const y = window.scrollY;
    const dy = y - lastY;
    lastY = y;
    const vh = window.innerHeight;

    if (hero && y < heroH * 1.2) {
      mx += (mxTarget - mx) * 0.06;
      hero.style.setProperty('--hero-p', clamp(y / (heroH * 0.8), 0, 1).toFixed(4));
      hero.style.setProperty('--mx', mx.toFixed(4));
      if (ring) {
        ringDeg += dt * 16 + dy * 0.3;
        ring.style.rotate = `${ringDeg.toFixed(2)}deg`;
      }
    }

    if (header && !header.classList.contains('is-open')) {
      const pastHero = y > heroH * 0.55;
      if (pastHero && dy > 3 && !headerHidden) {
        header.classList.add('is-hidden');
        headerHidden = true;
      } else if ((dy < -3 || !pastHero) && headerHidden) {
        header.classList.remove('is-hidden');
        headerHidden = false;
      }
    }

    for (const it of items) {
      const prog = (it.top + it.h / 2 - y - vh / 2) / vh;
      if (prog < -1.5 || prog > 1.5) continue;
      it.el.style.translate = `${(prog * it.drift).toFixed(1)}px ${(-prog * it.speed * vh).toFixed(1)}px`;
    }

    const drift = ((now - t0) / 1000) * 38;
    for (const r of rows) {
      if (!r.visible || !r.copy) continue;
      const off = (drift + y * 0.45) * r.dir;
      const x = -(((off % r.copy) + r.copy) % r.copy);
      r.el.style.translate = `${x.toFixed(1)}px 0`;
    }

    raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    document.removeEventListener('click', onClick);
    window.removeEventListener('load', measure);
    window.removeEventListener('pointermove', onMove);
    lenis.destroy();
    for (const it of items) it.el.style.translate = '';
    for (const r of rows) r.el.style.translate = '';
    header?.classList.remove('is-hidden');
    hero?.style.removeProperty('--hero-p');
    hero?.style.removeProperty('--mx');
  };
}
