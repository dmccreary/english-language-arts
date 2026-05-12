// Logical Fallacy Navigator — p5.js MicroSim
// CANVAS_HEIGHT: 450

let canvasWidth = 640;
let drawHeight = 380;
let controlHeight = 70;
let canvasHeight = drawHeight + controlHeight;
let containerWidth;
let margin = 14;

let refBtn, quizBtn, fallacySelect, submitQuizBtn;
let mode = "reference"; // "reference" or "quiz"
let selectedCard = null;
let currentQuiz = 0;
let quizAnswered = [];
let quizScore = 0;
let showQuizFeedback = false;

const FALLACIES = [
  {
    name: "Ad Hominem",
    def: "Attacking the person making the argument rather than addressing the argument itself.",
    example: '"Why should we trust Dr. Patel\'s climate research? She drives a gas-powered car!"',
    flaw: "The scientist's personal choices don't affect the validity of her data or methodology."
  },
  {
    name: "Strawman",
    def: "Misrepresenting an opponent's argument in an exaggerated or distorted form to make it easier to refute.",
    example: '"Senator Reed wants to reduce the defense budget, so she obviously wants to leave our country defenseless."',
    flaw: "Reed said nothing about eliminating defense spending — the opponent invented a weaker position."
  },
  {
    name: "False Dichotomy",
    def: "Presenting only two options as if they are the only possibilities, when in reality more exist.",
    example: '"You\'re either with us or against us." "If you don\'t support this policy, you don\'t care about children."',
    flaw: "Both examples ignore middle ground, nuance, and alternative positions."
  },
  {
    name: "Slippery Slope",
    def: "Claiming that one small change will inevitably lead to extreme and undesirable consequences without evidence.",
    example: '"If we allow students to retake one test, soon they\'ll expect to retake every test, and eventually grades will be meaningless."',
    flaw: "Each step in the chain requires separate evidence — the progression is asserted, not proven."
  },
  {
    name: "Appeal to Authority",
    def: "Using an authority figure's endorsement as evidence for a claim, especially when the authority is outside their area of expertise.",
    example: '"This famous actor says the supplement cured his arthritis — it must work!"',
    flaw: "Celebrity status doesn't confer medical expertise; claims require scientific evidence."
  },
  {
    name: "Hasty Generalization",
    def: "Drawing a broad conclusion from an insufficient or unrepresentative sample.",
    example: '"I know three people from that city who were rude. Everyone from there must be unfriendly."',
    flaw: "Three people are far too small a sample to support a generalization about an entire city."
  },
  {
    name: "Red Herring",
    def: "Introducing irrelevant information to distract from the real issue.",
    example: 'Interviewer: "Your company had record pollution violations last year." CEO: "We\'ve created 500 jobs and given generously to local charities."',
    flaw: "Job creation and charity don't address the specific pollution violation — they're a distraction."
  }
];

const QUIZ_SCENARIOS = [
  { text: "A student argues that the school's new dress code is unnecessary. Her opponent responds: 'Of course you'd say that — you never follow the rules anyway.' What fallacy is this?", answer: "Ad Hominem",
    explanation: "The opponent attacks the student's character instead of addressing her argument about the dress code." },
  { text: "During a city council meeting, a member proposes adding one bike lane. An opponent warns: 'If we add one bike lane, cars will have nowhere to go, then parking will disappear, and eventually our city will ban cars entirely.' What fallacy is this?", answer: "Slippery Slope",
    explanation: "The argument chains unproven consequences without evidence that each step must follow from the previous." },
  { text: "A doctor testifies that a proposed health policy would be ineffective. An opponent dismisses this by saying: 'This doctor receives funding from a pharmaceutical company, so we can ignore everything she says.' What fallacy is this?", answer: "Ad Hominem",
    explanation: "Even if funding is a concern, the correct response is to evaluate the doctor's evidence — not dismiss her entirely based on her funding source." },
  { text: "A debate moderator says: 'You either support full border security funding or you're in favor of open borders.' What fallacy is this?", answer: "False Dichotomy",
    explanation: "Many positions exist between 'full security funding' and 'open borders' — this presents a false binary choice." },
  { text: "An ad claims: 'Nine out of ten celebrities use SmileWhite toothpaste. Shouldn't you?' What fallacy is this?", answer: "Appeal to Authority",
    explanation: "Celebrities are not dental experts. Their product endorsements don't constitute evidence of effectiveness." },
  { text: "After interviewing two international students, a reporter writes: 'International students struggle socially at American universities.' What fallacy is this?", answer: "Hasty Generalization",
    explanation: "Two students is an extremely small, non-representative sample from which to generalize about all international students." }
];

let cards = [];

function buildCards() {
  cards = [];
  const cols = 3;
  const gridX = margin;
  const gridY = margin + 34;
  const gridW = canvasWidth - margin * 2;
  const gridH = drawHeight - gridY - margin;
  const rows = Math.ceil(FALLACIES.length / cols);
  const tw = (gridW - margin * (cols - 1)) / cols;
  const th = (gridH - margin * (rows - 1)) / rows;

  FALLACIES.forEach((f, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    cards.push({
      x: gridX + col * (tw + margin),
      y: gridY + row * (th + margin),
      w: tw, h: th, fallacy: f, idx: i
    });
  });
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, canvasHeight);
  canvas.parent(document.querySelector("main"));
  buildCards();

  refBtn = createButton("Reference Mode");
  refBtn.position(margin, drawHeight + 8);
  refBtn.mousePressed(() => { mode = "reference"; selectedCard = null; showQuizFeedback = false; });

  quizBtn = createButton("Quiz Mode");
  quizBtn.position(margin + 130, drawHeight + 8);
  quizBtn.mousePressed(() => { mode = "quiz"; selectedCard = null; currentQuiz = 0; quizAnswered = new Array(QUIZ_SCENARIOS.length).fill(null); quizScore = 0; showQuizFeedback = false; });

  fallacySelect = createSelect();
  fallacySelect.option("— choose a fallacy —", "");
  FALLACIES.forEach(f => fallacySelect.option(f.name, f.name));
  fallacySelect.position(margin, drawHeight + 38);
  fallacySelect.size(220);

  submitQuizBtn = createButton("Submit");
  submitQuizBtn.position(margin + 228, drawHeight + 38);
  submitQuizBtn.mousePressed(checkQuiz);

  describe("Logical Fallacy Navigator: learn about 7 common logical fallacies and test yourself in quiz mode.", LABEL);
}

function draw() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
  buildCards();

  fill("aliceblue"); stroke("silver"); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill("white"); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill("#1a237e"); textAlign(CENTER, TOP); textStyle(BOLD); textSize(17);
  text("Logical Fallacy Navigator", canvasWidth / 2, margin);
  textStyle(NORMAL);

  if (mode === "reference") drawReference();
  else drawQuiz();

  // Control visibility
  fallacySelect.style("display", mode === "quiz" ? "block" : "none");
  submitQuizBtn.style("display", mode === "quiz" ? "block" : "none");
  refBtn.style("font-weight", mode === "reference" ? "bold" : "normal");
  quizBtn.style("font-weight", mode === "quiz" ? "bold" : "normal");
}

function drawReference() {
  const COLORS = ["#1565C0","#2E7D32","#C62828","#E65100","#6A1B9A","#F57F17","#00695C"];

  cards.forEach((c, i) => {
    const isSelected = selectedCard === i;
    const clr = color(COLORS[i % COLORS.length]);
    fill(isSelected ? clr : color(red(clr), green(clr), blue(clr), 180));
    stroke(clr); strokeWeight(isSelected ? 3 : 2);
    rect(c.x, c.y, c.w, c.h, 8);
    noStroke();

    // Name
    fill(isSelected ? 255 : 0);
    textAlign(CENTER, TOP); textStyle(BOLD); textSize(12);
    text(c.fallacy.name, c.x + c.w / 2, c.y + 8);
    textStyle(NORMAL);

    if (isSelected) {
      // Show definition in card
      textSize(10); textAlign(LEFT, TOP);
      drawWrappedSmall(c.fallacy.def, c.x + 6, c.y + 26, c.w - 12, 14);
    } else {
      // Show short example teaser
      fill(50); textSize(9); textAlign(CENTER, TOP);
      const teaser = c.fallacy.example.slice(0, 45) + "…";
      text(teaser, c.x + c.w/2, c.y + 28, c.w - 10);
    }
  });

  // Side detail panel for selected
  if (selectedCard !== null) {
    const f = FALLACIES[selectedCard];
    const clr = ["#1565C0","#2E7D32","#C62828","#E65100","#6A1B9A","#F57F17","#00695C"][selectedCard % 7];
    // Show at bottom of draw area
    fill("white"); stroke(clr); strokeWeight(2);
    rect(margin, drawHeight - 100, canvasWidth - margin * 2, 92, 6);
    noStroke();
    fill(clr); textStyle(BOLD); textSize(13); textAlign(LEFT, TOP);
    text(f.name, margin + 8, drawHeight - 96);
    textStyle(NORMAL); fill("#222"); textSize(11);
    let ty = drawHeight - 81;
    ty = drawWrappedSmall("Example: " + f.example, margin + 8, ty, canvasWidth - margin * 2 - 16, 14);
    drawWrappedSmall("Why it's flawed: " + f.flaw, margin + 8, ty + 2, canvasWidth - margin * 2 - 16, 14);
  }
}

function drawQuiz() {
  if (QUIZ_SCENARIOS.length === 0) return;
  const q = QUIZ_SCENARIOS[currentQuiz];

  // Progress
  fill("#555"); textSize(12); textAlign(RIGHT, TOP); noStroke();
  text(`Question ${currentQuiz + 1} / ${QUIZ_SCENARIOS.length}  |  Score: ${quizScore}`, canvasWidth - margin, margin + 28);

  // Scenario box
  const qx = margin, qy = margin + 40, qw = canvasWidth - margin * 2, qh = 110;
  fill("white"); stroke("#9fa8da"); strokeWeight(1);
  rect(qx, qy, qw, qh, 6);
  noStroke(); fill("#111"); textAlign(LEFT, TOP); textSize(13);
  drawWrapped(q.text, qx + 10, qy + 10, qw - 20, 20);

  // Navigation
  fill("#333"); textSize(12); noStroke(); textAlign(LEFT, TOP);
  if (currentQuiz > 0) {
    fill("#1565C0"); textSize(13);
    text("◀ Prev", margin, drawHeight - 110);
  }
  if (currentQuiz < QUIZ_SCENARIOS.length - 1) {
    fill("#1565C0"); textSize(13); textAlign(RIGHT, TOP);
    text("Next ▶", canvasWidth - margin, drawHeight - 110);
  }

  // Feedback
  if (showQuizFeedback && quizAnswered[currentQuiz] !== null) {
    const correct = quizAnswered[currentQuiz];
    fill(correct ? "#E8F5E9" : "#FFEBEE"); stroke(correct ? "#2E7D32" : "#C62828"); strokeWeight(1.5);
    rect(margin, qy + qh + 8, canvasWidth - margin * 2, 120, 6);
    noStroke();
    fill(correct ? "#1B5E20" : "#B71C1C"); textAlign(LEFT, TOP); textStyle(BOLD); textSize(13);
    text(correct ? "✓ Correct!" : "✗ Incorrect — the fallacy is: " + q.answer, margin + 8, qy + qh + 14);
    textStyle(NORMAL); fill("#333"); textSize(12);
    drawWrapped(q.explanation, margin + 8, qy + qh + 32, canvasWidth - margin * 2 - 16, 18);
  }
}

function checkQuiz() {
  if (mode !== "quiz") return;
  const chosen = fallacySelect.value();
  if (!chosen) return;
  const correct = chosen === QUIZ_SCENARIOS[currentQuiz].answer;
  if (quizAnswered[currentQuiz] === null) {
    quizAnswered[currentQuiz] = correct;
    if (correct) quizScore++;
  }
  showQuizFeedback = true;
}

function mousePressed() {
  if (mode !== "reference") {
    // Quiz navigation
    if (mouseY > drawHeight - 130 && mouseY < drawHeight - 90) {
      if (mouseX < canvasWidth / 2 && currentQuiz > 0) { currentQuiz--; showQuizFeedback = quizAnswered[currentQuiz] !== null; fallacySelect.selected(""); }
      if (mouseX >= canvasWidth / 2 && currentQuiz < QUIZ_SCENARIOS.length - 1) { currentQuiz++; showQuizFeedback = quizAnswered[currentQuiz] !== null; fallacySelect.selected(""); }
    }
    return;
  }
  cards.forEach((c, i) => {
    if (mouseX >= c.x && mouseX <= c.x + c.w && mouseY >= c.y && mouseY <= c.y + c.h) {
      selectedCard = (selectedCard === i) ? null : i;
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

function drawWrappedSmall(txt, x, y, maxW, lineH) {
  textSize(10);
  return drawWrapped(txt, x, y, maxW, lineH);
}

function windowResized() { updateCanvasSize(); resizeCanvas(containerWidth, canvasHeight); buildCards(); }

function updateCanvasSize() {
  const c = document.querySelector("main").getBoundingClientRect();
  containerWidth = Math.floor(c.width); canvasWidth = containerWidth;
}
