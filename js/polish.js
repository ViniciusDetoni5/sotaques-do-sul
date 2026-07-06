/* =====================================================================
   SOTAQUES DO SUL — polish.js
   Camada de acabamento visual (não altera a lógica principal):
   preloader, numeração de capítulos, scroll-spy, tilt 3D,
   poeira de luz no hero, capitulares.
   ===================================================================== */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const deck = $("#deck");

  /* ---- PRELOADER ---- */
  (function preloader() {
    const pl = $("#preloader");
    if (!pl) return;
    const hide = () => {
      pl.classList.add("done");
      setTimeout(() => pl.remove(), 1100);
    };
    // some quando tudo carrega (ou após um tempo mínimo elegante)
    let ready = false;
    const go = () => { if (ready) hide(); };
    setTimeout(() => { ready = true; go(); }, 1900);
    window.addEventListener("load", () => { ready = true; go(); });
  })();

  /* ---- NUMERAÇÃO DE CAPÍTULOS (estilo museu/editorial) ---- */
  (function chapters() {
    const skip = new Set(["hero", "final", "jornada"]);
    const scenes = $$(".scene").filter(s => !skip.has(s.id));
    scenes.forEach((sc, i) => {
      const tag = document.createElement("div");
      tag.className = "chapter-tag";
      tag.innerHTML = `<span class="ch-num">${String(i + 1).padStart(2, "0")}</span><span class="ch-line"></span><span class="ch-name">${sc.dataset.title || ""}</span>`;
      sc.appendChild(tag);
    });
  })();

  /* ---- SCROLL-SPY: destaca a seção atual no menu ---- */
  (function scrollSpy() {
    const scenes = $$(".scene");
    const items = $$("#navList li");
    if (!items.length) return;
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (!e.isIntersecting) return;
        const idx = scenes.indexOf(e.target);
        items.forEach((li, k) => li.classList.toggle("current", k === idx));
      });
    }, { root: deck, threshold: 0.55 });
    scenes.forEach(s => io.observe(s));
  })();

  /* ---- TILT 3D suave em cartões de destaque ---- */
  (function tilt() {
    const sel = ".concept-card, .tl-card, .stat-panel, .prej-card, .root-card, .mini-stat, .cmp-col";
    const MAX = 6;
    $$(sel).forEach(card => {
      card.style.transformStyle = "preserve-3d";
      card.addEventListener("pointermove", e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${(-py * MAX).toFixed(2)}deg) rotateY(${(px * MAX).toFixed(2)}deg) translateY(-4px)`;
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });
  })();

  /* ---- POEIRA DE LUZ no hero (atmosfera) ---- */
  (function heroDust() {
    const hero = $("#hero");
    if (!hero) return;
    const layer = document.createElement("div");
    layer.className = "dust-layer"; layer.setAttribute("aria-hidden", "true");
    const N = 34;
    let html = "";
    for (let i = 0; i < N; i++) {
      const size = (1 + Math.random() * 3).toFixed(1);
      const left = (Math.random() * 100).toFixed(1);
      const delay = (Math.random() * 12).toFixed(1);
      const dur = (10 + Math.random() * 14).toFixed(1);
      const drift = (Math.random() * 40 - 20).toFixed(0);
      html += `<span style="--s:${size}px;--l:${left}%;--d:${delay}s;--t:${dur}s;--x:${drift}px"></span>`;
    }
    layer.innerHTML = html;
    hero.appendChild(layer);
  })();

  /* ---- CAPITULAR na frase de premissa ---- */
  (function dropcap() {
    const p = $("#premissa .lede");
    if (p) p.classList.add("has-dropcap");
  })();
})();
