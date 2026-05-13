// Freytag's Pyramid Explorer — p5.js MicroSim
// CANVAS_HEIGHT: 470

let canvasWidth = 600;
let drawHeight = 390;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let containerWidth;
let margin = 20;

let storySelect;
let selectedStage = null;

const STAGES = [
  {
    id: 0, name: "Exposition",
    color: "#1565C0", textColor: "#fff",
    desc: "The opening section introduces the setting, main characters, and background situation. It establishes the story's world before conflict begins.",
    where: "left base of pyramid",
    examples: {
      romeo:   "Romeo and Juliet are introduced as members of feuding noble families in Verona; the prologue announces the tragedy to come.",
      gatsby:  "Nick Carraway arrives in West Egg, meets his wealthy neighbor Gatsby, and is introduced to the old-money world of the Buchanans.",
      hamlet:  "Hamlet mourns his father's death and his mother's hasty remarriage to Claudius, his uncle, who now sits on Denmark's throne."
    }
  },
  {
    id: 1, name: "Rising Action",
    color: "#2E7D32", textColor: "#fff",
    desc: "A series of complications and obstacles that build tension toward the climax. The protagonist faces increasing conflict, making choices that lead toward the turning point.",
    where: "ascending left slope",
    examples: {
      romeo:   "Romeo and Juliet meet and secretly marry; Romeo kills Tybalt and is banished; Juliet is promised to Paris against her will.",
      gatsby:  "Gatsby and Daisy renew their relationship; the tension between Gatsby's dream and reality grows; Tom investigates Gatsby's past.",
      hamlet:  "Hamlet feigns madness, stages 'The Mousetrap' to confirm Claudius's guilt, accidentally kills Polonius, and Ophelia descends into madness."
    }
  },
  {
    id: 2, name: "Climax",
    color: "#C62828", textColor: "#fff",
    desc: "The turning point of highest tension. A decisive event or confrontation occurs that determines the story's direction. After the climax, the outcome becomes inevitable.",
    where: "peak / apex of pyramid",
    examples: {
      romeo:   "Romeo, believing Juliet dead, drinks poison; Juliet wakes, finds Romeo dead, and kills herself. The families' feud reaches its tragic conclusion.",
      gatsby:  "The confrontation at the Plaza Hotel: Tom exposes Gatsby's illegal origins; Myrtle is struck and killed by Gatsby's car (driven by Daisy).",
      hamlet:  "Hamlet kills Claudius — but only after Gertrude, Laertes, and Hamlet himself have been fatally poisoned in the duel."
    }
  },
  {
    id: 3, name: "Falling Action",
    color: "#E65100", textColor: "#fff",
    desc: "Events following the climax as consequences unfold. Loose ends begin to resolve, secondary conflicts settle, and the world of the story moves toward its final state.",
    where: "descending right slope",
    examples: {
      romeo:   "The Prince, Capulets, and Montagues discover the bodies; Friar Lawrence explains the plan that went wrong.",
      gatsby:  "Tom and Daisy retreat into their carelessness; George Wilson kills Gatsby and himself.",
      hamlet:  "Horatio survives to tell the story; Fortinbras arrives and assumes Denmark's throne."
    }
  },
  {
    id: 4, name: "Resolution",
    color: "#6A1B9A", textColor: "#fff",
    desc: "The denouement — the story's final state of affairs. Conflict is resolved (though not always happily). The narrative closes with a new equilibrium or a final revelation.",
    where: "right base of pyramid",
    examples: {
      romeo:   "The feuding families reconcile over the bodies of their children; the Prince delivers the final moral: 'All are punished.'",
      gatsby:  "Gatsby's funeral is sparsely attended; Nick reflects on the green light and America's dream of recapturing the past.",
      hamlet:  "Horatio prepares to tell Hamlet's story; Fortinbras orders a soldier's funeral. The corrupt court is destroyed; Denmark has a new ruler."
    }
  }
];

const STORIES = {
  romeo:  "Romeo and Juliet",
  gatsby: "The Great Gatsby",
  hamlet: "Hamlet"
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, canvasHeight);
  canvas.parent(document.querySelector("main"));

  storySelect = createSelect();
  Object.entries(STORIES).forEach(([k, v]) => storySelect.option(v, k));
  storySelect.position(margin, drawHeight + 8);
  storySelect.size(200);
  storySelect.changed(() => { selectedStage = null; });

  describe("Freytag's Pyramid Explorer: click any stage of the pyramid to see its definition and story example.", LABEL);
}

function draw() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);

  fill("aliceblue"); stroke("silver"); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill("white"); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill("#1a237e"); textAlign(CENTER, TOP); textStyle(BOLD); textSize(18);
  text("Freytag's Pyramid Explorer", canvasWidth / 2, margin);
  textStyle(NORMAL);

  drawPyramid();

  if (selectedStage !== null) drawDetail();
  else drawHint();

  // Label for select
  fill("#333"); textSize(13); textAlign(LEFT, CENTER); noStroke();
  text("Story:", margin, drawHeight + 18 + 8);
  storySelect.position(margin + 48, drawHeight + 8);
  storySelect.size(180);
}

function pyramidPoints() {
  const pw = canvasWidth * 0.75;
  const ph = drawHeight - 80;
  const cx = canvasWidth * 0.38;
  const baseY = drawHeight - 30;
  const peakY = margin + 44;
  const leftX  = cx - pw / 2;
  const rightX = cx + pw / 2;

  return {
    leftX, rightX, peakX: cx, baseY, peakY,
    stages: [
      { x: leftX,             y: baseY },
      { x: leftX + pw * 0.25, y: (baseY + peakY) / 2 },
      { x: cx,                y: peakY },
      { x: cx + pw * 0.25,    y: (baseY + peakY) / 2 },
      { x: rightX,            y: baseY }
    ]
  };
}

function drawPyramid() {
  const p = pyramidPoints();
  const pts = p.stages;

  // Draw each triangular segment
  for (let i = 0; i < 4; i++) {
    const stage = STAGES[i < 2 ? i : i + 1];  // segments 0,1 on left; 2,3 on right
    // Correct mapping: segment 0=Exposition, 1=RisingAction, 2=FallingAction, 3=Resolution
    const stageForSegment = STAGES[i < 2 ? i : i + 1 > 3 ? 4 : i + 1];
    const isSelected = selectedStage === (i < 2 ? i : i + 1);
    const baseColor = color(STAGES[i < 2 ? i : i + 1].color);
    fill(isSelected ? baseColor : color(red(baseColor), green(baseColor), blue(baseColor), 160));
    stroke("white"); strokeWeight(2);
    // Each segment is a triangle: left_pt, right_pt (or peak), base
    if (i === 0) triangle(pts[0].x, pts[0].y, pts[1].x, pts[1].y, pts[0].x, pts[0].y); // dummy
    beginShape();
    vertex(pts[i].x, pts[i].y);
    vertex(pts[i + 1].x, pts[i + 1].y);
    vertex(p.peakX, p.baseY);
    endShape(CLOSE);
  }

  // Better: draw proper triangular sections
  // Exposition: pts[0], pts[1], base-center
  // Rising: pts[1], pts[2], base-center
  // Falling: pts[2], pts[3], base-center
  // Resolution: pts[3], pts[4], base-center
  const baseCX = (p.leftX + p.rightX) / 2;

  [0, 1, 2, 3].forEach(i => {
    const stageIdx = i <= 1 ? i : i + 1;
    const stage = STAGES[stageIdx];
    const isSelected = selectedStage === stageIdx;
    const bc = color(stage.color);
    fill(isSelected ? bc : color(red(bc), green(bc), blue(bc), 160));
    stroke("white"); strokeWeight(2);
    beginShape();
    vertex(pts[i].x, pts[i].y);
    vertex(pts[i + 1].x, pts[i + 1].y);
    vertex(baseCX, p.baseY);
    endShape(CLOSE);
  });

  // Climax triangle at peak
  const stageIdx2 = 2;
  const climaxStage = STAGES[stageIdx2];
  const isClimaxSelected = selectedStage === stageIdx2;
  const cc = color(climaxStage.color);
  fill(isClimaxSelected ? cc : color(red(cc), green(cc), blue(cc), 180));
  stroke("white"); strokeWeight(2);
  triangle(pts[1].x, pts[1].y, pts[2].x, pts[2].y, pts[3].x, pts[3].y);

  // Labels on segments
  noStroke();
  const labelPositions = [
    { x: (pts[0].x + pts[1].x + baseCX) / 3,         y: p.baseY - 28,  stage: 0 },
    { x: (pts[1].x + pts[2].x + baseCX) / 3,         y: p.baseY - 55,  stage: 1 },
    { x: (pts[1].x + pts[2].x + pts[3].x) / 3,       y: p.peakY + 30,  stage: 2 },
    { x: (pts[2].x + pts[3].x + baseCX) / 3,         y: p.baseY - 55,  stage: 3 },
    { x: (pts[3].x + pts[4].x + baseCX) / 3,         y: p.baseY - 28,  stage: 4 }
  ];

  labelPositions.forEach(lp => {
    const stage = STAGES[lp.stage];
    fill(stage.textColor === "#fff" ? 255 : 0);
    textAlign(CENTER, CENTER); textStyle(BOLD); textSize(11);
    text(stage.name, lp.x, lp.y);
    textStyle(NORMAL);
  });

  // Stage number circles
  STAGES.forEach((s, i) => {
    fill(s.color); noStroke();
    ellipse(pts[i].x, pts[i].y, 22, 22);
    fill(s.textColor === "#fff" ? 255 : 0);
    textAlign(CENTER, CENTER); textStyle(BOLD); textSize(11);
    text(i + 1, pts[i].x, pts[i].y);
    textStyle(NORMAL);
  });
}

function drawDetail() {
  const stage = STAGES[selectedStage];
  const story = storySelect.value();
  const px = canvasWidth * 0.77;
  const pw = canvasWidth - px - margin;
  const py = margin + 32;

  fill("white"); stroke(stage.color); strokeWeight(2);
  rect(px, py, pw, drawHeight - py - 6, 8);
  noStroke();

  const tx = px + 8, lw = pw - 16;
  let ty = py + 8;

  fill(stage.color); textAlign(LEFT, TOP); textStyle(BOLD); textSize(13);
  text(stage.name, tx, ty); ty += 18; textStyle(NORMAL);

  fill("#222"); textSize(11);
  ty = drawWrapped(stage.desc, tx, ty, lw, 16) + 8;

  fill("#1565C0"); textStyle(BOLD); textSize(11);
  text(STORIES[story] + ":", tx, ty); ty += 14; textStyle(NORMAL);
  fill("#333"); textSize(11);
  drawWrapped(stage.examples[story], tx, ty, lw, 16);
}

function drawHint() {
  const px = canvasWidth * 0.77;
  const pw = canvasWidth - px - margin;
  const py = margin + 32;
  fill("#e8eaf6"); stroke("#9fa8da"); strokeWeight(1);
  rect(px, py, pw, drawHeight - py - 6, 8);
  noStroke();
  fill("#555"); textAlign(CENTER, CENTER); textSize(12);
  text("Click any\nstage to\nexplore it", px + pw / 2, py + (drawHeight - py) / 2 - 16);
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
  // Hit-test each pyramid segment
  const p = pyramidPoints();
  const baseCX = (p.leftX + p.rightX) / 2;
  const pts = p.stages;

  // Check which triangle was clicked
  function ptInTri(px, py, ax, ay, bx, by, cx2, cy2) {
    const d1 = sign(px, py, ax, ay, bx, by);
    const d2 = sign(px, py, bx, by, cx2, cy2);
    const d3 = sign(px, py, cx2, cy2, ax, ay);
    const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);
    return !(hasNeg && hasPos);
  }
  function sign(px, py, ax, ay, bx, by) {
    return (px - bx) * (ay - by) - (ax - bx) * (py - by);
  }

  const hitTests = [
    [pts[0].x, pts[0].y, pts[1].x, pts[1].y, baseCX, p.baseY, 0],
    [pts[1].x, pts[1].y, pts[2].x, pts[2].y, baseCX, p.baseY, 1],
    [pts[1].x, pts[1].y, pts[2].x, pts[2].y, pts[3].x, pts[3].y, 2], // climax triangle
    [pts[2].x, pts[2].y, pts[3].x, pts[3].y, baseCX, p.baseY, 3],
    [pts[3].x, pts[3].y, pts[4].x, pts[4].y, baseCX, p.baseY, 4]
  ];

  for (const [ax, ay, bx, by, cx2, cy2, stageId] of hitTests) {
    if (ptInTri(mouseX, mouseY, ax, ay, bx, by, cx2, cy2)) {
      selectedStage = (selectedStage === stageId) ? null : stageId;
      return;
    }
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
}

function updateCanvasSize() {
  const c = document.querySelector("main").getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
