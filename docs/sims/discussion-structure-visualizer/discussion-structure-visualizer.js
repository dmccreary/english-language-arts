// Academic Discussion Protocol Map — vis-network MicroSim
// CANVAS_HEIGHT: 560
// Bloom level: Understand (L2). Learners compare the structure and participant
// roles of four academic discussion protocols.
//
// Explore mode: click a protocol node to see all five of its attributes, or
// click an attribute node to compare that attribute across all four protocols.
// Role Play mode: choose a protocol and a role to get responsibilities and
// sentence frames for pre-discussion preparation.

// ===========================================
// DATA
// ===========================================

// The five attributes every protocol is described by.
const ATTRIBUTES = [
  { id: 'participants', label: 'Participants', title: 'Participant structure',
    question: 'Who talks, and how is the room arranged?' },
  { id: 'facilitator', label: 'Facilitator', title: 'Facilitator role',
    question: 'What does the teacher or discussion leader do?' },
  { id: 'evidence', label: 'Evidence', title: 'Evidence requirements',
    question: 'What has to back up a contribution?' },
  { id: 'goal', label: 'Goal', title: 'Primary learning goal',
    question: 'What is this kind of discussion for?' },
  { id: 'duration', label: 'Duration', title: 'Typical duration',
    question: 'About how long does it take?' }
];

// The four protocols. "center" is the node position of the hub; each hub's
// five attribute nodes are placed around it using ATTRIBUTE_OFFSETS.
const PROTOCOLS = [
  {
    id: 'socratic', name: 'Socratic Seminar', nodeLabel: '<b>Socratic</b>\n<b>Seminar</b>',
    color: '#3f51b5', tint: '#e8eaf6', center: { x: -106, y: -86 },
    summary: 'One circle, one shared text, one open question. The group builds understanding together.',
    attributes: {
      participants: 'The whole group sits in one circle so that every speaker can see every other speaker.',
      facilitator: 'Poses the opening question and asks follow-ups. Does not lecture or supply answers.',
      evidence: 'Required for every contribution: point to a specific line or passage in the shared text.',
      goal: 'Collaborative inquiry: a deeper understanding of the text, not a predetermined conclusion.',
      duration: 'About 30 to 50 minutes, plus annotating the text beforehand and reflecting afterward.'
    },
    roles: {
      facilitator: {
        label: 'Facilitator',
        responsibilities: [
          'Open with one genuine, open-ended question about the text.',
          'Ask follow-up questions instead of giving answers.',
          'Invite quieter voices and keep the group anchored to the text.'
        ],
        opening: [
          'Our guiding question today is ___. Who would like to start us with a passage?',
          'Take a minute to find one line that speaks to this question.'
        ],
        questions: [
          'Where in the text do you see that?',
          'Does anyone read that passage differently?',
          'How does that connect to what ___ said earlier?'
        ],
        responses: [
          'Say more about what you mean by ___.',
          'Let\'s pause there. What do others think?'
        ],
        closing: [
          'What idea from today changed or sharpened your thinking?',
          'What question are we leaving unanswered?'
        ]
      },
      inner: {
        label: 'Inner circle (discussant)',
        responsibilities: [
          'Arrive with the text read, annotated, and three questions ready.',
          'Ground every claim in a specific passage.',
          'Respond to other speakers, not only to the facilitator.'
        ],
        opening: [
          'I\'d like to start with the passage on page ___, where ___.',
          'One line that stood out to me was ___, because ___.'
        ],
        questions: [
          'What do you think the author means by ___?',
          'Before I respond, can you say more about what you mean by ___?'
        ],
        responses: [
          'I want to add to what ___ said about ___.',
          'I think that\'s partly right, but I\'d complicate it by noting ___.',
          'I see the evidence differently. I read that passage as ___.'
        ],
        closing: [
          'What I\'m hearing from several people is a tension between ___ and ___.',
          'My thinking changed when ___ pointed out ___.'
        ]
      },
      outer: {
        label: 'Outer circle (observer or coach)',
        responsibilities: [
          'Track the discussion: who speaks, what evidence is cited, which ideas build.',
          'Listen without interrupting the inner circle.',
          'Give specific, respectful feedback when you are invited to.'
        ],
        opening: [
          'I was tracking ___, and I noticed ___.',
          'The strongest use of evidence I heard was when ___.'
        ],
        questions: [
          'What made you choose that passage?',
          'I noticed we didn\'t discuss ___. Why do you think that was?'
        ],
        responses: [
          'One idea I wanted to hear more about was ___.',
          'A connection I noticed between two speakers was ___.'
        ],
        closing: [
          'One thing the group did well was ___.',
          'One goal for next time could be ___.'
        ]
      }
    }
  },
  {
    id: 'fishbowl', name: 'Fishbowl', nodeLabel: '<b>Fishbowl</b>',
    color: '#00796b', tint: '#e0f2f1', center: { x: 106, y: -86 },
    summary: 'A small inner circle discusses while the outer circle observes, takes notes, and then responds.',
    attributes: {
      participants: 'An inner circle of about 4 to 8 speakers discusses. Everyone else forms an outer circle of observers.',
      facilitator: 'Sets the question, keeps time, and manages the hand-off when the outer circle responds.',
      evidence: 'The inner circle cites the text. The outer circle notes examples of strong and weak reasoning.',
      goal: 'Two skills at once: speaking for the inner circle, analytical listening for the outer circle.',
      duration: 'About 20 to 40 minutes: an inner-circle round of 10 to 15 minutes, then observer feedback.'
    },
    roles: {
      facilitator: {
        label: 'Facilitator',
        responsibilities: [
          'Choose the question and the first inner circle.',
          'Keep time and protect the inner circle from interruptions.',
          'Run the debrief and rotate the circles.'
        ],
        opening: [
          'Inner circle, your question is ___. Outer circle, your job is to track ___.',
          'You have ___ minutes. Begin when you\'re ready.'
        ],
        questions: [
          'Outer circle, what did you notice about how evidence was used?',
          'Inner circle, what would you add after hearing that feedback?'
        ],
        responses: [
          'Let\'s hold that thought for the debrief.',
          'Thank you. Let\'s hear from someone who hasn\'t spoken yet.'
        ],
        closing: [
          'Circles, switch places.',
          'Name one move you saw today that you want to try yourself.'
        ]
      },
      inner: {
        label: 'Inner circle (speaker)',
        responsibilities: [
          'Discuss the question with the other inner-circle members.',
          'Support each claim with evidence and build on earlier points.',
          'Speak so the observers can follow your reasoning.'
        ],
        opening: [
          'I\'ll start us off: I think ___, because in the text ___.',
          'The question asks ___. My first reaction is ___.'
        ],
        questions: [
          'What evidence makes you say that?',
          'How does your point fit with what ___ just said?'
        ],
        responses: [
          'Building on that, ___.',
          'I\'d push back a little, because ___.',
          'Can we go back to ___\'s point about ___?'
        ],
        closing: [
          'To sum up where we landed: ___.',
          'One question we didn\'t settle is ___.'
        ]
      },
      outer: {
        label: 'Outer circle (observer)',
        responsibilities: [
          'Stay silent during the inner-circle round and take notes.',
          'Record strong evidence, gaps, and unsupported claims.',
          'Respond with observations and questions in the debrief.'
        ],
        opening: [
          'I observed that ___.',
          'The claim with the strongest support was ___, because ___.'
        ],
        questions: [
          'When you said ___, what evidence were you relying on?',
          'Did anyone consider ___?'
        ],
        responses: [
          'A claim that still needs evidence is ___.',
          'I noticed the discussion shifted when ___.'
        ],
        closing: [
          'The most convincing argument I heard was ___.',
          'When I join the inner circle, I want to ___.'
        ]
      }
    }
  },
  {
    id: 'chairs', name: 'Philosophical Chairs', nodeLabel: '<b>Philosophical</b>\n<b>Chairs</b>',
    color: '#bf360c', tint: '#fbe9e7', center: { x: -106, y: 86 },
    summary: 'Take a side on a debatable statement, argue it with evidence, and move if you are persuaded.',
    attributes: {
      participants: 'Two sides, "agree" and "disagree," face each other. Anyone may cross over.',
      facilitator: 'Reads the statement, alternates speakers between sides, and keeps it respectful.',
      evidence: 'Each argument needs a reason backed by a text, fact, or example, not opinion alone.',
      goal: 'Defend a position while genuinely weighing the arguments on the other side.',
      duration: 'About 20 to 30 minutes, ending with a reflection on whether you moved and why.'
    },
    roles: {
      facilitator: {
        label: 'Facilitator (moderator)',
        responsibilities: [
          'Present a statement that reasonable people can disagree about.',
          'Alternate speakers between the two sides.',
          'Ask each speaker to restate the previous point before replying.'
        ],
        opening: [
          'Today\'s statement is ___. Move to the side that matches your position.',
          'Remember: you may change sides whenever an argument persuades you.'
        ],
        questions: [
          'Can someone on the other side respond to that?',
          'What would it take to change your mind?'
        ],
        responses: [
          'Before you answer, please restate what ___ just argued.',
          'Let\'s hear from someone who hasn\'t spoken yet.'
        ],
        closing: [
          'If you moved, tell us which argument moved you.',
          'Write down the strongest point you heard from the other side.'
        ]
      },
      group: {
        label: 'Small group member (agree or disagree side)',
        responsibilities: [
          'Choose a side and be ready to explain why.',
          'Restate the last speaker\'s point before making your own.',
          'Cross the room if an argument persuades you.'
        ],
        opening: [
          'I agree with the statement because ___.',
          'I disagree with the statement because ___.'
        ],
        questions: [
          'How would your side respond to ___?',
          'What evidence supports the idea that ___?'
        ],
        responses: [
          'If I understand you, you\'re arguing ___. I see it differently because ___.',
          'That point is persuasive, but it doesn\'t account for ___.',
          'I\'m changing sides because ___.'
        ],
        closing: [
          'My position at the end is ___, because ___.',
          'The strongest argument from the other side was ___.'
        ]
      }
    }
  },
  {
    id: 'heads', name: 'Numbered Heads Together', nodeLabel: '<b>Numbered Heads</b>\n<b>Together</b>',
    color: '#6a1b9a', tint: '#f3e5f5', center: { x: 106, y: 86 },
    summary: 'Teams confer on a question, then one randomly chosen member reports for the team.',
    attributes: {
      participants: 'Teams of 3 to 5. Each member has a number, and one number is called to report.',
      facilitator: 'Asks the question, times the team talk, and calls a number at random.',
      evidence: 'The team agrees on an answer and its evidence, and every member can explain both.',
      goal: 'Shared accountability: every member can explain the group\'s thinking.',
      duration: 'About 5 to 10 minutes per question, so it is easy to repeat in one class.'
    },
    roles: {
      facilitator: {
        label: 'Facilitator (teacher)',
        responsibilities: [
          'Give each team member a number.',
          'Pose a question that needs more than a one-word answer.',
          'Call a number at random and have that member report.'
        ],
        opening: [
          'Heads together: your question is ___. You have ___ minutes.',
          'Make sure everyone on your team can explain your answer.'
        ],
        questions: [
          'Number ___, what did your team decide, and why?',
          'Does number ___ on another team agree, or want to add something?'
        ],
        responses: [
          'What evidence did your team use?',
          'Can you explain how your team reached that answer?'
        ],
        closing: [
          'What did you hear from another team that improved your answer?',
          'Next question. Heads together again.'
        ]
      },
      group: {
        label: 'Small group member (numbered teammate)',
        responsibilities: [
          'Share your thinking and listen to each teammate.',
          'Help the team agree on an answer and its evidence.',
          'Be ready to report: your number may be the one called.'
        ],
        opening: [
          'My first idea is ___. What do you all think?',
          'Let\'s each share one piece of evidence before we decide.'
        ],
        questions: [
          'Can you explain that so I could repeat it?',
          'Which piece of evidence is our strongest?'
        ],
        responses: [
          'So our answer is ___, because ___. Did I get that right?',
          'Let\'s check that everyone can explain this.'
        ],
        closing: [
          'Our team decided ___, because ___.',
          'We weren\'t sure at first, but we agreed after ___.'
        ]
      }
    }
  }
];

// Where each attribute node sits relative to its protocol hub:
// two above the hub and three below, which keeps every cluster compact.
const ATTRIBUTE_OFFSETS = {
  participants: { x: -52, y: -62 },
  facilitator:  { x: 48,  y: -62 },
  evidence:     { x: -68, y: 62 },
  goal:         { x: -3,  y: 62 },
  duration:     { x: 62,  y: 62 }
};

// The sections of a Role Play card, in display order.
const ROLE_SECTIONS = [
  { key: 'responsibilities', title: 'Your responsibilities', frames: false, wide: true },
  { key: 'opening', title: 'Opening statements', frames: true, wide: false },
  { key: 'questions', title: 'Question templates', frames: true, wide: false },
  { key: 'responses', title: 'Response stems', frames: true, wide: false },
  { key: 'closing', title: 'Closing moves', frames: true, wide: false }
];

const HIGHLIGHT = '#ff9800';
const DIMMED = 0.22;

// ===========================================
// STATE
// ===========================================

let network, nodes, edges;
let selection = { kind: 'none', id: null };   // 'none' | 'protocol' | 'attribute'

// ===========================================
// HELPERS
// ===========================================

function isInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;   // a cross-origin parent means we are embedded
  }
}

function protocolById(id) {
  return PROTOCOLS.find(p => p.id === id);
}

function attributeById(id) {
  return ATTRIBUTES.find(a => a.id === id);
}

function attributeNodeId(protocolId, attributeId) {
  return protocolId + ':' + attributeId;
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ===========================================
// NETWORK
// ===========================================

function buildNetwork() {
  const nodeList = [];
  const edgeList = [];

  PROTOCOLS.forEach(protocol => {
    nodeList.push({
      id: protocol.id,
      kind: 'protocol',
      label: protocol.nodeLabel,
      x: protocol.center.x,
      y: protocol.center.y,
      shape: 'box',
      margin: 9,
      color: { background: protocol.color, border: protocol.color,
        highlight: { background: protocol.color, border: HIGHLIGHT },
        hover: { background: protocol.color, border: HIGHLIGHT } },
      font: { size: 15, color: '#ffffff', face: 'Arial', multi: 'html',
        bold: { size: 15, color: '#ffffff', face: 'Arial' } },
      borderWidth: 2,
      shapeProperties: { borderRadius: 8 }
    });

    ATTRIBUTES.forEach(attribute => {
      const offset = ATTRIBUTE_OFFSETS[attribute.id];
      const nodeId = attributeNodeId(protocol.id, attribute.id);
      nodeList.push({
        id: nodeId,
        kind: 'attribute',
        protocolId: protocol.id,
        attributeId: attribute.id,
        label: attribute.label,
        x: protocol.center.x + offset.x,
        y: protocol.center.y + offset.y,
        shape: 'box',
        margin: 6,
        color: { background: protocol.tint, border: protocol.color,
          highlight: { background: protocol.tint, border: HIGHLIGHT },
          hover: { background: '#ffffff', border: HIGHLIGHT } },
        font: { size: 14, color: '#1f2937', face: 'Arial' },
        borderWidth: 2,
        shapeProperties: { borderRadius: 12 }
      });
      edgeList.push({
        id: 'edge:' + nodeId,
        from: protocol.id,
        to: nodeId,
        color: { color: protocol.color, opacity: 1 },
        width: 2
      });
    });
  });

  nodes = new vis.DataSet(nodeList);
  edges = new vis.DataSet(edgeList);

  // Mouse zoom and pan would hijack page scrolling inside a textbook iframe,
  // so they are only enabled when the sim is opened on its own.
  const standalone = !isInIframe();
  const options = {
    layout: { improvedLayout: false },
    physics: { enabled: false },
    interaction: {
      hover: true,
      selectConnectedEdges: false,
      dragNodes: false,
      dragView: standalone,
      zoomView: standalone,
      navigationButtons: true,
      keyboard: { enabled: true, bindToWindow: false }
    },
    edges: { smooth: false, arrows: { to: { enabled: false } } }
  };

  const container = document.getElementById('network');
  network = new vis.Network(container, { nodes, edges }, options);

  network.on('click', params => {
    if (params.nodes.length === 0) {
      clearSelection();
      return;
    }
    const node = nodes.get(params.nodes[0]);
    if (node.kind === 'protocol') {
      selectProtocol(node.id);
    } else {
      selectAttribute(node.attributeId);
    }
  });
  network.on('hoverNode', () => { container.style.cursor = 'pointer'; });
  network.on('blurNode', () => { container.style.cursor = 'default'; });

  // node sizes are only known once the labels have been drawn
  network.once('afterDrawing', fitNetwork);
}

// Size and place the map so it never sits under the hint at the top or the
// navigation buttons at the bottom of the network area.
function fitNetwork() {
  if (!network) return;
  const container = document.getElementById('network');
  const width = container.clientWidth;
  const height = container.clientHeight;
  if (!width || !height) return;          // hidden (Role Play mode)

  // bounding box of every node, in network coordinates
  let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
  nodes.forEach(node => {
    // vis-network pads a box node's bounding box by its corner radius
    const pad = node.shapeProperties.borderRadius;
    const box = network.getBoundingBox(node.id);
    left = Math.min(left, box.left + pad);
    right = Math.max(right, box.right - pad);
    top = Math.min(top, box.top + pad);
    bottom = Math.max(bottom, box.bottom - pad);
  });
  if (!isFinite(left)) return;

  const navigationShown = height >= 400;  // CSS hides the buttons in the short stacked layout
  const topReserve = 38;
  const bottomReserve = navigationShown ? 96 : 8;
  const usableHeight = height - topReserve - bottomReserve;
  const scale = Math.min(1.5, (width - 16) / (right - left), usableHeight / (bottom - top));

  // put the middle of the map in the middle of the usable band
  const bandCenter = topReserve + usableHeight / 2;
  network.moveTo({
    position: { x: (left + right) / 2, y: (top + bottom) / 2 + (height / 2 - bandCenter) / scale },
    scale: scale,
    animation: false
  });
}

// Dim everything that is not part of the current selection and thicken the
// border of what is.
function applyHighlight() {
  const nodeUpdates = [];
  const edgeUpdates = [];

  nodes.forEach(node => {
    const protocolId = node.kind === 'protocol' ? node.id : node.protocolId;
    let inFocus = true;
    let emphasized = false;
    if (selection.kind === 'protocol') {
      inFocus = protocolId === selection.id;
      emphasized = node.kind === 'protocol' && inFocus;
    } else if (selection.kind === 'attribute') {
      inFocus = node.kind === 'protocol' || node.attributeId === selection.id;
      emphasized = node.kind === 'attribute' && inFocus;
    }
    const protocol = protocolById(protocolId);
    nodeUpdates.push({
      id: node.id,
      opacity: inFocus ? 1 : DIMMED,
      borderWidth: emphasized ? 4 : 2,
      color: {
        background: node.kind === 'protocol' ? protocol.color : protocol.tint,
        border: emphasized ? HIGHLIGHT : protocol.color,
        highlight: { background: node.kind === 'protocol' ? protocol.color : protocol.tint, border: HIGHLIGHT },
        hover: { background: node.kind === 'protocol' ? protocol.color : '#ffffff', border: HIGHLIGHT }
      }
    });
  });

  edges.forEach(edge => {
    const target = nodes.get(edge.to);
    let inFocus = true;
    if (selection.kind === 'protocol') inFocus = target.protocolId === selection.id;
    if (selection.kind === 'attribute') inFocus = target.attributeId === selection.id;
    edgeUpdates.push({
      id: edge.id,
      width: inFocus && selection.kind !== 'none' ? 3 : 2,
      color: { color: protocolById(target.protocolId).color, opacity: inFocus ? 1 : DIMMED }
    });
  });

  nodes.update(nodeUpdates);
  edges.update(edgeUpdates);
  network.unselectAll();
}

// ===========================================
// EXPLORE PANEL
// ===========================================

function selectProtocol(id) {
  selection = { kind: 'protocol', id };
  applyHighlight();
  renderPanel();
}

function selectAttribute(id) {
  selection = { kind: 'attribute', id };
  applyHighlight();
  renderPanel();
}

function clearSelection() {
  selection = { kind: 'none', id: null };
  applyHighlight();
  renderPanel();
}

function renderPanel() {
  const panel = document.getElementById('panel');
  const hint = document.getElementById('network-hint');
  hint.style.display = selection.kind === 'none' ? 'block' : 'none';

  if (selection.kind === 'protocol') {
    const protocol = protocolById(selection.id);
    panel.innerHTML =
      '<div class="panel-head"><div><div class="kicker">Protocol</div>' +
      '<h2 style="color:' + protocol.color + '">' + escapeHtml(protocol.name) + '</h2></div>' +
      '<button class="reset" id="reset-btn">Show all</button></div>' +
      '<p class="lead">' + escapeHtml(protocol.summary) + '</p>' +
      ATTRIBUTES.map(attribute =>
        '<div class="item" style="border-left-color:' + protocol.color + '">' +
        '<button class="linklike" data-attribute="' + attribute.id + '" title="Compare across all four protocols">' +
        escapeHtml(attribute.title) + '</button><br>' +
        escapeHtml(protocol.attributes[attribute.id]) + '</div>').join('');
  } else if (selection.kind === 'attribute') {
    const attribute = attributeById(selection.id);
    panel.innerHTML =
      '<div class="panel-head"><div><div class="kicker">Compare across protocols</div>' +
      '<h2>' + escapeHtml(attribute.title) + '</h2></div>' +
      '<button class="reset" id="reset-btn">Show all</button></div>' +
      '<p class="lead">' + escapeHtml(attribute.question) + '</p>' +
      PROTOCOLS.map(protocol =>
        '<div class="item" style="border-left-color:' + protocol.color + '">' +
        '<button class="linklike" data-protocol="' + protocol.id + '" style="color:' + protocol.color +
        '" title="See everything about this protocol">' + escapeHtml(protocol.name) + '</button><br>' +
        escapeHtml(protocol.attributes[attribute.id]) + '</div>').join('');
  } else {
    panel.innerHTML =
      '<h2>Four ways to run a discussion</h2>' +
      '<p class="lead">Each protocol has the same five attributes. Explore them two ways.</p>' +
      '<div class="item-label">1. Open one protocol</div>' +
      '<div class="chips">' +
      PROTOCOLS.map(protocol =>
        '<button class="chip protocol" data-protocol="' + protocol.id + '" style="background:' +
        protocol.color + '">' + escapeHtml(protocol.name) + '</button>').join('') +
      '</div>' +
      '<div class="item-label">2. Compare one attribute across all four</div>' +
      '<div class="chips">' +
      ATTRIBUTES.map(attribute =>
        '<button class="chip" data-attribute="' + attribute.id + '">' +
        escapeHtml(attribute.title) + '</button>').join('') +
      '</div>' +
      '<p class="lead">You can also click any node in the map. When you are ready to prepare for a ' +
      'discussion, switch to <strong>Role Play</strong>.</p>';
  }
  panel.scrollTop = 0;
}

// One listener handles every button inside the panel.
function handlePanelClick(event) {
  const target = event.target.closest('button');
  if (!target) return;
  if (target.id === 'reset-btn') {
    clearSelection();
  } else if (target.dataset.protocol) {
    selectProtocol(target.dataset.protocol);
  } else if (target.dataset.attribute) {
    selectAttribute(target.dataset.attribute);
  }
}

// ===========================================
// ROLE PLAY
// ===========================================

function fillRoleSelect() {
  const protocol = protocolById(document.getElementById('protocol-select').value);
  const roleSelect = document.getElementById('role-select');
  const previous = roleSelect.value;
  roleSelect.innerHTML = Object.keys(protocol.roles).map(roleId =>
    '<option value="' + roleId + '">' + escapeHtml(protocol.roles[roleId].label) + '</option>').join('');
  if (protocol.roles[previous]) roleSelect.value = previous;
}

function renderRoleCard() {
  const protocol = protocolById(document.getElementById('protocol-select').value);
  const role = protocol.roles[document.getElementById('role-select').value];
  document.getElementById('role-card').innerHTML =
    '<h2 style="background:' + protocol.color + '">' + escapeHtml(protocol.name) + ': ' +
    escapeHtml(role.label) + '</h2>' +
    '<div class="role-grid">' +
    ROLE_SECTIONS.map(section =>
      '<div class="role-section' + (section.wide ? ' wide' : '') + (section.frames ? ' frames' : '') + '">' +
      '<h3 style="color:' + protocol.color + '">' + section.title + '</h3><ul>' +
      role[section.key].map(line => '<li>' + escapeHtml(line) + '</li>').join('') +
      '</ul></div>').join('') +
    '</div>';
}

function setMode(mode) {
  const exploring = mode === 'explore';
  document.getElementById('explore-view').hidden = !exploring;
  document.getElementById('role-view').hidden = exploring;
  const exploreButton = document.getElementById('explore-mode-btn');
  const roleButton = document.getElementById('role-mode-btn');
  exploreButton.classList.toggle('active', exploring);
  roleButton.classList.toggle('active', !exploring);
  exploreButton.setAttribute('aria-pressed', String(exploring));
  roleButton.setAttribute('aria-pressed', String(!exploring));

  if (exploring) {
    // the network container had no size while hidden
    network.redraw();
    fitNetwork();
  } else if (selection.kind === 'protocol') {
    // carry the protocol being explored into Role Play
    document.getElementById('protocol-select').value = selection.id;
    fillRoleSelect();
    renderRoleCard();
  }
}

// ===========================================
// START
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
  buildNetwork();
  renderPanel();
  document.getElementById('panel').addEventListener('click', handlePanelClick);

  const protocolSelect = document.getElementById('protocol-select');
  protocolSelect.innerHTML = PROTOCOLS.map(protocol =>
    '<option value="' + protocol.id + '">' + escapeHtml(protocol.name) + '</option>').join('');
  fillRoleSelect();
  renderRoleCard();
  protocolSelect.addEventListener('change', () => { fillRoleSelect(); renderRoleCard(); });
  document.getElementById('role-select').addEventListener('change', renderRoleCard);

  document.getElementById('explore-mode-btn').addEventListener('click', () => setMode('explore'));
  document.getElementById('role-mode-btn').addEventListener('click', () => setMode('role'));

  window.addEventListener('resize', fitNetwork);
});
