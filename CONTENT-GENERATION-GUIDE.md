# Content Generation Guide — US High School English/Language Arts

This guide governs how chapter content is written and structured for this intelligent textbook. Follow it exactly. Where it conflicts with general defaults (e.g., "prefer fewer non-textual elements"), **this guide takes precedence**.

---

## Core Philosophy

This textbook treats critical reading as a superpower — not a chore.

The framing throughout every chapter should be energetic and empowering: students who learn to read carefully, question sources, and evaluate evidence are developing a skill that gives them a measurable advantage in a world saturated with misinformation. Social media, news feeds, viral posts, and AI-generated content are not background noise — they are the texts students encounter every day, and this book teaches them to read those texts like experts.

Write with this conviction. Every lesson is training for real-world literacy. Every concept unlocks a capability. Pip believes in every reader, and so does this book.

---

## Text Density — Override Rule

**This textbook prioritizes sustained, substantive prose.** Text is the primary vehicle for learning in an ELA course. Non-textual elements (diagrams, infographics, MicroSims, tables) are supplementary — they support and illustrate the text, not replace it.

**Override:** Unlike the general chapter-content-generator defaults, do NOT limit prose to brief explanatory paragraphs. Each major section should contain multiple developed paragraphs. Explanations, examples, and analysis should be written out in full. A section that introduces a complex concept — close reading strategies, rhetorical analysis, argument structure, cognitive bias — should give students enough reading material to actually learn from the text itself, not just enough to understand what a diagram means.

### Target text density per chapter

| Element | Target |
|---------|--------|
| Total word count per chapter | 8,500–10,000 words |
| Words per major section | 400–1200 words |
| Example passages quoted or modeled | 2–4 per chapter |
| Extended worked examples (annotated paragraphs, sample essays, model analyses) | 1–2 per chapter |
| Non-textual elements (diagrams, infographics, MicroSims) | 2–4 per chapter, supporting not replacing text |

All chapters target the high end of this range: **8,500–10,000 words**. Skill-practice chapters and shorter concept chapters should still reach this target through expanded examples, annotation walkthroughs, and deeper worked models — not through padding, but through the depth of explanation a student needs to work independently without a teacher present.

---

## Framing: Critical Reading as a Superpower

Open every chapter with this implicit (and sometimes explicit) premise: the skills you are building here make you harder to fool and more powerful as a thinker and writer.

Use this framing especially in:
- **Informational text chapters** — emphasize that skilled readers decode author purpose and bias.
- **Argument and rhetoric chapters** — emphasize that understanding persuasion protects you from manipulation.
- **Research and source evaluation chapters** — emphasize that knowing how to verify a claim is a skill most adults do not have.
- **Media literacy chapters** — be direct: misinformation is designed to spread, and the people who spread it are counting on readers not checking their work.
- **Critical thinking and cognitive bias chapters** — explain that everyone has biases, including the student, and that naming them is the first step to overcoming them.

Keep the tone optimistic and confident. Do not lecture or moralize. Frame every difficulty as something the reader is on the verge of mastering. Pip's voice — warm, curious, encouraging — sets the register.

Phrases worth weaving in (not in every chapter, but naturally across the book):
- "Once you see this, you can't unsee it."
- "This is what it looks like to read like an expert."
- "The goal isn't to distrust everything — it's to ask better questions."
- "Skilled readers aren't born; they practice."

---

## Mascot: Pip the Bookworm

### Who Pip is

Pip is a small, plump segmented cartoon bookworm with an indigo (`#3f51b5`) body and subtle orange (`#ff9800`) accents. Pip wears round black glasses and nothing else — no hats, scarves, books-under-arm, or props. Pip uses they/them pronouns and is always referred to by name. Pip's voice is warm, curious, and encouraging — calibrated for grades 9–12 without being condescending. Pip refers to students as "readers" or "writers."

Catchphrase: **"Let's read between the lines!"**

Signature phrases: "What's the story here?" · "Every word tells a story."

### Admonition syntax

Always place the image inside the admonition body, never in the title:

```markdown
!!! mascot-welcome "Welcome to Chapter 3"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Pip waving welcome">
    Pip text goes here — 1 to 3 sentences, warm and encouraging.
```

Adjust the `../../img/mascot/` path depth to match the rendered URL of the page. A chapter at `docs/chapters/01-foundations/index.md` uses `../../img/mascot/`.

### The seven poses

| Pose file | Admonition type | When to use |
|-----------|----------------|-------------|
| `welcome.png` | `mascot-welcome` | Chapter opening — one per chapter |
| `neutral.png` | `mascot-neutral` | General sidebars, context notes |
| `thinking.png` | `mascot-thinking` | Key concept introductions — 2–3 per chapter |
| `tip.png` | `mascot-tip` | Practical hints, shortcuts, reminders |
| `warning.png` | `mascot-warning` | Common mistakes, misconceptions, pitfalls |
| `encouraging.png` | `mascot-encourage` | Difficult material — where readers may struggle |
| `celebration.png` | `mascot-celebration` | Chapter closing / achievement — one per chapter |

### Placement rules

- **Maximum 6 mascot admonitions per chapter.** This keeps Pip meaningful rather than wallpaper.
- **Never place two mascot admonitions back to back.** Always separate them with substantive prose, a section heading, or another element.
- **Exactly one `mascot-welcome`** per chapter — at or near the top, before the first major section.
- **Exactly one `mascot-celebration`** per chapter — at or near the end, after the last major section.
- **2–3 `mascot-thinking`** per chapter, placed at the moment a key concept is introduced.
- `mascot-tip`, `mascot-warning`, and `mascot-encourage` are used as needed within the 6-admonition limit.

### What Pip says

Keep Pip's dialogue brief: 1–3 sentences. Pip does not summarize the section — that is the prose's job. Pip sets the tone, flags something important, offers encouragement, or names the why.

Examples by type:

**Welcome**
> "Welcome, readers! This chapter is where your reading really starts to work for you — every tool we build here will make you sharper and harder to fool. Let's read between the lines!"

**Thinking**
> "Here's the concept that ties this whole section together. If you can name what an author is doing, you're already doing something most readers never do."

**Tip**
> "When you find yourself confused by a complex sentence, try reading it aloud — the rhythm often reveals the structure faster than parsing it silently."

**Warning**
> "This is where a lot of readers go wrong: summarizing is not the same as analyzing. Summary tells you *what* happened; analysis tells you *why it matters*."

**Encouraging**
> "This part is genuinely hard — even skilled readers slow down here. That's the point. Slow down, stay with it, and trust that the effort is building something."

**Celebration**
> "You made it through one of the most demanding chapters in this book. Every concept you worked through here is a tool you'll use for the rest of the course — and beyond it."

---

## Chapter Structure

Every chapter follows this structure. All sections are required.

### 1. Front matter (YAML)

```yaml
---
title: Chapter N — Title
description: One-sentence description of the chapter's scope and purpose.
---
```

### 2. Chapter title and opening paragraph

The title as an H1. Then 1–2 paragraphs (not a Pip admonition) that introduce the chapter topic, establish why it matters, and give the reader a preview of what they will learn. Set the superpower framing here if appropriate.

### 3. Mascot welcome admonition

Immediately after the opening paragraph(s). Use `mascot-welcome`. Include Pip's catchphrase in Chapter 1; use it sparingly elsewhere.

### 4. Major sections (H2 headings)

3–6 major sections per chapter, each with:
- An H2 heading
- One or more developed paragraphs (400–800 words per section)
- Concrete examples, quoted passages, or worked models embedded in the prose
- At least one Pip admonition within the section (type matched to content)
- Optional: one diagram, infographic, or MicroSim per section — only if it genuinely adds something the prose cannot do alone

Within each major section, use H3 subheadings to organize sub-topics when a section covers more than one distinct idea.

### 5. Extended worked example

At least one section per chapter should walk through a full worked example — an annotated passage, a sample argument analyzed step by step, a model essay with commentary, a source evaluated in real time. Write this out in full. Do not abbreviate. This is where students see the skill in action.

### 6. Connection to misinformation and media literacy

For any chapter where the skill applies to evaluating online content — argument, rhetoric, research, source evaluation, critical thinking, cognitive bias, media literacy — include at least one explicit paragraph or subsection showing how the skill applies to social media, viral posts, news headlines, or AI-generated text. Make the connection direct and specific, not abstract.

### 7. Mascot celebration admonition

At the end of the last major section, before the summary. Use `mascot-celebration`. Acknowledge what was hard; affirm what was accomplished.

### 8. Chapter summary

An H2 section titled "Summary" or "Key Takeaways." 3–6 bullet points, each a complete sentence, naming the most important concepts or skills from the chapter. This is a review tool, not a teaser — write it as if a student is returning to it the night before a test.

### 9. Key terms

An H2 section titled "Key Terms." A definition list of 5–10 terms introduced in the chapter. Each definition: one precise sentence. No circular definitions. No business-speak or filler.

---

## Voice and Tone

### The book's voice

- Clear, confident, and accessible — never dumbed down.
- Calibrated for grades 9–12: assume a student who is capable and motivated, not a struggling reader who needs everything simplified.
- Use the second person ("you," "your") throughout — this book speaks directly to the reader.
- Occasional first-person plural ("we") is fine when framing a shared inquiry: "Let's look at how this argument is constructed."
- Do not use jargon without defining it. When a technical term is introduced, define it immediately in the prose — not just in the Key Terms section.

### Optimism and empowerment

Every chapter should leave a reader feeling more capable than when they started. The difficulty of a concept is never used as a reason to reduce the depth of coverage — it is a reason to explain more carefully, give more examples, and reassure the reader that the effort is worth it.

Do not write deflating qualifiers like "this is quite advanced" or "don't worry if this seems hard." Instead, write through the difficulty: give enough explanation and enough examples that the reader can actually follow along.

### Misinformation framing

When discussing source evaluation, argument, rhetoric, cognitive bias, or media literacy, use the word "misinformation" directly and explain why it spreads. Students should understand:

1. Misinformation is not random — it is designed to exploit cognitive shortcuts.
2. The same skills that make you a better literary reader make you a better news reader.
3. Fact-checking is not about distrust — it is about intellectual respect for truth.
4. The ability to detect a manipulative argument is a skill that compounds over time. Every practice session makes you harder to fool.

---

## Non-Textual Elements

Use sparingly. Each one must earn its place by doing something prose cannot.

### Diagrams (Mermaid)

Use for: concept hierarchies, process flows, relationships between ideas (e.g., the structure of an argument, the feedback loops in a systems-thinking diagram, the anatomy of a logical fallacy).

Do not use for: decorating a section that already has adequate prose.

### Infographics

Use for: visual comparison of multiple items, timelines, step-by-step processes that benefit from spatial layout.

Limit: 1 per chapter, 2 maximum.

### MicroSims (interactive)

Use for: skills that benefit from interactivity — practicing identifying fallacies, annotating a passage, comparing two texts, exploring a rhetorical spectrum.

Limit: 1 per chapter. MicroSims are high-value but expensive to write; use them on the concept that benefits most from exploration.

### Tables

Use for: comparison, reference, or structured lists where the parallel structure genuinely aids comprehension. Not for padding.

---

## Chapter Checklist

Before submitting a chapter, verify:

- [ ] Word count is 8,500–10,000 words
- [ ] Each major section is 400–1200 words with developed prose
- [ ] At least one extended worked example is present
- [ ] Misinformation / media literacy connection is explicit where applicable
- [ ] Exactly one `mascot-welcome` admonition (chapter open)
- [ ] Exactly one `mascot-celebration` admonition (chapter close)
- [ ] 2–3 `mascot-thinking` admonitions on key concepts
- [ ] No two mascot admonitions are back-to-back
- [ ] Total mascot admonitions ≤ 6
- [ ] Each Pip dialogue is 1–3 sentences and matches the pose type
- [ ] Image paths use the correct relative depth for the chapter's URL
- [ ] Key Terms section has 5–10 terms with non-circular, one-sentence definitions
- [ ] Summary / Key Takeaways section has 3–6 complete-sentence bullets
- [ ] Non-textual elements (diagrams, infographics, MicroSims) total ≤ 4
- [ ] Tone is optimistic, empowering, and direct — not condescending or deflating
- [ ] American English spelling throughout (color, center, analyze)
