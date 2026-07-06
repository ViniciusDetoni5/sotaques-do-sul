/* =====================================================================
   SOTAQUES DO SUL — Base de dados
   Conteúdo linguístico, cultural e histórico da Região Sul do Brasil.
   Tudo em pt-BR. Usado por app.js e games.js.
   ===================================================================== */

/* ---- REGIÕES LINGUÍSTICAS -------------------------------------------
   x / y são coordenadas no viewBox do SVG do mapa (0..1000 x, 0..1200 y)
-------------------------------------------------------------------- */
const REGIOES = [
  {
    id: "norte-pr",
    nome: "Norte do Paraná",
    cidade: "Londrina",
    estado: "Paraná",
    cor: "#E7B23A",
    x: 470, y: 150,
    influencia: "Influência paulista",
    imigracao: "Migração paulista, mineira e nordestina (ciclo do café)",
    origem: "Colonizada no século XX pela expansão cafeeira vinda de São Paulo, herdou o falar caipira paulista.",
    fonetica: "Presença marcante do 'r' retroflexo (o famoso 'r caipira'), como em \"por-r-ta\".",
    descricao: "Terra do café e do falar cantado do interior paulista, misturado a levas nordestinas e mineiras.",
    curiosidades: [
      "Londrina significa 'pequena Londres', homenagem aos ingleses que financiaram a colonização.",
      "O 'r' retroflexo aproxima o sotaque daqui do interior de São Paulo mais do que de Curitiba."
    ],
    palavras: [
      { w: "trem", m: "coisa, objeto (herança mineira)" },
      { w: "uai", m: "interjeição de espanto" },
      { w: "arreda", m: "sair, afastar-se" }
    ],
    expressoes: ["\"Que trem bão!\"", "\"Vô ali e vorto já.\""],
    frase: "Nossa, que trem bão esse cafezinho, uai!",
    rate: 0.95, pitch: 1.0
  },
  {
    id: "curitiba",
    nome: "Curitiba e Região",
    cidade: "Curitiba",
    estado: "Paraná",
    cor: "#E8853B",
    x: 610, y: 300,
    influencia: "Sotaque curitibano",
    imigracao: "Portuguesa, alemã, italiana, polonesa e ucraniana",
    origem: "Capital planejada e fria, formou um sotaque próprio, pausado e com vogais fechadas.",
    fonetica: "Vogais fechadas e o 'e' quase mudo no fim das palavras: \"lê-t\" em vez de \"lei-te\".",
    descricao: "O falar da capital: contido, elegante e cheio de expressões próprias como 'daí'.",
    curiosidades: [
      "O 'daí' curitibano é usado para começar, continuar e terminar histórias.",
      "Curitibano fala 'a' e 'o' bem fechados por influência do clima e da imigração europeia."
    ],
    palavras: [
      { w: "daí", m: "conector universal de frases" },
      { w: "piá", m: "menino, garoto" },
      { w: "vina", m: "salsicha" }
    ],
    expressoes: ["\"Daí, tu vai ou não vai?\"", "\"O piá é bem levado.\""],
    frase: "Daí eu falei pro piá que o leite tava caro.",
    rate: 0.9, pitch: 0.98
  },
  {
    id: "campos-gerais",
    nome: "Campos Gerais",
    cidade: "Ponta Grossa",
    estado: "Paraná",
    cor: "#D98A55",
    x: 520, y: 340,
    influencia: "Tropeirismo",
    imigracao: "Tropeiros, portugueses, eslavos e holandeses",
    origem: "Rota histórica dos tropeiros que ligavam o Sul a São Paulo; berço da cultura tropeira.",
    fonetica: "Fala mais lenta e aberta que a de Curitiba, com marcas do campo.",
    descricao: "Planícies e a herança dos tropeiros que carregaram palavras por todo o Sul.",
    curiosidades: [
      "O 'feijão tropeiro' nasceu da comida prática dos tropeiros nessas rotas.",
      "Muitas fazendas da região preservam vocabulário do ciclo do gado."
    ],
    palavras: [
      { w: "tropa", m: "conjunto de mulas de carga" },
      { w: "pousada", m: "parada de descanso dos tropeiros" },
      { w: "bruaca", m: "bolsa de couro usada na tropa" }
    ],
    expressoes: ["\"Vamo aviá a tropa.\"", "\"Faz um pouso aqui.\""],
    frase: "A tropa parou pra um pouso antes de seguir viagem.",
    rate: 0.92, pitch: 0.97
  },
  {
    id: "oeste-pr",
    nome: "Oeste do Paraná",
    cidade: "Cascavel",
    estado: "Paraná",
    cor: "#B58BC7",
    x: 370, y: 300,
    influencia: "Mistura sulista",
    imigracao: "Gaúchos, catarinenses, italianos, alemães e paraguaios",
    origem: "Colonizada por migrantes do RS e SC no século XX, é um caldeirão de sotaques do Sul.",
    fonetica: "Convivem o 'r' gaúcho, vogais catarinenses e o espanhol da fronteira paraguaia.",
    descricao: "Fronteira viva onde gaúchos, catarinenses e paraguaios misturaram suas falas.",
    curiosidades: [
      "É comum ouvir 'bah' gaúcho e palavras em espanhol no mesmo diálogo.",
      "Foz do Iguaçu, na região, é trilíngue: português, espanhol e guarani."
    ],
    palavras: [
      { w: "bah", m: "interjeição gaúcha de espanto" },
      { w: "capaz", m: "'não acredito' / 'de jeito nenhum'" },
      { w: "guri", m: "menino (do guarani/gaúcho)" }
    ],
    expressoes: ["\"Bah, tchê, capaz!\"", "\"O guri é gente boa.\""],
    frase: "Bah, capaz que o guri fez isso, tchê!",
    rate: 1.0, pitch: 1.02
  },
  {
    id: "oeste-sc",
    nome: "Oeste Catarinense",
    cidade: "Chapecó",
    estado: "Santa Catarina",
    cor: "#8DBE5A",
    x: 400, y: 470,
    influencia: "Italiano + gaúcho",
    imigracao: "Descendentes de italianos e gaúchos vindos do RS",
    origem: "Ocupada por gaúchos de origem italiana, mescla o talian ao falar gaúcho.",
    fonetica: "Entonação italianada com o 'r' e o 'tchê' gaúchos.",
    descricao: "O talian encontra o pampa: agroindústria, parreirais e polenta.",
    curiosidades: [
      "O talian, dialeto vêneto-brasileiro, é reconhecido como patrimônio cultural.",
      "Muita gente ainda reza e canta em talian nas comunidades rurais."
    ],
    palavras: [
      { w: "filó", m: "reunião noturna entre vizinhos" },
      { w: "polenta", m: "prato de fubá, herança italiana" },
      { w: "bagual", m: "cavalo xucro; sujeito valente" }
    ],
    expressoes: ["\"Vamo fazer um filó hoje?\"", "\"A nona fez polenta de novo!\""],
    frase: "No filó a nona serviu polenta quente, tchê.",
    rate: 0.98, pitch: 1.05
  },
  {
    id: "planalto-sc",
    nome: "Planalto Serrano",
    cidade: "Lages",
    estado: "Santa Catarina",
    cor: "#D9C6A0",
    x: 560, y: 560,
    influencia: "Gaúcho serrano",
    imigracao: "Tropeiros e criadores de gado luso-brasileiros",
    origem: "Região fria de altitude, de tradição pecuarista e forte cultura gaúcha serrana.",
    fonetica: "Fala arrastada e grave, próxima do falar dos Campos de Cima da Serra.",
    descricao: "Onde neva no Brasil: pinhão, fogo de chão e tradição campeira.",
    curiosidades: [
      "Lages registra as temperaturas mais baixas do país com certa frequência.",
      "A cultura do pinhão e da araucária define a identidade serrana."
    ],
    palavras: [
      { w: "pinhão", m: "semente da araucária, assada na fogueira" },
      { w: "sapecar", m: "tostar levemente no fogo" },
      { w: "campeiro", m: "trabalhador do campo, peão" }
    ],
    expressoes: ["\"Tá um frio de renguear cusco.\"", "\"Vamo sapecar um pinhão.\""],
    frase: "Nessa serra fria, nada como um pinhão sapecado no fogo.",
    rate: 0.9, pitch: 0.92
  },
  {
    id: "oeste-vale",
    nome: "Vale do Itajaí",
    cidade: "Blumenau",
    estado: "Santa Catarina",
    cor: "#4F86C6",
    x: 700, y: 500,
    influencia: "Influência alemã",
    imigracao: "Imigração alemã (século XIX)",
    origem: "Colonizado por alemães a partir de 1850, preserva língua, arquitetura e costumes germânicos.",
    fonetica: "Marcas do alemão: o 'r' vibrante e a troca ocasional de sons surdos e sonoros.",
    descricao: "Casas enxaimel, cerveja artesanal e a Oktoberfest: a Alemanha tropical.",
    curiosidades: [
      "O 'Hunsrückisch' e o alemão ainda são falados por muitos moradores.",
      "Blumenau sedia a maior Oktoberfest das Américas."
    ],
    palavras: [
      { w: "chope", m: "cerveja de barril (do alemão Schoppen)" },
      { w: "cuca", m: "bolo alemão com farofa doce (Kuchen)" },
      { w: "kerb", m: "festa comunitária de origem alemã" }
    ],
    expressoes: ["\"Bota mais um chope!\"", "\"A cuca da vó é a melhor.\""],
    frase: "Na kerb tinha cuca, chope e muita música alemã.",
    rate: 0.95, pitch: 1.0
  },
  {
    id: "norte-sc",
    nome: "Norte Catarinense",
    cidade: "Joinville",
    estado: "Santa Catarina",
    cor: "#3AA6A0",
    x: 720, y: 430,
    influencia: "Influência alemã / paranaense",
    imigracao: "Alemães, suíços e migração paranaense",
    origem: "Polo industrial colonizado por alemães e suíços, com ponte cultural para o Paraná.",
    fonetica: "Sotaque híbrido, entre a marca germânica e o falar paranaense.",
    descricao: "A Manchester Catarinense: indústria, dança e herança germânica.",
    curiosidades: [
      "Joinville tem a única escola do Teatro Bolshoi fora da Rússia.",
      "A cidade nasceu de uma colônia ligada à realeza francesa e alemã."
    ],
    palavras: [
      { w: "égua", m: "interjeição de espanto/admiração" },
      { w: "ideia de jerico", m: "ideia sem sentido, furada" },
      { w: "x-pila", m: "lanche barato tradicional de Joinville" }
    ],
    expressoes: ["\"Égua, que ideia de jerico!\"", "\"Bora num x-pila depois?\""],
    frase: "Égua, tu teve uma ideia de jerico de novo!",
    rate: 0.95, pitch: 1.0
  },
  {
    id: "litoral-sc",
    nome: "Litoral Catarinense",
    cidade: "Florianópolis",
    estado: "Santa Catarina",
    cor: "#5FC9CE",
    x: 760, y: 590,
    influencia: "Manezinho (açoriano)",
    imigracao: "Imigração açoriana (século XVIII)",
    origem: "Colonizado por açorianos, tem o falar 'manezinho', rápido e cantado.",
    fonetica: "Fala muito veloz, com 's' chiado ('sh') e o 'te'/'de' sem palatalizar: \"tchia\" vira \"tia\".",
    descricao: "O 'mané da ilha': renda de bilro, pescaria e o falar mais cantado do Sul.",
    curiosidades: [
      "O manezinho fala tão rápido que virou marca registrada da ilha.",
      "Muitas palavras e o boi-de-mamão vieram direto dos Açores."
    ],
    palavras: [
      { w: "mané", m: "morador nativo da ilha (com orgulho)" },
      { w: "rapariga", m: "moça, garota (sentido neutro, açoriano)" },
      { w: "fresco", m: "chato, cheio de frescura" }
    ],
    expressoes: ["\"Ô meu, tá tri fresco tu!\"", "\"Vamo pra praia, mané!\""],
    frase: "Ô mané, essa rapariga fala rápido que nem gente da ilha!",
    rate: 1.18, pitch: 1.08
  },
  {
    id: "missoes",
    nome: "Missões",
    cidade: "Santo Ângelo",
    estado: "Rio Grande do Sul",
    cor: "#C0504D",
    x: 320, y: 720,
    influencia: "Influência espanhola / guarani",
    imigracao: "Guarani, jesuítas espanhóis e migrantes diversos",
    origem: "Terra das reduções jesuíticas guarani-espanholas dos séculos XVII e XVIII.",
    fonetica: "Palavras e sons do espanhol e do guarani impregnam a fala local.",
    descricao: "Ruínas jesuíticas e a herança guarani-espanhola gravada na língua.",
    curiosidades: [
      "São Miguel das Missões é Patrimônio Mundial da UNESCO.",
      "Muitos topônimos da região vêm diretamente do guarani."
    ],
    palavras: [
      { w: "guri", m: "menino (do guarani 'ngiru')" },
      { w: "tchê", m: "vocativo de origem guarani/espanhola" },
      { w: "capão", m: "pequena mata isolada no campo (guarani)" }
    ],
    expressoes: ["\"Tchê, e aí, guri?\"", "\"Lá no capão tem sombra.\""],
    frase: "Tchê, aquele guri se escondeu no capão de novo.",
    rate: 1.0, pitch: 1.0
  },
  {
    id: "serra-gaucha",
    nome: "Serra Gaúcha",
    cidade: "Caxias do Sul",
    estado: "Rio Grande do Sul",
    cor: "#D8A93A",
    x: 560, y: 760,
    influencia: "Italiano",
    imigracao: "Imigração italiana (a partir de 1875)",
    origem: "Colonizada por vênetos e lombardos, é o coração do vinho e do talian no Brasil.",
    fonetica: "Entonação cantada italiana, com o 'erre' e vogais bem marcadas.",
    descricao: "Vinhedos, parreirais e a nona fazendo cuca: a Itália do Sul.",
    curiosidades: [
      "A Serra produz a maior parte do vinho brasileiro.",
      "O talian ainda é ouvido em rádios e missas da região."
    ],
    palavras: [
      { w: "nono / nona", m: "avô / avó (do italiano)" },
      { w: "grapa", m: "aguardente de bagaço de uva" },
      { w: "chimia", m: "geleia caseira de frutas" }
    ],
    expressoes: ["\"Mamma mia, que chimia boa!\"", "\"A nona fez grapa de novo.\""],
    frase: "A nona passou chimia no pão e o nono tomou grapa.",
    rate: 0.98, pitch: 1.06
  },
  {
    id: "porto-alegre",
    nome: "Porto Alegre e Região",
    cidade: "Porto Alegre",
    estado: "Rio Grande do Sul",
    cor: "#4A78B8",
    x: 640, y: 900,
    influencia: "Gaúcho urbano",
    imigracao: "Portuguesa, açoriana, alemã, italiana e africana",
    origem: "Capital cosmopolita onde o falar gaúcho ganhou tom urbano e acelerado.",
    fonetica: "'Tch' e 'dj' fortes em 'tia'/'dia', 'r' aspirado e o clássico 'bah'.",
    descricao: "Chimarrão no Guaíba, cacetinho na padaria e o 'bah tri legal' urbano.",
    curiosidades: [
      "'Tri' (muito) é a gíria intensificadora mais gaúcha que existe.",
      "O pôr do sol do Guaíba é considerado um dos mais bonitos do mundo."
    ],
    palavras: [
      { w: "bah", m: "interjeição para tudo" },
      { w: "tri", m: "muito, super ('tri legal')" },
      { w: "cusco", m: "cachorro vira-lata" }
    ],
    expressoes: ["\"Bah, tri legal, tchê!\"", "\"Que cusco fofo!\""],
    frase: "Bah, tchê, esse chimarrão tá tri bom!",
    rate: 1.05, pitch: 1.0
  },
  {
    id: "campanha",
    nome: "Campanha Gaúcha",
    cidade: "Bagé",
    estado: "Rio Grande do Sul",
    cor: "#8A6A4A",
    x: 480, y: 1000,
    influencia: "Gaúcho fronteiriço (influência do espanhol)",
    imigracao: "Luso-brasileiros e forte contato com Uruguai e Argentina",
    origem: "Pampa de fronteira, onde o português e o espanhol se misturam no 'portunhol'.",
    fonetica: "Fala pausada e grave, com o 'll'/'y' e palavras do espanhol platino.",
    descricao: "Pampa infinito, gado, boina e o gauchismo em estado puro.",
    curiosidades: [
      "Na fronteira nasce o 'portunhol', mistura natural das duas línguas.",
      "A cultura campeira aqui é praticamente idêntica à do Uruguai."
    ],
    palavras: [
      { w: "bombacha", m: "calça larga típica do gaúcho" },
      { w: "bagual", m: "cavalo xucro; homem forte e valente" },
      { w: "pila", m: "dinheiro; unidade de valor" }
    ],
    expressoes: ["\"Não tenho um pila, tchê.\"", "\"Bota a bombacha e vamo pro campo.\""],
    frase: "Tchê, sem um pila no bolso e a bombacha suja de barro.",
    rate: 0.9, pitch: 0.95
  }
];

/* ---- RECEITA DA LÍNGUA ---------------------------------------------- */
const RECEITA = [
  {
    id: "indigena",
    nome: "Base Indígena",
    emoji: "🌿",
    cor: "#4E7A4A",
    subtitulo: "Tupi-guarani — o alicerce",
    texto: "A primeira camada de tempero: os povos originários deram nomes à terra, à comida e aos bichos.",
    palavras: ["chimarrão", "pinhão", "capivara", "pipoca", "peteca", "tatu", "mandioca", "erva-mate"]
  },
  {
    id: "portugues",
    nome: "Caldo Português & Açoriano",
    emoji: "⚓",
    cor: "#2E6FA3",
    subtitulo: "O caldo que dá liga",
    texto: "Portugueses e açorianos trouxeram a língua-mãe e, no litoral, o falar rápido e cantado.",
    palavras: ["mané", "rapariga", "fresco", "boi-de-mamão", "renda", "farinha"]
  },
  {
    id: "italiano",
    nome: "Pitada Italiana",
    emoji: "🍷",
    cor: "#B8443E",
    subtitulo: "Da Serra e do Oeste",
    texto: "Os italianos temperaram o Sul com o talian, o vinho e as receitas da nona.",
    palavras: ["cuca", "chimia", "nono", "nona", "grapa", "polenta", "filó", "brodo"]
  },
  {
    id: "alemao",
    nome: "Tempero Alemão",
    emoji: "🍺",
    cor: "#D9A441",
    subtitulo: "Do Vale e do Norte",
    texto: "Alemães adicionaram festas, pães e uma pronúncia bem marcada ao caldo do Sul.",
    palavras: ["chope", "kerb", "schmier", "cuca", "gemüse", "cacetinho"]
  },
  {
    id: "africano",
    nome: "Alma Africana",
    emoji: "🥁",
    cor: "#6B4A2E",
    subtitulo: "O tempero que perfuma tudo",
    texto: "A enorme contribuição africana está no ritmo, na comida e em milhares de palavras do português.",
    palavras: ["quilombo", "cafuné", "moleque", "quitute", "caçula", "samba", "dengo"]
  }
];

/* ---- LINHA DO TEMPO -------------------------------------------------- */
const TIMELINE = [
  { ano: "Antes de 1500", titulo: "Povos Indígenas", emoji: "🏹",
    txt: "Guaranis, kaingangs e xoklengs habitavam o Sul, deixando nomes na terra e na língua." },
  { ano: "Séc. XVI–XVII", titulo: "Chegada Portuguesa", emoji: "⛵",
    txt: "Bandeirantes e colonos portugueses trazem a língua-mãe e os primeiros povoados." },
  { ano: "Séc. XVII–XVIII", titulo: "Missões Jesuíticas", emoji: "⛪",
    txt: "Reduções guarani-espanholas florescem; espanhol e guarani marcam o oeste gaúcho." },
  { ano: "Séc. XVIII", titulo: "Açorianos", emoji: "🌊",
    txt: "Casais açorianos colonizam o litoral catarinense e gaúcho — nasce o falar manezinho." },
  { ano: "A partir de 1824", titulo: "Alemães", emoji: "🏡",
    txt: "A imigração alemã ocupa vales e serras, trazendo língua, festas e arquitetura enxaimel." },
  { ano: "A partir de 1875", titulo: "Italianos", emoji: "🍇",
    txt: "Vênetos e lombardos colonizam a serra; surgem o talian, o vinho e a cuca." },
  { ano: "Séc. XX", titulo: "Eslavos", emoji: "🌾",
    txt: "Poloneses e ucranianos se instalam no Paraná, somando palavras e tradições." },
  { ano: "Séc. XX", titulo: "Migrações Internas", emoji: "🚜",
    txt: "Gaúchos e catarinenses migram ao oeste do PR e ao Centro-Oeste, espalhando sotaques." },
  { ano: "Hoje", titulo: "Português do Sul", emoji: "🗣️",
    txt: "O resultado: uma língua viva, plural e cheia de sotaques que contam a história de cada povo." }
];

/* ---- DICIONÁRIO INTERATIVO ------------------------------------------ */
const DICIONARIO = [
  { p: "Bah", sig: "Interjeição de espanto, ênfase ou admiração.", reg: "RS (todo o estado)", ori: "Platina/espanhola", et: "Redução de 'barbaridade'.", ex: "Bah, que golaço!", cur: "É a palavra-símbolo do gaúcho." },
  { p: "Tchê", sig: "Vocativo usado para chamar alguém, como 'ei, cara'.", reg: "RS", ori: "Guarani/espanhol", et: "Do 'che' platino.", ex: "E aí, tchê?", cur: "Deu origem ao apelido 'os tchês' para gaúchos." },
  { p: "Tri", sig: "Muito, super, bastante.", reg: "RS (Porto Alegre)", ori: "Prefixo 'tri-'", et: "De 'três/triplo', ideia de intensidade.", ex: "Tri legal!", cur: "Intensificador mais usado entre jovens gaúchos." },
  { p: "Guri / Guria", sig: "Menino / menina.", reg: "RS e SC", ori: "Guarani", et: "De 'ngiru' (companheiro).", ex: "Aquele guri é esperto.", cur: "Palavra indígena que virou gauchismo." },
  { p: "Piá", sig: "Menino, garoto.", reg: "Paraná", ori: "Tupi/kaingang", et: "Termo indígena para criança.", ex: "O piá foi pra escola.", cur: "Marca registrada do falar paranaense." },
  { p: "Daí", sig: "Conector de frases; usado para tudo.", reg: "Paraná (Curitiba)", ori: "Português", et: "De 'de aí'.", ex: "Daí eu fui, daí cheguei.", cur: "Curitibano usa 'daí' até para começar história." },
  { p: "Mané", sig: "Nativo da Ilha de Santa Catarina.", reg: "Florianópolis", ori: "Açoriana", et: "De 'Manuel', nome comum entre açorianos.", ex: "Sou mané da ilha!", cur: "Hoje é usado com orgulho pelos ilhéus." },
  { p: "Cuca", sig: "Bolo doce com cobertura de farofa.", reg: "RS e SC", ori: "Alemã", et: "Do alemão 'Kuchen' (bolo).", ex: "Cuca de banana.", cur: "Presente em quase toda mesa de café colonial." },
  { p: "Chimia", sig: "Geleia caseira de frutas.", reg: "Serra Gaúcha", ori: "Italiana/alemã", et: "Possivelmente de 'Schmier'.", ex: "Pão com chimia.", cur: "Viajou pelo Sul junto com a colonização." },
  { p: "Chope", sig: "Cerveja tirada do barril.", reg: "Vale do Itajaí", ori: "Alemã", et: "Do alemão 'Schoppen' (medida).", ex: "Um chope gelado.", cur: "Chegou com os imigrantes alemães." },
  { p: "Schmier", sig: "Pasta doce ou geleia para passar no pão.", reg: "SC (colônias alemãs)", ori: "Alemã", et: "Do alemão 'Schmier' (o que se espalha).", ex: "Schmier no cacetinho.", cur: "Café da manhã clássico das colônias." },
  { p: "Kerb", sig: "Festa comunitária tradicional.", reg: "Colônias alemãs", ori: "Alemã", et: "Do alemão 'Kirchweih' (festa da igreja).", ex: "Fomos na kerb.", cur: "Reúne famílias inteiras com música e comida." },
  { p: "Nono / Nona", sig: "Avô / avó.", reg: "Serra Gaúcha, Oeste SC", ori: "Italiana", et: "Do italiano 'nonno/nonna'.", ex: "A nona fez massa.", cur: "Símbolo afetivo da colônia italiana." },
  { p: "Grapa", sig: "Aguardente de bagaço de uva.", reg: "Serra Gaúcha", ori: "Italiana", et: "Do italiano 'grappa'.", ex: "Um golinho de grapa.", cur: "Destilada artesanalmente nas colônias." },
  { p: "Cacetinho", sig: "Pão francês.", reg: "Rio Grande do Sul", ori: "Portuguesa", et: "De 'cacete' (bastão) — pão em forma de bastão.", ex: "Dois cacetinhos, por favor.", cur: "Marca registrada do RS; fora do estado causa confusão." },
  { p: "Vina", sig: "Salsicha.", reg: "Curitiba", ori: "Alemã", et: "De 'vienense' (salsicha de Viena).", ex: "Cachorro-quente com vina.", cur: "Curitibano não diz 'salsicha', diz 'vina'." },
  { p: "Bombacha", sig: "Calça larga típica do gaúcho.", reg: "Campanha Gaúcha", ori: "Platina", et: "Do espanhol 'bombacha'.", ex: "Vestiu a bombacha.", cur: "Herança da vestimenta dos peões do pampa." },
  { p: "Bagual", sig: "Cavalo xucro; homem forte e valente.", reg: "RS e Oeste SC", ori: "Platina", et: "Do espanhol 'baguala'.", ex: "Domou o bagual.", cur: "Vira elogio: 'é um bagual de bom'." },
  { p: "Capaz", sig: "Expressa 'não acredito' ou 'de jeito nenhum'.", reg: "RS e SC", ori: "Portuguesa", et: "De 'capaz', ressignificado.", ex: "Capaz que ele foi!", cur: "O tom muda tudo: dúvida ou negação." },
  { p: "Pila", sig: "Dinheiro; unidade de valor.", reg: "RS", ori: "Incerta", et: "Gíria regional antiga.", ex: "Custa dez pila.", cur: "'Pila' equivale a 'real' na fala gaúcha." },
  { p: "Cusco", sig: "Cachorro vira-lata.", reg: "RS", ori: "Platina", et: "Do quíchua/espanhol 'cusco'.", ex: "Um cusco na calçada.", cur: "Nada a ver com a cidade peruana." },
  { p: "Filó", sig: "Reunião noturna entre vizinhos e amigos.", reg: "Oeste SC, Serra Gaúcha", ori: "Italiana", et: "Do vêneto 'filò'.", ex: "Vamo num filó.", cur: "Tradição de contar causos à noite." },
  { p: "Sapecar", sig: "Tostar levemente no fogo.", reg: "Planalto Serrano", ori: "Tupi", et: "Do tupi 'sapek' (queimar).", ex: "Sapecar o pinhão.", cur: "Muito usado com o pinhão da araucária." },
  { p: "Trem", sig: "Coisa, objeto qualquer.", reg: "Norte do Paraná", ori: "Mineira", et: "Ressignificação de 'trem' (comboio).", ex: "Passa esse trem aí.", cur: "Herança da migração mineira ao norte do PR." },
  { p: "Rapariga", sig: "Moça, garota (sentido neutro).", reg: "Litoral Catarinense", ori: "Açoriana/portuguesa", et: "Do português europeu.", ex: "A rapariga foi à praia.", cur: "No litoral de SC não tem sentido pejorativo." },
  { p: "Pinhão", sig: "Semente da araucária, comida assada.", reg: "Planalto (SC/RS/PR)", ori: "Tupi/portuguesa", et: "De 'pinha'.", ex: "Pinhão na fogueira.", cur: "Símbolo do inverno serrano." },
  { p: "Erva-mate", sig: "Planta usada no chimarrão e no tereré.", reg: "Todo o Sul", ori: "Guarani", et: "Do guarani 'ka'a' (erva).", ex: "Comprei erva-mate nova.", cur: "Base do chimarrão, patrimônio cultural do Sul." },
  { p: "Chimarrão", sig: "Infusão de erva-mate na cuia, com bomba.", reg: "Todo o Sul", ori: "Guarani", et: "De 'cimarrón' (bruto, sem açúcar).", ex: "Um chimarrão de tarde.", cur: "Rito social que atravessa o Sul inteiro." },
  { p: "Penal", sig: "Estojo escolar.", reg: "Santa Catarina", ori: "Portuguesa", et: "De 'penal' (guarda-penas).", ex: "Guardei no penal.", cur: "Fora de SC, 'penal' soa jurídico!" },
  { p: "Vou ali e volto já", sig: "Vou sair rapidinho.", reg: "Paraná", ori: "Portuguesa", et: "Expressão idiomática.", ex: "Vô ali e vorto já.", cur: "Símbolo do jeito paranaense de falar." },
  { p: "Bergamota", sig: "Mexerica, tangerina.", reg: "Rio Grande do Sul", ori: "Italiana/francesa", et: "De 'bergamotta'.", ex: "Comprei um quilo de bergamota.", cur: "Fora do RS quase ninguém entende." },
  { p: "Istepô", sig: "Pessoa atrapalhada, desajeitada.", reg: "Santa Catarina", ori: "Regional (SC)", et: "Uso catarinense.", ex: "Que istepô, deixou cair tudo!", cur: "Está entre as gírias mais faladas de SC." },
  { p: "Égua", sig: "Interjeição de espanto ou admiração.", reg: "Joinville / Norte de SC", ori: "Regional", et: "Uso local.", ex: "Égua, que golaço!", cur: "Marca registrada do falar joinvilense." },
  { p: "Camaçada", sig: "Surra, pancadaria ('camaçada de pau').", reg: "Santa Catarina (litoral)", ori: "Regional", et: "Expressão popular catarinense.", ex: "Levou uma camaçada no jogo.", cur: "Também significa 'grande quantidade'." }
];

/* ---- QUIZ: MITO, VERDADE OU GÍRIA ----------------------------------- */
const QUIZ = [
  { q: "A palavra 'penal' significa estojo escolar em qual estado?",
    op: ["Rio Grande do Sul", "Santa Catarina", "Paraná", "São Paulo"], c: 1,
    ex: "Em Santa Catarina, 'penal' é o estojo onde se guardam lápis e canetas." },
  { q: "O sotaque cantado do litoral catarinense tem forte influência de qual povo?",
    op: ["Alemães", "Italianos", "Açorianos", "Poloneses"], c: 2,
    ex: "O falar 'manezinho' de Florianópolis vem dos imigrantes açorianos do séc. XVIII." },
  { q: "Qual destas palavras tem origem indígena?",
    op: ["Chope", "Cuca", "Chimarrão", "Grapa"], c: 2,
    ex: "'Chimarrão' vem do guarani/espanhol 'cimarrón' e usa a erva-mate (guarani 'ka'a')." },
  { q: "Qual expressão é típica da Serra Gaúcha (colônia italiana)?",
    op: ["'Bah, tchê!'", "'A nona fez chimia'", "'Daí, piá'", "'Ô mané'"], c: 1,
    ex: "'Nona' (avó) e 'chimia' (geleia) são marcas da colonização italiana da serra." },
  { q: "A palavra 'piá' (menino) é típica de qual estado?",
    op: ["Paraná", "Rio Grande do Sul", "Santa Catarina", "Bahia"], c: 0,
    ex: "'Piá', de origem indígena, é marca registrada do falar paranaense." },
  { q: "'Cuca', o bolo com farofa doce, tem origem em qual imigração?",
    op: ["Italiana", "Alemã", "Açoriana", "Africana"], c: 1,
    ex: "'Cuca' vem do alemão 'Kuchen', que significa bolo." },
  { q: "O que é 'cacetinho' no Rio Grande do Sul?",
    op: ["Um doce", "Pão francês", "Uma briga", "Um cachorro"], c: 1,
    ex: "No RS e norte de SC, 'cacetinho' é o pãozinho francês." },
  { q: "Qual palavra os curitibanos usam no lugar de 'salsicha'?",
    op: ["Vina", "Vená", "Vira", "Salsi"], c: 0,
    ex: "'Vina' (de vienense) é o jeito curitibano de dizer salsicha." },
  { q: "'Bah' é uma interjeição característica de qual estado?",
    op: ["Paraná", "Santa Catarina", "Rio Grande do Sul", "Espírito Santo"], c: 2,
    ex: "'Bah' (redução de 'barbaridade') é a marca sonora do gaúcho." },
  { q: "O 'r' retroflexo (r caipira) no norte do Paraná veio de onde?",
    op: ["Da Alemanha", "Do interior de São Paulo", "Dos Açores", "Da Itália"], c: 1,
    ex: "A colonização cafeeira paulista levou o 'r' caipira ao norte do PR." },
  { q: "'Filó' significa o quê no Oeste de SC e na Serra Gaúcha?",
    op: ["Um prato de massa", "Reunião noturna de vizinhos", "Um tipo de dança", "Uma bebida"], c: 1,
    ex: "'Filó' (do vêneto 'filò') é a reunião noturna para conversar e contar causos." },
  { q: "Que povo deu ao Sul palavras como 'kerb' e 'schmier'?",
    op: ["Italianos", "Açorianos", "Alemães", "Espanhóis"], c: 2,
    ex: "'Kerb' (festa) e 'schmier' (geleia) vêm do alemão." },
  { q: "'Tri legal' quer dizer o quê?",
    op: ["Três vezes legal", "Muito legal", "Pouco legal", "Legal e triste"], c: 1,
    ex: "'Tri' é intensificador gaúcho: 'tri legal' = 'muito legal'." },
  { q: "A cultura do 'pinhão' e da araucária é mais forte em qual região?",
    op: ["Litoral Catarinense", "Campanha Gaúcha", "Planalto Serrano", "Norte do Paraná"], c: 2,
    ex: "O Planalto Serrano (Lages e região), frio e alto, é a terra do pinhão." },
  { q: "'Portunhol' é a mistura de português com qual língua na Campanha Gaúcha?",
    op: ["Alemão", "Espanhol", "Italiano", "Guarani"], c: 1,
    ex: "Na fronteira com Uruguai e Argentina, português e espanhol se misturam." },
  { q: "'Guri' e 'guria' (menino/menina) têm origem em qual língua?",
    op: ["Alemão", "Italiano", "Guarani", "Latim"], c: 2,
    ex: "'Guri' vem do guarani, um empréstimo indígena virado gauchismo." },
  { q: "No Rio Grande do Sul, 'bergamota' é o nome de qual fruta?",
    op: ["Melancia", "Mexerica / tangerina", "Uva", "Ameixa"], c: 1,
    ex: "'Bergamota' é como o gaúcho chama a mexerica (tangerina)." },
  { q: "A palavra curitibana 'vina' (salsicha) deriva de qual origem?",
    op: ["Do alemão 'Wiener' (de Viena)", "Do tupi", "Do italiano", "Do açoriano"], c: 0,
    ex: "'Vina' vem de 'Wiener' (salsicha vienense), herança da imigração." },
  { q: "Em Santa Catarina, o que significa 'istepô'?",
    op: ["Uma comida", "Pessoa atrapalhada", "Um tipo de barco", "Dinheiro"], c: 1,
    ex: "'Istepô' é uma das gírias mais faladas de SC: pessoa atrapalhada/desajeitada." },
  { q: "O que diferencia o 'R caipira' (norte do PR) do 'R' gaúcho?",
    op: ["Nada, são iguais", "O caipira é retroflexo; o gaúcho é vibrante", "O caipira é mudo", "Só a velocidade"], c: 1,
    ex: "O 'R' caipira é retroflexo (língua curvada); o gaúcho tende ao vibrante." },
  { q: "Segundo a linguística, existe um jeito 'errado' de falar português?",
    op: ["Sim, o do interior", "Não — toda variação tem regra e lógica", "Sim, o das gírias", "Só na escrita"], c: 1,
    ex: "Não existe 'erro' na variação: toda fala nativa tem regra e legitimidade histórica." },
  { q: "'Camaçada', em Santa Catarina, quer dizer o quê?",
    op: ["Uma festa", "Uma surra", "Uma plantação", "Um mutirão"], c: 1,
    ex: "'Camaçada' (de pau) é uma surra/pancadaria no falar catarinense." }
];

/* ---- DETETIVE DO PRECONCEITO LINGUÍSTICO (cenários) -----------------
   Cada cenário tem opções nuançadas (nem sempre "é preconceito"): há
   descrição neutra, fato de norma e preconceito de fato. Depois vem o
   conceito, o porquê e o aprofundamento.
-------------------------------------------------------------------- */
const CACA_CENARIOS = [
  {
    contexto: "Sala de aula · o professor lê a redação de um aluno",
    fala: "“Nós vai no passeio.” — O professor diz: isso é burrice, tá tudo errado.",
    pergunta: "Qual é a análise mais correta?",
    opcoes: [
      "O professor tem razão: quem fala assim é burro.",
      "“Nós vai” segue um padrão real da fala popular; a escola deve ensinar “nós vamos” como adequação à norma-padrão, sem humilhar o aluno.",
      "Tanto faz — língua não tem regra nenhuma."
    ],
    correta: 1,
    conceito: "Adequação, não “erro”",
    porque: "A concordância “nós vai” tem lógica própria (verbo na forma não-marcada) e é comum no português popular. O papel da escola é ampliar o repertório do aluno ensinando a norma-padrão para contextos formais — não desqualificar a fala que ele traz de casa.",
    aprofundar: "Chamar de “burrice” é preconceito linguístico; dizer que “não há regra” é o outro extremo, também falso. O equilíbrio: existem a variedade que o aluno já domina e a norma que ele vai aprender como ferramenta."
  },
  {
    contexto: "Jornal · matéria cultural sobre Florianópolis",
    fala: "“O manezinho fala rápido e ‘chia’ o s — herança dos açorianos.”",
    pergunta: "Isso é preconceito linguístico?",
    opcoes: [
      "Sim, está zombando do jeito de falar da ilha.",
      "Não — é uma descrição técnica de traços fonéticos, sem juízo de valor.",
      "Sim, porque afirma que um sotaque existe."
    ],
    correta: 1,
    conceito: "Descrever ≠ discriminar",
    porque: "Descrever características (velocidade, o ‘s’ chiado) é trabalho da linguística e não atribui inferioridade a ninguém. Portanto, não é preconceito.",
    aprofundar: "O preconceito aparece quando se agrega valor — “feio”, “errado”, “inferior”. A descrição neutra faz o oposto: reconhece e valoriza a diversidade."
  },
  {
    contexto: "Rede social · comentário sobre um criador nordestino que mora no Sul",
    fala: "“Aprende a falar direito! Aqui no Sul a gente fala o português correto.”",
    pergunta: "Qual é o problema central da frase?",
    opcoes: [
      "Nenhum: cada lugar fala do seu jeito mesmo.",
      "Ela confunde a própria variedade regional com “o português correto” e desqualifica a do outro — preconceito linguístico.",
      "O problema é o nordestino não ter se adaptado ao Sul."
    ],
    correta: 1,
    conceito: "Mito da língua única e “correta”",
    porque: "Nenhuma variedade regional é “a correta”. Tratar a sua como padrão universal e a do outro como errada é exatamente o preconceito linguístico.",
    aprofundar: "O tal “português correto” costuma ser só a variedade de prestígio dos grandes centros — uma questão social e de poder, não de certo/errado linguístico."
  },
  {
    contexto: "Entrevista de emprego · vaga de atendimento",
    fala: "“Ele é ótimo, mas com esse sotaque do interior vai ‘pegar mal’ com o cliente.”",
    pergunta: "Como a linguística avalia essa decisão?",
    opcoes: [
      "É justa: sotaque atrapalha a comunicação.",
      "É discriminação: o sotaque não afeta a competência nem a compreensão; barrar por isso é preconceito com efeito social real.",
      "Depende — sotaque de cidade grande poderia ficar."
    ],
    correta: 1,
    conceito: "Preconceito com consequência social",
    porque: "Sotaque não mede capacidade e não impede o entendimento. Usá-lo como critério de contratação é discriminação — uma das formas mais comuns e invisíveis.",
    aprofundar: "O preconceito linguístico raramente é assumido: vem disfarçado de “boa comunicação” ou “imagem da empresa”, mas na prática exclui pessoas pela sua origem."
  },
  {
    contexto: "Debate · sobre o talian, falado na Serra Gaúcha",
    fala: "“Talian não é língua, é português mal falado dos colonos italianos.”",
    pergunta: "O que a ciência responde?",
    opcoes: [
      "É verdade: é só um sotaque enrolado.",
      "É falso: o talian é uma variedade de base vêneta, com gramática própria, reconhecida como patrimônio cultural imaterial do Brasil (2014).",
      "É língua estrangeira, então não conta como nada nosso."
    ],
    correta: 1,
    conceito: "Dialeto tem sistema próprio",
    porque: "O talian não é “erro”: é um sistema linguístico com regras, nascido do vêneto e desenvolvido no Brasil. Foi reconhecido como referência cultural nacional pelo IPHAN.",
    aprofundar: "Chamar um dialeto de “língua mal falada” apaga a história e a identidade de comunidades inteiras que o mantêm vivo há mais de um século."
  },
  {
    contexto: "Mesa de bar · um gaúcho e um paulista discutem",
    fala: "Paulista: “‘Bergamota’ está errado, o certo é mexerica.”",
    pergunta: "Quem está com a razão?",
    opcoes: [
      "O paulista: “mexerica” é o nome oficial da fruta.",
      "Nenhum nome é “o certo”: bergamota, mexerica, tangerina e mimosa são sinônimos regionais igualmente válidos.",
      "O gaúcho, porque “bergamota” é mais bonito."
    ],
    correta: 1,
    conceito: "Variação lexical (sinônimos regionais)",
    porque: "A mesma fruta recebe nomes diferentes conforme a região. Nenhum é oficial ou superior — é variação diatópica normal e esperada.",
    aprofundar: "Corrigir o vocabulário do outro como se o seu fosse universal é a forma mais cotidiana (e disfarçada) de preconceito linguístico."
  },
  {
    contexto: "Aula de português · sobre a palavra “menas”",
    fala: "“Quem fala ‘menas coisa’ é ignorante e fala tudo errado.”",
    pergunta: "Qual análise é a correta?",
    opcoes: [
      "“Menas” é aceito normalmente pela norma-padrão.",
      "“Menas” é muito comum na fala, mas não pertence à norma-padrão (menos é invariável); explicar isso sem humilhar é o caminho — desvio de norma não é sinal de inferioridade.",
      "Quem fala “menas” é mesmo menos inteligente."
    ],
    correta: 1,
    conceito: "Norma-padrão × uso real",
    porque: "“Menos” é invariável, então “menas” não faz parte da norma-padrão escrita. Mas isso é uma convenção da variedade de prestígio — o falante não é menos capaz; só precisa conhecer a norma para os contextos que a exigem.",
    aprofundar: "Aqui está o fio da navalha: nem “tudo vale”, nem “quem foge da norma é burro”. Ensina-se a norma como ferramenta social, respeitando a fala de origem."
  }
];

/* ---- JOGO DAS EXPRESSÕES (memória / combinação) --------------------- */
const EXPRESSOES = [
  { exp: "Bah, tchê!", sig: "Espanto/ênfase", reg: "RS" },
  { exp: "Ô mané!", sig: "Chamar alguém (ilha)", reg: "Litoral SC" },
  { exp: "Daí, piá", sig: "E então, menino", reg: "Paraná" },
  { exp: "A nona fez cuca", sig: "A avó fez bolo", reg: "Serra Gaúcha" },
  { exp: "Vamo num filó", sig: "Reunião à noite", reg: "Oeste SC" },
  { exp: "Passa o schmier", sig: "Passa a geleia", reg: "Colônia alemã" }
];

/* ---- CURIOSIDADES ("Você sabia?") ----------------------------------- */
const CURIOSIDADES = [
  "A palavra 'cachorro-quente' com 'vina' é curitibaníssima — noutros lugares é 'salsicha'.",
  "O 'r' caipira do norte do Paraná é o mesmo do interior paulista, não o 'r' gaúcho.",
  "Em Florianópolis, o falar 'manezinho' é tão rápido que virou objeto de estudo.",
  "O talian, falado na Serra Gaúcha, foi declarado patrimônio cultural do Brasil.",
  "'Guri', 'capão' e 'tchê' são heranças guaranis dentro do português do Sul.",
  "A cuca (bolo) e o chope (cerveja) chegaram juntos, com a imigração alemã.",
  "'Bah' é a redução de 'barbaridade' — uma exclamação que virou identidade gaúcha.",
  "Nas colônias, muita gente ainda reza e canta em alemão e em talian."
];

/* ---- PALAVRAS VIAJANTES (origem -> destino no mapa) ----------------- */
/* ---- COORDENADAS GEOGRÁFICAS REAIS + imagem cultural por região ----
   [latitude, longitude] da cidade-referência; img = foto em assets/img
-------------------------------------------------------------------- */
const REG_COORDS = {
  "norte-pr":     { lat: -23.31, lng: -51.16, img: "bg-curitiba.jpg" },
  "curitiba":     { lat: -25.43, lng: -49.27, img: "bg-curitiba.jpg" },
  "campos-gerais":{ lat: -25.09, lng: -50.16, img: "bg-pampa.jpg" },
  "oeste-pr":     { lat: -24.96, lng: -53.46, img: "bg-iguacu.jpg" },
  "oeste-sc":     { lat: -27.10, lng: -52.62, img: "bg-vinhedos.jpg" },
  "planalto-sc":  { lat: -27.82, lng: -50.33, img: "hero-araucaria.jpg" },
  "oeste-vale":   { lat: -26.92, lng: -49.07, img: "bg-enxaimel.jpg" },
  "norte-sc":     { lat: -26.30, lng: -48.85, img: "bg-enxaimel.jpg" },
  "litoral-sc":   { lat: -27.59, lng: -48.55, img: "bg-litoral.jpg" },
  "missoes":      { lat: -28.30, lng: -54.26, img: "bg-missoes.jpg" },
  "serra-gaucha": { lat: -29.17, lng: -51.18, img: "bg-vinhedos.jpg" },
  "porto-alegre": { lat: -30.03, lng: -51.23, img: "bg-pampa.jpg" },
  "campanha":     { lat: -31.33, lng: -54.11, img: "bg-pampa.jpg" }
};

/* ---- FOTOS DOS INGREDIENTES DA RECEITA ---- */
const RECEITA_IMG = {
  "indigena":  [["cult-ervamate.png","Erva-mate"],["cult-pinhao.jpg","Pinhão"]],
  "portugues": [["ing-peixe.jpg","Peixe do mar"],["cult-renda.jpg","Renda açoriana"]],
  "italiano":  [["cult-uva.jpg","Uva / vinho"],["cult-cuca.png","Cuca"]],
  "alemao":    [["cult-chope.jpg","Chope"],["ing-malte.jpg","Malte"]],
  "africano":  [["ing-especiaria.jpg","Especiarias"],["cult-afro.jpg","Ritmo / cultura"]]
};

/* ---- SLIDES CONCEITUAIS (aula) ---- */
const CONCEITOS = [
  { emoji:"🌍", titulo:"Variação Diatópica", sub:"O lugar", cor:"#2e6fa3",
    txt:"Muda conforme a <b>região</b> geográfica. É a variação dos sotaques e do vocabulário no espaço.",
    ex:"“Bergamota” (RS) · “mexerica” (SP) · “tangerina” (norte)" },
  { emoji:"👥", titulo:"Variação Diastrática", sub:"O grupo social", cor:"#b8443e",
    txt:"Muda conforme o <b>grupo social</b>: escolaridade, profissão, faixa etária, comunidade.",
    ex:"Gírias jovens · jargão técnico · fala rural × urbana" },
  { emoji:"🎭", titulo:"Variação Diafásica", sub:"A situação", cor:"#d9a441",
    txt:"Muda conforme a <b>situação</b>: falamos diferente numa entrevista e numa roda de amigos.",
    ex:"“Bom dia, senhor” × “E aí, tchê!”" },
  { emoji:"⏳", titulo:"Variação Diacrônica", sub:"O tempo", cor:"#4e7a4a",
    txt:"Muda ao longo do <b>tempo</b>. Palavras nascem, mudam de sentido e desaparecem.",
    ex:"“Vossa mercê” → “você” → “cê”" }
];

const VIAJANTES = [
  { palavra: "chimarrão", de: "missoes", para: ["campanha", "porto-alegre", "planalto-sc", "oeste-pr", "serra-gaucha"], cor: "#4E7A4A",
    sig: "Infusão de erva-mate na cuia.", ori: "Guarani",
    hist: "Nasceu do hábito guarani de tomar a erva-mate. Dos antigos aldeamentos e das Missões, o rito desceu pelo pampa e subiu a serra — hoje é servido em todo o Sul." },
  { palavra: "cuca", de: "oeste-vale", para: ["norte-sc", "serra-gaucha", "oeste-sc", "planalto-sc"], cor: "#D9A441",
    sig: "Bolo doce com farofa (Kuchen).", ori: "Alemã",
    hist: "Chegou com os imigrantes alemães ao Vale do Itajaí. Das colônias germânicas, a receita viajou e virou presença certa no café colonial de toda a região." },
  { palavra: "chimia", de: "serra-gaucha", para: ["oeste-sc", "oeste-pr", "planalto-sc"], cor: "#D8A93A",
    sig: "Geleia caseira de frutas.", ori: "Italiana / alemã",
    hist: "Tempero das colônias italianas e alemãs da serra. Acompanhou as migrações de descendentes rumo ao oeste catarinense e paranaense." },
  { palavra: "tchê", de: "missoes", para: ["porto-alegre", "campanha", "oeste-pr", "serra-gaucha"], cor: "#C0504D",
    sig: "Vocativo: 'ei, cara'.", ori: "Guarani / espanhol",
    hist: "Do 'che' platino e guarani, espalhou-se pelo Rio Grande do Sul e cruzou a fronteira dos estados junto com os gaúchos migrantes." },
  { palavra: "piá", de: "curitiba", para: ["campos-gerais", "norte-pr", "oeste-pr"], cor: "#E8853B",
    sig: "Menino, garoto.", ori: "Indígena (tupi/kaingang)",
    hist: "Palavra indígena que virou marca do falar paranaense. De Curitiba, acompanhou a ocupação dos Campos Gerais e do oeste do estado." }
];

/* ---- SLIDES: A JORNADA DOS SOTAQUES (aula guiada) ---- */
const SLIDES = [
  { kicker: "A origem de tudo", titulo: "Como nasce um sotaque?", cor: "#4e7a4a", chip: "identidade",
    img: "hero-araucaria.jpg",
    sub: "Três forças moldam o jeito de falar de um povo.",
    pontos: [
      { ic: "🗺️", txt: "<b>Geografia:</b> serras, rios e distância isolam falares e criam variações." },
      { ic: "⛵", txt: "<b>Imigração:</b> cada povo que chega traz sons, palavras e ritmos novos." },
      { ic: "⏳", txt: "<b>Tempo:</b> a língua nunca para — palavras nascem, mudam e somem." }
    ] },
  { kicker: "Séc. XVI ao XVIII", titulo: "A base indígena e portuguesa", cor: "#2e6fa3", chip: "chimarrão",
    img: "bg-missoes.jpg",
    sub: "O alicerce do português do Sul.",
    pontos: [
      { ic: "🏹", txt: "Os <b>tupi-guaranis</b> nomearam a terra: chimarrão, guri, capão, pinhão." },
      { ic: "📖", txt: "Os <b>portugueses</b> trouxeram a língua-mãe e os primeiros povoados." },
      { ic: "⛪", txt: "No oeste, as <b>Missões</b> jesuíticas somaram espanhol e guarani." }
    ] },
  { kicker: "Litoral · séc. XVIII", titulo: "Açorianos: o falar da ilha", cor: "#5fc9ce", chip: "mané",
    img: "bg-litoral.jpg",
    sub: "O sotaque mais cantado do Sul.",
    pontos: [
      { ic: "🌊", txt: "Casais dos <b>Açores</b> colonizaram o litoral catarinense." },
      { ic: "🗣️", txt: "Fala <b>rápida e cantada</b> — o famoso 'manezinho' da ilha." },
      { ic: "💬", txt: "O 's' vira 'sh' e palavras como 'rapariga' guardam o português antigo." }
    ] },
  { kicker: "Vales · a partir de 1824", titulo: "Alemães: o Sul germânico", cor: "#d9a441", chip: "cuca",
    img: "bg-enxaimel.jpg",
    sub: "Casas enxaimel, festa e uma fala bem marcada.",
    pontos: [
      { ic: "🏡", txt: "Ocuparam o <b>Vale do Itajaí</b> e o norte de Santa Catarina." },
      { ic: "🍺", txt: "Deram ao Sul: cuca, chope, kerb, schmier, cacetinho." },
      { ic: "🔤", txt: "A pronúncia alemã marcou o 'r' e certos sons das colônias." }
    ] },
  { kicker: "Serra · a partir de 1875", titulo: "Italianos: a Itália do Sul", cor: "#b8443e", chip: "nona",
    img: "bg-vinhedos.jpg",
    sub: "Vinho, parreiras e o talian.",
    pontos: [
      { ic: "🍇", txt: "Vênetos e lombardos colonizaram a <b>Serra Gaúcha</b> e o oeste de SC." },
      { ic: "🗨️", txt: "Criaram o <b>talian</b> — dialeto hoje reconhecido como patrimônio." },
      { ic: "👵", txt: "Palavras da nona: nono, nona, grapa, filó, polenta." }
    ] },
  { kicker: "Pampa e rotas", titulo: "Fronteira e tropeiros", cor: "#8a6a4a", chip: "bah",
    img: "bg-pampa.jpg",
    sub: "Onde o português encontra o espanhol.",
    pontos: [
      { ic: "🐴", txt: "Na <b>Campanha</b>, contato com o espanhol: bah, tchê, bombacha, pila." },
      { ic: "🧭", txt: "Os <b>tropeiros</b> levaram palavras por PR, SC e RS." },
      { ic: "🌾", txt: "Do guarani ficaram guri, capão e o próprio 'tchê'." }
    ] },
  { kicker: "Panorama", titulo: "Os grandes sotaques do Sul", cor: "#e8853b", chip: "diversidade",
    img: "bg-curitiba.jpg",
    sub: "Um mesmo português, muitas vozes.",
    pontos: [
      { ic: "🔵", txt: "<b>Gaúcho:</b> urbano, serrano e fronteiriço." },
      { ic: "🟢", txt: "<b>Catarinense:</b> manezinho, germânico e serrano." },
      { ic: "🟠", txt: "<b>Paranaense:</b> curitibano e o caipira do norte." }
    ] },
  { kicker: "Aprofundando · 1", titulo: "A Cartografia da Fala Sulista", cor: "#3aa6a0", chip: "transição",
    img: "bg-canion.jpg",
    sub: "Não existe um único sotaque do Sul.",
    pontos: [
      { ic: "🧩", txt: "<b>Pluralidade dialetal:</b> transição contínua entre falares açorianos, caipiras e gaúchos." },
      { ic: "🔊", txt: "<b>Marcas fonéticas:</b> o 'R' caipira difere do 'R' vibrante; a cadência silábica muda." },
      { ic: "📍", txt: "<b>Diferenças provinciais:</b> o 'manezinho' do litoral difere muito do falar do oeste." }
    ] },
  { kicker: "Aprofundando · 2", titulo: "A Matriz Histórica do Dialeto", cor: "#2e6fa3", chip: "formação",
    img: "bg-missoes.jpg",
    sub: "Quem depositou cada camada da língua.",
    pontos: [
      { ic: "🏹", txt: "<b>Raízes indígenas:</b> guarani e kaingang sustentam a toponímia e o léxico da natureza." },
      { ic: "⛵", txt: "<b>Imigração europeia:</b> açorianos, italianos, alemães e eslavos mudaram fonética, ritmo e sintaxe." },
      { ic: "🌎", txt: "<b>África e fronteira:</b> base do português brasileiro em contato com o espanhol platino ao sul." }
    ] },
  { kicker: "Aprofundando · 3", titulo: "Simbiose Sociocultural", cor: "#b8443e", chip: "identidade",
    img: "bg-vinhedos.jpg",
    sub: "A língua como espelho da comunidade.",
    pontos: [
      { ic: "🪞", txt: "<b>Espelho da comunidade:</b> a fala reflete dinâmicas sociais, clima histórico e economia local." },
      { ic: "🔥", txt: "<b>Preservação viva:</b> CTGs, festas de colonização e a gastronomia guardam o vocabulário histórico." },
      { ic: "🤝", txt: "<b>Código de identidade:</b> o dialeto une — é pertencimento, não só comunicação." }
    ] },
  { kicker: "Aprofundando · 4", titulo: "Expressões Endêmicas", cor: "#d9a441", chip: "regionalismos",
    img: "bg-litoral.jpg",
    sub: "Palavras que só existem no mapa do Sul.",
    pontos: [
      { ic: "🟠", txt: "<b>Paraná:</b> vina (salsicha, do al. Wiener), penal (estojo), piá (menino, do tupi)." },
      { ic: "🟢", txt: "<b>Santa Catarina:</b> istepô (atrapalhado), égua (espanto, Joinville), camaçada (surra)." },
      { ic: "🔵", txt: "<b>Rio Grande do Sul:</b> cacetinho (pão francês), bergamota (mexerica), tri (superlativo)." }
    ] },
  { kicker: "Aprofundando · 5", titulo: "Combate ao Preconceito Linguístico", cor: "#7b2b30", chip: "respeito",
    img: "bg-pampa.jpg",
    sub: "Toda fala nativa é legítima.",
    pontos: [
      { ic: "⚖️", txt: "<b>Conceito:</b> julgamento negativo de variedades que fogem da norma-padrão dos grandes centros." },
      { ic: "💔", txt: "<b>Consequências:</b> marginalização, intimidação em ambientes formais e apagamento cultural." },
      { ic: "🔬", txt: "<b>Ciência:</b> não existe 'erro' na variação — toda fala tem regra, lógica e legitimidade histórica." }
    ] }
];

/* ---- POVOS FORMADORES (galeria visual — substitui a árvore) ---------
   Cada povo com foto real, cor, resumo e as palavras que deixou.
-------------------------------------------------------------------- */
const POVOS = [
  { id: "indigena", nome: "Indígena", emoji: "🏹", cor: "#4e7a4a", img: "hero-araucaria.jpg",
    resumo: "Guarani e kaingang nomearam a terra, a comida e a natureza — a base mais antiga do nosso vocabulário.",
    palavras: [
      { w: "chimarrão", o: "guarani 'ka'a' (erva)" }, { w: "piá", o: "tupi/kaingang: criança" },
      { w: "guri", o: "guarani 'ngiru' (companheiro)" }, { w: "pinhão", o: "semente da araucária" },
      { w: "capão", o: "guarani: mata isolada" }, { w: "mandioca", o: "tupi 'mandioca'" },
      { w: "pipoca", o: "tupi 'pï-poca' (estala)" }, { w: "erva-mate", o: "guarani" }
    ] },
  { id: "portugues", nome: "Português", emoji: "⚓", cor: "#2e6fa3", img: "bg-litoral.jpg",
    resumo: "A língua-mãe, trazida pelos colonos, que dá a estrutura a tudo o que veio depois.",
    palavras: [
      { w: "cadê", o: "de 'que é de'" }, { w: "você", o: "de 'vossa mercê'" },
      { w: "farinha", o: "latim 'farina'" }, { w: "broa", o: "pão rústico" }
    ] },
  { id: "acoriano", nome: "Açoriano", emoji: "🌊", cor: "#3aa6a0", img: "bg-litoral.jpg",
    resumo: "Do arquipélago dos Açores veio o falar rápido e cantado do litoral catarinense — o 'manezinho'.",
    palavras: [
      { w: "mané", o: "de 'Manuel'" }, { w: "rapariga", o: "português antigo: moça" },
      { w: "fresco", o: "cheio de frescura" }, { w: "istepô", o: "pessoa atrapalhada" }
    ] },
  { id: "italiano", nome: "Italiano", emoji: "🍷", cor: "#b8443e", img: "bg-vinhedos.jpg",
    resumo: "Vênetos e lombardos criaram o talian na serra, entre parreirais, polenta e o afeto da nona.",
    palavras: [
      { w: "nona", o: "'nonna' (avó)" }, { w: "grapa", o: "'grappa'" },
      { w: "filó", o: "vêneto 'filò'" }, { w: "polenta", o: "italiano" }, { w: "chimia", o: "geleia caseira" }
    ] },
  { id: "alemao", nome: "Alemão", emoji: "🍺", cor: "#d9a441", img: "bg-enxaimel.jpg",
    resumo: "Dos vales germânicos vieram as festas, os pães e uma pronúncia bem marcada.",
    palavras: [
      { w: "cuca", o: "'Kuchen' (bolo)" }, { w: "chope", o: "'Schoppen'" },
      { w: "schmier", o: "'Schmier' (geleia)" }, { w: "kerb", o: "'Kirchweih' (festa)" }, { w: "vina", o: "'Wiener' (salsicha)" }
    ] },
  { id: "africano", nome: "Africano", emoji: "🥁", cor: "#8a5a34", img: "cult-afro.jpg",
    resumo: "A enorme contribuição africana perfuma todo o português brasileiro — no ritmo, na comida e no léxico.",
    palavras: [
      { w: "cafuné", o: "banto" }, { w: "moleque", o: "quimbundo 'mu'leke'" },
      { w: "quilombo", o: "quimbundo" }, { w: "caçula", o: "banto" }, { w: "dengo", o: "banto: manha, carinho" }
    ] },
  { id: "platino", nome: "Espanhol platino", emoji: "🐴", cor: "#7b5aa6", img: "bg-pampa.jpg",
    resumo: "Na fronteira com Uruguai e Argentina, o espanhol dos pampas tingiu a fala gaúcha.",
    palavras: [
      { w: "bah", o: "de 'barbaridade'" }, { w: "tchê", o: "'che' platino" },
      { w: "bombacha", o: "espanhol: calça larga" }, { w: "pila", o: "dinheiro" }, { w: "bagual", o: "cavalo xucro" }
    ] }
];

/* ---- ÁUDIO REAL (opcional) ------------------------------------------
   Áudios reais de sotaque por região praticamente não existem como
   acervo livre. Este é um sistema "plug-and-play": grave seus próprios
   áudios (MP3/OGG/WAV), coloque em assets/audio/ e mapeie aqui.
   Chaves: "reg:<id>" para a frase da região · "wrd:<palavra>" para palavra.
   O que não estiver aqui usa a voz sintética do navegador (fallback).
   Ex.: "reg:litoral-sc": "litoral-sc.mp3", "wrd:bah": "bah.mp3"
-------------------------------------------------------------------- */
const AUDIO_MANIFEST = {};

/* ---- FOTOS DA LINHA DO TEMPO (por índice de TIMELINE) ---- */
const TIMELINE_IMG = [
  "cult-indigena.jpg", "bg-litoral.jpg", "bg-missoes.jpg", "cult-renda.jpg",
  "bg-enxaimel.jpg", "bg-vinhedos.jpg", "cult-eslavo.jpg", "cult-tradicao.jpg", "bg-curitiba.jpg"
];

/* ---- VOZES REAIS (vídeos do YouTube incorporados via embed oficial) --
   IDs de vídeos encontrados em busca — NÃO verificados um a um.
   CONFIRA o conteúdo antes de exibir em aula. É só trocar o campo 'yt'
   pelo ID de outro vídeo (a parte depois de watch?v=).
-------------------------------------------------------------------- */
const VOZES = [
  { titulo: "Como se fala no Rio Grande do Sul", regiao: "Gaúcho · Porto Alegre / RS", yt: "490htEEOMmM", cor: "#4a78b8" },
  { titulo: "Sotaque manezinho de Florianópolis", regiao: "Manezinho · Litoral catarinense", yt: "4Z1juTmlsWo", cor: "#5fc9ce" },
  { titulo: "Talian — o dialeto italiano falado no Brasil", regiao: "Italiano · Serra Gaúcha / Oeste SC", yt: "Mcs8XpFDBuc", cor: "#b8443e" },
  { titulo: "Viver no Brasil falando Hunsrückisch (documentário)", regiao: "Alemão · Vale do Itajaí / Norte SC", yt: "ncN4dkcrU9M", cor: "#d9a441" },
  { titulo: "Como surgiu o sotaque curitibano (Memória Paranaense)", regiao: "Curitibano · Paraná", yt: "jmvDssuuUZ8", cor: "#e8853b" },
  { titulo: "Santa Catarina e as influências no sotaque", regiao: "Oeste · Santa Catarina", yt: "Tv-py9m_K5A", cor: "#8dbe5a" },
  { titulo: "Dialetos do português brasileiro na fronteira", regiao: "Fronteiriço · Campanha / portunhol", yt: "M6oTvWT7N7w", cor: "#8a6a4a" }
];
