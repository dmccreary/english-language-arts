// Lexile Level Explorer — p5.js MicroSim
// CANVAS_HEIGHT: 430

let canvasWidth = 640;
let drawHeight = 370;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let containerWidth;
let margin = 20;
let sliderLeftMargin = 210;

let lexileSlider;
let readerLevel = 1050;

// Lexile bands: [min, max, label, color, gradeBand]
const BANDS = [
  [  0,  300, "Emergent (BR–300)",    "#90CAF9", "K–1"   ],
  [300,  500, "Early Reader (300–500)","#64B5F6", "1–2"   ],
  [500,  700, "Developing (500–700)",  "#42A5F5", "3–4"   ],
  [700,  900, "Grade-Level (700–900)", "#2E7D32", "5–6"   ],
  [900, 1100, "Advanced (900–1100)",   "#F9A825", "7–8"   ],
  [1100,1300, "College-Prep (1100–1300)","#EF6C00", "9–10"  ],
  [1300,1500, "Proficient (1300–1500)","#C62828", "11–12" ],
  [1500,1800, "Expert (1500+)",        "#6A1B9A", "College"]
];

// Representative books: [title, lexile, short]
const BOOKS = [
  ["Charlotte's Web",              680, "E.B. White"],
  ["The Giver",                    760, "Lowry"],
  ["The Outsiders",                750, "Hinton"],
  ["Of Mice and Men",              630, "Steinbeck"],
  ["To Kill a Mockingbird",        870, "Lee"],
  ["The Great Gatsby",             1010,"Fitzgerald"],
  ["1984",                         1090,"Orwell"],
  ["Lord of the Flies",            770, "Golding"],
  ["Romeo and Juliet",             1160,"Shakespeare"],
  ["Beloved",                      1050,"Morrison"],
  ["The Scarlet Letter",           1420,"Hawthorne"],
  ["Hamlet",                       1390,"Shakespeare"],
  ["Pride and Prejudice",          1100,"Austen"],
  ["Animal Farm",                  1170,"Orwell"],
  ["Their Eyes Were Watching God", 840, "Hurston"]
];

const LEXILE_MIN = 0;
const LEXILE_MAX = 1800;

function lexileToX(lex, lx, lw) {
  return lx + (lex - LEXILE_MIN) / (LEXILE_MAX - LEXILE_MIN) * lw;
}

function getBandColor(lex) {
  for (const [lo, hi, , clr] of BANDS) {
    if (lex >= lo && lex < hi) return clr;
  }
  return "#999";
}

function getZoneLabel(lex, reader) {
  const diff = lex - reader;
  if (diff < -200) return { lbl: "Too Easy", clr: "#90CAF9" };
  if (diff < 0)    return { lbl: "Comfortable", clr: "#4CAF50" };
  if (diff <= 200) return { lbl: "Stretch Zone", clr: "#F9A825" };
  return            { lbl: "Too Challenging", clr: "#C62828" };
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, canvasHeight);
  canvas.parent(document.querySelector("main"));

  lexileSlider = createSlider(200, 1700, 1050, 10);
  lexileSlider.position(sliderLeftMargin, drawHeight + 10);
  lexileSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe("Lexile Level Explorer: adjust your reading level to see which texts are in your comfort zone, stretch zone, and beyond.", LABEL);
}

function draw() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
  lexileSlider.size(canvasWidth - sliderLeftMargin - margin);

  readerLevel = lexileSlider.value();

  fill("aliceblue"); stroke("silver"); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill("white"); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill("#1a237e"); textAlign(CENTER, TOP); textStyle(BOLD); textSize(18);
  text("Lexile Level Explorer", canvasWidth / 2, margin);
  textStyle(NORMAL);

  // Scale bar region
  const scaleY = margin + 38;
  const scaleH = 28;
  const lx = margin;
  const lw = canvasWidth - margin * 2;

  // Draw colored band bar
  BANDS.forEach(([lo, hi, , clr]) => {
    const x1 = lexileToX(lo, lx, lw);
    const x2 = lexileToX(hi, lx, lw);
    fill(clr); noStroke();
    rect(x1, scaleY, x2 - x1, scaleH);
  });

  // Tick marks every 200
  stroke(100); strokeWeight(1);
  for (let lev = 0; lev <= 1800; lev += 200) {
    const tx = lexileToX(lev, lx, lw);
    line(tx, scaleY, tx, scaleY + scaleH + 4);
    noStroke(); fill("#333"); textAlign(CENTER, TOP); textSize(10);
    text(lev, tx, scaleY + scaleH + 6);
    stroke(100);
  }

  // Band grade labels
  BANDS.forEach(([lo, hi, , clr, grade]) => {
    const x1 = lexileToX(lo, lx, lw);
    const x2 = lexileToX(hi, lx, lw);
    fill("white"); noStroke(); textAlign(CENTER, CENTER); textSize(9); textStyle(BOLD);
    text(grade, (x1 + x2) / 2, scaleY + scaleH / 2);
    textStyle(NORMAL);
  });

  // Reader level marker
  const rx = lexileToX(readerLevel, lx, lw);
  fill("#000"); noStroke();
  triangle(rx, scaleY - 6, rx - 7, scaleY - 18, rx + 7, scaleY - 18);
  fill("#fff"); stroke("#000"); strokeWeight(1.5);
  rect(rx - 28, scaleY - 34, 56, 16, 4);
  noStroke(); fill("#000"); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(11);
  text("You: " + readerLevel, rx, scaleY - 26);
  textStyle(NORMAL);

  // Book list
  const bookAreaY = scaleY + scaleH + 34;
  const bookAreaH = drawHeight - bookAreaY - 10;
  const bookH = bookAreaH / BOOKS.length;

  fill("#333"); textAlign(LEFT, CENTER); textSize(12); textStyle(BOLD); noStroke();
  text("Representative Texts:", margin, bookAreaY - 14);
  textStyle(NORMAL);

  BOOKS.forEach(([title, lex, author], i) => {
    const bx = lexileToX(lex, lx, lw);
    const by = bookAreaY + i * bookH + bookH * 0.5;
    const zone = getZoneLabel(lex, readerLevel);

    // Connecting line from band to dot
    stroke(160); strokeWeight(0.5);
    const bandX = lexileToX(lex, lx, lw);
    line(bandX, scaleY + scaleH, bandX, bookAreaY);

    // Dot on scale
    fill(zone.clr); noStroke();
    ellipse(bandX, scaleY + scaleH - 5, 8, 8);

    // Book row background
    const zoneC = color(zone.clr);
    fill(red(zoneC), green(zoneC), blue(zoneC), 30);
    rect(margin, bookAreaY + i * bookH, canvasWidth - margin * 2, bookH - 1, 3);

    // Zone badge
    fill(zone.clr); noStroke();
    rect(margin + 2, by - 7, 90, 14, 3);
    fill("white"); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(9);
    text(zone.lbl, margin + 2 + 45, by);
    textStyle(NORMAL);

    // Title and Lexile
    fill("#111"); textAlign(LEFT, CENTER); textSize(11);
    text(title + " — " + author, margin + 98, by);
    fill(zone.clr); textAlign(RIGHT, CENTER); textStyle(BOLD); textSize(11);
    text(lex + "L", canvasWidth - margin, by);
    textStyle(NORMAL);
  });

  // Control label
  fill("#333"); noStroke(); textAlign(LEFT, CENTER); textSize(13);
  text("My Lexile Level: " + readerLevel, margin, drawHeight + 20);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
  lexileSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const c = document.querySelector("main").getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
