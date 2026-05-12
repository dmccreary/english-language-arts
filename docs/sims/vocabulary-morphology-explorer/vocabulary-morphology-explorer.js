// Vocabulary Morphology Explorer — vis-network MicroSim
// CANVAS_HEIGHT: 640

const ROOTS = {
  "spec/spect": {
    label: "spec / spect",
    meaning: "to look, to see (Latin: spectare)",
    prefix_nodes: [
      { id: "pre_in",  label: "in- / re-",   x: -220, y: -80,  meaning: "in / again",    color: "#1565C0", type: "prefix" },
      { id: "pre_in2", label: "intro- / retro-", x: -220, y: 60, meaning: "within / backward", color: "#1565C0", type: "prefix" }
    ],
    suffix_nodes: [
      { id: "suf_ion", label: "-ion / -tion", x:  220, y: -80,  meaning: "act or process",     color: "#2E7D32", type: "suffix" },
      { id: "suf_ive", label: "-ive / -ful",  x:  220, y:  60,  meaning: "related to / full of",color: "#2E7D32", type: "suffix" }
    ],
    word_nodes: [
      { id: "w1", label: "inspect",       x: -100, y: -160, word: "inspect",       def: "to look carefully into; to examine (in- = into + spec = look)." },
      { id: "w2", label: "spectator",     x:   50, y: -180, word: "spectator",     def: "one who watches; a viewer (-tor = person who acts)." },
      { id: "w3", label: "perspective",   x:  160, y: -100, word: "perspective",   def: "a way of looking at things; a viewpoint (per- = through + spec)." },
      { id: "w4", label: "introspection", x: -130, y:  150, word: "introspection", def: "looking within oneself; self-examination (intro- = within + spec + -ion)." },
      { id: "w5", label: "retrospective", x:  130, y:  150, word: "retrospective", def: "looking back at past events (retro- = back + spec + -ive)." },
      { id: "w6", label: "spectacular",   x:  -50, y:  200, word: "spectacular",   def: "visually impressive; striking to the eye (-acular = resembling)." }
    ],
    edges: [
      { from: "root", to: "w1" }, { from: "root", to: "w2" }, { from: "root", to: "w3" },
      { from: "root", to: "w4" }, { from: "root", to: "w5" }, { from: "root", to: "w6" },
      { from: "pre_in", to: "w1" }, { from: "pre_in2", to: "w4" }, { from: "pre_in2", to: "w5" },
      { from: "suf_ion", to: "w4" }, { from: "suf_ive", to: "w5" }
    ]
  },
  "port": {
    label: "port",
    meaning: "to carry (Latin: portare)",
    prefix_nodes: [
      { id: "pre_trans", label: "trans-",  x: -220, y: -80, meaning: "across",        color: "#1565C0", type: "prefix" },
      { id: "pre_im",    label: "im- / ex-",x: -220, y:  60, meaning: "in / out of",  color: "#1565C0", type: "prefix" }
    ],
    suffix_nodes: [
      { id: "suf_er",  label: "-er / -or", x: 220, y: -80,  meaning: "person who does",  color: "#2E7D32", type: "suffix" },
      { id: "suf_able",label: "-able",     x: 220, y:  60,  meaning: "capable of being",  color: "#2E7D32", type: "suffix" }
    ],
    word_nodes: [
      { id: "w1", label: "transport",  x: -100, y: -170, word: "transport",  def: "to carry across or from one place to another (trans- = across + port)." },
      { id: "w2", label: "import",     x:   50, y: -180, word: "import",     def: "to bring goods into a country (im- = into + port = carry)." },
      { id: "w3", label: "export",     x:  160, y:  -90, word: "export",     def: "to send goods out of a country (ex- = out + port = carry)." },
      { id: "w4", label: "portable",   x: -100, y:  170, word: "portable",   def: "capable of being carried (-able = capable of)." },
      { id: "w5", label: "reporter",   x:  130, y:  160, word: "reporter",   def: "one who carries back and relates information (re- = back + port + -er)." },
      { id: "w6", label: "portfolio",  x:  -40, y:  200, word: "portfolio",  def: "a case for carrying documents or artwork (port + foglio = leaf/sheet)." }
    ],
    edges: [
      { from: "root", to: "w1" }, { from: "root", to: "w2" }, { from: "root", to: "w3" },
      { from: "root", to: "w4" }, { from: "root", to: "w5" }, { from: "root", to: "w6" },
      { from: "pre_trans", to: "w1" }, { from: "pre_im", to: "w2" }, { from: "pre_im", to: "w3" },
      { from: "suf_able", to: "w4" }, { from: "suf_er", to: "w5" }
    ]
  },
  "dict/dic": {
    label: "dict / dic",
    meaning: "to say, to speak (Latin: dicere)",
    prefix_nodes: [
      { id: "pre_contra", label: "contra-", x: -220, y: -80, meaning: "against",       color: "#1565C0", type: "prefix" },
      { id: "pre_pre",    label: "pre- / in-",x: -220, y: 60, meaning: "before / into",color: "#1565C0", type: "prefix" }
    ],
    suffix_nodes: [
      { id: "suf_ion",  label: "-ion / -ation", x: 220, y: -80, meaning: "act or process", color: "#2E7D32", type: "suffix" },
      { id: "suf_ary",  label: "-ary / -ory",   x: 220, y:  60, meaning: "place or thing",  color: "#2E7D32", type: "suffix" }
    ],
    word_nodes: [
      { id: "w1", label: "dictate",       x: -80,  y: -180, word: "dictate",       def: "to say aloud for someone else to write; to command (dict = say + -ate = make)." },
      { id: "w2", label: "contradict",    x:  50,  y: -180, word: "contradict",    def: "to say the opposite; to assert the contrary (contra- = against + dict)." },
      { id: "w3", label: "predict",       x:  160, y:  -90, word: "predict",       def: "to say beforehand; to forecast (pre- = before + dict = say)." },
      { id: "w4", label: "dictionary",    x: -110, y:  170, word: "dictionary",    def: "a reference work of words and their meanings (dict + -ionary = place of sayings)." },
      { id: "w5", label: "indication",    x:  130, y:  160, word: "indication",    def: "a statement or sign pointing toward something; a signal (in- + dic + -ation)." },
      { id: "w6", label: "edict",         x:  -40, y:  200, word: "edict",         def: "an official proclamation or command (e- = out + dict = spoken out)." }
    ],
    edges: [
      { from: "root", to: "w1" }, { from: "root", to: "w2" }, { from: "root", to: "w3" },
      { from: "root", to: "w4" }, { from: "root", to: "w5" }, { from: "root", to: "w6" },
      { from: "pre_contra", to: "w2" }, { from: "pre_pre", to: "w3" }, { from: "pre_pre", to: "w5" },
      { from: "suf_ion", to: "w5" }, { from: "suf_ary", to: "w4" }
    ]
  }
};

let network;
let currentRoot = "spec/spect";

function buildNetwork(rootKey) {
  currentRoot = rootKey;
  const data = ROOTS[rootKey];
  if (!data) return;

  const allNodes = [
    { id: "root", label: data.label, x: 0, y: 0,
      color: { background: "#C62828", border: "#B71C1C" },
      font: { color: "#fff", size: 15, bold: true },
      shape: "ellipse", size: 42, borderWidth: 3,
      title: "ROOT: " + data.label + "\nMeaning: " + data.meaning
    },
    ...data.prefix_nodes.map(n => ({
      id: n.id, label: n.label, x: n.x, y: n.y,
      color: { background: n.color, border: n.color },
      font: { color: "#fff", size: 12 },
      shape: "ellipse", size: 26, borderWidth: 2,
      title: "PREFIX: " + n.label + "\nMeaning: " + n.meaning
    })),
    ...data.suffix_nodes.map(n => ({
      id: n.id, label: n.label, x: n.x, y: n.y,
      color: { background: n.color, border: n.color },
      font: { color: "#fff", size: 12 },
      shape: "ellipse", size: 26, borderWidth: 2,
      title: "SUFFIX: " + n.label + "\nMeaning: " + n.meaning
    })),
    ...data.word_nodes.map(n => ({
      id: n.id, label: n.label, x: n.x, y: n.y,
      color: { background: "#FFE082", border: "#F9A825" },
      font: { color: "#111", size: 12 },
      shape: "ellipse", size: 24, borderWidth: 2,
      title: n.word + ": " + n.def
    }))
  ];

  const allEdges = data.edges.map((e, i) => ({
    id: i, from: e.from, to: e.to,
    color: { color: "#bbbbbb" }, width: 1.5,
    arrows: { to: { enabled: true, scaleFactor: 0.6 } },
    smooth: { type: "curvedCW", roundness: 0.15 }
  }));

  const container = document.getElementById("network");
  network = new vis.Network(container,
    { nodes: new vis.DataSet(allNodes), edges: new vis.DataSet(allEdges) },
    {
      layout:      { improvedLayout: false },
      physics:     { enabled: false },
      interaction: { hover: true, zoomView: false, dragView: false, dragNodes: false, tooltipDelay: 100 }
    }
  );

  network.on("click", params => {
    if (params.nodes.length) showDetails(params.nodes[0]);
  });

  setTimeout(() => network.fit({ animation: false }), 200);
  updateRootInfo();
}

function updateRootInfo() {
  const data = ROOTS[currentRoot];
  document.getElementById("root-info").innerHTML =
    `<div style="font-size:15px;font-weight:bold;color:#C62828;margin-bottom:4px">${data.label}</div>
     <div style="font-size:12px;color:#333;margin-bottom:8px">${data.meaning}</div>
     <div style="font-size:11px;color:#555">Click any <span style="color:#FFB300;font-weight:bold">gold node</span> to see the word's full definition and morpheme breakdown.</div>`;
}

function showDetails(nodeId) {
  if (nodeId === "root") { updateRootInfo(); return; }
  const data = ROOTS[currentRoot];
  const allNode = [...data.prefix_nodes, ...data.suffix_nodes, ...data.word_nodes].find(n => n.id === nodeId);
  if (!allNode) return;

  if (allNode.type === "prefix" || allNode.type === "suffix") {
    document.getElementById("root-info").innerHTML =
      `<div style="font-size:14px;font-weight:bold;color:${allNode.type === "prefix" ? "#1565C0" : "#2E7D32"};margin-bottom:4px">${allNode.label} (${allNode.type.toUpperCase()})</div>
       <div style="font-size:12px;color:#333">Meaning: ${allNode.meaning}</div>`;
    return;
  }

  document.getElementById("root-info").innerHTML =
    `<div style="font-size:14px;font-weight:bold;color:#F57F17;margin-bottom:6px">${allNode.word}</div>
     <div style="font-size:12px;color:#333;line-height:1.55">${allNode.def}</div>
     <div style="margin-top:8px;font-size:11px;font-style:italic;color:#555">Notice how the root "${data.label}" contributes the core meaning of "${data.label.split("/")[0].trim()}" (to ${data.meaning.split("(")[0].trim()}) to this word.</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  buildNetwork("spec/spect");

  document.querySelectorAll(".root-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".root-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      buildNetwork(btn.dataset.root);
    });
  });

  window.addEventListener("resize", () => { if (network) network.fit({ animation: false }); });
});
