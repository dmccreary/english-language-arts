---
title: Poetry Forms Comparison
description: "Compare and contrast (L2 — Understand) the four major poetry forms covered in this chapter by examining their key formal characteristics side by side."
status: scaffold
library: p5.js
bloom_level: 2
image: /sims/poetry-forms-explorer/poetry-forms-explorer.png
og:image: /sims/poetry-forms-explorer/poetry-forms-explorer.png
---

# Poetry Forms Comparison

<iframe src="main.html" width="100%" height="462" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Browse the four poetry forms — sonnet, free verse, haiku, and ode — displayed side by side to compare their formal characteristics (line count, meter, rhyme scheme, stanzaic structure). Click any row to expand a comparative explanation and see an example from each form. Use the quiz feature to test your ability to identify a poetic form from an excerpt, and check your reasoning against the model explanation.

## Learning Objective

Compare and contrast (L2 — Understand) the four major poetry forms covered in this chapter by examining their key formal characteristics side by side.

## Specification

The full specification below is extracted from
[Chapter 2: Literary Genres and Text Forms](../../chapters/02-literary-genres/index.md).

```text
Type: Interactive Infographic
**sim-id:** poetry-forms-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning Objective:** Compare and contrast (L2 — Understand) the four major poetry forms covered in this chapter by examining their key formal characteristics side by side.

**Description:** A comparative visual display showing the four poetry forms (Epic Poetry, Sonnet, Lyric Poetry, Free Verse) arranged in a 2×2 grid of clickable cards. Each card displays the form's name and three key formal characteristics. When a card is clicked, it expands into a detail panel.

**Default card layout (before click):**
- Form name in large bold text
- Three bullet characteristics in small text, for example:
  - Epic Poetry: "Length: Very long narrative" / "Meter: Dactylic hexameter (traditional)" / "Structure: Books or cantos"
  - Sonnet: "Length: Exactly 14 lines" / "Meter: Iambic pentameter" / "Structure: Three quatrains + couplet (English) or octave + sestet (Italian)"
  - Lyric Poetry: "Length: Short to medium" / "Meter: Varies; often metered" / "Structure: Stanzas; speaker-centered"
  - Free Verse: "Length: Any" / "Meter: None fixed" / "Structure: Poet-determined line and stanza breaks"
- A color-coded border matching the poetry category palette

**Expanded panel (after clicking a card):**
- Scrollable overlay on top of the grid
- Full form description (3–4 sentences)
- A short representative excerpt (4–8 lines) displayed in a bordered monospace box with line numbers
- Two or three canonical examples (title, author, approximate date)
- Key close-reading question for that form in a highlighted box
- Close button (×) to return to the grid

**Colors:**
- Epic Poetry: warm amber (#F57F17)
- Sonnet: deep teal (#00695C)
- Lyric Poetry: violet (#6A1B9A)
- Free Verse: slate blue (#1565C0)

**Canvas:** Responsive, minimum 600px wide. Cards reflow to a single column on narrow screens. Window resize redraws the grid.

**Interactions:** Hovering over a card raises a slight shadow to signal interactivity. Clicking opens the detail panel. Pressing Escape or clicking outside the panel closes it. All four forms from the chapter concept list must be represented.
```

## Related Resources

- [Chapter 2: Literary Genres and Text Forms](../../chapters/02-literary-genres/index.md)

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
- **Bloom Verb:** Compare and Contrast
- **Library:** p5.js
