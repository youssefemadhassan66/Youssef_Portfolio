import { Fragment } from 'react';
import { marquee } from '../data/content';

const COPIES = 3;

function Row({ words, dir, outline }) {
  return (
    <div className="band__row" data-marquee={dir}>
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

/**
 * A tilted ink ribbon over the base of the hero portrait, then a straight outlined
 * ribbon. Both drift sideways and speed up with scrolling. Decorative.
 */
export default function Marquee() {
  return (
    <div className="band" aria-hidden="true">
      <div className="band__tape band__tape--ink">
        <Row words={marquee[0]} dir={1} />
      </div>
      <div className="band__tape band__tape--paper">
        <Row words={marquee[1]} dir={-1} outline />
      </div>
    </div>
  );
}
