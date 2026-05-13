// Causal Loop Diagram Explorer — vis-network MicroSim
// CANVAS_HEIGHT: 680

const CLD_EXAMPLES = {
  gutenberg: {
    label: "Gutenberg Press & English Literature (Reinforcing Loop)",
    loopType: "R",
    loopDesc: "A reinforcing (amplifying) loop sparked by Gutenberg's movable-type press (~1450). Cheaper books raised literacy and reading demand, which pushed printers to produce more, which created demand for writers, whose better works raised literary quality, making books even more sought-after — a self-amplifying cycle that transformed English language and culture.",
    nodes: [
      { id: 1, label: "Book\nAvailability",    x:    0, y: -150 },
      { id: 2, label: "Reading\nDemand",        x:  143, y:  -46 },
      { id: 3, label: "Printer\nOutput",        x:   88, y:  121 },
      { id: 4, label: "Demand for\nNew Writers",x:  -88, y:  121 },
      { id: 5, label: "Literary\nQuality",      x: -143, y:  -46 }
    ],
    edges: [
      { from: 1, to: 2, label: "+", desc: "More books available exposes more people to reading, increasing public demand for books." },
      { from: 2, to: 3, label: "+", desc: "Higher reading demand motivates printers to run their presses longer and produce more copies." },
      { from: 3, to: 4, label: "+", desc: "Greater printer output requires more manuscripts, creating economic demand for new writers and authors." },
      { from: 4, to: 5, label: "+", desc: "Competition among writers and wider audiences raise the overall quality and variety of English books." },
      { from: 5, to: 1, label: "+", desc: "Higher-quality literature attracts more publishers and readers, further increasing total book availability." }
    ]
  },
  vocabulary: {
    label: "Vocabulary Growth Spiral (Reinforcing Loop)",
    loopType: "R",
    loopDesc: "A reinforcing loop that accelerates language learning. The more students read independently, the more new words they encounter; growing word knowledge builds comprehension and confidence, which motivates even more reading — a virtuous cycle central to ELA skill development.",
    nodes: [
      { id: 1, label: "Independent\nReading",      x:    0, y: -110 },
      { id: 2, label: "Vocabulary\nExposure",       x:  190, y:   35 },
      { id: 3, label: "Word\nKnowledge",            x:    0, y:  170 },
      { id: 4, label: "Reading\nConfidence",        x: -190, y:   35 }
    ],
    edges: [
      { from: 1, to: 2, label: "+", desc: "Reading more texts exposes students to a wider range of words in context (positive relationship)." },
      { from: 2, to: 3, label: "+", desc: "Repeated exposure to new words in context deepens lasting word knowledge (positive relationship)." },
      { from: 3, to: 4, label: "+", desc: "A larger vocabulary improves comprehension, building confidence as a reader (positive relationship)." },
      { from: 4, to: 1, label: "+", desc: "Greater reading confidence motivates students to read more independently (positive relationship)." }
    ]
  },
  echo: {
    label: "Echo Chamber Dynamics (Reinforcing Loop)",
    loopType: "R",
    loopDesc: "A reinforcing loop that polarizes views. Exposure to one-sided content increases belief strength, which filters out opposing views, which increases one-sided exposure — a self-amplifying cycle.",
    nodes: [
      { id: 1, label: "One-Sided\nContent Exposure", x:   0, y: -100 },
      { id: 2, label: "Belief\nStrength",             x: 180, y:   30 },
      { id: 3, label: "Filtering of\nOpposing Views", x:   0, y:  150 },
      { id: 4, label: "Algorithm\nReinforcement",     x: -180, y:   30 }
    ],
    edges: [
      { from: 1, to: 2, label: "+", desc: "More one-sided content increases the strength of existing beliefs." },
      { from: 2, to: 3, label: "+", desc: "Stronger beliefs lead to greater filtering of opposing viewpoints." },
      { from: 3, to: 4, label: "+", desc: "Filtering opposing views strengthens the recommendation algorithm's bias." },
      { from: 4, to: 1, label: "+", desc: "Algorithm reinforcement delivers more one-sided content exposure." }
    ]
  },
  poverty: {
    label: "Poverty Trap (Reinforcing Loop)",
    loopType: "R",
    loopDesc: "A reinforcing loop that locks disadvantage in place. Low income reduces educational access, which lowers earning potential, which keeps income low — compounding inequality.",
    nodes: [
      { id: 1, label: "Household\nIncome",         x:   0, y: -100 },
      { id: 2, label: "Access to\nEducation",      x:  200, y:   50 },
      { id: 3, label: "Skills and\nCredentials",   x:   0, y:  180 },
      { id: 4, label: "Employment\nOpportunities", x: -200, y:   50 }
    ],
    edges: [
      { from: 1, to: 2, label: "+", desc: "Higher household income increases access to quality education." },
      { from: 2, to: 3, label: "+", desc: "Greater educational access develops more skills and credentials." },
      { from: 3, to: 4, label: "+", desc: "Better skills expand employment opportunities available." },
      { from: 4, to: 1, label: "+", desc: "More employment opportunities increase household income." }
    ]
  },
  gatsby: {
    label: "The Great Gatsby — Status & Obsession (Reinforcing Loop)",
    loopType: "R",
    loopDesc: "Gatsby's reinforcing loop: greater wealth display attracts Daisy's attention, which intensifies his obsession, which drives more wealth accumulation and display — a destructive amplifying cycle.",
    nodes: [
      { id: 1, label: "Gatsby's\nWealth Display",  x:   0, y: -100 },
      { id: 2, label: "Daisy's\nAttention",        x:  200, y:   40 },
      { id: 3, label: "Gatsby's\nObsession",       x:   0, y:  180 },
      { id: 4, label: "Illegal\nWealth Schemes",   x: -200, y:   40 }
    ],
    edges: [
      { from: 1, to: 2, label: "+", desc: "Greater displays of wealth increase Daisy's attention and fascination." },
      { from: 2, to: 3, label: "+", desc: "More of Daisy's attention intensifies Gatsby's obsession with her." },
      { from: 3, to: 4, label: "+", desc: "Deeper obsession drives Gatsby to pursue more illegal wealth-building schemes." },
      { from: 4, to: 1, label: "+", desc: "More illegal wealth funds greater displays of extravagance." }
    ]
  }
};

let network = null;
let currentCLD = "gutenberg";
let mode = "explore";
let buildNodes = [];
let buildEdges = [];
let buildNodeCounter = 100;
let buildEdgeCounter = 200;

function renderCLD(cldKey) {
  currentCLD = cldKey;
  const cld = CLD_EXAMPLES[cldKey];
  document.getElementById("loop-badge").textContent = cld.loopType === "R" ? "R — Reinforcing" : "B — Balancing";
  document.getElementById("loop-badge").style.background = cld.loopType === "R" ? "#e53935" : "#1565C0";
  document.getElementById("loop-desc").textContent = cld.loopDesc;
  document.getElementById("edge-info").textContent = "Click any arrow label to see the relationship explanation.";

  const visNodes = cld.nodes.map(n => ({
    id: n.id, label: n.label, x: n.x, y: n.y,
    color: { background: "#e3f2fd", border: "#1565C0" },
    font: { size: 13, align: "center" },
    shape: "ellipse", borderWidth: 2
  }));

  const visEdges = cld.edges.map((e, i) => ({
    id: i, from: e.from, to: e.to, label: e.label,
    font: { size: 16, color: e.label === "+" ? "#2E7D32" : "#C62828", bold: true, align: "top" },
    arrows: { to: { enabled: true, scaleFactor: 1 } },
    color: { color: e.label === "+" ? "#2E7D32" : "#C62828" },
    width: 2, smooth: { type: "curvedCW", roundness: 0.2 }
  }));

  const container = document.getElementById("network");
  const options = {
    layout:      { improvedLayout: false },
    physics:     { enabled: false },
    interaction: { hover: true, zoomView: false, dragView: false, dragNodes: false, selectConnectedEdges: false }
  };

  network = new vis.Network(container, { nodes: new vis.DataSet(visNodes), edges: new vis.DataSet(visEdges) }, options);

  network.on("click", params => {
    if (params.edges.length > 0 && params.nodes.length === 0) {
      const edgeId = params.edges[0];
      const edgeDef = cld.edges[edgeId];
      if (edgeDef) document.getElementById("edge-info").textContent = edgeDef.desc;
    }
  });

  setTimeout(() => network.fit({ animation: false }), 200);
}

function switchMode(newMode) {
  mode = newMode;
  document.getElementById("explore-panel").style.display = newMode === "explore" ? "block" : "none";
  document.getElementById("build-panel").style.display  = newMode === "build"   ? "block" : "none";
  document.getElementById("btn-explore").classList.toggle("active", newMode === "explore");
  document.getElementById("btn-build").classList.toggle("active", newMode === "build");

  if (newMode === "build") initBuildMode();
  else renderCLD(currentCLD);
}

function initBuildMode() {
  buildNodes = [];
  buildEdges = [];
  buildNodeCounter = 100;
  buildEdgeCounter = 200;
  document.getElementById("loop-result").textContent = "";
  document.getElementById("trace-result").textContent = "";

  const container = document.getElementById("network");
  network = new vis.Network(container,
    { nodes: new vis.DataSet([]), edges: new vis.DataSet([]) },
    { layout: { improvedLayout: false }, physics: { enabled: true }, interaction: { zoomView: false } }
  );
}

function addBuildNode() {
  const label = document.getElementById("node-name").value.trim();
  if (!label) { alert("Enter a variable name."); return; }
  buildNodeCounter++;
  buildNodes.push({ id: buildNodeCounter, label });
  network.body.data.nodes.add({
    id: buildNodeCounter, label,
    color: { background: "#e8f5e9", border: "#2E7D32" },
    font: { size: 13 }, shape: "ellipse", borderWidth: 2
  });
  document.getElementById("node-name").value = "";
  refreshBuildSelects();
}

function refreshBuildSelects() {
  ["from-node", "to-node", "trace-node"].forEach(id => {
    const sel = document.getElementById(id);
    const current = sel.value;
    sel.innerHTML = '<option value="">— select —</option>';
    buildNodes.forEach(n => {
      const opt = document.createElement("option");
      opt.value = n.id; opt.textContent = n.label;
      if (String(n.id) === String(current)) opt.selected = true;
      sel.appendChild(opt);
    });
  });
}

function addBuildEdge() {
  const from = parseInt(document.getElementById("from-node").value);
  const to   = parseInt(document.getElementById("to-node").value);
  const pol  = document.getElementById("edge-polarity").value;
  if (!from || !to) { alert("Select both nodes."); return; }
  if (from === to)  { alert("A variable cannot cause itself directly."); return; }
  buildEdgeCounter++;
  buildEdges.push({ id: buildEdgeCounter, from, to, polarity: pol });
  network.body.data.edges.add({
    id: buildEdgeCounter, from, to, label: pol,
    font: { size: 16, color: pol === "+" ? "#2E7D32" : "#C62828", bold: true },
    arrows: { to: { enabled: true } },
    color: { color: pol === "+" ? "#2E7D32" : "#C62828" },
    width: 2
  });
}

function detectLoops() {
  if (buildNodes.length < 3 || buildEdges.length < 3) {
    document.getElementById("loop-result").textContent = "Add at least 3 nodes and 3 edges first.";
    return;
  }
  // Simple cycle detection: find the first cycle using DFS
  const adj = {};
  buildNodes.forEach(n => { adj[n.id] = []; });
  buildEdges.forEach(e => { adj[e.from] = adj[e.from] || []; adj[e.from].push({ to: e.to, pol: e.polarity }); });

  let foundCycles = [];
  function dfs(start, current, visited, path, polarity) {
    const neighbors = adj[current] || [];
    for (const nb of neighbors) {
      if (nb.to === start && path.length >= 2) {
        const minuses = path.filter(p => p === "-").length + (nb.pol === "-" ? 1 : 0);
        const type = minuses % 2 === 0 ? "R" : "B";
        foundCycles.push({ path: [...path], type, minuses });
        return;
      }
      if (!visited.has(nb.to)) {
        visited.add(nb.to);
        dfs(start, nb.to, visited, [...path, nb.pol], polarity + nb.pol);
        visited.delete(nb.to);
      }
    }
  }

  buildNodes.forEach(n => {
    dfs(n.id, n.id, new Set([n.id]), [], "");
  });

  if (foundCycles.length === 0) {
    document.getElementById("loop-result").textContent = "No closed loops detected yet. Add more connections!";
  } else {
    const unique = foundCycles.slice(0, 3);
    document.getElementById("loop-result").textContent =
      unique.map((c, i) => `Loop ${i+1}: ${c.type === "R" ? "Reinforcing (R)" : "Balancing (B)"} — ${c.minuses} negative edge(s). ${c.minuses % 2 === 0 ? "Even # of negatives = self-amplifying." : "Odd # of negatives = self-correcting."}`).join("\n");
  }
}

function traceEffect() {
  const nodeId = parseInt(document.getElementById("trace-node").value);
  const dir    = document.getElementById("trace-dir").value;
  if (!nodeId) { alert("Select a variable."); return; }
  const nodeName = buildNodes.find(n => n.id === nodeId)?.label || "?";
  const adj = {};
  buildNodes.forEach(n => { adj[n.id] = []; });
  buildEdges.forEach(e => { adj[e.from] = adj[e.from] || []; adj[e.from].push({ to: e.to, pol: e.polarity, toLabel: buildNodes.find(n => n.id === e.to)?.label || "?" }); });

  const effects = [];
  const visited = new Set([nodeId]);
  const queue = [{ id: nodeId, cumPol: dir === "increase" ? "+" : "-", depth: 0 }];
  while (queue.length && effects.length < 8) {
    const { id, cumPol, depth } = queue.shift();
    if (depth > 4) continue;
    (adj[id] || []).forEach(nb => {
      if (!visited.has(nb.to)) {
        visited.add(nb.to);
        const newPol = (cumPol === "+" && nb.pol === "+") || (cumPol === "-" && nb.pol === "-") ? "+" : "-";
        effects.push(`${nb.toLabel} would likely ${newPol === "+" ? "increase ↑" : "decrease ↓"}`);
        queue.push({ id: nb.to, cumPol: newPol, depth: depth + 1 });
      }
    });
  }

  document.getElementById("trace-result").textContent =
    effects.length
      ? `If ${nodeName} ${dir}s:\n` + effects.map(e => `  • ${e}`).join("\n")
      : "No downstream effects found. Add more arrows!";
}

document.addEventListener("DOMContentLoaded", () => {
  renderCLD("gutenberg");
  document.querySelectorAll(".cld-btn").forEach(btn => {
    btn.addEventListener("click", () => renderCLD(btn.dataset.cld));
  });
  document.getElementById("btn-explore").addEventListener("click", () => switchMode("explore"));
  document.getElementById("btn-build").addEventListener("click", () => switchMode("build"));
  document.getElementById("add-node-btn").addEventListener("click", addBuildNode);
  document.getElementById("add-edge-btn").addEventListener("click", addBuildEdge);
  document.getElementById("detect-loops-btn").addEventListener("click", detectLoops);
  document.getElementById("trace-btn").addEventListener("click", traceEffect);
});
