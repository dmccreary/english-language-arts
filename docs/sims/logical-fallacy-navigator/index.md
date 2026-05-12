---
title: Logical Fallacy Navigator
description: "Apply (L3 — Apply) knowledge of seven logical fallacies to correctly identify the fallacy type in provided example arguments, and explain why the argument is flawed."
status: scaffold
library: p5.js
bloom_level: 3
image: /sims/logical-fallacy-navigator/logical-fallacy-navigator.png
og:image: /sims/logical-fallacy-navigator/logical-fallacy-navigator.png
---

# Logical Fallacy Navigator

<iframe src="main.html" width="100%" height="452" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## How to Use This MicroSim

Read each example argument and select from the list of seven logical fallacies which flaw the reasoning contains. Submit your answer to see whether you are correct and to read an explanation of exactly why the argument fails logically. Work through multiple examples at increasing difficulty to build fluency at spotting each fallacy type — and practice writing your own rebuttal to each flawed argument.

## Learning Objective

Apply (L3 — Apply) knowledge of seven logical fallacies to correctly identify the fallacy type in provided example arguments, and explain why the argument is flawed.

## Specification

The full specification below is extracted from
[Chapter 8: Critical Thinking, Logical Reasoning, and Fallacies](../../chapters/08-critical-thinking/index.md).

```text
Type: Interactive Quiz / Reference
**sim-id:** logical-fallacy-navigator<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning Objective:** Apply (L3 — Apply) knowledge of seven logical fallacies to correctly identify the fallacy type in provided example arguments, and explain why the argument is flawed.

**Description:** An interactive reference and quiz tool with two modes.

**Reference Mode:** Seven cards arranged in a 3-2-2 grid, each representing one fallacy. Each card shows: the fallacy name (large), a one-sentence definition, a concrete example argument, and a "Why It's Flawed" explanation. Clicking any card flips it to reveal: a diagnostic checklist (2–3 questions to help identify the fallacy in the wild), a real-world context where this fallacy commonly appears, and a "What a legitimate version looks like" note.

**Quiz Mode:** A "Test Yourself" button presents 10 argument prompts one at a time. The user selects which fallacy (if any) the argument commits from a multiple-choice list that also includes "No fallacy — this is a valid argument." After each selection, immediate feedback explains the correct answer with a reference to the specific flaw. A score tracker shows correct/total and allows the quiz to be restarted with a new randomized set.

**Canvas:** Minimum 560px wide, minimum 420px height. Responsive column arrangement for narrow screens.
**Color scheme:** Each fallacy has a distinct card color from a complementary palette; quiz mode uses a clean white background with feedback displayed in green (correct) or amber (incorrect — avoids red to reduce test anxiety).
```

## Related Resources

- [Chapter 8: Critical Thinking, Logical Reasoning, and Fallacies](../../chapters/08-critical-thinking/index.md)

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
