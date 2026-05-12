// Essay Architecture Explorer — vis-network MicroSim
// CANVAS_HEIGHT: 620

const ESSAY_NODES = [
  { id: "intro",    label: "Introduction",         x:    0, y: -220, color: "#1565C0", font: "#fff",
    desc: "Opens the essay, provides context, and ends with the thesis statement. Typically 1 paragraph.",
    parts: ["Hook (attention-grabbing opening)", "Background context", "Thesis statement (last sentence)"] },
  { id: "body1",   label: "Body\nParagraph 1",     x: -280, y:  -60, color: "#2E7D32", font: "#fff",
    desc: "Develops the first supporting point for the thesis with evidence and analysis.",
    parts: ["Topic sentence", "Evidence (quote or data)", "Analysis/commentary", "Transition sentence"] },
  { id: "body2",   label: "Body\nParagraph 2",     x:    0, y:  -60, color: "#2E7D32", font: "#fff",
    desc: "Develops the second supporting point with different evidence and deeper analysis.",
    parts: ["Topic sentence", "Evidence (quote or data)", "Analysis/commentary", "Transition sentence"] },
  { id: "body3",   label: "Body\nParagraph 3",     x:  280, y:  -60, color: "#2E7D32", font: "#fff",
    desc: "Develops the third supporting point, often the most complex or compelling.",
    parts: ["Topic sentence", "Evidence (quote or data)", "Analysis/commentary", "Transition sentence"] },
  { id: "counter", label: "Counterclaim\nParagraph",x: -140, y:  130, color: "#F57F17", font: "#000",
    desc: "Acknowledges an opposing argument, then refutes it. Strengthens the overall argument.",
    parts: ["Counterclaim statement", "Evidence for opposing view", "Rebuttal/refutation", "Transition back to thesis"] },
  { id: "conc",    label: "Conclusion",             x:    0, y:  290, color: "#6A1B9A", font: "#fff",
    desc: "Restates the thesis, synthesizes (does not just repeat) the main points, and provides a closing thought.",
    parts: ["Restated thesis (in new words)", "Synthesis of key arguments", "Closing thought or call to action"] }
];

const ESSAY_EDGES = [
  { from: "intro",  to: "body1"  },
  { from: "intro",  to: "body2"  },
  { from: "intro",  to: "body3"  },
  { from: "body1",  to: "counter" },
  { from: "body2",  to: "counter" },
  { from: "body3",  to: "conc"   },
  { from: "counter",to: "conc"   }
];

let network;

function initNetwork() {
  const visNodes = ESSAY_NODES.map(n => ({
    id: n.id, label: n.label, x: n.x, y: n.y,
    color: { background: n.color, border: n.color },
    font: { color: n.font, size: 13, align: "center" },
    shape: "ellipse", borderWidth: 3, size: 35,
    shadow: { enabled: true, color: "rgba(0,0,0,0.2)", size: 5, x: 2, y: 2 }
  }));

  const visEdges = ESSAY_EDGES.map((e, i) => ({
    id: i, from: e.from, to: e.to,
    arrows: { to: { enabled: true, scaleFactor: 0.9 } },
    color: { color: "#999999" },
    width: 2,
    smooth: { type: "curvedCW", roundness: 0.15 }
  }));

  const container = document.getElementById("network");
  network = new vis.Network(container,
    { nodes: new vis.DataSet(visNodes), edges: new vis.DataSet(visEdges) },
    {
      layout:      { improvedLayout: false },
      physics:     { enabled: false },
      interaction: { hover: true, zoomView: false, dragView: false, dragNodes: false, selectConnectedEdges: false }
    }
  );

  network.on("click", params => {
    if (params.nodes.length > 0) showDetails(params.nodes[0]);
  });

  setTimeout(() => network.fit({ animation: false }), 200);
}

function showDetails(nodeId) {
  const n = ESSAY_NODES.find(n => n.id === nodeId);
  if (!n) return;
  const panel = document.getElementById("detail-panel");
  panel.innerHTML = `
    <div class="d-title" style="color:${n.color}">${n.label.replace("\n", " ")}</div>
    <div class="d-desc">${n.desc}</div>
    <div class="d-label">Key Parts:</div>
    <ul>${n.parts.map(p => `<li>${p}</li>`).join("")}</ul>`;
  panel.style.display = "block";
  document.getElementById("hint").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  initNetwork();
  window.addEventListener("resize", () => { if (network) network.fit({ animation: false }); });
});
