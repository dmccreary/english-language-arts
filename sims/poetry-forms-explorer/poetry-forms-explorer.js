// Poetry Forms Explorer — p5.js MicroSim
// CANVAS_HEIGHT: 460

let canvasWidth = 640;
let drawHeight = 420;
let controlHeight = 40;
let canvasHeight = drawHeight + controlHeight;
let containerWidth;
let margin = 14;

let resetBtn;
let selectedCard = null;

const FORMS = [
  {
    name: "Epic Poetry",
    color: "#1565C0", textColor: "#fff",
    traits: ["Extended narrative — thousands of lines", "Elevated, formal diction", "Begins in medias res (in the middle)", "Invokes the Muse", "Grand, heroic subject matter"],
    examples: "The Odyssey (Homer), Beowulf, Paradise Lost (Milton)",
    contrast: "Unlike lyric poetry, epic is objective — the speaker narrates rather than expressing personal emotion. Unlike free verse, epic follows strict formal conventions.",
    question: "What does it mean to 'begin in medias res'? Find an example in a text you've read.",
    excerpt: '"Sing in me, Muse, and through me tell the story / of that man skilled in all ways of contending..." — The Odyssey (Fitzgerald translation)'
  },
  {
    name: "Sonnet",
    color: "#2E7D32", textColor: "#fff",
    traits: ["14 lines", "Iambic pentameter (10 syllables, da-DUM pattern)", "Either Shakespearean (ABAB CDCD EFEF GG) or Petrarchan (ABBAABBA CDECDE)", "Volta — a 'turn' or shift in argument", "Traditionally explores love, beauty, or mortality"],
    examples: "Shakespeare's Sonnet 18 ('Shall I compare thee…'), Sonnet 116, Edna St. Vincent Millay's sonnets",
    contrast: "The sonnet's strict form (unlike free verse) creates tension between constraint and content. Its length distinguishes it from lyrics like odes.",
    question: "Where is the volta (turn) in Sonnet 18? What shifts in the argument at that moment?",
    excerpt: '"Shall I compare thee to a summer\'s day? / Thou art more lovely and more temperate..." — Shakespeare, Sonnet 18'
  },
  {
    name: "Lyric Poetry",
    color: "#6A1B9A", textColor: "#fff",
    traits: ["Short, personal, subjective", "Expresses the speaker's emotions and thoughts", "Rich use of imagery and figurative language", "Musical quality — originally meant to be sung with a lyre", "Many subforms: ode, elegy, haiku"],
    examples: "Emily Dickinson's poems, 'O Captain! My Captain!' (Whitman), Ode to a Nightingale (Keats)",
    contrast: "Lyric is personal and short — unlike epic (long, objective narrative). Unlike narrative poetry, lyric doesn't tell a story; it captures a moment or feeling.",
    question: "Dickinson's 'Because I could not stop for Death' is lyric. What single emotional experience does it capture?",
    excerpt: '"Because I could not stop for Death — / He kindly stopped for me — / The Carriage held but just Ourselves — / And Immortality." — Dickinson'
  },
  {
    name: "Free Verse",
    color: "#C62828", textColor: "#fff",
    traits: ["No fixed meter or rhyme scheme", "Uses natural speech rhythms", "Line breaks serve as expressive tools", "Relies heavily on imagery and sound devices", "20th–21st century dominant form"],
    examples: "Leaves of Grass (Whitman), most contemporary poetry, Langston Hughes's 'The Negro Speaks of Rivers'",
    contrast: "Free verse lacks the formal constraints of the sonnet (meter, rhyme) and the length/structure of epic. It resembles lyric in subjectivity but rejects musical regularity.",
    question: "If free verse has no rules, how does a poet still create rhythm and control the reader's experience?",
    excerpt: '"I am large, I contain multitudes... / Do I contradict myself? / Very well then I contradict myself." — Whitman, Song of Myself'
  }
];

let cards = [];

function buildCards() {
  cards = [];
  const cols = 2, rows = 2;
  const gridX = margin;
  const gridY = margin + 34;
  const gridW = canvasWidth - margin * 2;
  const gridH = drawHeight - gridY - margin;
  const tw = (gridW - margin * (cols - 1)) / cols;
  const th = (gridH - margin * (rows - 1)) / rows;

  FORMS.forEach((f, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    cards.push({
      x: gridX + col * (tw + margin),
      y: gridY + row * (th + margin),
      w: tw, h: th, form: f, idx: i
    });
  });
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, canvasHeight);
  canvas.parent(document.querySelector("main"));
  buildCards();

  resetBtn = createButton("Clear Selection");
  resetBtn.position(margin, drawHeight + 8);
  resetBtn.mousePressed(() => { selectedCard = null; });

  describe("Poetry Forms Explorer: click a card to compare the four major poetry forms.", LABEL);
}

function draw() {
  updateCanvasSize();
  if (abs(canvasWidth - containerWidth) > 2) {
    resizeCanvas(containerWidth, canvasHeight);
    buildCards();
    resetBtn.position(margin, drawHeight + 8);
  }

  fill("aliceblue"); stroke("silver"); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill("white"); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill("#1a237e"); textAlign(CENTER, TOP); textStyle(BOLD); textSize(17);
  text("Poetry Forms Explorer", canvasWidth / 2, margin);
  textStyle(NORMAL);

  if (selectedCard !== null) {
    drawExpandedCard();
  } else {
    drawCardGrid();
  }
}

function drawCardGrid() {
  cards.forEach((c, i) => {
    const clr = color(c.form.color);
    fill(color(red(clr), green(clr), blue(clr), 200));
    stroke(clr); strokeWeight(2);
    rect(c.x, c.y, c.w, c.h, 10);
    noStroke();

    // Form name
    fill(255); textAlign(CENTER, TOP); textStyle(BOLD); textSize(15);
    text(c.form.name, c.x + c.w / 2, c.y + 12);
    textStyle(NORMAL);

    // 3 traits
    fill(255); textAlign(LEFT, TOP); textSize(11);
    c.form.traits.slice(0, 3).forEach((t, ti) => {
      text("• " + t, c.x + 10, c.y + 36 + ti * 18, c.w - 20);
    });

    // Excerpt teaser
    fill(255); textAlign(CENTER, BOTTOM); textSize(10); textStyle(ITALIC);
    text("Click to expand", c.x + c.w / 2, c.y + c.h - 8);
    textStyle(NORMAL);
  });
}

function drawExpandedCard() {
  const f = FORMS[selectedCard];
  const clr = color(f.color);

  // Background panel
  fill(color(red(clr), green(clr), blue(clr), 40)); noStroke();
  rect(margin, margin + 32, canvasWidth - margin * 2, drawHeight - margin - 36, 10);

  const px = margin + 10, pw = canvasWidth - margin * 2 - 20;
  let ty = margin + 44;

  // Name
  fill(f.color); textAlign(LEFT, TOP); textStyle(BOLD); textSize(18);
  text(f.name, px, ty); ty += 26;

  // Traits (left column)
  const col1W = pw * 0.48;
  const col2X = px + col1W + 12;
  const col2W = pw - col1W - 12;

  fill("#1a237e"); textStyle(BOLD); textSize(11); textAlign(LEFT, TOP);
  text("KEY CHARACTERISTICS", px, ty); ty += 14; textStyle(NORMAL);
  fill("#111"); textSize(11);
  let leftY = ty;
  f.traits.forEach(t => {
    leftY = drawWrapped("• " + t, px, leftY, col1W - 4, 15);
    leftY += 2;
  });

  // Right column: examples + contrast + excerpt
  let rightY = ty;
  fill("#1a237e"); textStyle(BOLD); textSize(11); textAlign(LEFT, TOP);
  text("EXAMPLES", col2X, rightY); rightY += 14; textStyle(NORMAL);
  fill("#333"); textSize(11);
  rightY = drawWrapped(f.examples, col2X, rightY, col2W, 15) + 8;

  fill("#1a237e"); textStyle(BOLD); textSize(11);
  text("CONTRAST WITH OTHER FORMS", col2X, rightY); rightY += 14; textStyle(NORMAL);
  fill("#444"); textSize(11);
  rightY = drawWrapped(f.contrast, col2X, rightY, col2W, 15) + 8;

  // Excerpt
  const exY = max(leftY, rightY) + 4;
  fill(color(red(clr), green(clr), blue(clr), 60)); stroke(clr); strokeWeight(1);
  rect(px, exY, pw, 44, 6);
  noStroke(); fill("#111"); textSize(10); textStyle(ITALIC); textAlign(LEFT, TOP);
  drawWrapped(f.excerpt, px + 8, exY + 6, pw - 16, 15);
  textStyle(NORMAL);

  // Practice question
  const qY = exY + 50;
  if (qY < drawHeight - 26) {
    fill("#6A1B9A"); textStyle(BOLD); textSize(11); textAlign(LEFT, TOP);
    text("PRACTICE QUESTION:", px, qY);
    textStyle(NORMAL); fill("#333"); textSize(11);
    drawWrapped(f.question, px, qY + 14, pw, 15);
  }

  // Back hint
  fill("#555"); noStroke(); textAlign(CENTER, BOTTOM); textSize(11);
  text("← Click any card name above or use 'Clear Selection' to return to grid", canvasWidth / 2, drawHeight - 4);
}

function mousePressed() {
  if (selectedCard !== null) { selectedCard = null; return; }
  cards.forEach((c, i) => {
    if (mouseX >= c.x && mouseX <= c.x + c.w && mouseY >= c.y && mouseY <= c.y + c.h) {
      selectedCard = i;
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

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
  buildCards();
  resetBtn.position(margin, drawHeight + 8);
}

function updateCanvasSize() {
  const c = document.querySelector("main").getBoundingClientRect();
  containerWidth = Math.floor(c.width); canvasWidth = containerWidth;
}
