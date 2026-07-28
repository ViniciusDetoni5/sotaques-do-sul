/* =====================================================================
   SOTAQUES DO SUL — games.js
   Descubra a Região · Quiz · Jogo das Expressões · Caça ao Preconceito
   · Tribunal da Língua
   ===================================================================== */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const { playAudio, hasRealAudio, REGIOES } = window.SDS;
  // Só as regiões com gravação real entram nos jogos de escuta (sem voz de IA).
  const REGIOES_AUDIO = REGIOES.filter(r => hasRealAudio(r.id));

  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function sample(arr, n) { return shuffle(arr).slice(0, n); }

  /* =====================================================================
     JOGO: DESCUBRA A REGIÃO
     ===================================================================== */
  const guessEl = $("#guessGame");
  let gScore = 0, gRound = 0, gStreak = 0, gQueue = [], gTotal = 0, gAudioEl = null;

  // cada gravação real aparece UMA única vez por partida
  function startGuess() {
    gQueue = shuffle(REGIOES_AUDIO.slice());
    gTotal = gQueue.length; gScore = 0; gRound = 0; gStreak = 0;
    renderGuess();
  }

  function renderGuess() {
    if (gAudioEl) { try { gAudioEl.pause(); } catch (e) {} gAudioEl = null; }
    if (gRound >= gTotal) return finishGuess();
    const correct = gQueue[gRound];
    // opções apenas entre as regiões que têm gravação real
    const opts = shuffle([correct, ...sample(REGIOES_AUDIO.filter(r => r.id !== correct.id), 3)]);
    guessEl.innerHTML = `
      <div class="guess-top">
        <span class="guess-badge">🎧 ${gRound + 1}/${gTotal}</span>
        <span class="guess-badge">🏅 ${gScore}</span>
        <span class="guess-badge">🔥 ${gStreak}</span>
      </div>
      <button class="guess-audio" id="guessPlay" aria-label="Ouvir o sotaque">
        <span class="ga-ic">▶</span>
        <span class="ga-wave">${"<i></i>".repeat(6)}</span>
      </button>
      <p class="guess-hint">Clique para <b>ouvir a gravação real</b> e adivinhe de onde vem esse sotaque.</p>
      <div class="guess-opts">
        ${opts.map(o => `<button class="guess-opt" data-id="${o.id}">${o.nome}</button>`).join("")}
      </div>
      <p class="guess-fb" id="gFb"></p>
      <div class="guess-nav" id="gNav"></div>`;
    const playBtn = $("#guessPlay");
    playBtn.addEventListener("click", () => {
      if (gAudioEl) { try { gAudioEl.pause(); gAudioEl.currentTime = 0; } catch (e) {} }
      playBtn.classList.add("playing");
      gAudioEl = playAudio("reg:" + correct.id, correct.frase, { onEnd: () => playBtn.classList.remove("playing") });
    });
    $$(".guess-opt", guessEl).forEach(btn => btn.addEventListener("click", () => onGuess(btn, correct)));
  }

  function onGuess(btn, correct) {
    if (gAudioEl) { try { gAudioEl.pause(); } catch (e) {} }
    $$(".guess-opt", guessEl).forEach(b => b.disabled = true);
    const playBtn = $("#guessPlay"); if (playBtn) playBtn.classList.remove("playing");
    const fb = $("#gFb");
    if (btn.dataset.id === correct.id) {
      btn.classList.add("correct"); gScore += 10; gStreak++;
      fb.innerHTML = `✅ Isso! Era <b>${correct.nome}</b>. <span class="gf-phrase">“${correct.frase}”</span>`;
    } else {
      btn.classList.add("wrong"); gStreak = 0;
      $$(".guess-opt", guessEl).find(b => b.dataset.id === correct.id).classList.add("correct");
      fb.innerHTML = `❌ Era <b>${correct.nome}</b>. <span class="gf-phrase">“${correct.frase}”</span>`;
    }
    gRound++;
    const last = gRound >= gTotal;
    $("#gNav").innerHTML = `<button class="btn-primary" id="gNext">${last ? "Ver resultado 🏁" : "Próxima rodada →"}</button>`;
    $("#gNext").addEventListener("click", renderGuess);
  }

  function finishGuess() {
    const acertos = Math.round(gScore / 10);
    const msg = acertos === gTotal ? "Ouvido de ouro! 👑" : acertos >= gTotal * 0.6 ? "Mandou bem! 👏" : "Bora treinar o ouvido! 🎧";
    guessEl.innerHTML = `
      <div class="guess-final">
        <div class="guess-final-emoji">🎧</div>
        <div class="guess-final-score">${acertos}/${gTotal}</div>
        <p class="guess-final-msg">${msg}</p>
        <div class="guess-nav"><button class="btn-primary" id="gAgain">Jogar de novo</button></div>
      </div>`;
    $("#gAgain").addEventListener("click", startGuess);
  }
  observeOnce("#descubra", startGuess);

  /* (removido a pedido) QUIZ "Mito, Verdade ou Gíria". */

  /* =====================================================================
     JOGO DAS EXPRESSÕES — memória (par expressão × significado)
     ===================================================================== */
  const board = $("#matchBoard"), matchStatus = $("#matchStatus");
  function startMatch() {
    const cards = [];
    EXPRESSOES.forEach((e, i) => {
      cards.push({ pair: i, kind: "exp", text: e.exp, reg: e.reg });
      cards.push({ pair: i, kind: "sig", text: e.sig, reg: e.reg });
    });
    const deck = shuffle(cards);
    let flipped = [], matched = 0, lock = false, moves = 0;
    matchStatus.textContent = "Encontre os 6 pares.";
    board.innerHTML = deck.map((c, i) => `
      <div class="match-tile" data-i="${i}" data-pair="${c.pair}" data-kind="${c.kind}">
        <div class="match-face match-front">?</div>
        <div class="match-face match-back">${c.text}<small>${c.reg}</small></div>
      </div>`).join("");
    $$(".match-tile", board).forEach(tile => tile.addEventListener("click", () => {
      if (lock || tile.classList.contains("flip") || tile.classList.contains("matched")) return;
      tile.classList.add("flip"); flipped.push(tile);
      if (flipped.length === 2) {
        lock = true; moves++;
        const [a, b] = flipped;
        if (a.dataset.pair === b.dataset.pair && a.dataset.kind !== b.dataset.kind) {
          setTimeout(() => {
            a.classList.add("matched"); b.classList.add("matched");
            flipped = []; lock = false; matched++;
            matchStatus.textContent = matched === EXPRESSOES.length ? `🎉 Completo em ${moves} jogadas!` : `${matched}/${EXPRESSOES.length} pares · ${moves} jogadas`;
          }, 500);
        } else {
          setTimeout(() => { a.classList.remove("flip"); b.classList.remove("flip"); flipped = []; lock = false; }, 900);
        }
      }
    }));
  }
  observeOnce("#expressoes", startMatch);

  /* (removido a pedido) A BATALHA DA FEIRA. */

  /* =====================================================================
     JOGO: DIRETOR DE CINEMA (escolha a legenda da cena — com GIF real)
     ===================================================================== */
  (function cinemaJogo() {
    const host = $("#cinemaGame");
    if (!host) return;
    let queue = [], score = 0, round = 0, total = 0;
    function start() { queue = shuffle(CINEMA_CENAS.slice()); total = queue.length; score = 0; round = 0; render(); }
    function intro() {
      host.innerHTML = `
        <div class="cine-intro">
          <div class="cine-clap">🎬</div>
          <p class="cine-lead">Você é o <b>dublador</b>! Assista à cena e escolha a <b>legenda</b> que combina com o que acontece. Todas soam do Sul — então preste atenção na cena!</p>
          <button class="btn-primary" id="cineStart">🎬 Ação!</button>
        </div>`;
      $("#cineStart").addEventListener("click", start);
    }
    function render() {
      if (round >= total) return finish();
      const c = queue[round];
      const opts = shuffle(c.opcoes.map((o, i) => ({ o, ok: i === c.correta })));
      // c.gif pode ser um link (http...) ou um arquivo local em assets/gif/
      const gifSrc = /^https?:/.test(c.gif) ? c.gif : "assets/gif/" + c.gif;
      host.innerHTML = `
        <div class="cine-stage">
          <div class="cine-hud"><span>🎞️ Cena ${round + 1}/${total}</span><span>🏆 ${score}</span></div>
          <div class="cine-screen">
            <img class="cine-gif" src="${gifSrc}" alt="" referrerpolicy="no-referrer">
            <div class="cine-scene ${c.anim}" hidden>${c.emoji}</div>
            <div class="cine-sub" id="cineSub"></div>
          </div>
          <p class="cine-ask">Qual legenda combina com a cena?</p>
          <div class="cine-opts" id="cineOpts">
            ${opts.map((x, i) => `<button class="cine-opt" data-i="${i}" data-ok="${x.ok}">${x.o}</button>`).join("")}
          </div>
          <div class="cine-fb" id="cineFb"></div>
          <div class="cine-nav" id="cineNav"></div>
        </div>`;
      // usa o GIF real; se faltar o arquivo, cai na animação de emoji
      const gif = host.querySelector(".cine-gif"), scene = host.querySelector(".cine-scene");
      if (gif) gif.addEventListener("error", () => { gif.hidden = true; if (scene) scene.hidden = false; });
      $$(".cine-opt", host).forEach(b => b.addEventListener("click", () => answer(b, c)));
    }
    function answer(btn, c) {
      $$(".cine-opt", host).forEach(b => { b.disabled = true; if (b.dataset.ok === "true") b.classList.add("correct"); });
      const ok = btn.dataset.ok === "true";
      if (!ok) btn.classList.add("wrong");
      const correctText = c.opcoes[c.correta];
      const sub = $("#cineSub"); sub.textContent = `“${correctText}”`; sub.classList.add("show");
      $("#cineFb").innerHTML = `${ok ? "🎬 <b>Corta! Ficou perfeito.</b>" : `😅 A que encaixa é: <b>${correctText}</b>`} <span class="cine-dica">💡 ${c.dica}</span>`;
      if (ok) score += 10;
      round++;
      const last = round >= total;
      $("#cineNav").innerHTML = `<button class="btn-primary" id="cineNext">${last ? "Ver resultado 🏁" : "Próxima cena 🎬"}</button>`;
      $("#cineNext").addEventListener("click", render);
    }
    function finish() {
      const acertos = Math.round(score / 10);
      const msg = acertos === total ? "Diretor premiado! 🏆" : acertos >= total * 0.6 ? "Bom olho de cinema! 🎬" : "Reveja as cenas! 🎞️";
      host.innerHTML = `
        <div class="cine-final">
          <div class="cine-clap">🎬</div>
          <div class="cine-final-score">${acertos}/${total}</div>
          <p class="cine-final-msg">${msg}</p>
          <div class="cine-nav"><button class="btn-primary" id="cineAgain">Jogar de novo</button></div>
        </div>`;
      $("#cineAgain").addEventListener("click", start);
    }
    observeOnce("#cinema", intro);
  })();

  /* =====================================================================
     JOGO: RODA DE CHIMARRÃO (batata-quente digital)
     ===================================================================== */
  (function chimaJogo() {
    const host = $("#chimaGame");
    if (!host) return;
    let timerId = null, endAt = 0, paused = false, pausedLeft = 0, running = false, rodada = 0, desafio = "";
    const now = () => (window.performance && performance.now) ? performance.now() : 0;

    function intro() {
      clearTimeout(timerId); running = false; paused = false;
      host.innerHTML = `
        <div class="chima-wrap">
          <p class="chima-lead">Batata-quente com a <b>cuia de chimarrão</b> 🧉</p>
          <div class="chima-cuia hot" id="chimaCuia">
            <div class="chima-steam"><span></span><span></span><span></span></div>
            <div class="chima-cup" role="img" aria-label="cuia de chimarrão"></div>
          </div>
          <p class="chima-status" id="chimaStatus">Clique em <b>Iniciar</b> e comecem a passar a cuia.</p>
          <div class="chima-desafio" id="chimaDesafio" aria-hidden="true"></div>
          <div class="chima-btns">
            <button class="btn-primary" id="chimaStart">▶ Iniciar rodada</button>
            <button class="btn-ghost" id="chimaPause" disabled>⏸ Pausar</button>
            <button class="btn-ghost" id="chimaReset">↺ Reiniciar</button>
          </div>
        </div>`;
      $("#chimaStart").addEventListener("click", startRound);
      $("#chimaPause").addEventListener("click", togglePause);
      $("#chimaReset").addEventListener("click", intro);
    }
    function startRound() {
      if (running) return;
      running = true; paused = false; rodada++;
      const dur = 7000 + Math.floor(Math.random() * 13000); // 7–20s, escondido (sem mostrar o tempo)
      endAt = now() + dur;
      desafio = CHIMARRAO_DESAFIOS[Math.floor(Math.random() * CHIMARRAO_DESAFIOS.length)];
      const cuia = $("#chimaCuia"); cuia.classList.remove("cold"); cuia.classList.add("hot");
      $("#chimaStart").disabled = true;
      const pb = $("#chimaPause"); pb.disabled = false; pb.textContent = "⏸ Pausar";
      $("#chimaStatus").innerHTML = "🔥 A cuia tá passando... segura não! 👀";
      const des = $("#chimaDesafio"); des.classList.remove("show", "big"); des.setAttribute("aria-hidden", "true"); des.textContent = "";
      timerId = setTimeout(cool, dur);
    }
    function togglePause() {
      if (!running) return;
      paused = !paused;
      const pb = $("#chimaPause");
      if (paused) { pausedLeft = Math.max(0, endAt - now()); clearTimeout(timerId); pb.textContent = "▶ Continuar"; $("#chimaStatus").innerHTML = "⏸ Pausado."; }
      else { endAt = now() + pausedLeft; pb.textContent = "⏸ Pausar"; $("#chimaStatus").innerHTML = "🔥 A cuia tá passando... segura não! 👀"; timerId = setTimeout(cool, pausedLeft); }
    }
    function cool() {
      running = false; clearTimeout(timerId);
      const cuia = $("#chimaCuia"); if (cuia) { cuia.classList.remove("hot"); cuia.classList.add("cold"); }
      const sb = $("#chimaStart"); sb.disabled = false; sb.textContent = "▶ Nova rodada";
      $("#chimaPause").disabled = true;
      $("#chimaStatus").innerHTML = "🥶 <b>ESFRIOU!</b> Quem está com a cuia responde:";
      const des = $("#chimaDesafio"); des.textContent = desafio; des.classList.add("show", "big"); des.setAttribute("aria-hidden", "false");
    }
    observeOnce("#chimarrao", intro);
  })();

  /* =====================================================================
     JOGO: TELEFONE SEM FIO REGIONAL (mímica/desenho em dupla)
     ===================================================================== */
  (function mimicaJogo() {
    const host = $("#mimicaGame");
    if (!host) return;
    let bag = [], current = null, rodada = 0;
    function nextFrase() { if (!bag.length) bag = shuffle(MIMICA_FRASES.map((_, i) => i)); return MIMICA_FRASES[bag.shift()]; }
    function intro() {
      host.innerHTML = `
        <div class="mim-intro">
          <div class="mim-emoji">🎭✏️</div>
          <p class="mim-lead">Telefone sem fio à moda sulista! O <b>Jogador 1</b> vê uma frase secreta cheia de regionalismos e tem que <b>desenhar ou fazer mímica</b> — sem falar! — pra dupla adivinhar. Depois, revelem e confiram.</p>
          <button class="btn-primary" id="mimStart">Começar 🎭</button>
        </div>`;
      $("#mimStart").addEventListener("click", round);
    }
    function round() {
      current = nextFrase(); rodada++;
      host.innerHTML = `
        <div class="mim-stage">
          <div class="mim-hud"><span>🎭 Rodada ${rodada}</span></div>
          <p class="mim-role">🙈 <b>Quem vai adivinhar, olhe pro outro lado!</b> Só o desenhista vê a frase.</p>
          <div class="mim-card">
            <button class="btn-primary mim-peek" id="mimPeek">👀 Ver minha frase secreta</button>
            <div class="mim-secret" id="mimSecret" hidden>
              <p class="mim-frase" id="mimFrase"></p>
              <div class="mim-secret-btns">
                <button class="btn-ghost mim-dica-btn" id="mimDicaBtn">💡 dica</button>
                <button class="btn-ghost" id="mimHide">🙈 Esconder frase</button>
              </div>
              <p class="mim-dica" id="mimDica" hidden></p>
            </div>
          </div>
          <p class="mim-tip">✏️ Desenhe num papel/quadro ou faça mímica. <b>Nada de falar!</b></p>
          <div class="mim-nav"><button class="btn-ghost" id="mimMenu">← Menu</button><button class="btn-primary" id="mimReveal">Revelar resposta ✅</button></div>
        </div>`;
      $("#mimPeek").addEventListener("click", peek);
      $("#mimMenu").addEventListener("click", intro);
      $("#mimReveal").addEventListener("click", reveal);
    }
    function peek() {
      $("#mimPeek").hidden = true;
      $("#mimFrase").textContent = `“${current.f}”`;
      $("#mimSecret").hidden = false;
      $("#mimDicaBtn").onclick = () => { $("#mimDica").textContent = current.dica; $("#mimDica").hidden = false; $("#mimDicaBtn").hidden = true; };
      $("#mimHide").onclick = hideSecret;
    }
    function hideSecret() {
      $("#mimSecret").hidden = true;
      const pk = $("#mimPeek"); pk.hidden = false; pk.textContent = "👀 Ver a frase de novo";
    }
    function reveal() {
      host.innerHTML = `
        <div class="mim-reveal">
          <p class="mim-reveal-k">A frase era:</p>
          <p class="mim-frase big">“${current.f}”</p>
          <p class="mim-dica-final">💡 ${current.dica}</p>
          <p class="mim-role">Acertaram? Contem 1 ponto pra dupla! 🎉 Na próxima, troquem quem desenha.</p>
          <div class="mim-nav"><button class="btn-ghost" id="mimMenu2">← Menu</button><button class="btn-primary" id="mimNext">Nova frase 🎭</button></div>
        </div>`;
      $("#mimMenu2").addEventListener("click", intro);
      $("#mimNext").addEventListener("click", round);
    }
    observeOnce("#mimica", intro);
  })();

  /* (removido a pedido) DESAFIO EM DUPLA de adivinhar a região. */

  /* =====================================================================
     JOGO: A RECEITA DO DIALETO SULISTA
     Cada palavra é um "tempero"; descubra qual povo (panela) a trouxe.
     Solo (cozinhar e aprender) e Duelo em dupla (mesmos temperos, ganha
     por pontos; empate desempata pelo menor tempo).
     ===================================================================== */
  (function receitaJogo() {
    const host = $("#recipeGame");
    if (!host) return;
    const povoById = id => JOGO_POVOS.find(p => p.id === id);
    const LIMIT = 15;        // segundos por tempero
    const DEFAULT_N = 8;     // temperos no modo solo
    const perfNow = () => (window.performance && performance.now) ? performance.now() : 0;

    let state = null, timer = null, timeLeft = LIMIT, answered = false, startedAt = 0;

    function intro() {
      clearInterval(timer);
      host.innerHTML = `
        <div class="rg-intro">
          <div class="rg-pot-hero">🍲</div>
          <p class="rg-intro-lead">O <b>Dialeto Sulista</b> foi cozinhado por vários povos ao longo de 5 séculos. Cada <b>palavra</b> é um tempero — descubra <b>qual povo</b> trouxe cada uma e monte o prato.</p>
          <div class="rg-modes">
            <button class="rg-mode" id="rgSolo">
              <span class="rg-mode-ic">👩‍🍳</span>
              <span class="rg-mode-t">Cozinhar sozinho</span>
              <span class="rg-mode-d">Monte o prato no seu ritmo e descubra a origem de cada palavra.</span>
            </button>
            <button class="rg-mode" id="rgDuo">
              <span class="rg-mode-ic">🍳🔥</span>
              <span class="rg-mode-t">Duelo em dupla</span>
              <span class="rg-mode-d">Dois chefs, temperos diferentes pra cada um. Ganha quem acertar mais — e, no empate, quem for mais rápido.</span>
            </button>
          </div>
        </div>`;
      $("#rgSolo").addEventListener("click", startSolo);
      $("#rgDuo").addEventListener("click", duoSetup);
    }

    function startSolo() {
      state = { mode: "solo", sets: [sample(JOGO_TEMPEROS, DEFAULT_N)], n: DEFAULT_N,
        players: [{ name: "Você", score: 0, hits: 0, timeMs: 0 }], cur: 0, idx: 0, pot: [] };
      renderRound();
    }

    function duoSetup() {
      clearInterval(timer);
      host.innerHTML = `
        <div class="rg-setup">
          <h3 class="rg-setup-t">🍳🔥 Duelo em dupla</h3>
          <p class="rg-setup-d">Cada chef recebe <b>temperos diferentes</b>, um de cada vez. Ganha quem acertar mais; no empate, quem cozinhou mais rápido.</p>
          <div class="rg-setup-fields">
            <label>Chef 1<input id="rgN1" maxlength="14" value="Chef 1"></label>
            <label>Chef 2<input id="rgN2" maxlength="14" value="Chef 2"></label>
            <label>Temperos<select id="rgN"><option>6</option><option selected>8</option><option>10</option></select></label>
          </div>
          <div class="rg-setup-btns">
            <button class="btn-ghost" id="rgBack">← Voltar</button>
            <button class="btn-primary" id="rgGo">Começar duelo</button>
          </div>
        </div>`;
      $("#rgBack").addEventListener("click", intro);
      $("#rgGo").addEventListener("click", () => {
        const n = +$("#rgN").value;
        const all = sample(JOGO_TEMPEROS, n * 2);   // temperos diferentes pra cada chef
        state = { mode: "duo", sets: [all.slice(0, n), all.slice(n)], n,
          players: [
            { name: ($("#rgN1").value.trim() || "Chef 1"), score: 0, hits: 0, timeMs: 0 },
            { name: ($("#rgN2").value.trim() || "Chef 2"), score: 0, hits: 0, timeMs: 0 }
          ], cur: 0, idx: 0, pot: [] };
        turnCard(0);
      });
    }

    function turnCard(pi) {
      clearInterval(timer);
      state.cur = pi; state.idx = 0; state.pot = [];
      const p = state.players[pi];
      host.innerHTML = `
        <div class="rg-turncard">
          <p class="rg-turn-kicker">${pi === 0 ? "Primeiro chef" : "Segundo chef"}</p>
          <div class="rg-turn-emoji">${pi === 0 ? "👨‍🍳" : "👩‍🍳"}</div>
          <h3 class="rg-turn-name">Vez de ${p.name}</h3>
          <p class="rg-turn-d">${state.n} temperos · ${LIMIT}s cada. ${pi === 1 ? "Seus temperos são diferentes do outro chef! 🙈" : "Boa sorte na cozinha!"}</p>
          <button class="btn-primary" id="rgTurnGo">Começar</button>
        </div>`;
      $("#rgTurnGo").addEventListener("click", renderRound);
    }

    function renderRound() {
      clearInterval(timer); answered = false; timeLeft = LIMIT;
      const s = state, p = s.players[s.cur], t = s.sets[s.cur][s.idx];
      const potHTML = s.pot.map(x => `<span class="rg-ing ${x.ok ? "" : "miss"}" style="--pc:${povoById(x.povo).cor}" title="${x.w}">${povoById(x.povo).emoji}</span>`).join("");
      const chef = s.mode === "duo" ? (s.cur === 0 ? "👨‍🍳 " : "👩‍🍳 ") : "👩‍🍳 ";
      host.innerHTML = `
        <div class="rg-stage">
          <div class="rg-hud">
            <span class="rg-chef">${chef}${p.name}</span>
            <span class="rg-count">Tempero ${s.idx + 1}/${s.n}</span>
            <span class="rg-pts" id="rgPts">🏅 ${p.score}</span>
            <span class="rg-clock" id="rgClock">${LIMIT}s</span>
          </div>
          <div class="rg-bar"><span id="rgBarFill"></span></div>
          <div class="rg-pot"><div class="rg-pot-body"><span class="rg-pot-emoji">🍲</span><div class="rg-ings">${potHTML}</div></div></div>
          <div class="rg-card">
            <span class="rg-card-k">Qual povo trouxe este tempero?</span>
            <span class="rg-word">${t.w}</span>
            <span class="rg-sig">${t.sig}</span>
          </div>
          <div class="rg-povos" id="rgPovos">
            ${JOGO_POVOS.map(pv => `<button class="rg-povo" data-id="${pv.id}" style="--pc:${pv.cor}"><span class="rg-povo-ic">${pv.emoji}</span><span class="rg-povo-n">${pv.nome}</span></button>`).join("")}
          </div>
          <div class="rg-reveal" id="rgReveal" aria-hidden="true"></div>
          <div class="rg-nav" id="rgNav"></div>
        </div>`;
      $("#rgBarFill").style.width = "100%";
      $$("#rgPovos .rg-povo").forEach(b => b.addEventListener("click", () => answer(b.dataset.id)));
      startedAt = perfNow();
      runTimer();
    }

    function runTimer() {
      clearInterval(timer);
      timer = setInterval(() => {
        timeLeft--;
        const t = Math.max(0, timeLeft);
        const c = $("#rgClock"); if (c) c.textContent = t + "s";
        const bar = $("#rgBarFill"); if (bar) bar.style.width = (t / LIMIT * 100) + "%";
        if (timeLeft <= 0) answer(null);
      }, 1000);
    }

    function answer(povoId) {
      if (answered) return;
      answered = true; clearInterval(timer);
      const s = state, p = s.players[s.cur], t = s.sets[s.cur][s.idx];
      p.timeMs += perfNow() - startedAt;
      const ok = povoId === t.povo, correctPovo = povoById(t.povo);
      let gained = 0;
      if (ok) {
        gained = 40 + Math.max(0, Math.round(timeLeft / LIMIT * 60));
        p.score += gained; p.hits++;
        const pts = $("#rgPts"); if (pts) pts.textContent = `🏅 ${p.score}`;
      }
      s.pot.push({ w: t.w, povo: t.povo, ok });
      $$("#rgPovos .rg-povo").forEach(b => {
        b.disabled = true;
        if (b.dataset.id === t.povo) b.classList.add("correct");
        else if (b.dataset.id === povoId) b.classList.add("wrong");
      });
      const ings = $(".rg-ings");
      if (ings) {
        const el = document.createElement("span");
        el.className = "rg-ing new" + (ok ? "" : " miss");
        el.style.setProperty("--pc", correctPovo.cor);
        el.textContent = correctPovo.emoji; el.title = t.w;
        ings.appendChild(el);
      }
      const rev = $("#rgReveal");
      rev.innerHTML = `
        <div class="rg-rev-top ${ok ? "ok" : "bad"}">${ok ? `✔ Isso! +${gained} pts` : (povoId === null ? "⏰ Tempo esgotado" : "✘ Quase!")}</div>
        <p class="rg-rev-txt"><b>${t.w}</b> — tempero <b style="color:${correctPovo.cor}">${correctPovo.emoji} ${correctPovo.nome}</b>. ${t.ori}.</p>`;
      rev.classList.add("show"); rev.setAttribute("aria-hidden", "false");
      const last = s.idx >= s.n - 1;
      const label = last ? (s.mode === "duo" && s.cur === 0 ? "Passar a vez →" : "Ver o prato 🍲") : "Próximo tempero →";
      $("#rgNav").innerHTML = `<button class="btn-primary" id="rgNext">${label}</button>`;
      $("#rgNext").addEventListener("click", next);
    }

    function next() {
      const s = state;
      if (s.idx < s.n - 1) { s.idx++; renderRound(); return; }
      if (s.mode === "duo" && s.cur === 0) { turnCard(1); return; }
      results();
    }

    function potRecap(s) {
      const byPovo = {};
      s.sets[s.cur].forEach((t, i) => { const got = s.pot[i]; (byPovo[t.povo] = byPovo[t.povo] || []).push({ w: t.w, ok: got && got.ok }); });
      return `<div class="rg-recap">${JOGO_POVOS.filter(pv => byPovo[pv.id]).map(pv => `
        <div class="rg-recap-row" style="--pc:${pv.cor}">
          <span class="rg-recap-h">${pv.emoji} ${pv.nome}</span>
          <span class="rg-recap-ws">${byPovo[pv.id].map(x => `<b class="${x.ok ? "ok" : "miss"}">${x.w}</b>`).join(" · ")}</span>
        </div>`).join("")}</div>`;
    }

    function results() {
      clearInterval(timer);
      const s = state;
      if (s.mode === "solo") {
        const p = s.players[0];
        const msg = p.hits === s.n ? "Chef de mão cheia! 👏" : p.hits >= s.n * 0.6 ? "Tá quase no ponto! 🔥" : "Volte pra cozinha e treine mais 🥄";
        host.innerHTML = `
          <div class="rg-result">
            <div class="rg-dish">🍲</div>
            <h3 class="rg-dish-t">Prato pronto: <em>Dialeto Sulista</em></h3>
            <p class="rg-dish-line">${p.hits}/${s.n} temperos no lugar certo · 🏅 ${p.score} pts</p>
            ${potRecap(s)}
            <p class="rg-dish-msg">${msg}</p>
            <div class="rg-nav2"><button class="btn-ghost" id="rgMenu">← Menu</button><button class="btn-primary" id="rgAgain">Cozinhar de novo</button></div>
          </div>`;
      } else {
        const [a, b] = s.players;
        let winIdx = -1;
        if (a.score !== b.score) winIdx = a.score > b.score ? 0 : 1;
        else if (a.timeMs !== b.timeMs) winIdx = a.timeMs < b.timeMs ? 0 : 1;
        const winMsg = winIdx === -1 ? `🤝 Empate total! ${a.score} × ${b.score}`
          : `🏆 ${s.players[winIdx].name} venceu!` + (a.score === b.score ? " (pelo tempo ⏱️)" : "");
        const col = (p, i) => `
          <div class="rg-duel-col ${winIdx === i ? "win" : ""}">
            ${winIdx === i ? `<span class="rg-crown">🏆</span>` : ""}
            <span class="rg-duel-name">${i === 0 ? "👨‍🍳" : "👩‍🍳"} ${p.name}</span>
            <span class="rg-duel-score">${p.score}</span>
            <span class="rg-duel-sub">${p.hits}/${s.n} acertos · ${(p.timeMs / 1000).toFixed(1)}s</span>
          </div>`;
        host.innerHTML = `
          <div class="rg-result">
            <div class="rg-dish">🍲</div>
            <h3 class="rg-dish-t">Fim do duelo!</h3>
            <div class="rg-duel">${col(a, 0)}<span class="rg-duel-x">×</span>${col(b, 1)}</div>
            <p class="rg-dish-msg">${winMsg}</p>
            <div class="rg-nav2"><button class="btn-ghost" id="rgMenu">← Menu</button><button class="btn-primary" id="rgAgain">Jogar de novo</button></div>
          </div>`;
      }
      $("#rgMenu").addEventListener("click", intro);
      $("#rgAgain").addEventListener("click", () => s.mode === "solo" ? startSolo() : duoSetup());
    }

    observeOnce("#receita", intro);
  })();

  /* ---- util: dispara callback quando a seção entra na tela (uma vez) ---- */
  function observeOnce(sel, cb) {
    const el = $(sel);
    if (!el) return;
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) { cb(); io.disconnect(); } });
    }, { root: $("#deck"), threshold: 0.4 });
    io.observe(el);
  }
})();
