# Sotaques do Sul — experiência interativa para aula

Documentário interativo em tela cheia sobre as **variações linguísticas da Região Sul do Brasil**.
Feito em HTML/CSS/JavaScript puro — **não precisa instalar nada**.

## ⚠️ Importante: para os VÍDEOS do YouTube funcionarem
Os players do YouTube **só tocam quando o site é servido por `http://`** (não por
duplo-clique no arquivo). Por isso, para a aula completa (com a seção "Vozes Reais"),
**dê dois cliques em `abrir-aula.bat`**: ele inicia um servidor local e abre o site em
`http://localhost:8000`. Deixe a janela preta aberta durante a aula. (Precisa ter o
Python instalado — já está nesta máquina.)

> Se abrir por duplo-clique no `index.html`, tudo funciona, exceto os vídeos tocarem
> embutidos — nesse caso aparece um botão "Abrir no YouTube" como alternativa.

## Como usar na aula
1. Abra pelo **`abrir-aula.bat`** (recomendado, faz os vídeos tocarem) — ou, sem vídeos,
   pelo **`index.html`** com duplo-clique (Chrome ou Edge recomendados).
2. Coloque o navegador em **tela cheia** (tecla `F11`) para projetar na TV/projetor.
3. **Role a página** (ou use o menu ☰ no canto superior direito) para navegar pelas seções.
4. Botão **🔊** liga um som ambiente de vento suave (opcional).
5. Os áudios dos sotaques usam a **voz do navegador** (síntese de fala em português).
   Para funcionar melhor, tenha uma voz pt-BR instalada no sistema.

## Sequência da jornada (16 cenas)
1. **Abertura** cinematográfica com parallax (montanhas, neblina, araucárias)
2. **Premissa** — por que estudar variação linguística
3. **Mapa dos Sotaques** — clique nos pontos → dossiê + áudio com destaque de palavras
4. **Comparador** — dois sotaques lado a lado
5. **Receita da Língua** — monte o "Dialeto Sulista" ingrediente por ingrediente
6. **Linha do Tempo** — povos que formaram o falar sulista
7. **Árvore das Influências** — raízes, tronco e folhas (clique nas folhas)
8. **Palavras Viajantes** — palavras cruzando o mapa
9. **Dicionário Interativo** — busca + áudio
10. **Jogo: Descubra a Região** — ouça e adivinhe
11. **Quiz: Mito, Verdade ou Gíria** — com cronômetro e pontuação
12. **Jogo das Expressões** — memória (par expressão × significado)
13. **Caça ao Preconceito** — pensamento crítico
14. **Tribunal da Língua** — roleplay para debate em turma
15. **Estatísticas** — gráficos animados
16. **Encerramento** — mapa preenchido de palavras + mensagem final

## Personalizar conteúdo
Todo o conteúdo (regiões, palavras, quiz, receita, timeline…) está em **`js/data.js`**,
em português e bem comentado. Basta editar esse arquivo para adicionar palavras,
perguntas ou regiões — o resto do site se atualiza sozinho.

> Observação: os dados linguísticos são uma simplificação didática. As fronteiras
> entre sotaques mudam gradualmente na vida real.
