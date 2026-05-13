# English Language Arts

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/english-language-arts/)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![Claude Skills](https://img.shields.io/badge/Uses-Claude%20Skills-DA7857?logo=anthropic)](https://github.com/dmccreary/claude-skills)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![p5.js](https://img.shields.io/badge/p5.js-ED225D?logo=p5.js&logoColor=white)](https://p5js.org/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Visit the interactive textbook at: [https://dmccreary.github.io/english-language-arts/](https://dmccreary.github.io/english-language-arts/)

## Overview

This is an interactive, AI-assisted intelligent textbook covering US high school English/Language Arts (ELA), aligned with the Common Core State Standards (CCSS-ELA) developed by the National Governors Association (NGA) and the Council of Chief State School Officers (CCSSO). It is designed for students in grades 9–12 and educators seeking structured, standards-aligned course materials.

The textbook spans 17 chapters organized across five ELA strands — Reading Literature, Reading Informational Text, Writing, Language, and Speaking & Listening — and concludes with an integrative capstone project. Each chapter includes rich prose explanations, Mermaid diagrams, interactive MicroSims, multiple-choice quizzes, and curated references. Content is calibrated for a 10th-grade Lexile reading level with accessible, encouraging language throughout.

A learning mascot named **Pip** (a curious cartoon bookworm with the catchphrase "Let's read between the lines!") guides students through key concepts, helpful tips, common mistakes, and encouragement at difficult moments. A 295-concept learning graph with full dependency mapping ensures proper prerequisite sequencing across all chapters.

Whether you are a student encountering literary analysis for the first time or an educator looking for a complete, standards-aligned resource, this textbook provides comprehensive coverage with hands-on interactive elements that make complex concepts engaging and accessible.

## Site Status and Metrics

| Metric | Count |
|--------|-------|
| Concepts in Learning Graph | 295 |
| Chapters | 17 |
| Markdown Files | 98 |
| Total Student-Facing Words | 208,279 |
| Equivalent Pages | 847 |
| MicroSims | 20 |
| Diagrams | 18 |
| Glossary Terms | 295 |
| FAQ Questions | 83 |
| Quiz Files | 17 |
| Images | 34 |

**Completion Status:** Content generation complete across all 17 chapters; quizzes, glossary, FAQ, and MicroSims fully generated.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/dmccreary/english-language-arts.git
cd english-language-arts
```

### Install Dependencies

This project uses MkDocs with the Material theme and several plugins:

```bash
pip install mkdocs mkdocs-material mkdocs-glightbox
```

### Build and Serve Locally

Serve locally with live reload:

```bash
mkdocs serve
```

Open your browser to `http://localhost:8000`

Build the static site:

```bash
mkdocs build
```

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This builds the site and pushes it to the `gh-pages` branch automatically.

### Using the Textbook

**Navigation:** Use the left sidebar to browse chapters, or click the search icon to search all content. Each chapter page links to its quiz and references.

**Interactive MicroSims:** Found under the MicroSims section. Each simulation runs entirely in the browser — adjust parameters using sliders, buttons, and dropdowns without any installation.

**Learning Graph:** The Learning Graph section visualizes concept dependencies and allows you to explore prerequisite relationships across all 295 ELA concepts.

## Repository Structure

```
english-language-arts/
├── docs/                              # MkDocs documentation source
│   ├── chapters/                      # 17 chapter directories
│   │   ├── 01-foundations/
│   │   │   ├── index.md              # Chapter content (~8,500–10,000 words)
│   │   │   ├── quiz.md               # Multiple-choice quiz
│   │   │   └── references.md         # Curated references
│   │   └── 17-capstone/
│   ├── sims/                          # 20 interactive p5.js MicroSims
│   │   ├── argument-anatomy-explorer/
│   │   │   ├── main.html             # Standalone simulation
│   │   │   └── index.md              # Documentation + iframe embed
│   │   └── ...
│   ├── learning-graph/                # Learning graph data and analysis
│   │   ├── concept-list.md           # 295 ELA concepts
│   │   ├── quality-metrics.md        # Graph quality analysis
│   │   └── book-metrics.md           # Auto-generated site metrics
│   ├── img/
│   │   └── mascot/                   # Pip the Bookworm poses (7 PNG files)
│   ├── css/
│   │   ├── extra.css                 # Theme customization
│   │   └── mascot.css                # Mascot admonition styles
│   ├── glossary.md                    # 295 ISO 11179-style definitions
│   ├── faq.md                         # 83 frequently asked questions
│   └── license.md                     # CC BY-NC-SA 4.0 terms
├── mkdocs.yml                         # MkDocs configuration
└── README.md                          # This file
```

## Reporting Issues

Found a bug, typo, or have a suggestion for improvement? Please report it on the GitHub Issues page:

[https://github.com/dmccreary/english-language-arts/issues](https://github.com/dmccreary/english-language-arts/issues)

When reporting issues, please include:

- Description of the problem or suggestion
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Screenshots if applicable (especially for MicroSim issues)
- Browser and OS details for interactive element bugs

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:**

- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

**Under the following terms:**

- **Attribution** — Give appropriate credit and link to the original
- **NonCommercial** — No commercial use without permission
- **ShareAlike** — Distribute contributions under the same license

See [docs/license.md](docs/license.md) for full details.

## Acknowledgements

This project is built on the shoulders of giants in the open source community:

- **[MkDocs](https://www.mkdocs.org/)** — Static site generator optimized for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** — Beautiful, responsive theme with rich navigation features
- **[p5.js](https://p5js.org/)** — Creative coding library from NYU ITP, used for all MicroSims
- **[vis-network](https://visjs.org/)** — Network visualization library powering the learning graph viewer
- **[Mermaid](https://mermaid.js.org/)** — Diagram-as-code library for flowcharts and concept diagrams
- **[Claude AI](https://claude.ai)** by Anthropic — AI-assisted content generation via Claude Code and Claude Skills
- **[GitHub Pages](https://pages.github.com/)** — Free hosting for open source projects

Special thanks to the educators, standards authors, and developers whose work makes accessible, high-quality ELA resources possible for all students.

## Contact

**Dan McCreary**

- LinkedIn: [linkedin.com/in/danmccreary](https://www.linkedin.com/in/danmccreary/)
- GitHub: [@dmccreary](https://github.com/dmccreary)

Questions, suggestions, or collaboration opportunities? Feel free to connect on LinkedIn or open an issue on GitHub.
