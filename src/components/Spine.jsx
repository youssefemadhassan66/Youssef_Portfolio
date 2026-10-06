import { experience } from '../data/content';

// Section titles are the branch points; each job in Experience is a commit on the line.
const MARKS = [
  { id: 'work-title', kind: 'section' },
  { id: 'experience-title', kind: 'section' },
  ...experience.map((_, i) => ({ id: `xp-${i}`, kind: 'commit' })),
  { id: 'skills-title', kind: 'section' },
  { id: 'about-title', kind: 'section' },
  { id: 'contact-title', kind: 'section', end: true },
];

/**
 * A git-graph line in the left gutter. src/motion/motion.js positions the nodes
 * next to their headings, fills the line as you scroll, and marks the current
 * node in red like the merge commit in the logo. Decorative and desktop only.
 */
export default function Spine() {
  return (
    <div className="spine" aria-hidden="true">
      <i className="spine__line" />
      <i className="spine__fill" />
      {MARKS.map((m) => (
        <span
          key={m.id}
          data-for={m.id}
          className={`spine__node spine__node--${m.kind}${m.end ? ' spine__node--end' : ''}`}
        />
      ))}
    </div>
  );
}
