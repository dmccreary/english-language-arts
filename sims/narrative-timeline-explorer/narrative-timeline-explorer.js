// Narrative Timeline Explorer — p5.js MicroSim
// Shows story time (x-axis) vs. narrative space (bar height)
// CANVAS_HEIGHT: 460

let canvasWidth = 640;
let drawHeight = 390;
let controlHeight = 70;
let canvasHeight = drawHeight + controlHeight;
let containerWidth;
let margin = 14;

let storySelect;
let selectedBar = null;
let hoveredBar = null;

const NARRATIVES = {
  romeo: {
    title: "Romeo and Juliet — Shakespeare",
    sections: [
      { label: "Prologue", time: 0,  width: 0.5, height: 30,  type: "summary",  detail: "The Chorus compresses the entire plot into 14 lines of sonnet — a deliberate choice to create dramatic irony.", question: "Why does Shakespeare tell us the ending before the play begins? What effect does this create on audience experience?" },
      { label: "Exposition (Act I, i)", time: 1, width: 1.5, height: 55, type: "scene", detail: "Brawl in the street and Romeo's melancholy. Shakespeare devotes full dramatic scene to establishing the feud and Romeo's emotional state.", question: "What does the street brawl efficiently establish that might have taken chapters in a novel?" },
      { label: "Feast / Meeting (I, v)", time: 2.5, width: 2, height: 110, type: "scene", detail: "Romeo and Juliet meet and fall in love at the Capulet feast. Heavy scene time signals this is the central story event.", question: "Why does Shakespeare spend so much dramatic time on a conversation that lasts only a few minutes in story time?" },
      { label: "Balcony Scene (II, ii)", time: 4.5, width: 2.5, height: 130, type: "scene", detail: "The balcony scene is the most expanded moment in the play. Story time: one night. Narrative space: the longest single scene.", question: "Why might Shakespeare devote more page space to the balcony scene than to any other single event, including the deaths?" },
      { label: "Secret Marriage", time: 7, width: 1, height: 40, type: "summary", detail: "The wedding itself is summarized — we hear of it rather than witness it. This compression keeps focus on emotional stakes.", question: "What is lost by summarizing the wedding? What is gained?" },
      { label: "Tybalt Killed (III, i)", time: 8, width: 2, height: 100, type: "scene", detail: "The pivotal murder scene. Romeo kills Tybalt. Full scene treatment marks this as the catastrophic turning point.", question: "How does giving this scene full dramatic space signal its importance to the plot's direction?" },
      { label: "Banishment / Parting (III, v)", time: 10, width: 1.5, height: 85, type: "scene", detail: "Romeo and Juliet's final night together before banishment — an extended farewell compressed into one scene.", question: "Story time: one night. Narrative space: a full scene. What does this tell us about the author's priorities?" },
      { label: "Weeks Pass", time: 11.5, width: 0.5, height: 18, type: "summary", detail: "Several weeks of separation are compressed into references. This pacing technique (summary) speeds the plot toward resolution.", question: "What would be lost if Shakespeare had written scenes for every day of Romeo's exile?" },
      { label: "Juliet \"Dies\" (IV, iii)", time: 12, width: 1.5, height: 70, type: "scene", detail: "Juliet takes the sleeping potion. Full scene treatment emphasizes her courage and the risk she takes.", question: "Why might an author choose to show Juliet's private moment with the potion rather than summarize it?" },
      { label: "Tomb / Deaths (V, iii)", time: 13.5, width: 2.5, height: 120, type: "scene", detail: "The climax and resolution. Maximum narrative space for maximum emotional impact. Both deaths are fully dramatized.", question: "Romeo and Juliet die within minutes of each other in story time. Why does Shakespeare give this section so much stage time?" }
    ]
  },
  mice: {
    title: "Of Mice and Men — Steinbeck",
    sections: [
      { label: "Riverbank Opening", time: 0, width: 1, height: 80, type: "scene", detail: "The novel opens with an extended, lyrical description of the riverbank — unusual narrative space for a 'mere' setting.", question: "Why might Steinbeck open with this peaceful, detailed scene that will be tragically echoed at the novel's end?" },
      { label: "George & Lennie's Backstory", time: 0.5, width: 1, height: 40, type: "summary", detail: "Through dialogue, Steinbeck compresses months of George and Lennie's shared history into a brief exchange.", question: "What does using dialogue to deliver backstory accomplish that a traditional flashback might not?" },
      { label: "Arrive at Ranch", time: 1, width: 1.5, height: 70, type: "scene", detail: "The bunkhouse introduction. Steinbeck gives full scene treatment to each character's first appearance — building the community's texture.", question: "Steinbeck introduces five characters in this section. What strategy does he use so we can keep them distinct?" },
      { label: "Curley Threatens Lennie", time: 2.5, width: 1.5, height: 90, type: "scene", detail: "The confrontation with Curley. Full scene — this establishes the threat and foreshadows the inevitable conflict.", question: "Why might Steinbeck choose to show rather than tell Curley's dangerous character?" },
      { label: "Candy's Dog Shot (Ch. 3)", time: 4, width: 2, height: 120, type: "scene", detail: "One of the novel's most expanded scenes — Candy's dog killed offstage but its sounds heard. Maximum space for a symbolic event.", question: "The dog dies offstage, but Steinbeck gives this scene maximum space. How does that technique heighten the emotional effect?" },
      { label: "Dream Farm Discussion", time: 6, width: 1.5, height: 95, type: "scene", detail: "George describes the dream farm. This scene is given significant space because the dream is the novel's emotional center.", question: "Why might a scene about the future (a dream) occupy more narrative space than many 'actual' events?" },
      { label: "Weeks of Work Pass", time: 7.5, width: 0.5, height: 20, type: "summary", detail: "Time is compressed — weeks of ranch work become a brief transition.", question: "Steinbeck is famous for compression. How does this summary contrast with the detailed scene treatment of the dream conversation?" },
      { label: "Curley's Wife / Lennie (Ch. 5)", time: 8, width: 1.5, height: 85, type: "scene", detail: "Lennie kills Curley's wife. Extended scene — this is the catastrophic pivot point, given full dramatic treatment.", question: "The killing takes seconds in story time but pages in narrative time. What does this expansion accomplish?" },
      { label: "Lennie at Riverbank (Ch. 6)", time: 9.5, width: 2, height: 130, type: "scene", detail: "The final scene. Deliberate echo of the opening. Maximum narrative space for the tragic ending — same setting, opposite outcome.", question: "The novel begins and ends at the riverbank. What is the effect of this structural choice on the reader's experience of the ending?" }
    ]
  }
};

const TYPE_COLORS = {
  scene:    { bg: "#1565C0", label: "Scene" },
  summary:  { bg: "#90A4AE", label: "Summary" },
  flashback:{ bg: "#F57F17", label: "Flashback" },
  climax:   { bg: "#E53935", label: "Climax" }
};

let bars = [];

function buildBars() {
  bars = [];
  const story = storySelect ? storySelect.value() : "romeo";
  const data = NARRATIVES[story];
  if (!data) return;

  const sections = data.sections;
  const totalTime = Math.max(...sections.map(s => s.time + s.width)) + 0.5;
  const chartX = margin * 3;
  const chartW = canvasWidth * 0.6 - margin * 2;
  const chartTopY = margin + 34;
  const chartH = drawHeight - chartTopY - 40;
  const maxH = Math.max(...sections.map(s => s.height));

  sections.forEach((s, i) => {
    const x = chartX + (s.time / totalTime) * chartW;
    const bw = (s.width / totalTime) * chartW;
    const bh = (s.height / maxH) * chartH;
    bars.push({ x, y: chartTopY + chartH - bh, w: bw, h: bh, section: s, idx: i,
      chartTopY, chartH, chartX, chartW });
  });
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, canvasHeight);
  canvas.parent(document.querySelector("main"));

  storySelect = createSelect();
  Object.entries({ romeo: "Romeo and Juliet", mice: "Of Mice and Men" }).forEach(([k, v]) => storySelect.option(v, k));
  storySelect.position(margin, drawHeight + 8);
  storySelect.size(200);
  storySelect.changed(() => { selectedBar = null; buildBars(); });

  describe("Narrative Timeline Explorer: compare story time versus narrative space for different texts.", LABEL);
}

function draw() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
  buildBars();

  fill("aliceblue"); stroke("silver"); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill("white"); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  const story = storySelect ? storySelect.value() : "romeo";
  const title = NARRATIVES[story]?.title || "";
  fill("#1a237e"); textAlign(CENTER, TOP); textStyle(BOLD); textSize(16);
  text("Narrative Timeline: " + title, canvasWidth / 2, margin);
  textStyle(NORMAL);

  if (bars.length === 0) { buildBars(); return; }
  const { chartTopY, chartH, chartX, chartW } = bars[0];
  const chartBottomY = chartTopY + chartH;

  // Grid lines
  stroke(220); strokeWeight(0.5);
  for (let i = 0; i <= 4; i++) {
    const gy = chartTopY + (chartH / 4) * i;
    line(chartX, gy, chartX + chartW, gy);
  }

  // Axes
  stroke("#555"); strokeWeight(1.5);
  line(chartX, chartTopY, chartX, chartBottomY + 2);
  line(chartX, chartBottomY, chartX + chartW + 2, chartBottomY);
  noStroke();

  // Axis labels
  fill("#333"); textSize(11); textAlign(CENTER, TOP);
  text("← Story Time (chronological) →", chartX + chartW / 2, chartBottomY + 14);
  push(); translate(chartX - 20, chartTopY + chartH / 2); rotate(-HALF_PI);
  textAlign(CENTER, CENTER); text("Narrative Space", 0, 0); pop();

  // Bars
  bars.forEach((b, i) => {
    const type = b.section.type;
    const clr = color(TYPE_COLORS[type]?.bg || "#999");
    const isHovered = hoveredBar === i;
    const isSelected = selectedBar === i;

    fill(isSelected ? clr : isHovered ? color(red(clr), green(clr), blue(clr), 200) : color(red(clr), green(clr), blue(clr), 170));
    stroke(isSelected ? "#000" : clr); strokeWeight(isSelected ? 2 : 1);
    rect(b.x, b.y, b.w - 2, b.h, 3);

    // Label on bar (if wide enough)
    noStroke(); fill(255); textAlign(CENTER, TOP); textSize(9); textStyle(BOLD);
    if (b.w > 24) {
      const words = b.section.label.split(" ");
      let line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
      let line2 = words.slice(Math.ceil(words.length / 2)).join(" ");
      text(line1, b.x + b.w / 2 - 1, b.y + 4);
      if (line2) text(line2, b.x + b.w / 2 - 1, b.y + 14);
    }
    textStyle(NORMAL);
  });

  // Hover tooltip
  if (hoveredBar !== null && selectedBar === null) {
    const b = bars[hoveredBar];
    const s = b.section;
    const tt_x = min(b.x + b.w / 2, canvasWidth - 160);
    const tt_y = max(b.y - 50, chartTopY);
    fill(30); rect(tt_x - 4, tt_y, 160, 36, 4); noStroke();
    fill(255); textSize(11); textAlign(LEFT, TOP); textStyle(BOLD);
    text(s.label, tt_x + 2, tt_y + 4);
    textStyle(NORMAL); textSize(10);
    text(TYPE_COLORS[s.type]?.label + " — click for details", tt_x + 2, tt_y + 18);
  }

  // Detail panel
  const px = canvasWidth * 0.63;
  const pw = canvasWidth - px - margin;
  const py = margin + 28;

  if (selectedBar !== null) {
    const s = bars[selectedBar].section;
    const clr = TYPE_COLORS[s.type]?.bg || "#555";
    fill("white"); stroke(clr); strokeWeight(1.5);
    rect(px, py, pw, drawHeight - py - margin, 6);
    noStroke();
    const tx = px + 8; const lw = pw - 16; let ty = py + 8;
    fill(clr); textAlign(LEFT, TOP); textStyle(BOLD); textSize(13);
    text(s.label, tx, ty); ty += 18;
    fill("#555"); textStyle(NORMAL); textSize(10);
    text(TYPE_COLORS[s.type]?.label + " — " + (s.height > 80 ? "high" : s.height > 40 ? "moderate" : "low") + " narrative space", tx, ty); ty += 16;
    fill("#222"); textSize(11);
    ty = drawWrapped(s.detail, tx, ty, lw, 15) + 6;
    fill("#1565C0"); textStyle(BOLD); textSize(10);
    text("Key question:", tx, ty); ty += 13; textStyle(NORMAL);
    fill("#333"); textSize(10);
    drawWrapped(s.question, tx, ty, lw, 14);
  } else {
    fill("#e8eaf6"); stroke("#9fa8da"); strokeWeight(1);
    rect(px, py, pw, drawHeight - py - margin, 6);
    noStroke(); fill("#555"); textAlign(CENTER, CENTER); textSize(12);
    text("Click any bar\nto see the pacing\nanalysis and a\nkey question.", px + pw / 2, py + (drawHeight - py) / 2 - 10);
  }

  // Legend
  const lx = margin + 4; let ly = drawHeight - 32;
  Object.entries(TYPE_COLORS).slice(0, 3).forEach(([type, info]) => {
    fill(info.bg); noStroke(); rect(lx + (type === "scene" ? 0 : type === "summary" ? 70 : 150), ly, 10, 10, 2);
    fill("#333"); textAlign(LEFT, CENTER); textSize(10);
    text(info.label, lx + (type === "scene" ? 12 : type === "summary" ? 82 : 162), ly + 5);
  });

  // Controls
  fill("#333"); textSize(13); textAlign(LEFT, CENTER); noStroke();
  text("Narrative:", margin, drawHeight + 18 + 8);
  storySelect.position(margin + 72, drawHeight + 8);

  // Detect hover
  hoveredBar = null;
  bars.forEach((b, i) => {
    if (mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.y && mouseY <= b.y + b.h) hoveredBar = i;
  });
}

function mousePressed() {
  bars.forEach((b, i) => {
    if (mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.y && mouseY <= b.y + b.h) {
      selectedBar = (selectedBar === i) ? null : i;
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

function windowResized() { updateCanvasSize(); resizeCanvas(containerWidth, canvasHeight); buildBars(); }
function updateCanvasSize() {
  const c = document.querySelector("main").getBoundingClientRect();
  containerWidth = Math.floor(c.width); canvasWidth = containerWidth;
}
