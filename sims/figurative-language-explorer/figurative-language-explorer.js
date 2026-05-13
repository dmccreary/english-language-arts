// Figurative Language Explorer — p5.js MicroSim
// CANVAS_HEIGHT: 450

let canvasWidth = 600;
let drawHeight = 420;
let controlHeight = 30;
let canvasHeight = drawHeight + controlHeight;
let containerWidth;
let margin = 14;

let resetBtn;
let selectedTile = null;

const FIGURES = [
  {
    name: "Metaphor",
    color: "#1565C0", textColor: "#fff",
    def: "A direct comparison between two unlike things, stating one IS the other.",
    example: `"Life is a journey with no map." — common metaphor`,
    practice: 'Which part of "The classroom was a zoo" is the tenor (subject being compared)?'
  },
  {
    name: "Simile",
    color: "#2E7D32", textColor: "#fff",
    def: "A comparison using 'like' or 'as' between two unlike things.",
    example: `"He was as brave as a lion." — Shakespeare (adapted)`,
    practice: 'Rewrite: "Her voice was like music." as a metaphor.'
  },
  {
    name: "Personification",
    color: "#6A1B9A", textColor: "#fff",
    def: "Giving human qualities, emotions, or actions to non-human things.",
    example: `"The wind whispered through the trees." — nature personified`,
    practice: 'Identify the personification: "The stars danced playfully in the moonlit sky."'
  },
  {
    name: "Hyperbole",
    color: "#C62828", textColor: "#fff",
    def: "Deliberate, extreme exaggeration not meant to be taken literally.",
    example: `"I've told you a million times!" — extreme exaggeration for emphasis`,
    practice: 'What effect does hyperbole create in: "I could sleep for a thousand years"?'
  },
  {
    name: "Verbal Irony",
    color: "#00695C", textColor: "#fff",
    def: "Saying the opposite of what you mean — the speaker's intent differs from literal meaning.",
    example: '"Oh great, another pop quiz." (speaker is not pleased)',
    practice: 'Is "What lovely weather!" said during a thunderstorm verbal irony? Why?'
  },
  {
    name: "Situational Irony",
    color: "#E65100", textColor: "#fff",
    def: "When what actually happens is the opposite of what was expected.",
    example: 'A fire station burns down.',
    practice: 'Why is it situational irony when a police station is robbed?'
  },
  {
    name: "Dramatic Irony",
    color: "#4527A0", textColor: "#fff",
    def: "The audience knows something important that a character does not.",
    example: 'In Romeo and Juliet, the audience knows Juliet is asleep, not dead — Romeo does not.',
    practice: 'Find dramatic irony in Oedipus Rex: what does the audience know that Oedipus does not?'
  },
  {
    name: "Symbolism",
    color: "#558B2F", textColor: "#fff",
    def: "An object, person, place, or event represents an abstract idea beyond its literal meaning.",
    example: 'The green light in The Great Gatsby symbolizes Gatsby\'s impossible dream.',
    practice: 'What might a withered rose symbolize in a poem about aging?'
  },
  {
    name: "Allusion",
    color: "#1565C0", textColor: "#fff",
    def: "An indirect reference to a well-known person, text, event, or myth.",
    example: '"He was an Einstein in the classroom." — alludes to Albert Einstein\'s genius',
    practice: 'What does the phrase "It\'s his Achilles\' heel" allude to, and what does it mean?'
  }
];

let tiles = [];

function buildTiles() {
  tiles = [];
  const cols = 3, rows = 3;
  const gridX = margin;
  const gridY = margin + 32; // below title
  const gridW = canvasWidth * 0.52 - margin;
  const gridH = drawHeight - gridY - margin;
  const tw = (gridW - margin * (cols - 1)) / cols;
  const th = (gridH - margin * (rows - 1)) / rows;

  FIGURES.forEach((fig, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    tiles.push({
      x: gridX + col * (tw + margin),
      y: gridY + row * (th + margin),
      w: tw, h: th,
      fig
    });
  });
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, canvasHeight);
  canvas.parent(document.querySelector("main"));
  buildTiles();

  resetBtn = createButton("Clear Selection");
  resetBtn.position(margin, drawHeight + 5);
  resetBtn.mousePressed(() => { selectedTile = null; });

  describe("Figurative Language Explorer: click a tile to learn about each figure of speech.", LABEL);
}

function draw() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
  buildTiles();
  resetBtn.position(margin, drawHeight + 5);

  // Backgrounds
  fill("aliceblue"); stroke("silver"); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill("white"); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill("#1a237e"); textAlign(CENTER, TOP); textStyle(BOLD); textSize(17);
  text("Figurative Language Explorer", canvasWidth / 2, margin);
  textStyle(NORMAL);

  // Draw tiles
  tiles.forEach((t, i) => {
    const isSelected = selectedTile === i;
    fill(isSelected ? t.fig.color : "#e8eaf6");
    stroke(t.fig.color); strokeWeight(isSelected ? 3 : 2);
    rect(t.x, t.y, t.w, t.h, 8);
    noStroke();
    fill(isSelected ? t.fig.textColor : t.fig.color);
    textAlign(CENTER, CENTER); textStyle(BOLD); textSize(13);
    text(t.fig.name, t.x + t.w / 2, t.y + t.h / 2);
    textStyle(NORMAL);
  });

  // Detail panel on right
  const px = canvasWidth * 0.54;
  const pw = canvasWidth - px - margin;
  const py = margin + 32;

  if (selectedTile !== null) {
    const fig = FIGURES[selectedTile];
    fill("white"); stroke(fig.color); strokeWeight(2);
    rect(px, py, pw, drawHeight - py - margin, 8);
    noStroke();

    // Content
    const tx = px + 10;
    let ty = py + 10;
    const lw = pw - 20;

    fill(fig.color); textAlign(LEFT, TOP); textStyle(BOLD); textSize(15);
    text(fig.name, tx, ty); ty += 22;
    textStyle(NORMAL);

    fill("#1a237e"); textSize(11); textStyle(BOLD);
    text("DEFINITION", tx, ty); ty += 15; textStyle(NORMAL);
    fill("#222"); textSize(12);
    ty = drawWrapped(fig.def, tx, ty, lw, 18);
    ty += 10;

    fill("#1a237e"); textSize(11); textStyle(BOLD);
    text("EXAMPLE", tx, ty); ty += 15; textStyle(NORMAL);
    fill("#333"); textSize(12);
    ty = drawWrapped(fig.example, tx, ty, lw, 18);
    ty += 10;

    fill("#1a237e"); textSize(11); textStyle(BOLD);
    text("PRACTICE QUESTION", tx, ty); ty += 15; textStyle(NORMAL);
    fill("#444"); textSize(12);
    drawWrapped(fig.practice, tx, ty, lw, 18);

  } else {
    fill("#e8eaf6"); stroke("#9fa8da"); strokeWeight(1);
    rect(px, py, pw, drawHeight - py - margin, 8);
    noStroke();
    fill("#555"); textAlign(CENTER, CENTER); textSize(13);
    text("Click any tile\nto see the definition,\nan example, and a\npractice question.", px + pw / 2, py + (drawHeight - py - margin) / 2);
  }
}

function drawWrapped(txt, x, y, maxW, lineH) {
  const words = txt.split(" ");
  let line = "", cy = y;
  for (const w of words) {
    const test = line + (line ? " " : "") + w;
    if (textWidth(test) > maxW && line) { text(line, x, cy); line = w; cy += lineH; }
    else line = test;
  }
  if (line) { text(line, x, cy); cy += lineH; }
  return cy;
}

function mousePressed() {
  const mx = mouseX, my = mouseY;
  tiles.forEach((t, i) => {
    if (mx >= t.x && mx <= t.x + t.w && my >= t.y && my <= t.y + t.h) {
      selectedTile = (selectedTile === i) ? null : i;
    }
  });
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
  buildTiles();
  resetBtn.position(margin, drawHeight + 5);
}

function updateCanvasSize() {
  const c = document.querySelector("main").getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
