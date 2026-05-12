// Cognitive Bias Spotter — p5.js MicroSim
// CANVAS_HEIGHT: 420

// Layout
let canvasWidth = 600;
let drawHeight = 310;
let controlHeight = 110;
let canvasHeight = drawHeight + controlHeight;
let containerWidth;
let margin = 20;
let sliderLeftMargin = 120;
let defaultTextSize = 15;

// Controls
let biasSelect, submitBtn, prevBtn, nextBtn;

// State
let currentIdx = 0;
let score = 0;
let answered = [];
let feedback = "";
let feedbackColor = "#333333";
let showFeedback = false;

const BIASES = [
  "Confirmation Bias",
  "Availability Heuristic",
  "Anchoring Bias",
  "Dunning-Kruger Effect",
  "Bandwagon Effect",
  "In-Group Bias",
  "False Consensus Effect",
  "Hindsight Bias",
  "Sunk Cost Fallacy",
  "Ad Hominem",
  "Strawman Fallacy",
  "Appeal to Authority",
  "False Dichotomy",
  "Hasty Generalization",
  "Slippery Slope",
  "Red Herring",
  "Circular Reasoning",
  "Appeal to Emotion"
];

const SCENARIOS = [
  {
    text: "Maya reads only news articles that confirm her belief that homework is harmful. When she finds a study showing its benefits, she dismisses it as biased without reading it.",
    answer: "Confirmation Bias",
    explanation: "Confirmation Bias: seeking or interpreting information to confirm pre-existing beliefs while dismissing contradictory evidence."
  },
  {
    text: "After hearing about two plane crashes on the news this month, Jordan tells his parents he refuses to fly because 'planes crash all the time.' Car accidents happen far more often, but he has not heard about them lately.",
    answer: "Availability Heuristic",
    explanation: "Availability Heuristic: overestimating the likelihood of events that come easily to mind, usually because they are recent or vivid."
  },
  {
    text: "A car dealer tells Sofia the sticker price is $30,000. After negotiating, she pays $27,500 and feels she got a great deal — even though the car's fair market value is $24,000.",
    answer: "Anchoring Bias",
    explanation: "Anchoring Bias: relying too heavily on the first piece of information offered (the 'anchor') when making decisions."
  },
  {
    text: "After finishing his first week of guitar lessons, Liam tells his friends he is already good enough to perform on stage professionally. He does not realize how much he still does not know.",
    answer: "Dunning-Kruger Effect",
    explanation: "Dunning-Kruger Effect: people with limited knowledge in a domain overestimate their own competence."
  },
  {
    text: "All of Priya's friends are signing a petition to remove a student group from campus. Priya has not read the full complaint, but she signs too because 'everyone else thinks it is the right thing to do.'",
    answer: "Bandwagon Effect",
    explanation: "Bandwagon Effect: adopting a belief or behavior because many others do, rather than evaluating it independently."
  },
  {
    text: "During a class debate, instead of addressing Marcus's argument about school lunch quality, his opponent says: 'Why should we trust anything Marcus says about nutrition? He eats fast food every day.'",
    answer: "Ad Hominem",
    explanation: "Ad Hominem: attacking the person making an argument rather than addressing the argument itself."
  },
  {
    text: "Senator Webb argues for incremental climate policy. Her opponent tells voters: 'Senator Webb wants to do nothing about climate change!' Webb never said that — her opponent invented a weaker position to attack.",
    answer: "Strawman Fallacy",
    explanation: "Strawman Fallacy: misrepresenting an opponent's argument in an exaggerated or distorted form to make it easier to refute."
  },
  {
    text: "The school board voted to extend the school day by 30 minutes. A parent argues: 'If we lengthen the school day, next they will make students attend school on weekends, then all summer, and eventually school will never end.'",
    answer: "Slippery Slope",
    explanation: "Slippery Slope: assuming that one small change will lead inevitably to extreme and undesirable consequences."
  },
  {
    text: "In an essay, a student writes: 'Reading is important because it helps people read better.' The conclusion simply restates the premise without offering new support.",
    answer: "Circular Reasoning",
    explanation: "Circular Reasoning: using the conclusion as evidence for itself — the argument assumes what it is trying to prove."
  },
  {
    text: "A documentary ends with images of crying children to argue against a government policy. The film provides almost no statistics or policy analysis, relying entirely on emotional footage to persuade viewers.",
    answer: "Appeal to Emotion",
    explanation: "Appeal to Emotion: using emotional responses — sympathy, fear, outrage — as primary evidence rather than logical reasoning."
  }
];

function wrapText(txt, x, y, maxW, lineH) {
  const words = txt.split(" ");
  let line = "";
  let yy = y;
  for (let w of words) {
    const test = line + (line ? " " : "") + w;
    if (textWidth(test) > maxW && line !== "") {
      text(line, x, yy);
      line = w;
      yy += lineH;
    } else {
      line = test;
    }
  }
  if (line) text(line, x, yy);
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, canvasHeight);
  canvas.parent(document.querySelector("main"));
  textSize(defaultTextSize);

  prevBtn = createButton("◀ Prev");
  prevBtn.position(margin, drawHeight + 8);
  prevBtn.mousePressed(goPrev);

  nextBtn = createButton("Next ▶");
  nextBtn.position(margin, drawHeight + 44);
  nextBtn.mousePressed(goNext);

  biasSelect = createSelect();
  biasSelect.option("— select a bias —", "");
  BIASES.forEach(b => biasSelect.option(b, b));
  biasSelect.position(sliderLeftMargin, drawHeight + 8);
  biasSelect.size(canvasWidth - sliderLeftMargin - 110 - margin);

  submitBtn = createButton("Submit");
  submitBtn.position(canvasWidth - 105 - margin, drawHeight + 8);
  submitBtn.mousePressed(checkAnswer);

  answered = new Array(SCENARIOS.length).fill(null);
  describe("Cognitive Bias Spotter: read a scenario and identify which cognitive bias is at work.", LABEL);
}

function draw() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);

  // Drawing region
  fill("aliceblue"); stroke("silver"); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Control region
  fill("white"); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill("#1a237e"); noStroke(); textAlign(CENTER, TOP); textSize(18); textStyle(BOLD);
  text("Cognitive Bias Spotter", canvasWidth / 2, margin);
  textStyle(NORMAL);

  // Progress
  textSize(13); fill("#555"); textAlign(RIGHT, TOP);
  text(`Scenario ${currentIdx + 1} / ${SCENARIOS.length}  |  Score: ${score} / ${SCENARIOS.length}`, canvasWidth - margin, margin);

  // Scenario label
  textSize(12); fill("#333"); textAlign(LEFT, TOP);
  text("SCENARIO:", margin, margin + 28);

  // Scenario text
  textSize(defaultTextSize); fill("#111"); textAlign(LEFT, TOP);
  wrapText(SCENARIOS[currentIdx].text, margin, margin + 46, canvasWidth - margin * 2, 22);

  // Feedback
  if (showFeedback && answered[currentIdx] !== null) {
    const correct = answered[currentIdx];
    fill(correct ? "#1B5E20" : "#B71C1C");
    noStroke(); textAlign(LEFT, TOP); textSize(13);
    const fbY = drawHeight - 72;
    fill(correct ? "#E8F5E9" : "#FFEBEE");
    rect(margin, fbY - 4, canvasWidth - margin * 2, 68, 6);
    fill(correct ? "#1B5E20" : "#B71C1C");
    textStyle(BOLD);
    text(correct ? "✓ Correct!" : "✗ Incorrect — review the explanation:", margin + 8, fbY + 2);
    textStyle(NORMAL); textSize(12);
    wrapText(SCENARIOS[currentIdx].explanation, margin + 8, fbY + 20, canvasWidth - margin * 2 - 16, 18);
  }

  // Resize controls
  biasSelect.position(sliderLeftMargin, drawHeight + 8);
  biasSelect.size(canvasWidth - sliderLeftMargin - 110 - margin);
  submitBtn.position(canvasWidth - 105 - margin, drawHeight + 8);
  prevBtn.position(margin, drawHeight + 8);
  nextBtn.position(margin, drawHeight + 44);

  // Show answer label if already answered in current pass
  if (answered[currentIdx] !== null) {
    fill("#555"); textSize(12); textAlign(LEFT, TOP);
    text("Your answer: " + (biasSelect.value() || "(none)"), sliderLeftMargin + 2, drawHeight + 48);
  }
}

function checkAnswer() {
  const chosen = biasSelect.value();
  if (!chosen) { return; }
  const correct = chosen === SCENARIOS[currentIdx].answer;
  if (answered[currentIdx] === null) {
    answered[currentIdx] = correct;
    if (correct) score++;
  }
  showFeedback = true;
}

function goPrev() {
  if (currentIdx > 0) {
    currentIdx--;
    biasSelect.selected(answered[currentIdx] !== null ? SCENARIOS[currentIdx].answer : "");
    showFeedback = answered[currentIdx] !== null;
  }
}

function goNext() {
  if (currentIdx < SCENARIOS.length - 1) {
    currentIdx++;
    biasSelect.selected("— select a bias —");
    showFeedback = answered[currentIdx] !== null;
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, canvasHeight);
  biasSelect.size(canvasWidth - sliderLeftMargin - 110 - margin);
}

function updateCanvasSize() {
  const container = document.querySelector("main").getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
