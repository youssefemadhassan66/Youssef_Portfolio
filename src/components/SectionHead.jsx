import Words from './Words';

/** Section title in the hero's language: solid words, then outlined words, revealed word by word. */
export default function SectionHead({ id, solid, outline, aside }) {
  const solidCount = solid.split(' ').length;
  return (
    <header className="section-head">
      <h2 id={id} className="section-title display split">
        <Words text={solid} />{' '}
        <span className="outline">
          <Words text={outline} start={solidCount} />
        </span>
      </h2>
      {aside && (
        <p className="section-aside reveal" style={{ '--d': 2 }}>
          {aside}
        </p>
      )}
    </header>
  );
}
