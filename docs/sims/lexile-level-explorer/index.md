---
title: Lexile Level Explorer — Text Complexity in Action
description: "Apply understanding of Lexile levels to identify appropriately challenging texts for a given reader (Bloom Level 3 — Apply: use, demonstrate)."
status: scaffold
library: p5.js
bloom_level: 3
image: /sims/lexile-level-explorer/lexile-level-explorer.png
og:image: /sims/lexile-level-explorer/lexile-level-explorer.png
---

# Lexile Level Explorer — Text Complexity in Action

<iframe src="main.html" width="100%" height="432" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Enter or select a reader's Lexile score to see which texts in the library fall within an appropriate challenge range — typically within 100L above and 50L below the reader's measure. Browse texts at different Lexile levels to compare vocabulary density, sentence length, and overall readability. Explore how a single passage's apparent difficulty shifts as its Lexile score changes, building your intuition for matching readers to appropriately challenging texts.

## Learning Objective

Apply understanding of Lexile levels to identify appropriately challenging texts for a given reader (Bloom Level 3 — Apply: use, demonstrate).

## Specification

The full specification below is extracted from
[Chapter 1: Chapter 1 — Foundations of English Language Arts](../../chapters/01-foundations/index.md).

```text
Type: MicroSim
**sim-id:** lexile-level-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Apply understanding of Lexile levels to identify appropriately challenging texts for a given reader (Bloom Level 3 — Apply: use, demonstrate).

**Canvas dimensions:** Responsive width (minimum 640px), height 420px. Must reflow on window resize events.

**Layout:**

- Top section (120px tall): Title "Lexile Level Explorer" in bold. Below it, a horizontal slider labeled "My Current Lexile Level" ranging from 200 to 1700 in increments of 10, defaulting to 1050 (low end of grades 9-10 range). The current value displays dynamically beside the slider as a number followed by "L".

- Main section (260px tall): A horizontal number line running from 200L (left) to 1700L (right). The following colored bands are overlaid on the number line:
  - Grades 6–8 band: 925L–1185L, light green (#c8e6c9)
  - Grades 9–10 band: 1050L–1215L, light blue (#bbdefb)
  - Grades 11–12 band: 1080L–1305L, light purple (#e1bee7)
  - College/CCR band: 1215L–1355L, light orange (#ffe0b2)
  - Band labels appear centered within each band in a small, readable font
  - Bands overlap; render them with 50% opacity so overlaps are visible

- Sample texts: Ten representative texts are plotted as labeled dots on the number line at their approximate Lexile positions. Examples (use approximate values):

  - *The Hunger Games* (Suzanne Collins): 810L
  - *To Kill a Mockingbird* (Harper Lee): 870L
  - *The Great Gatsby* (F. Scott Fitzgerald): 1010L
  - *1984* (George Orwell): 1080L
  - *The Declaration of Independence* (Jefferson): 1340L
  - *The Federalist No. 10* (Madison): 1400L
  - *A Room of One's Own* (Woolf): 1350L
  - *Scientific American article (typical)*: 1200L
  - *College textbook (typical)*: 1350L
  - *New York Times editorial (typical)*: 1250L
  - Each text is represented as a small colored circle (diameter 14px, indigo fill) with a short label above or below (alternating to prevent overlap)

- Reader zone overlay: Based on the slider value (the reader's current Lexile level), three dynamic zones are shown on the number line using subtle shading:
  - **Comfortable zone**: current level − 100L to current level + 50L, shaded pale yellow with border
  - **Stretch zone**: current level + 50L to current level + 250L, shaded pale green with border — this is the growth zone
  - **Challenging zone**: above current level + 250L, shaded pale red with border
  - A legend at the bottom of the main section explains the three zones

- Bottom section (40px): Small text "Hover or click any text dot to see its full title, Lexile level, and why it appears in that zone for your current reading level."

**Hover/click behavior:** When the user hovers over or clicks a text dot, a tooltip appears immediately above the dot containing: the full title and author, the exact Lexile level, and one sentence explaining whether the text is comfortable, stretch, or challenging for the reader's current set level (computed dynamically from the slider value).

**Interactivity summary:** Slider changes update all zone shadings and tooltip text in real time. Hover reveals tooltip. Clicking a dot pins the tooltip until the user clicks elsewhere.

**Color palette:** Indigo (#3f51b5) for dots and primary UI elements. Orange (#ff9800) for slider handle and active dot highlight. Background white (#ffffff). Zone colors as specified above.

**Responsive behavior:** On window resize, recompute the pixel positions of all number-line elements based on the new canvas width. The number line should always span 80% of canvas width, centered.
```

## Related Resources

- [Chapter 1: Chapter 1 — Foundations of English Language Arts](../../chapters/01-foundations/index.md)

## Lesson Plan

This MicroSim can be used as an in-class activity or assigned for independent practice.

1. **Introduction** (5 min): Review the key concept before opening the sim.
2. **Exploration** (10 min): Students interact with the sim and record observations.
3. **Discussion** (5 min): Class shares findings and discusses connections to the text.

## References

- Common Core State Standards for English Language Arts (CCSS.ELA)
- National Council of Teachers of English (NCTE) framework

## Bloom's Taxonomy

- **Bloom Level:** 3 — Apply
- **Bloom Verb:** Apply
- **Library:** p5.js
