// Argument Anatomy Explorer — Toulmin Model vis-network MicroSim
// CANVAS_HEIGHT: 650

const SOURCES = {
  mlk: {
    label: "Letter from Birmingham Jail",
    nodes: {
      claim:       { example: "Segregation is morally unjust and must be resisted through nonviolent direct action." },
      evidence:    { example: "We know through painful experience that freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed." },
      warrant:     { example: "Unjust human laws contradict God's moral law; therefore obeying them is itself unjust." },
      backing:     { example: "St. Augustine wrote: 'An unjust law is no law at all.' Aquinas echoed this natural-law principle." },
      qualifier:   { example: "Sometimes a law is just on its face and unjust in its application — segregation ordinances fall in this category." },
      counter:     { example: "Critics argued protesters were creating dangerous tension and should wait for a more convenient time." },
      rebuttal:    { example: "'We who engage in nonviolent direct action are not the creators of tension. We merely bring to the surface the hidden tension that is already alive.'" }
    }
  },
  lincoln: {
    label: "Lincoln's Second Inaugural",
    nodes: {
      claim:       { example: "Both sides must work together to bind up the nation's wounds and achieve a just and lasting peace." },
      evidence:    { example: "Both North and South read the same Bible and prayed to the same God — each invoked God's aid against the other." },
      warrant:     { example: "Shared moral and spiritual foundations make reconciliation possible and obligatory." },
      backing:     { example: "Scripture (Matthew 18:7): 'Woe unto the world because of offenses' — the war may be divine judgment." },
      qualifier:   { example: "'With malice toward none, with charity for all' — not unconditional forgiveness, but deliberate mercy." },
      counter:     { example: "Many Northerners demanded harsh punishment of Confederate leaders and states." },
      rebuttal:    { example: "Harsh retribution would re-open wounds; healing and restoration serve the nation's long-term unity and justice." }
    }
  },
  student: {
    label: "Sample Student Essay (Social Media)",
    nodes: {
      claim:       { example: "Excessive social media use significantly increases anxiety and depression in teenagers." },
      evidence:    { example: "A 2017 Journal of Abnormal Psychology study found that teenagers who spent 5+ hours daily on screens were 66% more likely to have at least one risk factor for suicide." },
      warrant:     { example: "Constant exposure to curated highlight reels drives unrealistic social comparison, which is a documented driver of self-esteem damage." },
      backing:     { example: "Festinger's Social Comparison Theory (1954) demonstrates that humans measure their own worth relative to others, especially when face-to-face cues are absent." },
      qualifier:   { example: "For most teenagers — particularly those already vulnerable to anxiety — heavy social media use correlates with worse outcomes; moderate use shows mixed results." },
      counter:     { example: "Social media can reduce isolation by connecting teenagers with supportive communities, especially for marginalized youth." },
      rebuttal:    { example: "While connectivity benefits exist, the documented psychological harms from unrealistic comparison outweigh them for the majority of heavy users." }
    }
  }
};

const NODE_DEFS = {
  claim:     { label: "Claim",     short: "The central position or assertion being argued.",        color: "#1565C0", font: "#ffffff", size: 40 },
  evidence:  { label: "Evidence",  short: "Facts, data, or examples that support the claim.",       color: "#2E7D32", font: "#ffffff", size: 30 },
  warrant:   { label: "Warrant",   short: "The logical bridge connecting evidence to the claim.",    color: "#F57F17", font: "#000000", size: 30 },
  backing:   { label: "Backing",   short: "Support for the warrant — authoritative sources.",       color: "#FFE082", font: "#000000", size: 28 },
  qualifier: { label: "Qualifier", short: "Words that limit or restrict the strength of the claim.",color: "#00695C", font: "#ffffff", size: 28 },
  counter:   { label: "Counterclaim", short: "An opposing argument the writer must address.",       color: "#C62828", font: "#ffffff", size: 30 },
  rebuttal:  { label: "Rebuttal",  short: "The writer's response to the counterclaim.",             color: "#AD1457", font: "#ffffff", size: 28 }
};

const HOW_TO_FIND = {
  claim:     ["What is the author trying to convince us of?", "What single sentence summarizes the main point?", "What would the author most want us to believe?"],
  evidence:  ["What facts or examples does the author cite?", "Where does the author use statistics, studies, or quotes?", "What proof is offered for the claim?"],
  warrant:   ["Why does this evidence prove the claim?", "What assumption connects the evidence to the claim?", "What logical principle makes this evidence relevant?"],
  backing:   ["What sources back up the warrant?", "Does the author cite experts or laws to support the logic?", "Is there a principle, law, or authority being invoked?"],
  qualifier: ["Does the author use words like 'usually,' 'often,' 'most,' or 'sometimes'?", "Does the author limit who or when the claim applies to?", "Is the claim absolute, or does it allow for exceptions?"],
  counter:   ["Does the author acknowledge an opposing view?", "What would someone who disagrees say?", "What objection does the author feel the need to address?"],
  rebuttal:  ["How does the author respond to the opposing view?", "Does the author concede anything and then push back?", "What evidence or logic counters the counterclaim?"]
};

const NODES_DATA = [
  { id: "claim",     x:    0, y:  -20 },
  { id: "evidence",  x: -250, y:   50 },
  { id: "warrant",   x:  -80, y:  190 },
  { id: "backing",   x: -250, y:  230 },
  { id: "qualifier", x:  250, y: -100 },
  { id: "counter",   x:  260, y:   80 },
  { id: "rebuttal",  x:  260, y:  230 }
];

const EDGES_DATA = [
  { from: "evidence",  to: "claim",   label: "supports"    },
  { from: "warrant",   to: "claim",   label: "justifies"   },
  { from: "backing",   to: "warrant", label: "backs"       },
  { from: "qualifier", to: "claim",   label: "limits"      },
  { from: "counter",   to: "claim",   label: "challenges"  },
  { from: "rebuttal",  to: "counter", label: "answers"     }
];

let network = null;
let currentSource = "mlk";
let buildMode = false;

function getVisNodes() {
  return NODES_DATA.map(n => {
    const def = NODE_DEFS[n.id];
    return {
      id: n.id, label: def.label, x: n.x, y: n.y,
      color: { background: def.color, border: def.color },
      font:  { color: def.font, size: 14, face: "Arial" },
      size:  def.size, shape: "ellipse",
      borderWidth: 3,
      shadow: { enabled: true, color: "rgba(0,0,0,0.25)", size: 6, x: 2, y: 2 }
    };
  });
}

function getVisEdges() {
  return EDGES_DATA.map((e, i) => ({
    id: i, from: e.from, to: e.to,
    label: e.label,
    font: { size: 11, align: "middle" },
    arrows: { to: { enabled: true, scaleFactor: 0.8 } },
    color: { color: "#777777" },
    width: 2,
    smooth: { type: "curvedCW", roundness: 0.2 }
  }));
}

function initNetwork() {
  const container = document.getElementById("network");
  const nodes = new vis.DataSet(getVisNodes());
  const edges = new vis.DataSet(getVisEdges());

  const options = {
    layout:      { improvedLayout: false },
    physics:     { enabled: false },
    interaction: { hover: true, zoomView: false, dragView: false, dragNodes: false, selectConnectedEdges: false },
    nodes:       { margin: 12 },
    edges:       { selectionWidth: 0 }
  };

  network = new vis.Network(container, { nodes, edges }, options);

  network.on("click", params => {
    if (params.nodes.length > 0) showPanel(params.nodes[0]);
  });

  setTimeout(() => network.fit({ animation: false }), 200);
}

function showPanel(nodeId) {
  const def  = NODE_DEFS[nodeId];
  const src  = SOURCES[currentSource].nodes[nodeId];
  const how  = HOW_TO_FIND[nodeId];
  const panel = document.getElementById("info-panel");
  const sourceLabel = SOURCES[currentSource].label;

  panel.innerHTML = `
    <div class="panel-title" style="color:${def.color}">${def.label}</div>
    <div class="panel-section"><strong>Definition:</strong> ${def.short}</div>
    <div class="panel-section"><strong>Example from <em>${sourceLabel}</em>:</strong><br>${src.example}</div>
    <div class="panel-section"><strong>How to find it:</strong>
      <ul>${how.map(q => `<li>${q}</li>`).join("")}</ul>
    </div>`;
  panel.style.display = "block";
}

function switchSource() {
  currentSource = document.getElementById("source-select").value;
  const panel = document.getElementById("info-panel");
  panel.style.display = "none";
}

function openBuildMode() {
  document.getElementById("build-overlay").style.display = "flex";
}

function closeBuildMode() {
  document.getElementById("build-overlay").style.display = "none";
}

function submitBuild() {
  const claim    = document.getElementById("b-claim").value.trim();
  const evidence = document.getElementById("b-evidence").value.trim();
  const warrant  = document.getElementById("b-warrant").value.trim();
  const counter  = document.getElementById("b-counter").value.trim();

  if (!claim) { alert("Please enter a claim."); return; }

  // Update node labels to show user text (truncated)
  const network_nodes = network.body.data.nodes;
  const trunc = (s, n) => s.length > n ? s.slice(0, n) + "…" : s;

  network_nodes.update([
    { id: "claim",    label: "Claim\n" + trunc(claim, 30) },
    { id: "evidence", label: "Evidence\n" + trunc(evidence || "(empty)", 30) },
    { id: "warrant",  label: "Warrant\n" + trunc(warrant || "(empty)", 30) },
    { id: "counter",  label: "Counterclaim\n" + trunc(counter || "(empty)", 30) }
  ]);

  closeBuildMode();
  document.getElementById("reset-btn").style.display = "inline-block";
}

function resetDiagram() {
  network.body.data.nodes.update(NODES_DATA.map(n => ({
    id: n.id, label: NODE_DEFS[n.id].label
  })));
  document.getElementById("info-panel").style.display = "none";
  document.getElementById("reset-btn").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  initNetwork();

  document.getElementById("source-select").addEventListener("change", switchSource);
  document.getElementById("build-btn").addEventListener("click", openBuildMode);
  document.getElementById("cancel-build").addEventListener("click", closeBuildMode);
  document.getElementById("submit-build").addEventListener("click", submitBuild);
  document.getElementById("reset-btn").addEventListener("click", resetDiagram);

  window.addEventListener("resize", () => {
    if (network) network.fit({ animation: false });
  });
});
