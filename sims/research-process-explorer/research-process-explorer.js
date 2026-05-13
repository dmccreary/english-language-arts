// Research Process Explorer — vis-network MicroSim
// CANVAS_HEIGHT: 620

const PHASES = [
  { id: "bg",       label: "1. Background\nResearch",    x: -320, y: -220, color: "#1565C0", font: "#fff",
    desc: "Broad initial reading to build context and identify the landscape of the topic. Use encyclopedias, textbooks, and overview articles.",
    tips: ["Use Wikipedia for overview, then follow its sources", "Take notes on key terms and vocabulary", "Don't cite background sources — use them to focus"] },
  { id: "rq",       label: "2. Research\nQuestion",      x: -320, y:  -60, color: "#2E7D32", font: "#fff",
    desc: "Narrow your topic to a specific, arguable research question. A good question cannot be answered with a simple yes/no or a single fact.",
    tips: ["Avoid: 'What is climate change?' (too broad)", "Better: 'How does sea level rise disproportionately affect coastal communities in developing nations?'", "Your question should generate debate — reasonable people could disagree"] },
  { id: "focused",  label: "3. Focused\nResearch",       x: -320, y:   80, color: "#F57F17", font: "#000",
    desc: "Now you know what you're looking for. Search databases, academic journals, and primary sources specifically relevant to your research question.",
    tips: ["Use databases: JSTOR, Google Scholar, EBSCOhost", "Evaluate sources for credibility, currency, relevance, authority", "Collect a variety of source types"] },
  { id: "read",     label: "4. Reading\n& Notes",        x: -320, y:  220, color: "#E65100", font: "#fff",
    desc: "Read sources carefully, taking notes that link evidence to your research question. Use annotation, Cornell notes, or a research matrix.",
    tips: ["Note page numbers for every quote", "Distinguish between paraphrase and direct quote", "Track which source each note comes from immediately"] },
  { id: "synth",    label: "5. Synthesis\n& Outline",    x: -320, y:  360, color: "#6A1B9A", font: "#fff",
    desc: "Look across your notes for patterns, agreements, contradictions, and gaps. Build an outline that structures your argument using your sources as evidence.",
    tips: ["Look for sources that agree and explain why", "Look for sources that disagree and address the disagreement", "Your argument should emerge from the evidence — not force the evidence to fit a preset argument"] },
  // Sources (right side)
  { id: "primary",  label: "Primary\nSources",           x:  200, y: -200, color: "#1565C0", font: "#fff",
    desc: "Original documents, data, or firsthand accounts. Examples: historical documents, interview transcripts, government data, literary texts.",
    tips: ["These are the raw material of research", "Literary analysis: the novel/poem IS the primary source", "Historical research: letters, diaries, records"] },
  { id: "secondary",label: "Secondary\nSources",         x:  200, y:    0, color: "#2E7D32", font: "#fff",
    desc: "Scholarly analysis and interpretation of primary sources. Examples: academic articles, books, peer-reviewed essays.",
    tips: ["Most research relies heavily on secondary sources", "Peer review = quality check by other experts", "Check publication date — especially for scientific topics"] },
  { id: "tertiary", label: "Tertiary\nSources",          x:  200, y:  200, color: "#90A4AE", font: "#000",
    desc: "Compiled information from primary and secondary sources. Examples: encyclopedias, textbooks, databases.",
    tips: ["Use for background research only", "Do NOT cite as evidence in academic work", "Follow the sources they cite for credible evidence"] },
  { id: "credibility", label: "Source\nCredibility\nEvaluation", x: 400, y:    0, color: "#C62828", font: "#fff",
    desc: "Use the SIFT method: Stop, Investigate the Source, Find Better Coverage, Trace Claims. Evaluate Currency, Relevance, Authority, Accuracy, Purpose (CRAAP test).",
    tips: ["Who wrote it, and what are their credentials?", "Is it published by a recognized academic or governmental source?", "Does it cite evidence? Can you verify the claims independently?"] }
];

const RESEARCH_EDGES = [
  { from: "bg",        to: "rq",        label: "narrows to" },
  { from: "rq",        to: "focused",   label: "guides" },
  { from: "focused",   to: "read",      label: "leads to" },
  { from: "read",      to: "synth",     label: "produces" },
  { from: "primary",   to: "credibility", label: "evaluated by" },
  { from: "secondary", to: "credibility", label: "evaluated by" },
  { from: "tertiary",  to: "secondary", label: "points to" },
  { from: "focused",   to: "primary",   label: "seeks" },
  { from: "focused",   to: "secondary", label: "seeks" },
  { from: "bg",        to: "tertiary",  label: "uses" }
];

let network;

function initNetwork() {
  const visNodes = PHASES.map(n => ({
    id: n.id, label: n.label, x: n.x, y: n.y,
    color: { background: n.color, border: n.color },
    font:  { color: n.font, size: 13, align: "center" },
    shape: "ellipse", size: 30, borderWidth: 2,
    shadow: { enabled: true, color: "rgba(0,0,0,0.15)", size: 4, x: 2, y: 2 }
  }));

  const visEdges = RESEARCH_EDGES.map((e, i) => ({
    id: i, from: e.from, to: e.to,
    label: e.label,
    font: { size: 10, align: "middle" },
    arrows: { to: { enabled: true, scaleFactor: 0.7 } },
    color: { color: "#aaaaaa" }, width: 1.5,
    smooth: { type: "curvedCW", roundness: 0.2 }
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
  const n = PHASES.find(n => n.id === nodeId);
  if (!n) return;
  document.getElementById("hint").style.display = "none";
  const panel = document.getElementById("info-panel");
  panel.style.display = "block";
  panel.style.borderColor = n.color;
  panel.innerHTML = `
    <div style="font-size:14px;font-weight:bold;color:${n.color};margin-bottom:6px">${n.label.replace(/\n/g, " ")}</div>
    <div style="font-size:12px;color:#333;margin-bottom:8px;line-height:1.5">${n.desc}</div>
    <div style="font-size:11px;font-weight:bold;color:#555;margin-bottom:4px">Key Strategies:</div>
    <ul style="font-size:11px;color:#444;margin-left:14px;line-height:1.6">${n.tips.map(t => `<li>${t}</li>`).join("")}</ul>`;
}

document.addEventListener("DOMContentLoaded", () => {
  initNetwork();
  window.addEventListener("resize", () => { if (network) network.fit({ animation: false }); });
});
