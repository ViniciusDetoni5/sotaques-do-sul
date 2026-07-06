/* =====================================================================
   SOTAQUES DO SUL — games.js
   Descubra a Região · Quiz · Jogo das Expressões · Caça ao Preconceito
   · Tribunal da Língua
   ===================================================================== */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const { speak, playAudio, REGIOES } = window.SDS;

  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function sample(arr, n) { return shuffle(arr).slice(0, n); }

  /* =====================================================================
     JOGO: DESCUBRA A REGIÃO
     ===================================================================== */
  const guessEl = $("#guessGame");
  let gScore = 0, gRound = 0, gAnswer = null;
  function renderGuess() {
    const correct = REGIOES[Math.floor(Math.random() * REGIOES.length)];
    gAnswer = correct;
    const distractors = sample(REGIOES.filter(r => r.id !== correct.id), 3);
    const opts = shuffle([correct, ...distractors]);
    guessEl.innerHTML = `
      <button class="guess-audio" id="guessPlay" aria-label="Ouvir frase">▶</button>
      <p class="guess-score">Pontos: <span id="gScore">${gScore}</span> · Rodada ${gRound + 1}</p>
      <div class="guess-opts">
        ${opts.map(o => `<button class="guess-opt" data-id="${o.id}">${o.nome}</button>`).join("")}
      </div>
      <p class="guess-fb" id="gFb">Toque no ▶ para ouvir o sotaque.</p>`;
    const playBtn = $("#guessPlay");
    const play = () => {
      playBtn.classList.add("playing");
      playAudio("reg:" + correct.id, correct.frase, { rate: correct.rate, pitch: correct.pitch, onEnd: () => playBtn.classList.remove("playing") });
    };
    playBtn.addEventListener("click", play);
    setTimeout(play, 400);
    $$(".guess-opt", guessEl).forEach(btn => btn.addEventListener("click", () => {
      const chosen = btn.dataset.id;
      $$(".guess-opt", guessEl).forEach(b => b.disabled = true);
      const fb = $("#gFb");
      if (chosen === correct.id) {
        btn.classList.add("correct"); gScore += 10;
        fb.textContent = `✅ Isso! Era o sotaque de ${correct.nome}. "${correct.frase}"`;
      } else {
        btn.classList.add("wrong");
        $$(".guess-opt", guessEl).find(b => b.dataset.id === correct.id).classList.add("correct");
        fb.textContent = `❌ Era ${correct.nome}. "${correct.frase}"`;
      }
      $("#gScore").textContent = gScore;
      gRound++;
      setTimeout(renderGuess, 2600);
    }));
  }
  // só inicia quando a seção aparece (evita falar cedo demais)
  observeOnce("#descubra", renderGuess);

  /* =====================================================================
     QUIZ — Mito, Verdade ou Gíria
     ===================================================================== */
  const quizArea = $("#quizArea");
  const QDUR = 20;
  let qIdx = 0, qScore = 0, qStreak = 0, qBest = 0, qHits = 0, qTimer = null, qTime = QDUR, qOrder = [], qPaused = false, qAnswered = false;

  function quizIntro() {
    clearInterval(qTimer);
    quizArea.innerHTML = `
      <div class="quiz-intro">
        <p class="quiz-intro-txt">10 perguntas sobre os sotaques do Sul. Cada uma vale <b>até 20s</b> — quanto mais rápido, mais pontos. Acertos em sequência dão <b>bônus de combo</b>. Você pode <b>pausar</b> a qualquer momento.</p>
        <button class="btn-primary" id="qStart">▶ Iniciar quiz</button>
      </div>`;
    $("#qStart").addEventListener("click", startQuiz);
  }
  function startQuiz() {
    qIdx = 0; qScore = 0; qStreak = 0; qBest = 0; qHits = 0;
    qOrder = shuffle(QUIZ).slice(0, 10);
    renderQuiz();
  }
  function stopTimer() { clearInterval(qTimer); qTimer = null; }
  function runTimer() {
    stopTimer();
    qTimer = setInterval(() => {
      if (qPaused) return;
      qTime--;
      const t = Math.max(0, qTime);
      $("#qTimer").textContent = t + "s";
      $("#qBar").style.width = (t / QDUR * 100) + "%";
      if (qTime <= 0) answerQuiz(-1);
    }, 1000);
  }
  function renderQuiz() {
    stopTimer(); qPaused = false; qAnswered = false;
    if (qIdx >= qOrder.length) return finishQuiz();
    const q = qOrder[qIdx];
    quizArea.innerHTML = `
      <div class="quiz-topbar">
        <span class="quiz-count">Pergunta ${qIdx + 1}/${qOrder.length}</span>
        <span class="quiz-streak" id="qStreakBox">🔥 ${qStreak}</span>
        <span class="quiz-pts" id="qPts">${qScore} pts</span>
        <button class="quiz-pause" id="qPause" title="Pausar/continuar">⏸</button>
        <span class="quiz-timer" id="qTimer">${QDUR}s</span>
      </div>
      <div class="quiz-bar"><span id="qBar"></span></div>
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-opts">
        ${q.op.map((o, i) => `<button class="quiz-opt" data-i="${i}">${o}</button>`).join("")}
      </div>
      <div class="quiz-ex" id="qEx"></div>
      <div class="quiz-nav" id="qNav"></div>`;
    qTime = QDUR;
    $("#qBar").style.width = "100%";
    $("#qPause").addEventListener("click", togglePause);
    $$(".quiz-opt", quizArea).forEach(b => b.addEventListener("click", () => answerQuiz(+b.dataset.i)));
    runTimer();
  }
  function togglePause() {
    if (qAnswered) return;
    qPaused = !qPaused;
    const btn = $("#qPause");
    btn.textContent = qPaused ? "▶" : "⏸";
    btn.classList.toggle("paused", qPaused);
    quizArea.classList.toggle("is-paused", qPaused);
  }
  function answerQuiz(chosen) {
    if (qAnswered) return;
    qAnswered = true; stopTimer();
    const q = qOrder[qIdx];
    const opts = $$(".quiz-opt", quizArea);
    opts.forEach(b => b.disabled = true);
    opts[q.c].classList.add("correct");
    let gained = 0;
    if (chosen === q.c) {
      qHits++; qStreak++; qBest = Math.max(qBest, qStreak);
      const speed = Math.round(qTime / 2), combo = (qStreak - 1) * 5;
      gained = 10 + speed + combo;
      qScore += gained;
      $("#qStreakBox").textContent = `🔥 ${qStreak}`;
      $("#qPts").textContent = `${qScore} pts`;
    } else {
      qStreak = 0;
      if (chosen >= 0) opts[chosen].classList.add("wrong");
      $("#qStreakBox").textContent = `🔥 0`;
    }
    $("#qEx").innerHTML = `${chosen === q.c ? `<b class="qok">✔ +${gained} pontos</b> — ` : `<b class="qbad">✘${chosen < 0 ? " Tempo esgotado" : " Não foi dessa vez"}</b> — `}${q.ex}`;
    const last = qIdx >= qOrder.length - 1;
    $("#qNav").innerHTML = `<button class="btn-primary" id="qNext">${last ? "Ver resultado 🏁" : "Próxima →"}</button>`;
    $("#qNext").addEventListener("click", () => { qIdx++; renderQuiz(); });
  }
  function finishQuiz() {
    const pct = Math.round(qHits / qOrder.length * 100);
    const msg = pct >= 80 ? "Mestre dos sotaques! 🏆" : pct >= 50 ? "Muito bem, quase lá! 👏" : "Bora revisar o mapa! 🗺️";
    quizArea.innerHTML = `<div class="quiz-final">
      <div class="qf-score">${qScore}</div>
      <p class="qf-line">${qHits}/${qOrder.length} acertos · melhor combo 🔥 ${qBest}</p>
      <p style="font-family:var(--serif);font-size:1.4rem">${msg}</p>
      <button class="btn-primary" id="qRestart" style="margin-top:1.4rem">Jogar de novo</button></div>`;
    $("#qRestart").addEventListener("click", startQuiz);
  }
  observeOnce("#quiz", quizIntro);

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

  /* =====================================================================
     DETETIVE DO PRECONCEITO LINGUÍSTICO
     ===================================================================== */
  const cacaArea = $("#cacaArea");
  let cIdx = 0, cScore = 0, cOrder = [], cAnswered = false;
  function cacaIntro() {
    cacaArea.innerHTML = `
      <p class="caca-lead">Você é o <b>detetive</b>. Em cada caso real, escolha a <b>análise correta</b> — cuidado: nem toda frase é preconceito; algumas são descrições neutras ou fatos da norma. Depois, veja o conceito e o porquê.</p>
      <button class="btn-primary" id="cacaStart">▶ Investigar casos</button>`;
    $("#cacaStart").addEventListener("click", startCaca);
  }
  function startCaca() {
    cIdx = 0; cScore = 0; cOrder = shuffle(CACA_CENARIOS); renderCaca();
  }
  function renderCaca() {
    cAnswered = false;
    if (cIdx >= cOrder.length) return endCaca();
    const it = cOrder[cIdx];
    const opts = it.opcoes.map((o, i) => ({ o, i }));
    cacaArea.innerHTML = `
      <div class="caca-hud"><span class="caca-case">Caso ${cIdx + 1}/${cOrder.length}</span><span class="caca-pts" id="cacaPts">Acertos: ${cScore}</span></div>
      <div class="caca-scene">
        <span class="caca-ctx">${it.contexto}</span>
        <p class="caca-fala">${it.fala}</p>
      </div>
      <p class="caca-q">${it.pergunta}</p>
      <div class="caca-opts" id="cacaOpts">
        ${opts.map(x => `<button class="caca-opt" data-i="${x.i}">${x.o}</button>`).join("")}
      </div>
      <div class="caca-reveal" id="cacaReveal" aria-hidden="true"></div>
      <div class="caca-nav" id="cacaNav"></div>`;
    $$(".caca-opt", cacaArea).forEach(b => b.addEventListener("click", () => answerCaca(+b.dataset.i, it)));
  }
  function answerCaca(chosen, it) {
    if (cAnswered) return;
    cAnswered = true;
    const opts = $$(".caca-opt", cacaArea);
    opts.forEach((b, i) => {
      b.disabled = true;
      if (i === it.correta) b.classList.add("correct");
      else if (i === chosen) b.classList.add("wrong");
    });
    const ok = chosen === it.correta;
    if (ok) cScore++;
    $("#cacaPts").textContent = `Acertos: ${cScore}`;
    const rev = $("#cacaReveal");
    rev.innerHTML = `
      <div class="cr-verdict ${ok ? "ok" : "bad"}">${ok ? "✔ Análise correta" : "✘ Reveja o raciocínio"}</div>
      <div class="cr-concept">🧠 ${it.conceito}</div>
      <p class="cr-why"><b>Por quê:</b> ${it.porque}</p>
      <p class="cr-deep"><b>Contexto:</b> ${it.aprofundar}</p>`;
    rev.classList.add("show"); rev.setAttribute("aria-hidden", "false");
    const last = cIdx >= cOrder.length - 1;
    $("#cacaNav").innerHTML = `<button class="btn-primary" id="cacaNext">${last ? "Ver conclusão 🏁" : "Próximo caso →"}</button>`;
    $("#cacaNext").addEventListener("click", () => { cIdx++; renderCaca(); });
  }
  function endCaca() {
    const pct = Math.round(cScore / cOrder.length * 100);
    const nivel = pct >= 85 ? "Detetive-chefe da linguagem 🕵️‍♀️" : pct >= 50 ? "Bom faro contra o preconceito 🔎" : "Continue treinando o olhar 👀";
    cacaArea.innerHTML = `<div class="caca-end">
      <div class="qf-score">${cScore}/${cOrder.length}</div>
      <p class="qf-line">${nivel}</p>
      <p class="caca-final-msg">Combater o preconceito linguístico é reconhecer que <b>toda fala tem regra, história e dignidade</b> — e que a norma-padrão é uma variedade entre muitas, não a única “certa”.</p>
      <button class="btn-primary" id="cacaRestart">Investigar de novo</button></div>`;
    $("#cacaRestart").addEventListener("click", startCaca);
  }
  observeOnce("#caca", cacaIntro);

  /* =====================================================================
     DESAFIO EM DUPLA (2 jogadores, turnos alternados)
     ===================================================================== */
  const duoArea = $("#duoArea");
  const duo = { p: [{ name: "Jogador 1", score: 0 }, { name: "Jogador 2", score: 0 }], round: 0, total: 8, guesser: 0, region: null };
  function scoreboard() {
    return `<div class="duo-score">
      <div class="ds ${duo.guesser === 0 ? "active" : ""}"><span class="ds-name">${duo.p[0].name}</span><span class="ds-pts">${duo.p[0].score}</span></div>
      <span class="ds-x">×</span>
      <div class="ds ${duo.guesser === 1 ? "active" : ""}"><span class="ds-name">${duo.p[1].name}</span><span class="ds-pts">${duo.p[1].score}</span></div>
    </div>`;
  }
  function duoSetup() {
    duoArea.innerHTML = `
      <p class="game-desc">Um jogador é o <b>Locutor</b> (lê a frase em voz alta, caprichando no sotaque) e o outro é o <b>Adivinhador</b>. Os papéis trocam a cada rodada. Quem acertar mais, vence! 🏆</p>
      <div class="duo-setup">
        <label>Jogador 1<input id="duoN1" value="Jogador 1" maxlength="14"></label>
        <label>Jogador 2<input id="duoN2" value="Jogador 2" maxlength="14"></label>
        <label>Rodadas<select id="duoRounds"><option>6</option><option selected>8</option><option>10</option></select></label>
      </div>
      <button class="btn-primary" id="duoStart">Começar</button>`;
    $("#duoStart").addEventListener("click", () => {
      duo.p[0].name = ($("#duoN1").value.trim() || "Jogador 1");
      duo.p[1].name = ($("#duoN2").value.trim() || "Jogador 2");
      duo.total = +$("#duoRounds").value;
      duo.round = 0; duo.guesser = 0; duo.p[0].score = 0; duo.p[1].score = 0;
      duoRound();
    });
  }
  function duoRound() {
    if (duo.round >= duo.total) return duoEnd();
    const guesser = duo.p[duo.guesser], locutor = duo.p[1 - duo.guesser];
    const correct = REGIOES[Math.floor(Math.random() * REGIOES.length)];
    duo.region = correct;
    const opts = shuffle([correct, ...sample(REGIOES.filter(r => r.id !== correct.id), 3)]);
    duoArea.innerHTML = `
      ${scoreboard()}
      <p class="duo-round">Rodada ${duo.round + 1} de ${duo.total}</p>
      <div class="duo-clue">
        <p class="duo-role">🎙️ <b>${locutor.name}</b>, leia esta frase em voz alta:</p>
        <p class="duo-phrase">“${correct.frase}”</p>
        <button class="btn-ghost" id="duoPlay">▶ Ouvir referência</button>
      </div>
      <p class="duo-role guess">🎯 <b>${guesser.name}</b>, de qual região vem esse sotaque?</p>
      <div class="guess-opts" id="duoOpts">${opts.map(o => `<button class="guess-opt" data-id="${o.id}">${o.nome}</button>`).join("")}</div>
      <p class="guess-fb" id="duoFb"></p>`;
    $("#duoPlay").addEventListener("click", () => playAudio("reg:" + correct.id, correct.frase, { rate: correct.rate, pitch: correct.pitch }));
    $$("#duoOpts .guess-opt").forEach(b => b.addEventListener("click", () => duoAnswer(b, correct, guesser)));
  }
  function duoAnswer(btn, correct, guesser) {
    $$("#duoOpts .guess-opt").forEach(b => b.disabled = true);
    const fb = $("#duoFb");
    if (btn.dataset.id === correct.id) {
      btn.classList.add("correct"); guesser.score += 10;
      fb.textContent = `✅ Acertou! Era ${correct.nome}. +10 para ${guesser.name}.`;
    } else {
      btn.classList.add("wrong");
      $$("#duoOpts .guess-opt").find(b => b.dataset.id === correct.id).classList.add("correct");
      fb.textContent = `❌ Era ${correct.nome} (${correct.cidade}).`;
    }
    duo.round++; duo.guesser = 1 - duo.guesser;
    const nav = document.createElement("button");
    nav.className = "btn-primary"; nav.style.marginTop = ".9rem";
    nav.textContent = duo.round >= duo.total ? "Ver resultado 🏁" : "Próxima rodada →";
    nav.addEventListener("click", duoRound);
    duoArea.appendChild(nav);
  }
  function duoEnd() {
    const [a, b] = duo.p; let msg;
    if (a.score === b.score) msg = `🤝 Empate! ${a.score} × ${b.score}`;
    else { const w = a.score > b.score ? a : b; msg = `🏆 ${w.name} venceu por ${Math.max(a.score, b.score)} × ${Math.min(a.score, b.score)}!`; }
    duoArea.innerHTML = `<div class="duo-end">${scoreboard()}<p class="duo-winner">${msg}</p><button class="btn-primary" id="duoAgain">Jogar de novo</button></div>`;
    $("#duoAgain").addEventListener("click", duoSetup);
  }
  observeOnce("#dupla", duoSetup);

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
