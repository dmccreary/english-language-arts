---
title: Source Credibility Spectrum
description: "Evaluate (L5 — Evaluate) multiple sources on the same issue by mapping their credibility indicators and viewpoints on a comparative visual display."
status: scaffold
library: Chart.js
bloom_level: 5
image: /sims/source-credibility-explorer/source-credibility-explorer.png
og:image: /sims/source-credibility-explorer/source-credibility-explorer.png
---

# Source Credibility Spectrum

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Rate each source on the credibility indicators displayed — author expertise, publication type, date of publication, evidence quality, and editorial oversight — and watch it plot on the credibility spectrum. Compare multiple sources covering the same issue to see how their credibility scores and viewpoints relate. Click any source to review its specific strengths and weaknesses, and practice writing a brief source annotation that explains your rating.

## Learning Objective

Evaluate (L5 — Evaluate) multiple sources on the same issue by mapping their credibility indicators and viewpoints on a comparative visual display.

## Specification

The full specification below is extracted from
[Chapter 7: US Foundational Documents and Informational Sources](../../chapters/07-foundational-documents/index.md).

```text
Type: Interactive Visual
**sim-id:** source-credibility-explorer<br/>
**Library:** Chart.js<br/>
**Status:** Specified

**Learning Objective:** Evaluate (L5 — Evaluate) multiple sources on the same issue by mapping their credibility indicators and viewpoints on a comparative visual display.

**Description:** A two-axis scatter plot. The horizontal axis is "Ideological/Perspective Spectrum" (left = progressive, center = centrist, right = conservative, with a middle zone labeled "Technical/Nonpartisan"). The vertical axis is "Credibility Indicators" (lower = more credibility concerns, upper = stronger credibility signals). Eight to ten pre-loaded example source types are plotted as labeled bubbles: peer-reviewed research, government data (e.g., CDC, Census Bureau), major newspaper news sections, major newspaper opinion sections, advocacy organization reports, think-tank publications (left-leaning and right-leaning), social media posts, and tabloid press.

**Interactions:**
- Hovering over any bubble shows a tooltip listing the source type's typical credibility strengths and limitations.
- A "Compare Two Sources" mode allows selecting two sources and displays a side-by-side table of credibility indicators: expertise evidence, editorial oversight, transparency about methods, funding disclosure, and track record.
- An "Add Your Own" feature allows users to enter a real source URL and drag-place it on the chart, with a checklist prompting them to consider each credibility indicator.

**Canvas:** Responsive, minimum 600px wide, minimum 450px height.
```

## Related Resources

- [Chapter 7: US Foundational Documents and Informational Sources](../../chapters/07-foundational-documents/index.md)

## Lesson Plan

This MicroSim can be used as an in-class activity or assigned for independent practice.

1. **Introduction** (5 min): Review the key concept before opening the sim.
2. **Exploration** (10 min): Students interact with the sim and record observations.
3. **Discussion** (5 min): Class shares findings and discusses connections to the text.

## References

- Common Core State Standards for English Language Arts (CCSS.ELA)
- National Council of Teachers of English (NCTE) framework

## Bloom's Taxonomy

- **Bloom Level:** 5 — Evaluate
- **Bloom Verb:** Evaluate
- **Library:** Chart.js
