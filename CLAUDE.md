# CLAUDE.md — US High School English/Language Arts

Project-specific instructions for agents working in this repo.

## Learning Mascot: Pip the Bookworm

### Mascot File Index

The canonical files for this mascot. When editing any of these, update
the others in the same turn so they stay in sync.

| File | Purpose |
|------|---------|
| [`docs/img/mascot/character-sheet.md`](docs/img/mascot/character-sheet.md) | Canonical identity document (name, species, colors, voice). Source of truth. |
| [`docs/img/mascot/image-prompts.md`](docs/img/mascot/image-prompts.md) | Self-contained AI prompts for regenerating each pose. |
| [`docs/img/mascot/neutral.png`](docs/img/mascot/neutral.png) | Default / general-purpose pose. |
| [`docs/img/mascot/welcome.png`](docs/img/mascot/welcome.png) | Chapter-opening pose. |
| [`docs/img/mascot/thinking.png`](docs/img/mascot/thinking.png) | Key-concept pose. |
| [`docs/img/mascot/tip.png`](docs/img/mascot/tip.png) | Hint / helpful-guidance pose. |
| [`docs/img/mascot/warning.png`](docs/img/mascot/warning.png) | Common-mistake / pitfall pose. |
| [`docs/img/mascot/encouraging.png`](docs/img/mascot/encouraging.png) | Difficult-content / struggle pose. |
| [`docs/img/mascot/celebration.png`](docs/img/mascot/celebration.png) | End-of-chapter / achievement pose. |
| [`docs/css/mascot.css`](docs/css/mascot.css) | Custom admonition styles for the seven pose contexts. |
| [`docs/learning-graph/mascot-test.md`](docs/learning-graph/mascot-test.md) | Rendering test page that exercises every admonition style. |

### Character Overview

- **Name**: Pip
- **Species**: Bookworm (cute cartoon worm)
- **Personality**: Warm, curious, encouraging, slightly playful
- **Catchphrase**: "Let's read between the lines!"
- **Visual**: Small plump segmented cartoon worm, indigo (#3f51b5) body with subtle orange (#ff9800) accents, round black glasses, big friendly eyes, gentle closed-mouth smile. No other clothing or props.

### Voice Characteristics

- Uses accessible, encouraging language calibrated for US high school students (grades 9–12). Never condescending.
- Occasionally references books, authors, word origins, or literary devices — the kind a well-read teen will recognize.
- Refers to students as "readers" or "writers" rather than "students."
- Always referred to by name (Pip) or with they/them pronouns — never gendered.
- Signature phrases: "Let's read between the lines!", "What's the story here?", "Every word tells a story."

### Mascot Admonition Format

Always place mascot images in the admonition body, never in the title bar:

    !!! mascot-welcome "Title Here"
        <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Pip waving welcome">
        Admonition text goes here after the img tag.

**Image path depth:** the `src` is relative to the rendered page URL
(MkDocs uses directory URLs). For a chapter at
`docs/chapters/01-intro/index.md`, use `../../img/mascot/`. For a page
at `docs/learning-graph/mascot-test.md`, also `../../img/mascot/`.

### Placement Rules

| Context | Admonition Type | Frequency |
|---------|----------------|-----------|
| General note / sidebar | `mascot-neutral` | As needed |
| Chapter opening | `mascot-welcome` | One per chapter |
| Key concept | `mascot-thinking` | 2–3 per chapter |
| Helpful tip | `mascot-tip` | As needed |
| Common mistake | `mascot-warning` | As needed |
| Difficult content | `mascot-encourage` | Where readers may struggle |
| Section completion | `mascot-celebration` | One per chapter (end) |

**Hard limits:** ≤6 mascot admonitions per chapter. Never back-to-back.
At most one `welcome` and one `celebration` per chapter.

### Do's and Don'ts

**Do:**

- Use Pip to introduce new topics warmly.
- Include the catchphrase ("Let's read between the lines!") in the first welcome admonition of the book and sparingly elsewhere.
- Keep dialogue brief (1–3 sentences).
- Match the pose/image to the content type.

**Don't:**

- Use Pip more than 5–6 times per chapter.
- Put mascot admonitions back-to-back.
- Use the mascot for purely decorative purposes.
- Change Pip's personality, pronouns, or speech patterns.
- Give Pip clothing, hats, scarves, or other props beyond the glasses.
