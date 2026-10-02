---
title: Interactive Academic Discussion Protocol Map
description: "Understand (L2 — Understand) the structure and participant roles of four major academic discussion protocols by interactively exploring their differences."
status: review
library: vis-network
bloom_level: 2
image: /sims/discussion-structure-visualizer/discussion-structure-visualizer.png
og:image: /sims/discussion-structure-visualizer/discussion-structure-visualizer.png
---

# Interactive Academic Discussion Protocol Map

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

You can include this MicroSim on your own page with the following `iframe`:

```html
<iframe src="https://dmccreary.github.io/english-language-arts/sims/discussion-structure-visualizer/main.html" width="100%" height="562" scrolling="no"></iframe>
```

## About This MicroSim

A Socratic seminar, a fishbowl, philosophical chairs, and numbered heads together are all "class discussions," but they are built differently and ask different things of you. This map lays the four protocols side by side. Each protocol is a colored hub connected to the same five attributes: participant structure, facilitator role, evidence requirements, primary learning goal, and typical duration. Because every protocol answers the same five questions, you can read the map in two directions — everything about one protocol, or one attribute across all four.

## How to Use This MicroSim

**Explore mode** (the default)

1. Click a protocol hub, such as **Fishbowl**. The other three protocols fade, and the panel on the right shows all five of that protocol's attributes in full.
2. Click an attribute node, such as **Evidence**. That attribute lights up under all four protocols, and the panel shows the four answers one after another so you can compare them directly.
3. The underlined names in the panel are shortcuts: click an attribute name to compare it across protocols, or a protocol name to open that protocol.
4. Click **Show all**, or any empty spot on the map, to return to the full view.

**Role Play mode**

1. Click **Role Play** at the top right.
2. Choose a protocol and then your role. The role list changes with the protocol: facilitator, inner circle, and outer circle for the two circle-based protocols; facilitator and small group member for the two group-based protocols.
3. Read your responsibilities, then rehearse the sentence frames — opening statements, question templates, response stems, and closing moves — by filling each blank with something from the text you are about to discuss.

## Learning Objective

Understand (L2 — Understand) the structure and participant roles of four major academic discussion protocols by interactively exploring their differences.

## Lesson Plan

**Grade level:** 9–12 English Language Arts

**Duration:** 15–20 minutes, ideally the day before a scheduled discussion

**Prerequisites:** The descriptions of the four protocols and the sentence frames of academic discussion in Chapter 14.

1. **Predict** (3 min): Before opening the sim, ask readers which protocol they think demands the most text evidence and which takes the least time. Record a few predictions.
2. **Explore one protocol** (4 min): In pairs, readers click each protocol hub and write a one-sentence summary of it in their own words.
3. **Compare one attribute** (5 min): Each pair is assigned one attribute (for example, *facilitator role*) and clicks it to compare all four protocols. Pairs report the biggest difference they found and check it against the predictions from step 1.
4. **Prepare a role** (5 min): Switch to Role Play. Each reader chooses the protocol and role they will actually have in the upcoming discussion and completes two sentence frames using the assigned text.
5. **Reflect** (3 min): Exit ticket — "Which protocol would you choose for a text you found confusing, and why?"

**Assessment:** Readers can (a) match each protocol to its participant structure, (b) explain how the facilitator's job differs between a Socratic seminar and numbered heads together, and (c) produce two completed sentence frames appropriate to their role.

## Specification

The full specification below is extracted from
[Chapter 14: Speaking, Listening, and Multimedia Presentation](../../chapters/14-speaking-listening/index.md).

```text
Type: Interactive Diagram
**sim-id:** discussion-structure-visualizer<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Learning Objective:** Understand (L2 — Understand) the structure and participant roles of four major academic discussion protocols by interactively exploring their differences.

**Description:** A node-network visualization showing four academic discussion protocols (Socratic Seminar, Fishbowl, Philosophical Chairs, Numbered Heads Together) as central nodes, each connected to attribute nodes describing: participant structure, facilitator role, evidence requirements, primary learning goal, and typical duration.

**Explore Mode:** Clicking on any protocol node expands it to show its attribute nodes in full detail. Clicking on an attribute type (e.g., "evidence requirements") highlights that attribute across all four protocols for direct comparison. A comparison panel on the right shows a side-by-side summary of the highlighted attribute across all protocols.

**Role Play Mode:** The user selects a protocol and a role (facilitator, inner circle, outer circle, small group member). The tool displays the specific responsibilities and sentence frames appropriate for that role in that protocol: example opening statements, question templates, response stems, and closing moves. This mode is designed for pre-discussion preparation.

**Canvas:** Minimum 700px wide, minimum 450px tall. Node labels must be fully legible; use font size minimum 12px.
```

**Implementation notes.** All 24 nodes (four protocols and their five attributes each) are visible from the start so the default view already shows the structure; clicking a protocol "expands" it by fading the other three and listing its attributes in full in the right-hand panel rather than by revealing hidden nodes. In the 300 px panel the four-protocol comparison is stacked top to bottom instead of placed in columns. The role list offers only the roles that exist in the selected protocol. Node labels stay at 12 px or larger down to the 700 px minimum width in the specification; on narrower screens the panel moves below the map and the labels shrink.

## Related Resources

- [Chapter 14: Speaking, Listening, and Multimedia Presentation](../../chapters/14-speaking-listening/index.md)

## References

- [Socratic method — Wikipedia](https://en.wikipedia.org/wiki/Socratic_method)
- [Fishbowl (conversation) — Wikipedia](https://en.wikipedia.org/wiki/Fishbowl_(conversation))
- [Socratic Seminars — Read Write Think (NCTE)](https://www.readwritethink.org/professional-development/strategy-guides/socratic-seminars)
- [Cooperative learning — Wikipedia](https://en.wikipedia.org/wiki/Cooperative_learning)
