import { Fragment } from 'react';
import { marquee } from '../data/content';

const COPIES = 3;

function Row({ words, dir, outline }) {
  return (
    <div className={`band__row${outline ? ' band__row--outline' : ''}`} data-marquee={dir}>
      {Array.from({ length: COPIES }, (_, c) => (
        <div className="band__copy" key={c}>
          {words.map((w) => (
            <Fragment key={w}>
              <span className={outline ? 'outline' : undefined}>{w}</span>
              <span className="band__dot" />
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

/** Two bands of big type that drift sideways and speed up as you scroll. Decorative. */
export default function Marquee() {
  return (
    <div className="band" aria-hidden="true">
      <Row words={marquee[0]} dir={1} />
      <Row words={marquee[1]} dir={-1} outline />
    </div>
  );
}
