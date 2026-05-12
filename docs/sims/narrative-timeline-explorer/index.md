---
title: Narrative Time — Scene, Summary, and Flashback
description: "Distinguish (L2 — Understand) between scene, summary, and flashback as narrative techniques by mapping them onto a visual representation of a narrative's story time versus narrative time."
status: scaffold
library: vis-timeline
bloom_level: 2
image: /sims/narrative-timeline-explorer/narrative-timeline-explorer.png
og:image: /sims/narrative-timeline-explorer/narrative-timeline-explorer.png
---

# Narrative Time — Scene, Summary, and Flashback

<iframe src="main.html" width="100%" height="462" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Drag story events onto the visual timeline to map *narrative time* (the order events appear in the text) against *story time* (the chronological order events actually occurred). Color-code each segment as scene, summary, or flashback using the labeled tool palette. Switch between example narratives to see how different authors use time manipulation — including in-medias-res openings and extended flashbacks — as deliberate storytelling choices.

## Learning Objective

Distinguish (L2 — Understand) between scene, summary, and flashback as narrative techniques by mapping them onto a visual representation of a narrative's story time versus narrative time.

## Specification

The full specification below is extracted from
[Chapter 5: Narrative Techniques, Literary Periods, and Comparative Analysis](../../chapters/05-narrative-techniques/index.md).

```text
Type: Interactive Infographic
**sim-id:** narrative-timeline-explorer<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

**Learning Objective:** Distinguish (L2 — Understand) between scene, summary, and flashback as narrative techniques by mapping them onto a visual representation of a narrative's story time versus narrative time.

**Description:** A two-axis visual representation. The horizontal axis represents story time (chronological order of events in the fictional world, from left to right). The vertical axis represents the amount of narrative space devoted to each event (how many pages or words). The display shows a selected narrative (default: *Romeo and Juliet*; user can switch to *Of Mice and Men* or *Beloved* via a dropdown).

**Visual elements:**
- Bars of varying height represent narrative sections, with taller bars = more narrative space (scenes) and shorter bars = less narrative space (summaries).
- Bars rendered in a non-chronological section of the story time axis represent flashbacks (shown in a different color and linked to their chronological position with a dotted line).
- Color coding: Scenes — deep blue (#1565C0); Summaries — light grey (#90A4AE); Flashbacks — amber (#F57F17); Climax — red accent bar (#E53935).
- Labels on each bar identify the narrative section (e.g., "The feast (Act I, scene 5)" or "The elopement").

**Interactions:**
- Hovering over any bar displays a tooltip: section name, whether it is scene or summary or flashback, the approximate story time represented, and a note on why the author devoted the amount of space they did.
- Clicking on a bar opens a side panel with a fuller explanation of the pacing choice in that section and a key analytical question (e.g., "Why does Shakespeare devote so much dramatic time to the balcony scene but compress the subsequent weeks of marriage into a single reference?").
- The dropdown menu switches the displayed narrative among the three options. All three must be fully specified.

**Canvas:** Responsive, minimum height 350px. Re-renders on window resize. Bars adjust proportionally to canvas width.

**Visual style:** White background, clean axis labels, thin horizontal grid lines at equal intervals of the vertical (narrative space) axis.
```

## Related Resources

- [Chapter 5: Narrative Techniques, Literary Periods, and Comparative Analysis](../../chapters/05-narrative-techniques/index.md)

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
- **Library:** vis-timeline
