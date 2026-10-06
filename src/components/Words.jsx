import { Fragment } from 'react';

/**
 * Splits text into words, each inside a clipping mask, so a parent with the
 * `split` class can slide them up one after another when it scrolls into view.
 * `start` offsets the stagger index when one heading uses several Words.
 */
export default function Words({ text, start = 0 }) {
  const words = text.split(' ');
  return words.map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <span className="w" style={{ '--i': start + i }}>
        <span>{w}</span>
      </span>
      {i < words.length - 1 && ' '}
    </Fragment>
  ));
}
