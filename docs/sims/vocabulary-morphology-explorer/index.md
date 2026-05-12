---
title: Vocabulary Morphology Explorer
description: "Apply (L3 — Apply) morphological analysis by identifying word roots, prefixes, and suffixes to infer the meanings of unfamiliar academic vocabulary words."
status: scaffold
library: vis-network
bloom_level: 3
image: /sims/vocabulary-morphology-explorer/vocabulary-morphology-explorer.png
og:image: /sims/vocabulary-morphology-explorer/vocabulary-morphology-explorer.png
---

# Vocabulary Morphology Explorer

<iframe src="main.html" width="100%" height="642" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Click on any word node in the network to see its root, prefixes, and suffixes labeled and defined, and to see the family of related words that share the same root. Explore how academic vocabulary words branch outward from a common morpheme — for example, how *script*, *scribe*, *prescribe*, *describe*, and *inscription* all derive from the Latin *scribere* (to write). Use the "Analyze a Word" tool to enter any unfamiliar vocabulary word and have its morphological components broken down for you.

## Learning Objective

Apply (L3 — Apply) morphological analysis by identifying word roots, prefixes, and suffixes to infer the meanings of unfamiliar academic vocabulary words.

## Specification

The full specification below is extracted from
[Chapter 13: Language Conventions and Vocabulary Development](../../chapters/13-language-conventions/index.md).

```text
Type: Interactive Diagram
**sim-id:** vocabulary-morphology-explorer<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Learning Objective:** Apply (L3 — Apply) morphological analysis by identifying word roots, prefixes, and suffixes to infer the meanings of unfamiliar academic vocabulary words.

**Description:** A radial network visualization centered on a selected word root. The root node appears at the center; prefix nodes and suffix nodes branch outward from the center, and complete words built from those morphemes appear at the outer ring of the network. Clicking a word node reveals a pop-up panel with the word's definition, a usage example sentence, and the morphological breakdown showing which morphemes compose it.

**Explore Mode:** User selects from a dropdown menu of 22 high-frequency academic roots (the full set from the chapter's table). The network updates to show all words in the vocabulary database that contain that root, with their prefixes and suffixes labeled on the connecting edges. Words are color-coded by part of speech: blue for nouns, green for verbs, orange for adjectives, purple for adverbs.

**Build Mode:** The user constructs a word by selecting a root from one panel, an optional prefix from another, and an optional suffix from a third. The tool shows whether the constructed combination is a real English word, provides a definition if it is, and notes "not a standard English word" if it is not. This mode emphasizes that not all morpheme combinations produce real words — morphological analysis is a guide to meaning inference, not a word generator. For example, "re-" + "port" + "-er" produces "reporter" (real); "mis-" + "aud" produces nothing standard (the tool notes the combination is not a recognized form).

**Canvas:** Minimum 700px wide, minimum 500px tall. Responsive layout with nodes and labels legible at all viewport widths.
```

## Related Resources

- [Chapter 13: Language Conventions and Vocabulary Development](../../chapters/13-language-conventions/index.md)

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
