# 🧭 Sotaques do Sul

Documentário interativo, em tela cheia, sobre as **variações linguísticas da Região Sul do Brasil** — pensado para uso em aula (projetor/TV). Uma mistura de exposição de museu digital, infográfico vivo e jogos educativos.

Feito em **HTML, CSS e JavaScript puro** (sem framework, sem build).

---

## ▶️ Como executar

Os vídeos e alguns recursos só funcionam quando o site é servido por `http://` (não por duplo-clique).

**Windows (recomendado):** dê dois cliques em **`abrir-aula.bat`** — ele sobe um servidor local e abre `http://localhost:8000`. (Requer Python instalado.)

**Manual (qualquer sistema com Python):**
```bash
cd sotaques-do-sul
python -m http.server 8000
# abra http://localhost:8000/index.html
```

> Abrir direto o `index.html` (modo arquivo) também funciona, exceto por recursos que exigem servidor.

---

## ✨ Seções

- **Abertura** cinematográfica com parallax e tela de carregamento
- **A jornada dos sotaques** — deck de 12 slides didáticos
- **Mapa dos Sotaques** — mapa geográfico real e interativo (13 regiões)
- **Comparador** de sotaques lado a lado
- **Receita da Língua** — monta o "Dialeto Sulista" com ingredientes ilustrados
- **Linha do Tempo** com fotos das eras de imigração
- **Raízes da Fala** — galeria de povos → palavras
- **Dicionário** interativo com busca
- **Jogos:** Descubra a Região · Quiz (com timer/combo) · Jogo das Expressões · Desafio em Dupla · Detetive do Preconceito
- **Estatísticas & Influências**
- **Encerramento** sobre diversidade e preconceito linguístico

---

## 🗂️ Estrutura

```
sotaques-do-sul/
├── index.html
├── abrir-aula.bat          # inicia servidor local
├── css/style.css
├── js/
│   ├── geo.js              # fronteiras reais dos estados (GeoJSON)
│   ├── data.js             # todo o conteúdo (edite aqui)
│   ├── app.js              # mapa, receita, dicionário, estatísticas…
│   ├── games.js            # quiz, jogos, detetive do preconceito
│   └── polish.js           # acabamento visual
└── assets/
    ├── img/                # fotografias (Wikimedia Commons)
    ├── audio/              # (opcional) áudios reais — ver AUDIO_MANIFEST
    └── br-states.geojson   # fonte do mapa
```

Todo o conteúdo (regiões, palavras, quiz, slides, estatísticas) está em **`js/data.js`**, comentado em português.

---

## 🔊 Áudio

O site reproduz **somente gravações reais** — **não há voz sintética (IA)**. Uma região só mostra o botão **“Ouvir o sotaque”** (e só entra nos jogos de escuta) quando existe a gravação correspondente. Para adicionar o áudio de uma região, grave o arquivo, coloque em `assets/audio/` e liste-o em `AUDIO_MANIFEST` (em `js/data.js`). Atualmente há gravação real para 7 das 13 regiões.

---

## 📚 Créditos e precisão

- **Imagens:** [Wikimedia Commons](https://commons.wikimedia.org) (domínio público / Creative Commons).
- **Mapa:** GeoJSON de estados brasileiros (projeto *click_that_hood*, domínio público).
- **Conteúdo linguístico:** simplificação didática. As fronteiras entre sotaques mudam gradualmente na vida real; os termos regionais foram revisados, e estimativas estatísticas estão sinalizadas como tal.

---

*Projeto educativo. Valorizar a diversidade linguística é respeitar a história de cada povo.*
