// Literary Genre Explorer — vis-network MicroSim
// CANVAS_HEIGHT: 620

const GENRE_DATA = {
  nodes: [
    // Hub nodes
    { id: "fiction",    label: "Fiction",     x:  -220, y:  -80, color: "#1565C0", font: "#fff", size: 38, desc: "Narrative prose that depicts imagined characters, events, and settings. Fiction explores the human condition through invented stories." },
    { id: "nonfiction", label: "Nonfiction",  x:   220, y:  -80, color: "#1B5E20", font: "#fff", size: 38, desc: "Writing based on real people, events, and ideas. Nonfiction informs, argues, or explores factual subjects using evidence and research." },
    { id: "drama",      label: "Drama",       x:  -220, y:   130, color: "#B71C1C", font: "#fff", size: 38, desc: "Literature written for performance — plays, musicals, screenplays. Drama conveys story through dialogue and action on stage." },
    { id: "poetry",     label: "Poetry",      x:   220, y:   130, color: "#4527A0", font: "#fff", size: 38, desc: "Literary art that uses compressed language, sound, rhythm, and imagery to evoke emotion and meaning. Poetry prioritizes the music of language." },

    // Fiction subgenres
    { id: "novel",       label: "Novel",            x: -400, y: -180, color: "#42A5F5", font: "#fff", size: 22, desc: "Long-form prose fiction with complex characters, multiple plotlines, and sustained narrative. Examples: The Great Gatsby, To Kill a Mockingbird." },
    { id: "short_story", label: "Short Story",       x: -480, y:  -60, color: "#42A5F5", font: "#fff", size: 22, desc: "Brief prose fiction focusing on a single effect, character, or event. Examples: 'The Lottery' by Shirley Jackson, 'The Gift of the Magi'." },
    { id: "myth",        label: "Myth / Folklore",   x: -400, y:   30, color: "#42A5F5", font: "#fff", size: 22, desc: "Traditional narratives that explain origins, values, or supernatural events. Examples: Greek myths, creation stories, Arthurian legend." },

    // Nonfiction subgenres
    { id: "essay",       label: "Essay",             x:  320, y: -200, color: "#66BB6A", font: "#fff", size: 22, desc: "Short analytical or argumentative prose exploring a topic from the author's perspective. Examples: Orwell's 'Politics and the English Language'." },
    { id: "memoir",      label: "Memoir / Autobiography", x: 440, y: -100, color: "#66BB6A", font: "#fff", size: 22, desc: "First-person narrative of the author's own life experiences, reflecting on their meaning. Examples: I Know Why the Caged Bird Sings, The Diary of a Young Girl." },
    { id: "argument",    label: "Argument / Rhetoric", x: 380, y:   20, color: "#66BB6A", font: "#fff", size: 22, desc: "Writing that persuades through evidence, logic, and rhetoric. Examples: Lincoln's Gettysburg Address, MLK's Letter from Birmingham Jail." },

    // Drama subgenres
    { id: "tragedy",     label: "Tragedy",           x: -380, y:  180, color: "#EF9A9A", font: "#000", size: 22, desc: "Drama in which a protagonist's fatal flaw leads to downfall and suffering. Examples: Hamlet, Macbeth, Death of a Salesman." },
    { id: "comedy_d",    label: "Comedy",             x: -470, y:  260, color: "#EF9A9A", font: "#000", size: 22, desc: "Drama that aims to amuse; typically ends happily. Examples: A Midsummer Night's Dream, Twelfth Night, The Importance of Being Earnest." },

    // Poetry subgenres
    { id: "lyric",       label: "Lyric Poetry",      x:  320, y:  200, color: "#CE93D8", font: "#000", size: 22, desc: "Short, intensely personal poetry expressing the speaker's thoughts and emotions. Examples: Sonnets, odes, elegies. Emily Dickinson, Pablo Neruda." },
    { id: "narrative_p", label: "Narrative Poetry",  x:  430, y:  280, color: "#CE93D8", font: "#000", size: 22, desc: "Poetry that tells a story with characters and plot. Examples: The Odyssey, 'The Raven' by Poe, 'Paul Revere's Ride'." }
  ],
  edges: [
    { from: "fiction",    to: "novel"       },
    { from: "fiction",    to: "short_story" },
    { from: "fiction",    to: "myth"        },
    { from: "nonfiction", to: "essay"       },
    { from: "nonfiction", to: "memoir"      },
    { from: "nonfiction", to: "argument"    },
    { from: "drama",      to: "tragedy"     },
    { from: "drama",      to: "comedy_d"    },
    { from: "poetry",     to: "lyric"       },
    { from: "poetry",     to: "narrative_p" }
  ]
};

let network;

function initNetwork() {
  const visNodes = GENRE_DATA.nodes.map(n => ({
    id: n.id, label: n.label, x: n.x, y: n.y,
    color: { background: n.color, border: n.color },
    font:  { color: n.font, size: 13, align: "center" },
    shape: "ellipse", size: n.size || 28, borderWidth: 2,
    shadow: { enabled: true, color: "rgba(0,0,0,0.15)", size: 4, x: 2, y: 2 }
  }));

  const visEdges = GENRE_DATA.edges.map((e, i) => ({
    id: i, from: e.from, to: e.to,
    arrows: { to: { enabled: true, scaleFactor: 0.7 } },
    color: { color: "#aaaaaa" }, width: 2,
    smooth: { type: "continuous", roundness: 0.1 }
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
  const n = GENRE_DATA.nodes.find(n => n.id === nodeId);
  if (!n) return;
  document.getElementById("hint").style.display = "none";
  const panel = document.getElementById("info-panel");
  panel.style.display = "block";
  panel.style.borderColor = n.color;
  panel.innerHTML = `<div style="font-size:15px;font-weight:bold;color:${n.color};margin-bottom:6px">${n.label}</div>
    <div style="font-size:12px;line-height:1.55;color:#333">${n.desc}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  initNetwork();
  window.addEventListener("resize", () => { if (network) network.fit({ animation: false }); });
});
