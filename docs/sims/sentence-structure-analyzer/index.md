---
title: Sentence Structure Analyzer
description: "Apply (L3 — Apply) knowledge of sentence types and clause structure by correctly identifying and labeling the components of sample sentences."
status: scaffold
library: p5.js
bloom_level: 3
image: /sims/sentence-structure-analyzer/sentence-structure-analyzer.png
og:image: /sims/sentence-structure-analyzer/sentence-structure-analyzer.png
---

# Sentence Structure Analyzer

<iframe src="main.html" width="100%" height="462" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Select a sample sentence or type your own, then click on each clause or phrase to label it — independent clause, dependent clause, prepositional phrase, participial phrase, and so on. The color-coded highlighting reveals the structural skeleton of simple, compound, complex, and compound-complex sentences. After labeling, check your answers against the model analysis to reinforce your understanding of how clauses combine to create varied sentence rhythms.

## Learning Objective

Apply (L3 — Apply) knowledge of sentence types and clause structure by correctly identifying and labeling the components of sample sentences.

## Specification

The full specification below is extracted from
[Chapter 12: Standard English Grammar and Sentence Structure](../../chapters/12-grammar/index.md).

```text
Type: Interactive Diagram
**sim-id:** sentence-structure-analyzer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning Objective:** Apply (L3 — Apply) knowledge of sentence types and clause structure by correctly identifying and labeling the components of sample sentences.

**Description:** A visual sentence parsing tool with two modes.

**Explore Mode:** Five pre-loaded sentences, one of each type (simple, compound, complex, compound-complex) plus one with multiple phrase types. Each sentence is displayed word by word in a horizontal layout. The user clicks on any word or group of words to tag it: a dropdown menu offers grammatical labels (subject, verb, direct object, independent clause, dependent clause, prepositional phrase, participial phrase, infinitive phrase, appositive, adjective clause, adverb clause, noun clause). Tagged elements are highlighted in distinct colors. A "Check" button compares the user's tagging to the correct analysis and provides specific feedback.

**Build Mode:** The user types a sentence in a text box. The tool parses the sentence using basic NLP patterns and highlights likely clause boundaries, identifying coordinating conjunctions and common subordinating conjunctions. The highlighting is color-coded by likely clause type. A "How did I do?" panel shows the tool's analysis alongside the original sentence for comparison. Note: this is a pedagogical heuristic tool, not a perfect parser — it will make errors on complex or ambiguous sentences, which is itself a learning opportunity.

**Canvas:** Minimum 600px wide, minimum 400px height. Responsive layout.
```

## Related Resources

- [Chapter 12: Standard English Grammar and Sentence Structure](../../chapters/12-grammar/index.md)

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
