# Youssef Emad Hussin · Portfolio

Single-page portfolio for a full-stack developer. Built with React and Vite, no UI, icon or animation libraries. Light and dark themes, fully responsive, keyboard accessible, and about 55 KB of gzipped JavaScript.

## Getting started

```bash
npm install
npm run dev      # dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Editing content

All copy lives in [`src/data/content.js`](src/data/content.js):

| Export | What it controls |
|---|---|
| `profile` | Name, contact details, hero sentence, "worked with" names, intro |
| `featured` | The four case studies in **Selected work** (summary, highlights, stack, links, evidence panel) |
| `moreWork` | The compact **More projects** list |
| `githubRepos` | The **More on GitHub** grid of smaller public repositories |
| `experience`, `education`, `certificates` | The **Experience & training** section |
| `stack`, `profile.coreStack` | The **Skills & tools** section |

Projects marked `access: 'private'` or `'client'` show a label instead of a code link.

## Structure

```
public/
  youssef-portrait.webp/.png # transparent black-and-white portrait (hero + about)
  favicon.svg                # git-merge "Y" mark
  profile.jpg                # original photo, used for social previews
  Youssef-Emad-Hussin-Resume.pdf
src/
  data/content.js            # all text content
  sections/                  # Hero, Work, Experience, Skills, About, Contact
  components/                # Header, Footer, SectionHead, Proofs (evidence panels), Icons (hero arrow only)
  hooks/                     # useTheme, useScrollSpy, useReveal
  styles/tokens.css          # colors, type scale, spacing (light + dark)
  styles/base.css            # reset, type, buttons, links, reveal motion
  styles/sections.css        # layout for every section
```

## Motion

All scroll animation runs from one loop in [`src/motion/motion.js`](src/motion/motion.js), with [Lenis](https://github.com/darkroomengineering/lenis) for inertial wheel scrolling:

- Load curtain with the logo drawing itself, then masked word reveals in the hero
- Hero lines part, text fades and the portrait drifts as you scroll; the portrait follows the mouse
- Rotating "See my work" ring, a tilted ribbon and an outlined band that speed up with scrolling
- Git-graph line in the left gutter (desktop): a node per section heading and per job in Experience, filled as you scroll, with the current node in red (`src/components/Spine.jsx`)
- `data-speed` (vertical) and `data-drift` (horizontal) parallax on any element
- Section titles reveal word by word (`.split` + `Words` component)
- Header hides on scroll down and returns on scroll up

Everything is skipped for visitors with `prefers-reduced-motion`.

## Typography

- **Display:** [Anton](https://fonts.google.com/specimen/Anton), a free match for the condensed headline style. To use a licensed font instead, change `--font-display` in `src/styles/tokens.css`.
- **Body:** the system font on Apple devices (SF Pro), [Inter](https://fonts.google.com/specimen/Inter) everywhere else.

## Previous version

The old 3D version is backed up in `legacy-3d/` (ignored by git). Delete the folder when you no longer need it.
