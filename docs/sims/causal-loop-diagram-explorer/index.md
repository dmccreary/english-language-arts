---
title: Causal Loop Diagram Explorer
description: "Apply (L3 — Apply) systems thinking by constructing and interpreting causal loop diagrams for real-world and literary scenarios."
status: scaffold
library: vis-network
bloom_level: 3
image: /sims/causal-loop-diagram-explorer/causal-loop-diagram-explorer.png
og:image: /sims/causal-loop-diagram-explorer/causal-loop-diagram-explorer.png
---

# Causal Loop Diagram Explorer

<iframe src="main.html" width="100%" height="682" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Start in **Explore Mode**: choose from five pre-built causal loop diagrams and click any arrow to see the causal relationship it represents, or click a closed loop to identify it as reinforcing (R) or balancing (B). Switch to **Build Mode** to create your own diagram — add variable nodes, draw directed arrows, and assign + or − polarity to each edge. After connecting at least three nodes, click "Detect Loops" to automatically label your loops, then use the "What would happen if..." panel to trace cause-and-effect chains through your diagram.

## Learning Objective

Apply (L3 — Apply) systems thinking by constructing and interpreting causal loop diagrams for real-world and literary scenarios.

## Specification

The full specification below is extracted from
[Chapter 16: Systems Thinking and AI in Writing](../../chapters/16-systems-thinking-ai/index.md).

```text
Type: Interactive Diagram
**sim-id:** causal-loop-diagram-explorer<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Learning Objective:** Apply (L3 — Apply) systems thinking by constructing and interpreting causal loop diagrams for real-world and literary scenarios.

**Description:** A two-mode interactive tool for causal loop diagram construction and analysis.

**Explore Mode:** Five pre-built CLDs covering: thermostat regulation (classic balancing loop), compound interest (reinforcing loop), echo chamber dynamics, poverty trap, and a literary example (the social dynamics of *The Great Gatsby*). Each CLD is displayed as a vis-network graph with labeled variables, directional arrows, and +/- signs on edges. Clicking any arrow reveals a brief explanation of the causal relationship it represents. Clicking on any closed loop highlights the loop and labels it R (reinforcing) or B (balancing), with an explanation of how to count minus signs to identify loop type.

**Build Mode:** The user creates their own CLD by adding variables (nodes) and causal arrows (edges). Edge creation prompts the user to specify + or - polarity. After creating at least three connected nodes, a "Detect loops" button identifies all closed loops in the current diagram and labels each as R or B, with the minus-sign count shown. A "What would happen if..." panel allows the user to select any variable and specify "increase" or "decrease," and the tool traces what that change would likely produce in the other variables, following the arrows.

**Canvas:** Minimum 800px wide, minimum 500px tall. Node and edge labels fully legible; edge arrows clearly directional.
```

## Related Resources

- [Chapter 16: Systems Thinking and AI in Writing](../../chapters/16-systems-thinking-ai/index.md)

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
- **Library:** vis-network
