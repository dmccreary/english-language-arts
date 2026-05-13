// Teen Media Consumption — Average Daily Hours
// CANVAS_HEIGHT: 530
// Data: Common Sense Media Census 2023; American Time Use Survey (BLS) 2022
// Gender breakdown: Common Sense Media 2023, pp. 18–24

document.addEventListener('DOMContentLoaded', function () {

    // ── Data ─────────────────────────────────────────────────────────────────
    // Hours per day, entertainment screen time (excludes school / homework)
    // Source: Common Sense Media "The Common Sense Census: Media Use by
    //   Tweens and Teens, 2023" (released Oct 2023).
    // Reading estimate cross-referenced with American Time Use Survey 2022.
    const labels = [
        'Short-Form Video (TikTok / Reels)',
        'Streaming Video (YouTube / Netflix)',
        'Traditional Broadcast / Cable TV',
        'Social Media (browsing & posting)',
        'Music & Podcasts',
        'Video Games',
        'General Online Browsing',
        'Reading (books & print)'
    ];

    const datasets = {
        all:   [1.5, 2.0, 1.2, 1.1, 1.0, 1.2, 0.7, 0.5],
        boys:  [1.2, 2.1, 1.2, 0.9, 0.9, 2.1, 0.8, 0.4],
        girls: [1.9, 1.9, 1.2, 1.3, 1.1, 0.3, 0.7, 0.5]
    };

    // One distinct color per media category
    const barColors = [
        'rgba(229,  57,  53, 0.85)',   // TikTok/Reels   — red
        'rgba(255, 112,  67, 0.85)',   // Streaming       — deep orange
        'rgba( 66, 165, 245, 0.85)',   // Traditional TV  — blue
        'rgba( 38, 166, 154, 0.85)',   // Social Media    — teal
        'rgba(255, 167,  38, 0.85)',   // Music/Podcasts  — amber
        'rgba(171,  71, 188, 0.85)',   // Video Games     — purple
        'rgba( 41, 182, 246, 0.85)',   // Browsing        — light blue
        'rgba( 92, 107, 192, 0.85)'    // Reading         — indigo
    ];

    // ── Layout ────────────────────────────────────────────────────────────────
    const main = document.querySelector('main');
    main.innerHTML = `
        <div id="sim-wrap">
            <div id="sim-header">
                <div id="sim-title">Teen Media Consumption — Average Daily Hours</div>
                <div id="sim-subtitle">
                    US high school students (grades 9–12) &nbsp;·&nbsp;
                    Source: Common Sense Media 2023
                </div>
            </div>
            <div id="btn-row">
                <button class="grp-btn active" data-group="all">All Teens</button>
                <button class="grp-btn" data-group="boys">Boys</button>
                <button class="grp-btn" data-group="girls">Girls</button>
            </div>
            <div id="chart-box">
                <canvas id="mediaChart"></canvas>
            </div>
            <div id="sim-note">Hours per day &nbsp;(entertainment screen time; excludes school &amp; homework)</div>
        </div>
    `;

    // ── Styles ────────────────────────────────────────────────────────────────
    const css = document.createElement('style');
    css.textContent = `
        body { margin: 0; padding: 0; background: #fff; font-family: Arial, Helvetica, sans-serif; }
        #sim-wrap { max-width: 740px; margin: 0 auto; padding: 12px 16px 8px; box-sizing: border-box; }
        #sim-header { margin-bottom: 8px; }
        #sim-title  { font-size: 1.05em; font-weight: bold; color: #1a237e; }
        #sim-subtitle { font-size: 0.78em; color: #555; margin-top: 2px; }
        #btn-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
        .grp-btn {
            padding: 5px 18px; border: 2px solid #3f51b5; border-radius: 20px;
            background: #fff; color: #3f51b5; cursor: pointer;
            font-size: 0.84em; font-weight: 600; transition: background 0.18s, color 0.18s;
        }
        .grp-btn:hover { background: #e8eaf6; }
        .grp-btn.active { background: #3f51b5; color: #fff; }
        #chart-box { position: relative; height: 360px; }
        #sim-note { font-size: 0.70em; color: #888; text-align: right; margin-top: 4px; }
    `;
    document.head.appendChild(css);

    // ── Chart ─────────────────────────────────────────────────────────────────
    let chart = null;

    function buildChart(group) {
        const ctx = document.getElementById('mediaChart').getContext('2d');
        if (chart) { chart.destroy(); }

        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Hours per day',
                    data: datasets[group],
                    backgroundColor: barColors,
                    borderColor: barColors.map(c => c.replace('0.85', '1')),
                    borderWidth: 1,
                    borderRadius: 4,
                    borderSkipped: false
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: ctx => {
                                const h = ctx.parsed.x;
                                const m = Math.round((h % 1) * 60);
                                const hInt = Math.floor(h);
                                return m === 0
                                    ? ` ${hInt} hr / day`
                                    : ` ${hInt} hr ${m} min / day`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 2.5,
                        title: {
                            display: true,
                            text: 'Hours Per Day',
                            font: { size: 11 },
                            color: '#444'
                        },
                        ticks: {
                            font: { size: 10 },
                            callback: v => v + ' hr'
                        },
                        grid: { color: 'rgba(0,0,0,0.07)' }
                    },
                    y: {
                        ticks: { font: { size: 11 }, color: '#333' },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // ── Toggle buttons ────────────────────────────────────────────────────────
    document.querySelectorAll('.grp-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.grp-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            buildChart(this.dataset.group);
        });
    });

    buildChart('all');
});
