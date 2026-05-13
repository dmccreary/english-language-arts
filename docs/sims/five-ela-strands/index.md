---
title: The Five ELA Strands — Interactive Overview
description: "Recall the five ELA strands and explain how they form an interconnected system (Bloom Level 2 — Understand: explain, classify)."
status: approved
library: Mermaid
bloom_level: 2
image: /sims/five-ela-strands/five-ela-strands.png
og:image: /sims/five-ela-strands/five-ela-strands.png
---

# The Five ELA Strands — Interactive Overview

<iframe src="main.html" width="100%" height="402" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Click on any node in the flowchart to open an information box that explains that strand or concept in 2–3 sentences and gives one example skill or task. The information box closes when you click anywhere outside it, so you can navigate freely through the diagram. Explore how the five strands — Reading: Literature, Reading: Informational Text, Writing, Speaking & Listening, and Language — all branch from a central ELA framework and support each other.

## Learning Objective

Recall the five ELA strands and explain how they form an interconnected system (Bloom Level 2 — Understand: explain, classify).

## Specification

The full specification below is extracted from
[Chapter 1: Chapter 1 — Foundations of English Language Arts](../../chapters/01-foundations/index.md).

```text
Type: diagram
**sim-id:** five-ela-strands<br/>
**Library:** Mermaid<br/>
**Status:** Specified

**Learning objective:** Recall the five ELA strands and explain how they form an interconnected system (Bloom Level 2 — Understand: explain, classify).

**Diagram description:** A top-down flowchart with "English Language Arts" as the root node branching to five strand nodes (Reading: Literature, Reading: Informational Text, Writing, Speaking & Listening, Language). Each strand node branches to one child node showing its primary focus. All nodes are clickable.

**Click behavior:** Clicking any node opens an infobox (a styled div or modal overlay) containing: (1) the strand name as a heading, (2) a 2-3 sentence description of what the strand covers, and (3) one example skill or task from that strand. The infobox closes when the user clicks anywhere else on the canvas. This is the only interaction required.

**Node styling:**
- Root node (ELA): filled with indigo (#3f51b5), white text, rounded rectangle
- Five strand nodes: filled with medium blue (#5c6bc0), white text, rounded rectangle
- Child detail nodes: filled with light blue (#e8eaf6), dark text, rounded rectangle
- All nodes: border radius 8px, subtle drop shadow

**Mermaid code (starter — implement with JavaScript click handlers, not Mermaid-native click directives if browser support is limited):**

```
graph TD
    ELA["English Language Arts"] --> RL["Reading: Literature"]
    ELA --> RI["Reading: Informational Text"]
    ELA --> W["Writing"]
    ELA --> SL["Speaking & Listening"]
    ELA --> L["Language"]
    RL --> RL1["Fiction, Poetry, Drama, Literary Analysis"]
    RI --> RI1["Arguments, Documents, Nonfiction, Media"]
    W --> W1["Argumentative · Informative · Narrative"]
    SL --> SL1["Discussion, Presentation, Media Evaluation"]
    L --> L1["Grammar, Vocabulary, Conventions, Style"]
    click ELA "javascript:showInfo('ELA','English Language Arts is an integrated system of five strands. Growth in any one strand strengthens all the others — reading widely makes you a better writer; writing regularly makes you a sharper reader.')"
    click RL "javascript:showInfo('Reading: Literature','This strand develops your ability to analyze fiction, poetry, drama, and foundational literary works for theme, craft, structure, and meaning. You will read works from American and world literary traditions, including Shakespeare and contemporary authors.')"
    click RI "javascript:showInfo('Reading: Informational Text','This strand builds skills for reading nonfiction: arguments, historical documents, scientific and technical texts, journalism, and digital sources. The US founding documents — Declaration, Federalist Papers, Gettysburg Address — are central texts.')"
    click W "javascript:showInfo('Writing','This strand covers three modes — argumentative, informative/explanatory, and narrative — plus the full writing process (plan, draft, revise, edit, publish) and research skills including source evaluation and citation.')"
    click SL "javascript:showInfo('Speaking & Listening','This strand develops structured academic discussion, oral presentation, and critical evaluation of speakers and media. You will practice both contributing substantively to discussions and listening analytically to others.')"
    click L "javascript:showInfo('Language','This strand covers the conventions of standard English (grammar, usage, punctuation, spelling) and sophisticated vocabulary acquisition — not rules for their own sake, but as tools for making deliberate, effective language choices.')"
```

**Implementation note:** The `showInfo(title, text)` function should display a styled overlay div in the upper right of the Mermaid container, populated with the title and text, with a close button. The overlay should be dismissible by clicking anywhere outside it. The container div must handle resize events so the diagram reflows at all viewport widths.

**Canvas size:** Responsive, minimum 600px wide, height auto-adjusts to content.
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

- **Bloom Level:** 2 — Understand
- **Bloom Verb:** Explain
- **Library:** Mermaid
