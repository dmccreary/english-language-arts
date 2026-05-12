---
title: The Literary Genre Landscape
description: "Classify (L2 — Understand) the four major literary categories and their subgenres by identifying where specific texts fit within the genre landscape."
status: scaffold
library: vis-network
bloom_level: 2
image: /sims/literary-genre-explorer/literary-genre-explorer.png
og:image: /sims/literary-genre-explorer/literary-genre-explorer.png
---

# The Literary Genre Landscape

<iframe src="main.html" width="100%" height="622" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Click on any node in the genre network to see its definition and defining characteristics. Explore how the four major literary categories — Fiction, Nonfiction, Poetry, and Drama — each branch into their subgenres through the network diagram. Look for overlap nodes that show how certain forms (such as creative nonfiction or verse drama) sit at the intersection of multiple genres.

## Learning Objective

Classify (L2 — Understand) the four major literary categories and their subgenres by identifying where specific texts fit within the genre landscape.

## Specification

The full specification below is extracted from
[Chapter 2: Literary Genres and Text Forms](../../chapters/02-literary-genres/index.md).

```text
Type: Interactive Infographic
**sim-id:** literary-genre-explorer<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Learning Objective:** Classify (L2 — Understand) the four major literary categories and their subgenres by identifying where specific texts fit within the genre landscape.

**Description:** An interactive network graph in which four central hub nodes represent the four major literary categories (Fiction, Nonfiction, Drama, Poetry), each with a distinct color. From each central node, smaller child nodes extend outward representing the subgenres covered in this chapter. The layout uses a hierarchical or force-directed arrangement with the four hubs evenly spaced.

**Nodes and Colors:**
- Fiction (large node, blue #1565C0): connected child nodes for Short Story, Novel, Novella (medium blue nodes)
- Nonfiction (large node, green #2E7D32): connected child nodes for Memoir, Essay (medium green nodes)
- Drama (large node, purple #6A1B9A): connected child nodes for Tragedy, Comedy (medium purple nodes)
- Poetry (large node, orange #E65100): connected child nodes for Epic Poetry, Sonnet, Lyric Poetry, Free Verse (medium orange nodes)

**Interactions:**
- Hovering over any node displays a tooltip with a one-sentence definition of that genre or subgenre.
- Clicking on a subgenre node opens a side panel (or inline infobox below the graph) with: (1) a one-paragraph description of the form, (2) two or three canonical examples (title and author), and (3) a key close-reading question specific to that form.
- Clicking on a major category node highlights all its subgenres and dims the rest, allowing the reader to focus on one category at a time.
- A "Reset" button returns all nodes to default visibility.

**Canvas:** Responsive, fills available width. Minimum height 420px. Graph re-renders on window resize.

**Visual style:** Clean white background, hub nodes larger than child nodes, thin grey connector lines, readable sans-serif labels in white on colored nodes. Node borders are 2px darker than fill.

**Data:** All 16 genre concepts from this chapter's concept list must appear as nodes. The four major categories appear as hub nodes; the twelve subgenres appear as child nodes connected to their parent category hub.
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
- **Bloom Verb:** Classify
- **Library:** vis-network
