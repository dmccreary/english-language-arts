---
title: Freytag's Pyramid — Plot Structure Explorer
description: "Identify (L1 — Remember) and apply (L3 — Apply) the five stages of Freytag's Pyramid by locating them in a familiar narrative and understanding their structural role."
status: scaffold
library: p5.js
bloom_level: 3
image: /sims/freytagpyramid-explorer/freytagpyramid-explorer.png
og:image: /sims/freytagpyramid-explorer/freytagpyramid-explorer.png
---

# Freytag's Pyramid — Plot Structure Explorer

<iframe src="main.html" width="100%" height="472" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Click on each of the five stages of Freytag's Pyramid — Exposition, Rising Action, Climax, Falling Action, and Resolution — to see its definition and its structural role in a narrative. Select different example stories from the dropdown to see how the same five-stage arc maps onto familiar texts. Use the interactive features to place story events onto the pyramid yourself, then check whether your placements match the model analysis.

## Learning Objective

Identify (L1 — Remember) and apply (L3 — Apply) the five stages of Freytag's Pyramid by locating them in a familiar narrative and understanding their structural role.

## Specification

The full specification below is extracted from
[Chapter 3: Narrative Elements — Plot, Character, and Point of View](../../chapters/03-narrative-elements/index.md).

```text
Type: Interactive Infographic
**sim-id:** freytagpyramid-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning Objective:** Identify (L1 — Remember) and apply (L3 — Apply) the five stages of Freytag's Pyramid by locating them in a familiar narrative and understanding their structural role.

**Description:** A visual representation of Freytag's Pyramid — a triangular arc drawn on a canvas with the five plot stages labeled at their respective positions. The arc rises from left (Exposition) through Rising Action to Climax at the peak, then descends through Falling Action to Resolution at the lower right. The shape is rendered as a smooth curve rather than sharp angles.

**Visual elements:**
- A clean coordinate system with the narrative arc as a thick colored line (deep blue #1565C0)
- Five labeled points on the arc with circular markers:
  1. Exposition (far left, baseline): light green (#66BB6A)
  2. Rising Action (ascending slope): amber (#FFA726)
  3. Climax (peak): red (#E53935)
  4. Falling Action (descending slope): purple (#7B1FA2)
  5. Resolution (far right, baseline): teal (#00897B)
- Each label sits above or below its marker point with a short descriptor (e.g., "Rising Action — Complications build")

**Interactions:**
- Clicking on any of the five stage markers opens an info panel that displays: (1) the stage name and definition, (2) what typically happens at this stage, (3) two examples drawn from well-known texts (*Romeo and Juliet*, *To Kill a Mockingbird*, *The Hunger Games*), and (4) a close-reading question for that stage.
- A dropdown menu lets the reader select one of three example narratives (*Romeo and Juliet*, *To Kill a Mockingbird*, *The Hunger Games*), which updates the example content in each info panel to be specific to the selected work.
- Hovering over the arc between stage markers highlights the arc segment for that stage and displays a tooltip with the stage name.

**Canvas:** Responsive, fills available width. Minimum height 350px. Re-renders on window resize. Pyramid arc proportions adjust to canvas dimensions.

**Visual style:** White background, subtle grid lines, clean sans-serif labels, colored markers as described above.
```

## Related Resources

- [Chapter 3: Narrative Elements — Plot, Character, and Point of View](../../chapters/03-narrative-elements/index.md)

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
