// Sentence Structure Analyzer — p5.js MicroSim
// CANVAS_HEIGHT: 460

let canvasWidth = 640;
let drawHeight = 390;
let controlHeight = 70;
let canvasHeight = drawHeight + controlHeight;
let containerWidth;
let margin = 16;

let sentenceSelect;
let selectedChunk = null;

const SENTENCES = [
  {
    type: "Simple",
    text: "The raven perched silently on the pale bust of Pallas.",
    chunks: [
      { words: "The raven",               role: "Subject",            color: "#1565C0", def: "The subject performs the action of the verb. 'The raven' is the complete subject (determiner + noun)." },
      { words: "perched silently",        role: "Predicate/Verb",     color: "#2E7D32", def: "The predicate includes the verb 'perched' and the adverb 'silently.' Together they describe what the subject does." },
      { words: "on the pale bust",        role: "Prepositional Phrase",color: "#E65100", def: "A prepositional phrase acts as an adjective or adverb. Here it answers 'where?' about the perching — adverbial function." },
      { words: "of Pallas",              role: "Prepositional Phrase",color: "#E65100", def: "This prepositional phrase modifies 'bust' — adjective function, telling us which bust." }
    ],
    desc: "Simple sentence — one independent clause (one subject + one predicate). No subordinate clauses."
  },
  {
    type: "Compound",
    text: "She read the letter, and her hands began to tremble.",
    chunks: [
      { words: "She read the letter",          role: "Independent Clause 1", color: "#1565C0", def: "A complete thought: subject (She) + verb (read) + direct object (the letter). Could stand alone as a sentence." },
      { words: ",",                             role: "Punctuation",           color: "#888888", def: "A comma before a coordinating conjunction joining two independent clauses." },
      { words: "and",                           role: "Coordinating Conjunction", color: "#6A1B9A", def: "FANBOYS: For, And, Nor, But, Or, Yet, So. 'And' joins two equal independent clauses." },
      { words: "her hands began to tremble",   role: "Independent Clause 2", color: "#C62828", def: "A second complete thought: subject (her hands) + predicate (began to tremble). Could stand alone." }
    ],
    desc: "Compound sentence — two independent clauses joined by a coordinating conjunction (FANBOYS). Pattern: IC + , + CC + IC."
  },
  {
    type: "Complex",
    text: "Although the night was dark, he pressed forward through the forest.",
    chunks: [
      { words: "Although",                     role: "Subordinating Conjunction", color: "#6A1B9A", def: "Subordinating conjunctions (although, because, since, when, if) introduce dependent clauses and show relationships." },
      { words: "the night was dark",           role: "Dependent Clause",         color: "#F57F17", def: "A dependent (subordinate) clause has a subject and verb but CANNOT stand alone — it depends on the main clause." },
      { words: ",",                             role: "Punctuation",               color: "#888888", def: "When the dependent clause comes first, place a comma before the independent clause." },
      { words: "he pressed forward",           role: "Independent Clause",        color: "#1565C0", def: "The main clause: subject (he) + predicate (pressed forward). This is the sentence's core." },
      { words: "through the forest",           role: "Prepositional Phrase",      color: "#E65100", def: "Adverbial prepositional phrase answering 'where?' about pressing forward." }
    ],
    desc: "Complex sentence — one independent clause + one or more dependent clauses. Pattern: DC + , + IC."
  },
  {
    type: "Compound-Complex",
    text: "Because she studied every night, she aced the test, and her teacher praised her.",
    chunks: [
      { words: "Because",                      role: "Subordinating Conjunction", color: "#6A1B9A", def: "'Because' introduces a cause-and-effect dependent clause, making the following group a subordinate clause." },
      { words: "she studied every night",      role: "Dependent Clause",          color: "#F57F17", def: "Dependent clause: cannot stand alone. It provides the reason for the outcome in the independent clauses." },
      { words: ", she aced the test",          role: "Independent Clause 1",      color: "#1565C0", def: "First independent clause: subject (she) + verb (aced) + direct object (the test). Core meaning." },
      { words: ", and",                         role: "Coordinating Conjunction",  color: "#888888", def: "Coordinating conjunction joining the two independent clauses." },
      { words: "her teacher praised her",      role: "Independent Clause 2",      color: "#C62828", def: "Second independent clause: subject (her teacher) + verb (praised) + object (her)." }
    ],
    desc: "Compound-complex — two or more independent clauses AND one or more dependent clauses. The most flexible sentence type."
  },
  {
    type: "Participial Phrase",
    text: "Trembling with exhaustion, the runner crossed the finish line.",
    chunks: [
      { words: "Trembling with exhaustion",    role: "Participial Phrase",    color: "#00695C", def: "A participial phrase begins with a verb form (-ing or -ed) and modifies the subject. Here it describes the runner's state." },
      { words: ",",                             role: "Punctuation",           color: "#888888", def: "Comma separates the introductory participial phrase from the main clause." },
      { words: "the runner",                   role: "Subject",               color: "#1565C0", def: "The subject — must match the participial phrase to avoid a dangling modifier." },
      { words: "crossed the finish line",      role: "Predicate",             color: "#2E7D32", def: "Verb (crossed) + object (the finish line). The main action of the sentence." }
    ],
    desc: "Uses a participial phrase as a sentence opener. Shows mastery of varied syntax and is common in literary prose."
  }
];

let chunks = [];

function buildChunks() {
  chunks = [];
  if (!sentenceSelect) return;
  const idx = parseInt(sentenceSelect.value());
  const sent = SENTENCES[idx];
  if (!sent) return;

  const totalWords = sent.chunks.reduce((acc, c) => acc + c.words.split(" ").filter(w => w).length, 0);
  const availW = canvasWidth - margin * 2;
  let cx = margin;
  const cy = drawHeight * 0.35;

  sent.chunks.forEach((c, i) => {
    const wc = c.words.split(" ").filter(w => w).length;
    const cw = Math.max((wc / totalWords) * availW * 0.9, 20);
    chunks.push({ x: cx, y: cy - 22, w: cw, h: 44, chunk: c, idx: i });
    cx += cw + 6;
  });
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, canvasHeight);
  canvas.parent(document.querySelector("main"));

  sentenceSelect = createSelect();
  SENTENCES.forEach((s, i) => sentenceSelect.option(s.type + " Sentence", i.toString()));
  sentenceSelect.position(margin, drawHeight + 8);
  sentenceSelect.size(200);
  sentenceSelect.changed(() => { selectedChunk = null; buildChunks(); });

  buildChunks();
  describe("Sentence Structure Analyzer: click any colored chunk to learn about that grammatical role.", LABEL);
}

function draw() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
  buildChunks();

  fill("aliceblue"); stroke("silver"); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill("white"); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill("#1a237e"); textAlign(CENTER, TOP); textStyle(BOLD); textSize(17);
  text("Sentence Structure Analyzer", canvasWidth / 2, margin);
  textStyle(NORMAL);

  if (chunks.length === 0) { buildChunks(); return; }
  const idx = parseInt(sentenceSelect.value());
  const sent = SENTENCES[idx];

  // Sentence type label
  fill("#333"); textAlign(LEFT, TOP); textSize(12);
  text("Type:", margin, margin + 28);
  fill(sent.type === "Simple" ? "#1565C0" : sent.type === "Compound" ? "#6A1B9A" : sent.type === "Complex" ? "#E65100" : "#C62828");
  textStyle(BOLD); text(sent.type + " Sentence", margin + 38, margin + 28);
  textStyle(NORMAL);

  // Draw word chunks
  chunks.forEach((c, i) => {
    const clr = color(c.chunk.color);
    const isSelected = selectedChunk === i;
    fill(isSelected ? clr : color(red(clr), green(clr), blue(clr), 190));
    stroke(clr); strokeWeight(isSelected ? 3 : 1.5);
    rect(c.x, c.y, c.w, c.h, 6);
    noStroke();
    fill(255); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(11);
    // Fit words to width
    const words = c.chunk.words;
    text(words, c.x + c.w / 2, c.y + c.h / 2, c.w - 4);
    textStyle(NORMAL);
  });

  // Role labels below chunks
  chunks.forEach((c, i) => {
    const clr = color(c.chunk.color);
    noStroke(); fill(clr); textAlign(CENTER, TOP); textStyle(BOLD); textSize(9);
    const labelText = c.chunk.role;
    text(labelText, c.x + c.w / 2, c.y + c.h + 4, c.w);
    textStyle(NORMAL);

    // Connecting line
    stroke(c.chunk.color); strokeWeight(1); line(c.x + c.w / 2, c.y + c.h, c.x + c.w / 2, c.y + c.h + 2);
  });

  // Sentence type description
  const descY = drawHeight * 0.6;
  fill("#1a237e"); noStroke(); textAlign(LEFT, TOP); textStyle(BOLD); textSize(12);
  text("Sentence Pattern:", margin, descY);
  textStyle(NORMAL); fill("#333"); textSize(12);
  drawWrapped(sent.desc, margin, descY + 16, canvasWidth * 0.5 - margin, 17);

  // Detail panel for selected chunk
  const px = canvasWidth * 0.53;
  const pw = canvasWidth - px - margin;
  const py = descY - 10;
  const ph = drawHeight - py - margin;

  if (selectedChunk !== null) {
    const c = chunks[selectedChunk].chunk;
    fill("white"); stroke(c.color); strokeWeight(1.5);
    rect(px, py, pw, ph, 8);
    noStroke();
    const tx = px + 8; const lw = pw - 16; let ty = py + 8;
    fill(c.color); textStyle(BOLD); textSize(13); textAlign(LEFT, TOP);
    text(c.role, tx, ty); ty += 18; textStyle(NORMAL);
    fill("#111"); textSize(11); textStyle(ITALIC);
    text('"' + c.words + '"', tx, ty); ty += 15; textStyle(NORMAL);
    fill("#333"); textSize(11);
    drawWrapped(c.def, tx, ty, lw, 15);
  } else {
    fill("#e8eaf6"); stroke("#9fa8da"); strokeWeight(1);
    rect(px, py, pw, ph, 8); noStroke();
    fill("#555"); textAlign(CENTER, CENTER); textSize(12);
    text("Click any\ncolored chunk\nto learn about\nthat grammatical\nrole", px + pw / 2, py + ph / 2);
  }

  // Legend at bottom of draw region
  const legY = drawHeight - 22;
  const roles = [...new Set(SENTENCES.flatMap(s => s.chunks.map(c => c.role)))].slice(0, 5);
  const roleColors = { "Subject": "#1565C0", "Predicate": "#2E7D32", "Dependent Clause": "#F57F17", "Coordinating Conjunction": "#6A1B9A", "Prepositional Phrase": "#E65100" };
  let lx = margin;
  Object.entries(roleColors).forEach(([role, clr]) => {
    fill(clr); noStroke(); rect(lx, legY, 10, 10, 2);
    fill("#333"); textAlign(LEFT, CENTER); textSize(9); text(role, lx + 12, legY + 5);
    lx += textWidth(role) + 22;
  });

  // Control label
  fill("#333"); noStroke(); textAlign(LEFT, CENTER); textSize(12);
  text("Sentence Type:", margin, drawHeight + 22);
  sentenceSelect.position(margin + 100, drawHeight + 8);
}

function mousePressed() {
  chunks.forEach((c, i) => {
    if (mouseX >= c.x && mouseX <= c.x + c.w && mouseY >= c.y && mouseY <= c.y + c.h) {
      selectedChunk = (selectedChunk === i) ? null : i;
    }
  });
}

function drawWrapped(txt, x, y, maxW, lineH) {
  const words = txt.split(" "); let line = "", cy = y;
  for (const w of words) {
    const t = line + (line ? " " : "") + w;
    if (textWidth(t) > maxW && line) { text(line, x, cy); line = w; cy += lineH; } else line = t;
  }
  if (line) { text(line, x, cy); cy += lineH; } return cy;
}

function windowResized() { updateCanvasSize(); resizeCanvas(containerWidth, canvasHeight); buildChunks(); }

function updateCanvasSize() {
  const c = document.querySelector("main").getBoundingClientRect();
  containerWidth = Math.floor(c.width); canvasWidth = containerWidth;
}
