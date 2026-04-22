# By Degrees

American policy, left to right — thirty-eight laws enacted between 1976 and 2026, arranged by political position rather than chronology.

Rendered as a design-monograph web reader modeled on *Déjà Vu*: one law per page, paginated left-to-right with keyboard, wheel, or swipe. Each page paints itself with a color from a blue → white → red ramp keyed to the law's spectrum score (−5 far left … +5 far right).

## What's in the book

Each page carries:

- A **title** (the law)
- A **jurisdiction** line (Oregon, Federal, Texas, etc.)
- A **year** of enactment or signature
- A **spectrum** score (−5 to +5)
- A **gesture** (the punch)
- A **body** paragraph of factual context
- A **citation** (statute number, public law, case law)
- A **primary-source link**
- An **In plain terms** gloss

Navigation is strictly by spectrum. Ties broken by year ascending.

## The color ramp

| Score | Label            | Background |
| ----- | ---------------- | ---------- |
| −5    | far left         | deep blue  |
| −3    | left             | blue       |
| −1    | moderate left    | pale blue  |
|  0    | center           | neutral    |
| +1    | moderate right   | pale red   |
| +3    | right            | red        |
| +5    | far right        | deep red   |

The reader's body background crossfades from one page to the next so the spectrum drift is felt, not just read.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
```

Static output lands in `build/`.

## Keybindings

- `→` or horizontal scroll — next (rightward) page
- `←` — previous (leftward) page
- `↓` / `↑` / Space / PageDown / PageUp — scroll the current page
- `Esc` — cover

## Author

Andrew Gauger
