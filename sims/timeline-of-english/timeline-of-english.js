// A Brief History of the English Language — Interactive Timeline
// CANVAS_HEIGHT: 800

document.addEventListener('DOMContentLoaded', function () {

    const main = document.querySelector('main');

    // ── Inject styles ─────────────────────────────────────────────────────────
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        * { box-sizing: border-box; }
        body { background: #f8f5f0; }
        #sim-wrapper {
            font-family: Georgia, 'Times New Roman', serif;
            max-width: 960px;
            margin: 0 auto;
            padding: 8px 12px 12px;
        }
        #sim-wrapper h1 {
            font-size: 1.25em;
            text-align: center;
            color: #2c1a0e;
            margin: 4px 0 2px;
        }
        .subtitle {
            text-align: center;
            color: #666;
            font-size: 0.82em;
            font-style: italic;
            margin: 0 0 8px;
        }
        #controls {
            display: flex;
            gap: 6px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 6px;
        }
        #controls button {
            padding: 4px 11px;
            font-size: 0.78em;
            border: 1px solid #aaa;
            border-radius: 4px;
            background: #fff;
            cursor: pointer;
            font-family: Arial, sans-serif;
        }
        #controls button:hover { background: #e8e0d5; }
        #timeline {
            height: 280px;
            border: 1px solid #ccc;
            border-radius: 6px;
            background: #fff;
        }
        .vis-timeline { overflow: visible !important; }
        .vis-panel.vis-center { overflow: visible !important; }
        .vis-content { overflow: visible !important; }
        .vis-item .vis-item-overflow { overflow: visible !important; }
        .vis-item.vis-range {
            border-radius: 4px;
            border-width: 0 !important;
            cursor: pointer;
            min-width: fit-content !important;
            overflow: visible !important;
        }
        .vis-item .vis-item-content {
            color: #fff;
            font-size: 0.75em;
            font-weight: bold;
            font-family: Arial, sans-serif;
            white-space: nowrap !important;
            padding: 3px 7px !important;
        }
        .vis-item .vis-item-overflow { overflow: visible !important; }
        .vis-item.vis-selected { outline: 3px solid rgba(255,255,255,0.8); }
        .vis-tooltip {
            background: #2c3e50 !important;
            color: #fff !important;
            padding: 8px 12px !important;
            border-radius: 6px !important;
            font-size: 0.78em !important;
            max-width: 240px !important;
            white-space: normal !important;
            word-wrap: break-word !important;
            font-family: Arial, sans-serif;
            line-height: 1.4 !important;
        }
        #click-hint {
            text-align: center;
            color: #888;
            font-size: 0.78em;
            font-style: italic;
            margin: 4px 0 6px;
            font-family: Arial, sans-serif;
        }
        #infobox {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.07);
            min-height: 120px;
        }
        #infobox.empty {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: #aaa;
            font-style: italic;
            font-size: 0.9em;
            font-family: Arial, sans-serif;
            min-height: 140px;
        }
        .info-header {
            padding: 10px 16px 8px;
            color: #fff;
        }
        .info-header h2 {
            margin: 0 0 2px;
            font-size: 1.05em;
        }
        .info-header .dates {
            font-size: 0.8em;
            opacity: 0.9;
            font-family: Arial, sans-serif;
        }
        .info-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 12px 16px 10px;
        }
        .info-section h3 {
            font-size: 0.75em;
            margin: 0 0 4px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-family: Arial, sans-serif;
        }
        .info-section p {
            margin: 0;
            font-size: 0.85em;
            line-height: 1.55;
            color: #333;
        }
        .vocab-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            margin: 4px 0;
        }
        .chip {
            background: #f0ebe5;
            border: 1px solid #d0c8c0;
            border-radius: 12px;
            padding: 2px 8px;
            font-size: 0.75em;
            font-style: italic;
            color: #4a3828;
            font-family: Arial, sans-serif;
        }
        .spelling-note {
            grid-column: 1 / -1;
            background: #fff8e1;
            border-left: 4px solid #f9a825;
            padding: 7px 11px;
            font-size: 0.84em;
            color: #444;
            border-radius: 0 4px 4px 0;
            line-height: 1.5;
        }
        .spelling-note strong { font-family: Arial, sans-serif; }
        .quote-block {
            grid-column: 1 / -1;
            background: #f3f0ff;
            border-left: 4px solid #7c4dff;
            padding: 7px 11px;
            font-style: italic;
            font-size: 0.82em;
            color: #333;
            border-radius: 0 4px 4px 0;
            line-height: 1.5;
        }
    `;
    document.head.appendChild(styleEl);

    // ── Period data ───────────────────────────────────────────────────────────
    const periods = [
        {
            id: 1,
            label: 'Old English',
            start: new Date(450, 0, 1),
            end:   new Date(1100, 0, 1),
            color: '#6B3A2A',
            title: 'Old English (Anglo-Saxon)',
            dates: '~450–1100 CE',
            influences: 'Germanic tribes: Angles, Saxons, Jutes + Latin (Church)',
            vocab: ['hwæt', 'cyning', 'mann', 'hus', 'water', 'lufu', 'folc', 'God'],
            vocabNote: 'Germanic core words that survive today: <i>house</i>, <i>water</i>, <i>love</i>, <i>folk</i>.',
            description: 'Germanic tribes — Angles, Saxons, and Jutes — migrated to Britain (~450 CE) and their dialects fused into Old English. It was a highly inflected language with gendered nouns, much like modern German. Latin vocabulary entered through the Christian Church.',
            spellingNote: 'Old English spelled words almost exactly as they sounded. Early inconsistency crept in when scribes from different regions wrote different dialects — the first seed of English\'s spelling diversity.',
            quote: '"Hwæt! We Gardena in geardagum…" — Beowulf, ~700–1000 CE\n(Modern: "Listen! We have heard of the glory of the Spear-Danes…")',
        },
        {
            id: 2,
            label: 'Viking Influence',
            start: new Date(793, 0, 1),
            end:   new Date(1066, 0, 1),
            color: '#1565C0',
            title: 'Viking Age — Old Norse Influence',
            dates: '793–1066 CE',
            influences: 'Old Norse (Scandinavian Vikings)',
            vocab: ['sky', 'egg', 'knife', 'window', 'they', 'them', 'their', 'get', 'give', 'take'],
            vocabNote: 'Norse gave English its third-person plural pronouns — <i>they/them/their</i> replaced Old English <i>hie/him/hiera</i>.',
            description: 'Norse raiders and settlers flooded northeast England. Because Old Norse and Old English were related, words merged naturally. This is why English has many pairs: <i>shirt</i> (English) / <i>skirt</i> (Norse); <i>whole</i> (English) / <i>hale</i> (Norse).',
            spellingNote: 'Norse words brought "sk-" clusters (<i>sky</i>, <i>skill</i>, <i>skin</i>) which break the older English "sc-" pattern. English now had two spelling systems coexisting — a preview of things to come.',
            quote: null,
        },
        {
            id: 3,
            label: 'Norman Conquest',
            start: new Date(1066, 0, 1),
            end:   new Date(1200, 0, 1),
            color: '#B71C1C',
            title: 'Norman Conquest — French Flood',
            dates: '1066–~1200 CE',
            influences: 'Norman French + continued Latin (Church & law)',
            vocab: ['beef', 'pork', 'mutton', 'justice', 'court', 'noble', 'royal', 'castle', 'fashion', 'feast'],
            vocabNote: 'English peasants raised <i>cows</i>, but Norman lords ate <i>beef</i>; English tended <i>pigs</i>, Norman lords ate <i>pork</i>. Two words for everything.',
            description: 'William the Conqueror\'s 1066 victory made French the language of power for ~200 years. The upper class spoke French; commoners spoke English. This is the single biggest reason English has so many synonyms — one word Germanic, one word French.',
            spellingNote: 'French scribes introduced silent letters: the "gh" in <i>knight</i>, <i>night</i>, and <i>thought</i> once represented a real guttural sound (like German <i>acht</i>). French scribes wrote "gh" but the sound was fading — leaving us with unpronounced letters.',
            quote: '"The more English, the more uncultured." — attitude of the Norman ruling class, ~1100 CE',
        },
        {
            id: 4,
            label: 'Middle English',
            start: new Date(1100, 0, 1),
            end:   new Date(1485, 0, 1),
            color: '#2E6B4E',
            title: 'Middle English',
            dates: '~1100–1485 CE',
            influences: 'Old English + Norman French + Norse + Latin',
            vocab: ['faire', 'whan', 'shoures', 'soote', 'herte', 'knyght', 'vertu', 'thyng'],
            vocabNote: 'No standardized spelling: a scribe might write <i>þe</i>, <i>ye</i>, or <i>the</i> — all meaning "the." Words shifted wildly between manuscripts.',
            description: 'As Norman rule faded, English rebounded but was now massively blended with French. Chaucer\'s <i>Canterbury Tales</i> (~1390) is the great text of this era. By 1485 English had three source languages competing: Germanic, French, and Latin.',
            spellingNote: 'No standardized spelling existed. A word might be spelled six different ways in six manuscripts. Latin-derived words (<i>receive</i>, <i>believe</i>) kept Latin spelling conventions while Germanic words kept theirs — cementing today\'s chaotic mix.',
            quote: '"Whan that Aprill with his shoures soote / The droghte of March hath perced to the roote…"\n— Chaucer, Canterbury Tales, ~1390',
        },
        {
            id: 5,
            label: 'Great Vowel Shift',
            start: new Date(1400, 0, 1),
            end:   new Date(1700, 0, 1),
            color: '#E65100',
            title: 'The Great Vowel Shift',
            dates: '~1400–1700 CE',
            influences: 'Internal change — no outside language; printing press locks spellings',
            vocab: ['bite', 'time', 'house', 'name', 'feet', 'goose', 'loud', 'night'],
            vocabNote: '<i>bite</i> was said like "beet"; <i>house</i> like "hooze"; <i>name</i> like "nah-meh" — then pronunciation shifted but spelling was already frozen by the press!',
            description: 'Over ~300 years, all English long vowels shifted dramatically upward in the mouth. The printing press (Caxton, 1476) was fixing spellings at exactly this time — so spellings reflect pre-shift pronunciations while mouths moved on.',
            spellingNote: 'THIS is the primary reason English spelling is "inconsistent." Words like <i>bite</i>, <i>kite</i>, <i>write</i>, and <i>site</i> preserve pre-shift spellings. The silent "gh" in <i>night</i> and <i>right</i> once represented a real guttural sound that vanished during the shift. Caxton\'s press immortalized the old forms.',
            quote: null,
        },
        {
            id: 6,
            label: 'Early Modern English',
            start: new Date(1470, 0, 1),
            end:   new Date(1660, 0, 1),
            color: '#4A3F9C',
            title: 'Early Modern English',
            dates: '1470–1660 CE',
            influences: 'Latin + Greek (Renaissance) + Printing press (1476)',
            vocab: ['calculate', 'encyclopedia', 'democracy', 'hypothesis', 'skeleton', 'atmosphere', 'catastrophe'],
            vocabNote: 'Renaissance scholars borrowed Latin/Greek words wholesale — with original spellings. <i>Psychology</i> keeps Greek <i>psyche</i>, giving us the silent <i>p</i>.',
            description: 'The printing press standardized spelling based on London dialect — but many printers were Dutch and introduced Dutch spellings. Renaissance scholars added thousands of Latinate words, sometimes inserting silent letters to show Latin origins (<i>debt</i> → Latin <i>debitum</i>; Middle English had no <i>b</i>).',
            spellingNote: 'The artificially inserted <i>b</i> in <i>debt</i> and <i>doubt</i> shows Renaissance scholars "correcting" English toward Latin — adding letters never pronounced in English. This explains many modern silent letters and is a frequent source of student confusion in chapters 12–13.',
            quote: null,
        },
        {
            id: 7,
            label: 'Shakespeare',
            start: new Date(1590, 0, 1),
            end:   new Date(1625, 0, 1),
            color: '#7B1FA2',
            title: 'Shakespeare & the King James Bible',
            dates: '1590–1625 CE',
            influences: 'Shakespeare (1564–1616) · KJB translators (1604–1611)',
            vocab: ['bedroom', 'gossip', 'lonely', 'generous', 'obscene', 'majestic', 'swagger', 'rant', 'hint'],
            vocabNote: 'Shakespeare invented 1,700+ words still used today — <i>bedroom</i>, <i>lonely</i>, <i>obscene</i>, <i>swagger</i>.',
            description: 'The King James Bible (1611), translated by 47 scholars, standardized English phrasing for millions of readers. Archaic forms like <i>thee/thou</i> (singular "you") and <i>ye/you</i> (plural "you") — once grammatically distinct — collapsed into the single "you" used today.',
            spellingNote: 'Shakespeare spelled his own name several different ways — proof that "correct spelling" was still flexible around 1600. The KJB\'s massive reach locked in many phrases and spellings as authoritative, influencing what teachers would later call "correct English."',
            quote: '"All the world\'s a stage, and all the men and women merely players."\n— Shakespeare, As You Like It, 1599',
        },
        {
            id: 8,
            label: 'Standardization Era',
            start: new Date(1700, 0, 1),
            end:   new Date(1820, 0, 1),
            color: '#00695C',
            title: 'The Age of Standardization',
            dates: '1700–1820 CE',
            influences: 'Samuel Johnson\'s Dictionary (1755) + prescriptive grammar books',
            vocab: ['colour', 'honour', 'centre', 'theatre', 'programme', 'analyse', 'catalogue'],
            vocabNote: 'Johnson kept French-origin spellings: <i>colour</i>, <i>honour</i>, <i>centre</i> — these became "correct" British English, still used throughout the Commonwealth.',
            description: 'Samuel Johnson\'s <i>Dictionary of the English Language</i> (1755) — written almost single-handedly — defined ~40,000 words and fixed many spellings. Grammar books proliferated, often inventing rules ("never end a sentence with a preposition") borrowed inappropriately from Latin grammar.',
            spellingNote: 'Johnson\'s choice to preserve French spellings (<i>colour</i>, <i>honour</i>) is why British and American English differ today. His dictionary also created a lasting divide between "correct" educated English and everyday usage — the tension still felt in grammar class (chapters 12–13).',
            quote: '"Lexicographer: A writer of dictionaries; a harmless drudge."\n— Samuel Johnson, Dictionary, 1755 (his self-deprecating own definition)',
        },
        {
            id: 9,
            label: 'American English',
            start: new Date(1780, 0, 1),
            end:   new Date(1900, 0, 1),
            color: '#7B5E00',
            title: 'American English Diverges',
            dates: '1780–1900 CE',
            influences: 'Noah Webster\'s spelling reforms + westward expansion + immigrant languages',
            vocab: ['color', 'honor', 'center', 'theater', 'program', 'analyze', 'catalog'],
            vocabNote: 'Webster deliberately simplified British spellings: <i>colour → color</i>, <i>centre → center</i>, <i>gaol → jail</i>. American English is often MORE phonetically regular.',
            description: 'Noah Webster believed American English should be independent from British authority. His <i>American Dictionary</i> (1828) simplified spellings to be more phonetic. He also added American words: <i>skunk</i>, <i>squash</i>, <i>chowder</i>. His Spelling Book (1783) taught three generations of Americans.',
            spellingNote: 'The American/British spelling split directly affects chapters 12–13 on conventions: spell-check flags <i>colour</i> as wrong in American English but correct in British. There is no universal "correct" spelling — audience and context always matter.',
            quote: '"Language is the expression of ideas… a living instrument."\n— Noah Webster, American Dictionary, 1828 preface',
        },
        {
            id: 10,
            label: 'Modern English',
            start: new Date(1900, 0, 1),
            end:   new Date(2025, 0, 1),
            color: '#2C5F5F',
            title: 'Modern & Global English',
            dates: '1900–present',
            influences: 'Technology + Global borrowing: Japanese, Arabic, Hindi, Spanish, Swahili…',
            vocab: ['internet', 'blog', 'emoji', 'selfie', 'sushi', 'safari', 'yoga', 'avatar', 'kindergarten', 'pizza'],
            vocabNote: 'English has ~1 million words — more than any other language. It borrows freely, keeping loanwords\' original spellings.',
            description: 'English is now a world language with 1.5 billion speakers. Technology especially creates new vocabulary (<i>spam</i>, <i>app</i>, <i>viral</i>). Different Englishes — Indian, Nigerian, Australian, Singaporean — are valid dialects with their own conventions. No central authority governs "correct" English.',
            spellingNote: 'English keeps accumulating spelling patterns from every language it borrows from: <i>sushi</i> uses Japanese phonetics, <i>kindergarten</i> keeps German spelling, <i>pizza</i> keeps Italian spelling. English is a mosaic — its greatest strength and its biggest spelling challenge for writers.',
            quote: '"English lurks in dark alleys, beats up other languages, and goes through their pockets for loose vocabulary."\n— James Nicoll (widely attributed)',
        },
    ];

    // ── Build DOM ─────────────────────────────────────────────────────────────
    main.innerHTML = `
        <div id="sim-wrapper">
            <h1>A Brief History of the English Language</h1>
            <p class="subtitle">Click any era bar to explore how English evolved — and why spelling is "inconsistent"</p>
            <div id="controls">
                <button id="btn-pan-left">◀ Pan Left</button>
                <button id="btn-zoom-in">+ Zoom In</button>
                <button id="btn-zoom-out">− Zoom Out</button>
                <button id="btn-pan-right">Pan Right ▶</button>
                <button id="btn-fit">⟷ Fit All</button>
            </div>
            <div id="timeline"></div>
            <p id="click-hint">Drag to pan · Click a colored era bar for details below</p>
            <div id="infobox" class="empty">
                <span>Click any era above to explore its history, vocabulary, and impact on English spelling.</span>
            </div>
        </div>
    `;

    // ── vis-timeline items ────────────────────────────────────────────────────
    const items = new vis.DataSet(periods.map(p => ({
        id: p.id,
        content: p.label,
        start: p.start,
        end:   p.end,
        style: `background-color:${p.color}; border-color:${p.color};`,
        title: `<b>${p.title}</b><br>${p.dates}`,
        type: 'range',
    })));

    const container = document.getElementById('timeline');

    const allStarts = periods.map(p => p.start.getTime());
    const allEnds   = periods.map(p => p.end.getTime());
    const minTime   = Math.min(...allStarts);
    const maxTime   = Math.max(...allEnds);
    const padLeft   = (maxTime - minTime) * 0.05;
    const padRight  = (maxTime - minTime) * 0.18;

    const options = {
        width: '100%',
        height: '280px',
        orientation: 'top',
        stack: true,
        selectable: true,
        showCurrentTime: false,
        moveable: true,
        zoomable: false,
        zoomMin: 1000 * 60 * 60 * 24 * 365 * 10,
        zoomMax: 1000 * 60 * 60 * 24 * 365 * 2000,
        min: new Date(380, 0, 1),
        max: new Date(2400, 0, 1),
        margin: { item: { horizontal: 20, vertical: 5 }, axis: 20 },
        align: 'center',
        tooltip: { followMouse: true },
    };

    const timeline = new vis.Timeline(container, items, options);
    timeline.setWindow(new Date(minTime - padLeft), new Date(maxTime + padRight), { animation: false });

    // ── Infobox on select ─────────────────────────────────────────────────────
    timeline.on('select', function (props) {
        if (props.items.length === 0) return;
        const p = periods.find(x => x.id === props.items[0]);
        if (!p) return;

        const chips = p.vocab.map(w => `<span class="chip">${w}</span>`).join('');
        const quote = p.quote
            ? `<div class="quote-block">${p.quote.replace(/\n/g, '<br>')}</div>`
            : '';

        const box = document.getElementById('infobox');
        box.classList.remove('empty');
        box.innerHTML = `
            <div class="info-header" style="background:${p.color};">
                <h2>${p.title}</h2>
                <span class="dates">${p.dates}</span>
            </div>
            <div class="info-body">
                <div class="info-section">
                    <h3>Language Influences</h3>
                    <p>${p.influences}</p>
                </div>
                <div class="info-section">
                    <h3>What Happened</h3>
                    <p>${p.description}</p>
                </div>
                <div class="info-section">
                    <h3>Vocabulary Examples</h3>
                    <div class="vocab-chips">${chips}</div>
                    <p style="margin-top:5px;">${p.vocabNote}</p>
                </div>
                <div class="spelling-note">
                    <strong>📚 Spelling &amp; Convention Note</strong><br>${p.spellingNote}
                </div>
                ${quote}
            </div>
        `;
    });

    // ── Scroll-hijack fix ─────────────────────────────────────────────────────
    container.addEventListener('wheel', function (e) {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            const w = timeline.getWindow();
            const shift = (e.deltaX / container.clientWidth) * (w.end - w.start);
            timeline.setWindow(
                new Date(w.start.valueOf() + shift),
                new Date(w.end.valueOf() + shift),
                { animation: false }
            );
        } else {
            e.stopImmediatePropagation();
        }
    }, true);

    // ── Navigation buttons ────────────────────────────────────────────────────
    document.getElementById('btn-pan-left').addEventListener('click', () => {
        const w = timeline.getWindow();
        const s = (w.end - w.start) * 0.3;
        timeline.setWindow(new Date(w.start - s), new Date(w.end - s));
    });
    document.getElementById('btn-pan-right').addEventListener('click', () => {
        const w = timeline.getWindow();
        const s = (w.end - w.start) * 0.3;
        timeline.setWindow(new Date(w.start + s), new Date(w.end + s));
    });
    document.getElementById('btn-zoom-in').addEventListener('click', () => {
        const w = timeline.getWindow();
        const mid  = (w.start.valueOf() + w.end.valueOf()) / 2;
        const half = (w.end - w.start) * 0.25;
        timeline.setWindow(new Date(mid - half), new Date(mid + half));
    });
    document.getElementById('btn-zoom-out').addEventListener('click', () => {
        const w = timeline.getWindow();
        const mid  = (w.start.valueOf() + w.end.valueOf()) / 2;
        const half = (w.end - w.start);
        timeline.setWindow(new Date(mid - half), new Date(mid + half));
    });
    document.getElementById('btn-fit').addEventListener('click', () => {
        timeline.setWindow(new Date(minTime - padLeft), new Date(maxTime + padRight), { animation: true });
    });
});
