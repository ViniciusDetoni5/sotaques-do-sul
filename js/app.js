/* =====================================================================
   SOTAQUES DO SUL — app.js  (edição com mapa geográfico real)
   ===================================================================== */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const deck = $("#deck");
  const IMG = "assets/img/";

  // injeta coordenadas geográficas nas regiões
  REGIOES.forEach(r => { const c = REG_COORDS[r.id]; if (c) { r.lat = c.lat; r.lng = c.lng; r.img = c.img; } });

  /* =====================================================================
     PROJEÇÃO DO MAPA (GeoJSON real -> SVG)
     ===================================================================== */
  const VBW = 1000, VBH = 1200, PAD = 22;
  let PROJ = null;
  function normPolys(geom) {
    // retorna array de polígonos; cada polígono = array de anéis; cada anel = array de [lng,lat]
    if (geom.type === "Polygon") return [geom.coordinates];
    if (geom.type === "MultiPolygon") return geom.coordinates;
    return [];
  }
  function buildProjection() {
    let minLng = 1e9, maxLng = -1e9, minLat = 1e9, maxLat = -1e9;
    Object.values(window.GEO_SUL).forEach(st => {
      normPolys(st).forEach(poly => poly.forEach(ring => ring.forEach(([lng, lat]) => {
        if (lng < minLng) minLng = lng; if (lng > maxLng) maxLng = lng;
        if (lat < minLat) minLat = lat; if (lat > maxLat) maxLat = lat;
      })));
    });
    const meanLat = (minLat + maxLat) / 2;
    const kx = Math.cos(meanLat * Math.PI / 180);
    const geoW = (maxLng - minLng) * kx, geoH = (maxLat - minLat);
    const scale = Math.min((VBW - 2 * PAD) / geoW, (VBH - 2 * PAD) / geoH);
    const drawW = geoW * scale, drawH = geoH * scale;
    const offX = (VBW - drawW) / 2, offY = (VBH - drawH) / 2;
    PROJ = {
      pt(lng, lat) {
        const x = offX + (lng - minLng) * kx * scale;
        const y = offY + (maxLat - lat) * scale;
        return [x, y];
      }
    };
  }
  function statePath(st) {
    let d = "";
    normPolys(st).forEach(poly => poly.forEach(ring => {
      ring.forEach(([lng, lat], i) => {
        const [x, y] = PROJ.pt(lng, lat);
        d += (i === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1);
      });
      d += "Z";
    }));
    return d;
  }
  buildProjection();

  const STATE_META = {
    PR: { fill: "#d7b98d", label: "PARANÁ" },
    SC: { fill: "#cbb488", label: "SANTA CATARINA" },
    RS: { fill: "#c1a87d", label: "RIO GRANDE DO SUL" }
  };
  function buildMapSVG(withMarkers) {
    let s = `<svg viewBox="0 0 ${VBW} ${VBH}" role="img" aria-label="Mapa da Região Sul do Brasil">
      <defs>
        <filter id="mapshadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#5a3d28" flood-opacity="0.45"/>
        </filter>
        <linearGradient id="landsheen" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stop-color="#ecd8ac"/><stop offset="100%" stop-color="#b89b6f"/>
        </linearGradient>
      </defs>`;
    // rosa dos ventos
    s += `<g transform="translate(920,1120)" opacity=".5"><circle r="30" fill="none" stroke="#7a5836" stroke-width="1.5"/><path d="M0,-26 L7,0 L0,26 L-7,0 Z" fill="#b3592f"/><path d="M-26,0 L0,7 L26,0 L0,-7 Z" fill="#7a5836"/><text y="-34" text-anchor="middle" font-size="15" fill="#7a5836" font-family="Inter" font-weight="700">N</text></g>`;
    // estados
    const order = ["PR", "SC", "RS"];
    order.forEach(k => {
      const st = window.GEO_SUL[k], m = STATE_META[k];
      s += `<path class="state-path" data-st="${k}" d="${statePath(st)}" fill="${m.fill}" stroke="#6f4e30" stroke-width="2.5" stroke-linejoin="round" filter="url(#mapshadow)"/>`;
    });
    // labels dos estados (centro aproximado por bbox do estado)
    order.forEach(k => {
      const c = stateCentroid(window.GEO_SUL[k]);
      s += `<text class="state-label" x="${c[0]}" y="${c[1]}" text-anchor="middle" font-size="24">${STATE_META[k].label}</text>`;
    });
    // marcadores
    if (withMarkers) {
      REGIOES.forEach(r => {
        if (r.lat == null) return;
        const [x, y] = PROJ.pt(r.lng, r.lat);
        s += `<g class="region-marker" data-id="${r.id}" transform="translate(${x.toFixed(1)},${y.toFixed(1)})" tabindex="0" role="button" aria-label="${r.nome}">
          <circle class="halo" r="8" fill="${r.cor}" opacity=".55"/>
          <circle class="pin" r="7" fill="${r.cor}" stroke="#fff" stroke-width="2.4"/>
          <text class="region-mlabel" x="0" y="-14" text-anchor="middle">${r.nome}</text>
        </g>`;
      });
    }
    s += `</svg>`;
    return s;
  }
  function stateCentroid(st) {
    let sx = 0, sy = 0, n = 0;
    normPolys(st).forEach(poly => poly[0].forEach(([lng, lat]) => { const [x, y] = PROJ.pt(lng, lat); sx += x; sy += y; n++; }));
    return [sx / n, sy / n];
  }

  /* =====================================================================
     ÁUDIO — somente gravações reais (sem voz sintética / IA)
     Só reproduz o que existir em assets/audio/ e estiver listado em
     AUDIO_MANIFEST. Sem gravação, não há reprodução (nunca usa IA).
     ===================================================================== */
  const AUDIO_DIR = "assets/audio/";
  // Existe gravação real para esta chave ("reg:<id>")?
  function hasAudioKey(key) { return !!(window.AUDIO_MANIFEST && window.AUDIO_MANIFEST[key]); }
  // Existe gravação real (áudio de verdade) para esta região?
  function hasRealAudio(id) { return hasAudioKey("reg:" + id); }
  // Toca a gravação real, se houver. Sem arquivo, não faz nada (nunca IA).
  // opts.onEnd: terminou de tocar · opts.onError: falhou ao carregar/tocar.
  function playAudio(key, _fallbackText, opts = {}) {
    const fail = opts.onError || opts.onEnd;
    const file = window.AUDIO_MANIFEST && window.AUDIO_MANIFEST[key];
    if (!file) { fail && fail(); return null; }
    const a = new Audio(AUDIO_DIR + file);
    a.onended = () => opts.onEnd && opts.onEnd();
    a.onerror = () => fail && fail();
    const pr = a.play();
    if (pr && pr.catch) pr.catch(() => fail && fail());
    return a;
  }

  /* =====================================================================
     NAV / PROGRESSO / REVEAL / PARALLAX
     ===================================================================== */
  const scenes = $$(".scene");
  const navList = $("#navList");
  scenes.forEach(sc => {
    const li = document.createElement("li");
    li.textContent = sc.dataset.title || sc.id;
    li.addEventListener("click", () => { goto(sc.id); closeNav(); });
    navList.appendChild(li);
  });
  const navMenu = $("#navMenu");
  const closeNav = () => navMenu.classList.remove("open");
  $("#navToggle").addEventListener("click", () => navMenu.classList.toggle("open"));
  navMenu.addEventListener("click", e => { if (e.target === navMenu) closeNav(); });
  function goto(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); }
  $$("[data-goto]").forEach(b => b.addEventListener("click", () => goto(b.dataset.goto)));

  const progressBar = $("#progressBar");
  deck.addEventListener("scroll", () => {
    const max = deck.scrollHeight - deck.clientHeight;
    progressBar.style.width = (deck.scrollTop / max * 100) + "%";
  }, { passive: true });

  const revIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }), { root: deck, threshold: 0.15 });
  $$(".reveal,.reveal-up").forEach(el => revIO.observe(el));
  const countIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, t = +el.dataset.count; let n = 0; const step = Math.max(1, Math.round(t / 26));
    const iv = setInterval(() => { n += step; if (n >= t) { n = t; clearInterval(iv); } el.textContent = n; }, 45);
    countIO.unobserve(el);
  }), { root: deck, threshold: 0.5 });
  $$("[data-count]").forEach(el => countIO.observe(el));

  /* =====================================================================
     SLIDES CONCEITUAIS
     ===================================================================== */
  $("#conceptGrid").innerHTML = CONCEITOS.map((c, i) => `
    <div class="concept-card reveal-up" style="--cc:${c.cor};--i:${i}">
      <div class="cc-emoji">${c.emoji}</div>
      <h3>${c.titulo}</h3>
      <div class="cc-sub">${c.sub}</div>
      <p>${c.txt}</p>
      <div class="cc-ex">${c.ex}</div>
    </div>`).join("");
  $$("#conceptGrid .reveal-up").forEach(el => revIO.observe(el));

  /* =====================================================================
     SLIDES — A JORNADA DOS SOTAQUES
     ===================================================================== */
  (function slides() {
    const track = $("#slidesTrack"), dotsEl = $("#slideDots");
    track.innerHTML = SLIDES.map((s, i) => `
      <article class="slide" style="--sc:${s.cor}">
        <div class="slide-bg" style="background-image:url('${IMG}${s.img}')"></div>
        <div class="slide-shade"></div>
        <div class="slide-body">
          <p class="slide-kicker">${s.kicker}</p>
          <h2 class="slide-title">${s.titulo}</h2>
          <p class="slide-sub">${s.sub}</p>
          <ul class="slide-points">${s.pontos.map(p => `<li><span class="sp-ic">${p.ic}</span><span>${p.txt}</span></li>`).join("")}</ul>
          <span class="slide-chip">palavra-chave · <b>${s.chip}</b></span>
        </div>
        <span class="slide-num">${String(i + 1).padStart(2, "0")} / ${String(SLIDES.length).padStart(2, "0")}</span>
      </article>`).join("");
    dotsEl.innerHTML = SLIDES.map((_, i) => `<button class="slide-dot" data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join("");
    const dots = $$(".slide-dot", dotsEl), slideEls = $$(".slide", track);
    let cur = 0;
    function go(i) {
      cur = (i + SLIDES.length) % SLIDES.length;
      track.style.transform = `translateX(-${cur * 100}%)`;
      dots.forEach((d, k) => d.classList.toggle("on", k === cur));
      slideEls.forEach((el, k) => el.classList.toggle("active", k === cur));
      $("#slideProgress").style.width = ((cur + 1) / SLIDES.length * 100) + "%";
    }
    $("#slideNext").addEventListener("click", () => go(cur + 1));
    $("#slidePrev").addEventListener("click", () => go(cur - 1));
    dots.forEach(d => d.addEventListener("click", () => go(+d.dataset.i)));
    let inView = false;
    new IntersectionObserver(es => es.forEach(e => inView = e.isIntersecting), { root: deck, threshold: 0.5 }).observe($("#jornada"));
    window.addEventListener("keydown", e => {
      if (!inView) return;
      if (e.key === "ArrowRight") { e.preventDefault(); go(cur + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(cur - 1); }
    });
    go(0);
  })();

  /* =====================================================================
     MAPA + PAINEL
     ===================================================================== */
  $("#mapHolder").innerHTML = buildMapSVG(true);
  const panel = $("#regionPanel"), panelBody = $("#panelBody");
  let panelWords = [];

  function openRegion(id) {
    const r = REGIOES.find(x => x.id === id); if (!r) return;
    $$(".region-marker").forEach(m => m.classList.toggle("active", m.dataset.id === id));
    $$(".state-path").forEach(p => p.classList.add("dim"));
    let idx = 0; const words = r.frase.split(/(\s+)/);
    const phraseHTML = words.map(w => {
      if (/^\s+$/.test(w)) return w;
      const start = r.frase.indexOf(w, idx); idx = start + w.length;
      return `<span class="wrd" data-s="${start}" data-e="${start + w.length}">${w}</span>`;
    }).join("");
    panelBody.innerHTML = `
      <div class="panel-hero" style="background-image:url('${IMG}${r.img}')"><span class="ph-city">${r.cidade} · ${r.influencia}</span></div>
      <div class="panel-inner">
        <h3 class="panel-name">${r.nome}</h3>
        <p class="panel-state">${r.estado}</p>
        ${hasRealAudio(r.id)
          ? `<button class="panel-audio" id="panelAudio"><span class="pa-ic">▶</span> Ouvir o sotaque</button>`
          : `<p class="panel-audio-missing">🎙️ Gravação real ainda não disponível para esta região.</p>`}
        <p class="panel-phrase" id="panelPhrase">${phraseHTML}</p>
        <div class="panel-block"><h4>📖 Descrição</h4><p>${r.descricao}</p></div>
        <div class="panel-block"><h4>🌱 Origem</h4><p>${r.origem}</p></div>
        <div class="panel-block"><h4>🗣️ Fonética</h4><p>${r.fonetica}</p></div>
        <div class="panel-block"><h4>⛵ Imigração</h4><p>${r.imigracao}</p></div>
        <div class="panel-block"><h4>💬 Palavras típicas</h4><ul class="word-list">${r.palavras.map(p => `<li><b>${p.w}</b> ${p.m}</li>`).join("")}</ul></div>
        <div class="panel-block"><h4>✨ Expressões</h4><div class="chip-row">${r.expressoes.map(e => `<span class="chip">${e}</span>`).join("")}</div></div>
        <div class="panel-block"><h4>💡 Curiosidades</h4><ul class="curio-list">${r.curiosidades.map(c => `<li>${c}</li>`).join("")}</ul></div>
      </div>`;
    panel.classList.add("open"); panel.setAttribute("aria-hidden", "false");
    panelWords = $$("#panelPhrase .wrd");
    const audioBtn = $("#panelAudio");
    if (audioBtn) audioBtn.addEventListener("click", e => playPhrase(r, e.currentTarget));
  }
  let panelAudioEl = null;
  function setPanelBtn(btn, ic, txt) { btn.innerHTML = `<span class="pa-ic">${ic}</span> ${txt}`; }
  function playPhrase(r, btn) {
    if (btn.classList.contains("playing")) {
      if (panelAudioEl) { panelAudioEl.pause(); panelAudioEl = null; }
      btn.classList.remove("playing"); setPanelBtn(btn, "▶", "Ouvir o sotaque");
      return;
    }
    btn.classList.remove("failed"); btn.classList.add("playing"); setPanelBtn(btn, "❚❚", "Tocando…");
    const done = () => { btn.classList.remove("playing"); setPanelBtn(btn, "▶", "Ouvir o sotaque"); };
    const fail = () => {
      btn.classList.remove("playing"); btn.classList.add("failed"); setPanelBtn(btn, "⚠️", "Áudio indisponível");
      setTimeout(() => { if (!btn.classList.contains("playing")) { btn.classList.remove("failed"); setPanelBtn(btn, "▶", "Ouvir o sotaque"); } }, 2800);
    };
    panelAudioEl = playAudio("reg:" + r.id, r.frase, { onEnd: done, onError: fail });
  }
  function closePanel() {
    panel.classList.remove("open"); panel.setAttribute("aria-hidden", "true");
    $$(".state-path").forEach(p => p.classList.remove("dim"));
    $$(".region-marker").forEach(m => m.classList.remove("active"));
    if (panelAudioEl) { panelAudioEl.pause(); panelAudioEl = null; }
  }
  $("#panelClose").addEventListener("click", closePanel);
  $("#mapHolder").addEventListener("click", e => { const m = e.target.closest(".region-marker"); if (m) openRegion(m.dataset.id); });
  $("#mapHolder").addEventListener("keydown", e => { const m = e.target.closest(".region-marker"); if (m && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openRegion(m.dataset.id); } });

  /* =====================================================================
     COMPARADOR
     ===================================================================== */
  const cmpA = $("#cmpA"), cmpB = $("#cmpB"), cmpGrid = $("#cmpGrid");
  REGIOES.forEach(r => { cmpA.add(new Option(r.nome, r.id)); cmpB.add(new Option(r.nome, r.id)); });
  cmpA.value = "litoral-sc"; cmpB.value = "serra-gaucha";
  function renderCompare() {
    const a = REGIOES.find(r => r.id === cmpA.value), b = REGIOES.find(r => r.id === cmpB.value);
    const rows = [["Influência", "influencia"], ["Imigração", "imigracao"], ["Fonética / ritmo", "fonetica"], ["Frase exemplo", "frase"]];
    cmpGrid.innerHTML = [a, b].map(r => `
      <div class="cmp-col" style="border-top:5px solid ${r.cor}">
        <h3>${r.nome}</h3><p class="cmp-city">${r.cidade}</p>
        ${rows.map(([l, k]) => `<div class="cmp-row diff"><div class="cmp-key">${l}</div><div class="cmp-val">${r[k]}</div></div>`).join("")}
        <div class="cmp-row"><div class="cmp-key">Palavras</div><div class="cmp-val">${r.palavras.map(p => p.w).join(" · ")}</div></div>
        ${hasRealAudio(r.id)
          ? `<button class="btn-ghost cmp-play" data-id="${r.id}" style="margin-top:1rem;color:var(--parch);border-color:rgba(255,255,255,.3)">▶ Ouvir</button>`
          : `<span class="cmp-noaudio" style="display:inline-block;margin-top:1rem;font-size:.8rem;opacity:.7">🎙️ Sem gravação real</span>`}
      </div>`).join("");
    $$(".cmp-play", cmpGrid).forEach(btn => btn.addEventListener("click", () => { const r = REGIOES.find(x => x.id === btn.dataset.id); playAudio("reg:" + r.id, r.frase); }));
  }
  cmpA.addEventListener("change", renderCompare); cmpB.addEventListener("change", renderCompare); renderCompare();

  /* =====================================================================
     RECEITA — agora é o jogo "A Receita do Dialeto Sulista" (ver games.js)
     ===================================================================== */

  /* =====================================================================
     TIMELINE
     ===================================================================== */
  $("#tlTrack").innerHTML = TIMELINE.map((t, i) => `
    <div class="tl-item"><span class="tl-node"></span>
      <div class="tl-card">
        <div class="tl-photo" style="background-image:url('${IMG}${TIMELINE_IMG[i] || "bg-pampa.jpg"}')"><span class="tl-emoji">${t.emoji}</span></div>
        <div class="tl-body">
          <div class="tl-ano">${t.ano}</div><div class="tl-titulo">${t.titulo}</div>
          <div class="tl-txt">${t.txt}</div>
        </div></div></div>`).join("");

  /* =====================================================================
     RAÍZES DA FALA — galeria de povos (substitui a árvore)
     ===================================================================== */
  (function renderRoots() {
    const gallery = $("#rootsGallery"), detail = $("#rootsDetail");
    gallery.innerHTML = POVOS.map((p, i) => `
      <button class="root-card" data-id="${p.id}" style="--rc:${p.cor}">
        <div class="rc-photo" style="background-image:url('${IMG}${p.img}')"></div>
        <div class="rc-tint"></div>
        <div class="rc-face">
          <span class="rc-emoji">${p.emoji}</span>
          <span class="rc-name">${p.nome}</span>
          <span class="rc-count">${p.palavras.length} palavras</span>
        </div>
      </button>`).join("");

    function select(id) {
      const p = POVOS.find(x => x.id === id);
      $$(".root-card", gallery).forEach(c => c.classList.toggle("on", c.dataset.id === id));
      detail.style.setProperty("--rc", p.cor);
      detail.innerHTML = `
        <div class="rd-head"><span class="rd-emoji">${p.emoji}</span>
          <div><h3 class="rd-name">${p.nome}</h3><p class="rd-resumo">${p.resumo}</p></div></div>
        <div class="rd-words">${p.palavras.map(w => `<button class="rd-chip" data-w="${escAttr(w.w)}" data-o="${escAttr(w.o)}">${w.w}</button>`).join("")}</div>
        <p class="rd-ety" id="rdEty">👆 Toque numa palavra para ver a origem.</p>`;
      detail.setAttribute("aria-hidden", "false");
      $$(".rd-chip", detail).forEach(ch => ch.addEventListener("click", () => {
        $$(".rd-chip", detail).forEach(c => c.classList.remove("on"));
        ch.classList.add("on");
        $("#rdEty").innerHTML = `<b style="color:${p.cor}">${ch.dataset.w}</b> — ${ch.dataset.o}`;
      }));
    }
    gallery.addEventListener("click", e => { const c = e.target.closest(".root-card"); if (c) select(c.dataset.id); });
    select(POVOS[0].id);
  })();

  /* =====================================================================
     DICIONÁRIO
     ===================================================================== */
  const dictGrid = $("#dictGrid"), dictSearch = $("#dictSearch");
  function renderDict(q = "") {
    q = q.trim().toLowerCase();
    const list = DICIONARIO.filter(d => !q || [d.p, d.reg, d.ori, d.sig].some(f => f.toLowerCase().includes(q)));
    if (!list.length) { dictGrid.innerHTML = `<p class="dict-empty">Nenhuma palavra encontrada para “${q}”.</p>`; return; }
    dictGrid.innerHTML = list.map(d => `
      <div class="dict-card">
        <div class="dict-word">${d.p}</div>
        <div class="dict-meta"><span class="dict-tag">${d.reg}</span><span class="dict-tag ori">${d.ori}</span></div>
        <div class="dict-sig">${d.sig}</div><div class="dict-ex">“${d.ex}”</div>
      </div>`).join("");
  }
  dictSearch.addEventListener("input", () => renderDict(dictSearch.value)); renderDict();

  /* =====================================================================
     ESTATÍSTICAS
     ===================================================================== */
  const STATS_ORIGEM = [
    { l: "Indígena (tupi-guarani)", v: 22, c: "#4e7a4a" }, { l: "Portuguesa / açoriana", v: 34, c: "#2e6fa3" },
    { l: "Italiana", v: 16, c: "#b8443e" }, { l: "Alemã", v: 14, c: "#d9a441" },
    { l: "Africana", v: 10, c: "#6b4a2e" }, { l: "Espanhola / platina", v: 4, c: "#7b2b30" }];
  const STATS_POP = [{ l: "Paraná", v: 11.4, c: "#e8853b" }, { l: "Rio Grande do Sul", v: 10.9, c: "#4a78b8" }, { l: "Santa Catarina", v: 7.6, c: "#3aa6a0" }];
  const STATS_LING = [
    { l: "Hunsrückisch (alemão do Sul)", v: 1000, nota: "~1 milhão", c: "#d9a441" },
    { l: "Talian (vêneto brasileiro)", v: 500, nota: "~500 mil", c: "#b8443e" },
    { l: "Pomerano", v: 300, nota: "~300 mil", c: "#7b5aa6" }];
  const STATS_TILES = [
    { n: 3, suf: "", l: "estados" }, { n: 30, suf: " mi", l: "habitantes*" },
    { n: 7, suf: "", l: "povos formadores" }, { n: 13, suf: "", l: "regiões de fala" },
    { n: 2, suf: "", l: "dialetos patrimônio" }];
  const popMax = Math.max(...STATS_POP.map(p => p.v)), lingMax = Math.max(...STATS_LING.map(p => p.v));
  $("#statsGrid").innerHTML = `
    <div class="stat-tiles">
      ${STATS_TILES.map(t => `<div class="stat-tile"><span class="st-num" data-c="${t.n}" data-suf="${t.suf}">0</span><span class="st-lab">${t.l}</span></div>`).join("")}
    </div>
    <div class="stat-panel"><h3>Origem estimada do vocabulário regional</h3>
      <div class="donut-wrap"><div class="donut" id="donut"><span>léxico</span></div>
      <ul class="donut-legend">${STATS_ORIGEM.map(o => `<li><i style="background:${o.c}"></i>${o.l} · ${o.v}%</li>`).join("")}</ul></div></div>
    <div class="stat-panel"><h3>População por estado <span class="h3-sub">IBGE · aprox.</span></h3>
      ${STATS_POP.map(f => `<div class="bar-row"><div class="bar-top"><span>${f.l}</span><b>${f.v} mi</b></div><div class="bar-track"><div class="bar-fill" data-w="${(f.v / popMax * 100).toFixed(0)}" style="background:${f.c}"></div></div></div>`).join("")}
      <p class="stat-cap">≈ 30 milhões de sul-brasileiros, cada um com seu sotaque.</p></div>
    <div class="stat-panel"><h3>Peso das imigrações no falar <span class="h3-sub">estimativa</span></h3>
      ${[["Portuguesa / Açoriana", 90, "#2e6fa3"], ["Italiana", 70, "#b8443e"], ["Alemã", 65, "#d9a441"], ["Africana", 55, "#6b4a2e"], ["Eslava (PR)", 40, "#7b5aa6"]].map(([l, v, c]) => `<div class="bar-row"><div class="bar-top"><span>${l}</span><b>${v}%</b></div><div class="bar-track"><div class="bar-fill" data-w="${v}" style="background:${c}"></div></div></div>`).join("")}</div>
    <div class="stat-panel"><h3>Línguas de imigração ainda faladas <span class="h3-sub">estimativa</span></h3>
      ${STATS_LING.map(f => `<div class="bar-row"><div class="bar-top"><span>${f.l}</span><b>${f.nota}</b></div><div class="bar-track"><div class="bar-fill" data-w="${(f.v / lingMax * 100).toFixed(0)}" style="background:${f.c}"></div></div></div>`).join("")}
      <p class="stat-cap">Talian e Hunsrückisch são reconhecidos como referência cultural do Brasil.</p></div>
    <p class="stats-note">* Números são estimativas didáticas. População: IBGE (Censo 2022, arredondado). A “origem do vocabulário” é uma ilustração aproximada, não um dado exato.</p>`;
  const statsIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    $$(".bar-fill").forEach(b => b.style.width = b.dataset.w + "%");
    let acc = 0; const segs = STATS_ORIGEM.map(o => { const f = acc; acc += o.v; return `${o.c} ${f}% ${acc}%`; });
    $("#donut").style.background = `conic-gradient(${segs.join(",")})`;
    $$(".st-num").forEach(el => {
      const target = +el.dataset.c, suf = el.dataset.suf || ""; let n = 0;
      const step = Math.max(1, Math.round(target / 24));
      const iv = setInterval(() => { n += step; if (n >= target) { n = target; clearInterval(iv); } el.textContent = n + suf; }, 45);
    });
    statsIO.disconnect();
  }), { root: deck, threshold: 0.35 });
  statsIO.observe($("#estatisticas"));

  /* =====================================================================
     FINALE
     ===================================================================== */
  const finaleMap = $("#finaleMap"); finaleMap.innerHTML = buildMapSVG(false);
  let filled = false;
  $("#finaleFill").addEventListener("click", () => {
    if (filled) return; filled = true;
    const svg = finaleMap.querySelector("svg"), ns = "http://www.w3.org/2000/svg";
    const bank = [...DICIONARIO.map(d => d.p), ...RECEITA.flatMap(r => r.palavras)];
    const seeds = [];
    REGIOES.forEach(r => { if (r.lat == null) return; const [x, y] = PROJ.pt(r.lng, r.lat); for (let k = 0; k < 4; k++) seeds.push([x + (Math.random() - .5) * 70, y + (Math.random() - .5) * 70]); });
    seeds.forEach((pt, i) => {
      const t = document.createElementNS(ns, "text");
      t.setAttribute("class", "finale-fill-word"); t.setAttribute("x", pt[0]); t.setAttribute("y", pt[1]);
      t.setAttribute("text-anchor", "middle"); t.setAttribute("font-size", 13 + Math.random() * 11);
      t.textContent = bank[i % bank.length]; svg.appendChild(t);
      setTimeout(() => { t.style.transition = "opacity 1s"; t.style.opacity = ".92"; }, i * 80);
    });
  });

  /* =====================================================================
     CURIOSIDADES
     ===================================================================== */
  const curioToast = $("#curioToast"), curioText = $("#curioText"); let ci = 0;
  function showCurio() { curioText.textContent = CURIOSIDADES[ci++ % CURIOSIDADES.length]; curioToast.classList.add("show"); setTimeout(() => curioToast.classList.remove("show"), 8000); }
  setTimeout(() => { showCurio(); setInterval(showCurio, 24000); }, 7000);
  curioToast.addEventListener("click", () => curioToast.classList.remove("show"));

  /* =====================================================================
     SOM AMBIENTE
     ===================================================================== */
  const soundBtn = $("#soundToggle"); let actx = null, on = false, nodes = [];
  soundBtn.addEventListener("click", () => on ? stopAmb() : startAmb());
  function startAmb() {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const c = actx, bs = 2 * c.sampleRate, buf = c.createBuffer(1, bs, c.sampleRate), d = buf.getChannelData(0);
      let last = 0; for (let i = 0; i < bs; i++) { const w = Math.random() * 2 - 1; d[i] = (last + .02 * w) / 1.02; last = d[i]; d[i] *= 3.2; }
      const noise = c.createBufferSource(); noise.buffer = buf; noise.loop = true;
      const filt = c.createBiquadFilter(); filt.type = "lowpass"; filt.frequency.value = 480;
      const g = c.createGain(); g.gain.value = 0;
      const lfo = c.createOscillator(); lfo.frequency.value = .08; const lg = c.createGain(); lg.gain.value = .04;
      lfo.connect(lg); lg.connect(g.gain); noise.connect(filt); filt.connect(g); g.connect(c.destination);
      noise.start(); lfo.start(); g.gain.linearRampToValueAtTime(.12, c.currentTime + 2);
      nodes = [noise, lfo, g]; on = true; soundBtn.classList.add("active"); soundBtn.querySelector(".ic").textContent = "🔉";
    } catch (e) {}
  }
  function stopAmb() {
    on = false; soundBtn.classList.remove("active"); soundBtn.querySelector(".ic").textContent = "🔊";
    try { nodes[2].gain.linearRampToValueAtTime(0, actx.currentTime + .8); setTimeout(() => nodes.forEach(n => { try { n.stop && n.stop(); } catch (e) {} }), 900); } catch (e) {}
  }

  /* ---- utils ---- */
  function nomeReg(id) { const r = REGIOES.find(x => x.id === id); return r ? r.nome : id; }
  function escAttr(s) { return String(s).replace(/"/g, "&quot;"); }
  function shade(hex, p) { const n = parseInt(hex.slice(1), 16); let r = (n >> 16) + Math.round(2.55 * p), g = ((n >> 8) & 255) + Math.round(2.55 * p), b = (n & 255) + Math.round(2.55 * p); r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b)); return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); }

  window.SDS = { playAudio, hasRealAudio, REGIOES, goto };
})();
