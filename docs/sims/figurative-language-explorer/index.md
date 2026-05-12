---
title: Figurative Language Explorer
description: "Identify (L1 — Remember) and distinguish (L2 — Understand) the nine major figures of speech by name, definition, and example, and recognize each when encountered in a literary passage."
status: scaffold
library: p5.js
bloom_level: 2
image: /sims/figurative-language-explorer/figurative-language-explorer.png
og:image: /sims/figurative-language-explorer/figurative-language-explorer.png
---

# Figurative Language Explorer

<iframe src="main.html" width="100%" height="452" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Browse the nine tiles — one for each figure of speech — and hover over any tile to highlight it, then click to open its detail panel. In the detail panel you will find the full definition, a quoted literary example with attribution, a "How to spot it" tip, and an analysis prompt to guide your writing. Use the "Quiz Me" button at the bottom to test yourself: a quoted literary passage appears and you select which figure of speech is being used, with immediate feedback and hints on incorrect answers.

## Learning Objective

Identify (L1 — Remember) and distinguish (L2 — Understand) the nine major figures of speech by name, definition, and example, and recognize each when encountered in a literary passage.

## Specification

The full specification below is extracted from
[Chapter 4: Figurative Language, Tone, and Author's Style](../../chapters/04-figurative-language/index.md).

```text
Type: Interactive Infographic
**sim-id:** figurative-language-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning Objective:** Identify (L1 — Remember) and distinguish (L2 — Understand) the nine major figures of speech by name, definition, and example, and recognize each when encountered in a literary passage.

**Description:** A hexagonal grid layout (or radial arrangement) of nine clickable tiles, one for each figure of speech covered in the chapter: Metaphor, Simile, Personification, Hyperbole, Verbal Irony, Situational Irony, Dramatic Irony, Symbolism, and Allusion. Each tile displays the figure's name in bold and a brief one-line description. Clicking a tile expands a detail panel.

**Tile contents (default):**
- Figure name (large, bold)
- One-line definition (small text beneath the name)
- Color-coded by category: (1) comparison figures — Metaphor, Simile, Personification in warm amber; (2) emphasis figures — Hyperbole in orange; (3) irony figures — Verbal, Situational, Dramatic Irony in cool blue; (4) extended meaning figures — Symbolism, Allusion in deep purple)

**Detail panel (after clicking a tile):**
- Full name and definition (2–3 sentences)
- One concrete literary example with a quoted passage (2–4 lines) and attribution (author, title, date)
- A "How to spot it" tip in a highlighted box (1–2 sentences describing what to look for in a text)
- A "How to analyze it" prompt in a different highlighted box (1–2 sentences with a question to ask when writing about this figure)
- Close button (×) to return to the tile grid

**Interactions:** Hovering over any tile shows a shadow highlight to signal interactivity. Clicking opens the detail panel. Pressing Escape or clicking outside the panel closes it. A "Quiz Me" button at the bottom presents the user with a quoted literary passage and asks them to identify which figure is being used; three answer options are shown; the correct answer triggers a brief confirmation message and the incorrect answer shows a hint.

**Canvas:** Responsive, fills available width, minimum height 480px. Tiles reflow to a 3-column grid on narrow screens. Re-renders on window resize.

**Data:** All nine figures of speech listed above must appear as tiles. The quiz function should cycle through at least 5 different quoted passages with clear correct answers.
```

## Related Resources

- [Chapter 4: Figurative Language, Tone, and Author's Style](../../chapters/04-figurative-language/index.md)

## Lesson Plan

This MicroSim can be used as an in-class activity or assigned for independent practice.

1. **Introduction** (5 min): Review the key concept before opening the sim.
2. **Exploration** (10 min): Students interact with the sim and record observations.
3. **Discussion** (5 min): Class shares findings and discusses connections to the text.

## References

- Common Core State Standards for English Language Arts (CCSS.ELA)
- National Council of Teachers of English (NCTE) framework

## Bloom's Taxonomy

- **Bloom Level:** 2 — Understand
- **Bloom Verb:** Distinguish
- **Library:** p5.js
