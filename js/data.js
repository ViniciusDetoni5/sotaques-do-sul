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
    imigracao: "Paulistas, mineiros, italianos e japoneses.",
    origem: "Região de colonização mais recente, impulsionada pela expansão cafeeira no século XX.",
    fonetica: "Sotaque com forte influência do interior paulista e mineiro, marcado pelo “R” retroflexo.",
    descricao: "Onde o “R” puxado paulista se encontra com as terras férteis do Sul do Brasil.",
    curiosidades: [
      "Londrina é conhecida como a “Pequena Londres” devido aos colonizadores britânicos.",
      "A cultura do café formou a base econômica e cultural de quase todas as cidades da região."
    ],
    palavras: [
      { w: "peroba", m: "madeira de lei abundante na região, usada em construções antigas" },
      { w: "terra roxa", m: "solo extremamente fértil originado de rochas basálticas" },
      { w: "gala-seca", m: "pessoa boba ou sem graça" }
    ],
    expressoes: ["“Vamo posá lá hoje.”", "“Fiquei num mato sem cachorro.”"],
    frase: "Rapaz do céu, com essa terra roxa, se der uma chuva vira um barro só!",
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
    imigracao: "Poloneses, ucranianos, italianos, alemães e japoneses.",
    origem: "Inicialmente um povoado de mineração de ouro que enriqueceu com a exploração da erva-mate.",
    fonetica: "Vogais bem fechadas e o “E” pronunciado de forma aguda e ligeiramente anasalada (como em leite quente).",
    descricao: "Cidade modelo, marcada por parques bem cuidados, frio no inverno e um jeito mais reservado.",
    curiosidades: [
      "O termo “vina” vem da palavra alemã “Wiener” (salsicha tipo Viena).",
      "Curitiba concentra a maior comunidade de descendentes de poloneses do Brasil."
    ],
    palavras: [
      { w: "vina", m: "salsicha de cachorro-quente" },
      { w: "penal", m: "estojo escolar para guardar lápis e canetas" },
      { w: "japona", m: "jaqueta grossa de inverno" }
    ],
    expressoes: ["“Dois pila a passagem.”", "“Não dá bola pra isso.”"],
    frase: "Piazada, levem a japona que hoje de tarde o tempo vai virar.",
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
    imigracao: "Tropeiros paulistas e gaúchos, além de poloneses, ucranianos e holandeses.",
    origem: "Rota histórica de passagem de gado e tropas que ligava o Rio Grande do Sul a São Paulo.",
    fonetica: "Sotaque paranaense tradicional, com fala cadenciada e o “E” pronunciado de forma clara.",
    descricao: "Paisagens de campos nativos e formações rochosas, berço histórico do tropeirismo paranaense.",
    curiosidades: [
      "O Parque Estadual de Vila Velha, com seus arenitos, é o grande símbolo natural da região.",
      "A herança tropeira reflete-se na culinária local, como no famoso pão no bafo."
    ],
    palavras: [
      { w: "alambique", m: "local rústico de fazer cachaça" },
      { w: "aviar", m: "apressar-se, arrumar as coisas" },
      { w: "tina", m: "recipiente redondo de madeira para lavar roupas ou guardar água" }
    ],
    expressoes: ["“Deus o livre!”", "“Isso é do tempo do onça.”"],
    frase: "Deus o livre sair com esse vento frio batendo, vamo se aviar logo!",
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
    imigracao: "Gaúchos, catarinenses, alemães, italianos e forte presença paraguaia.",
    origem: "Região desenvolvida inicialmente pelo ciclo da madeira e, mais tarde, pela soja e pela construção de Itaipu.",
    fonetica: "Mistura do sotaque sulista (gaúcho e catarinense) com paranaense, em um ritmo de fala mais rápido.",
    descricao: "Terra de cachoeiras gigantes, agronegócio forte e convivência trinacional.",
    curiosidades: [
      "Foz do Iguaçu abriga uma das maiores diversidades étnicas do Brasil.",
      "O hábito de tomar tereré (erva-mate com água gelada) é fortíssimo devido à fronteira com o Paraguai."
    ],
    palavras: [
      { w: "muamba", m: "mercadoria trazida da fronteira" },
      { w: "guampa", m: "chifre de boi preparado para se beber tereré" },
      { w: "piá", m: "menino, garoto" }
    ],
    expressoes: ["“Bora tomar um tereré.”", "“Capaz que vou lá!”"],
    frase: "Bora sentar ali na sombra e tomar um tereré bem gelado, que hoje tá quente.",
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
    imigracao: "Gaúchos de origem italiana e alemã.",
    origem: "Região de colonização no século XX, desbravada principalmente por migrantes vindos do Rio Grande do Sul.",
    fonetica: "Sotaque predominantemente gaúcho, mas misturado com os dialetos italianos rurais.",
    descricao: "Polo colossal do agronegócio e produção de carnes, com forte espírito comunitário e de trabalho.",
    curiosidades: [
      "Chapecó é reconhecida como a capital do agronegócio em Santa Catarina.",
      "Foi aqui que nasceram e se estruturaram gigantes mundiais do setor de alimentos."
    ],
    palavras: [
      { w: "frigorífico", m: "indústria de abate e processamento de carnes" },
      { w: "gringo", m: "descendente de italianos (usado sem conotação pejorativa)" },
      { w: "bodega", m: "pequeno comércio de secos e molhados ou barzinho" }
    ],
    expressoes: ["“Mas que barbaridade!”", "“Bah, me caiu os butiá do bolso.”"],
    frase: "Mas que barbaridade, depois da lida não tem nada melhor que um chima e um salame.",
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
    imigracao: "Tropeiros e criadores de gado luso-brasileiros.",
    origem: "Região fria de altitude, de tradição pecuarista e forte cultura gaúcha serrana.",
    fonetica: "Fala arrastada e grave, próxima do falar dos Campos de Cima da Serra.",
    descricao: "Onde neva no Brasil: pinhão, fogo de chão e tradição campeira.",
    curiosidades: [
      "Lages e São Joaquim registram as temperaturas mais baixas do país com certa frequência.",
      "A cultura do pinhão e da araucária define a identidade serrana."
    ],
    palavras: [
      { w: "pinhão", m: "semente da araucária, assada na fogueira" },
      { w: "sapecar", m: "tostar levemente no fogo" },
      { w: "campeiro", m: "trabalhador do campo, peão" }
    ],
    expressoes: ["“Tá um frio de renguear cusco.”", "“Vamo sapecar um pinhão.”"],
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
    imigracao: "Predominantemente alemães, seguidos por italianos e austríacos.",
    origem: "Colonização planejada ao longo do rio Itajaí-Açu no século XIX.",
    fonetica: "Sotaque fortemente marcado pela influência do alemão, com o “R” glotal arranhado na garganta.",
    descricao: "O “Vale Europeu”, famoso pelas grandes festas de outubro, cervejarias e forte indústria têxtil.",
    curiosidades: [
      "Blumenau sedia a maior Oktoberfest do mundo fora da Alemanha.",
      "As construções no estilo enxaimel (madeira encaixada com tijolos) são a marca arquitetônica do Vale."
    ],
    palavras: [
      { w: "cuca", m: "bolo tradicional de tabuleiro coberto com farofa doce" },
      { w: "chopp", m: "cerveja não pasteurizada, bebida símbolo da região" },
      { w: "marreco", m: "ave muito consumida na culinária local, servida com repolho roxo" }
    ],
    expressoes: ["“Fazer uma chinelagem.”", "“Tá bom, né?”"],
    frase: "Mas olha que chinelagem, não tem nem uma fatia de cuca pra comer com esse café!",
    rate: 0.95, pitch: 1.0
  },
  {
    id: "norte-sc",
    nome: "Norte Catarinense",
    cidade: "Joinville",
    estado: "Santa Catarina",
    cor: "#3AA6A0",
    x: 720, y: 430,
    influencia: "Influência alemã",
    imigracao: "Alemães, suíços, noruegueses e luso-açorianos na faixa litorânea.",
    origem: "Região desenvolvida em torno da baía de Babitonga e do polo de Joinville (antiga Colônia Dona Francisca).",
    fonetica: "Sotaque catarinense de ritmo acelerado, com sutis influências germânicas na entonação.",
    descricao: "Polo industrial de Santa Catarina, famoso pelas flores, pelos festivais de dança e pelo clima úmido.",
    curiosidades: [
      "Joinville é a única cidade fora da Rússia a ter uma filial da Escola do Teatro Bolshoi.",
      "A cidade tem o apelido carinhoso de “Chuville” devido à alta frequência de chuvas."
    ],
    palavras: [
      { w: "chuvisco", m: "chuva fina e constante, comum na região" },
      { w: "zica", m: "bicicleta" },
      { w: "chuca", m: "elástico para prender o cabelo" }
    ],
    expressoes: ["“Pegou a zica pra ir trabalhar?”", "“És um galego teimoso.”"],
    frase: "Pega a zica e vamo logo, antes que esse chuvisco não pare mais.",
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
    imigracao: "Luso-açorianos predominantes.",
    origem: "Povoamento colonial litorâneo planejado pela Coroa Portuguesa no século XVIII para garantir território.",
    fonetica: "O “manezês”, fala extremamente rápida, muito cantada e com o “S” final chiado.",
    descricao: "Praias paradisíacas, cultura pesqueira fortíssima, rendeiras e lendas folclóricas.",
    curiosidades: [
      "Florianópolis é conhecida como a “Ilha da Magia” devido às antigas lendas de bruxas e lobisomens.",
      "A tradição da renda de bilro ainda é mantida por senhoras nativas nas vilas de pescadores."
    ],
    palavras: [
      { w: "tainha", m: "peixe símbolo da pesca artesanal catarinense" },
      { w: "istepô", m: "pessoa desajeitada, incômoda ou inconveniente" },
      { w: "dazumbanho", m: "expressa grande surpresa ou admiração (dar um banho)" }
    ],
    expressoes: ["“Ó-lhó-lhó, que istepô!”", "“Segue reto toda a vida.”"],
    frase: "Ó-lhó-lhó, tu queres ir dar um banho de mar com esse vento sul, seu istepô?",
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
    imigracao: "Indígenas guaranis, padres espanhóis, luso-brasileiros e, mais tarde, europeus variados.",
    origem: "Antigas reduções (missões) onde padres e milhares de indígenas guaranis viveram no século XVII e XVIII.",
    fonetica: "Sotaque gaúcho clássico, com ritmo fronteiriço cadenciado e influência castelhana.",
    descricao: "Região mística de rica história jesuítica, localizada nas terras vermelhas e férteis do pampa.",
    curiosidades: [
      "As Ruínas de São Miguel das Missões são reconhecidas como Patrimônio Mundial da UNESCO.",
      "A Cruz Missioneira é o grande símbolo espiritual, cultural e turístico da região."
    ],
    palavras: [
      { w: "erva-mate", m: "planta base do chimarrão, nativa e essencial na cultura local" },
      { w: "causo", m: "história folclórica ou exagerada contada ao redor do fogo" },
      { w: "índio", m: "termo usado carinhosamente para se referir a um companheiro ou pessoa da terra" }
    ],
    expressoes: ["“Mas que índio véio!”", "“Tá na mão do palhaço.”"],
    frase: "Buenas, índio véio, senta aí e ceve um mate bem topetudo enquanto te conto um causo.",
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
    imigracao: "Predominantemente italianos e alemães.",
    origem: "Colonização estruturada pelo império brasileiro no século XIX nas encostas do planalto gaúcho.",
    fonetica: "Sotaque “gringo” (talian), com fala cantada, forte pronúncia das consoantes e interjeições em dialeto.",
    descricao: "O pedaço da Itália e da Alemanha no Brasil, com vales repletos de vinícolas, chocolates e turismo forte.",
    curiosidades: [
      "O Talian (dialeto vêneto brasileiro) é reconhecido como patrimônio cultural imaterial do Brasil.",
      "Bento Gonçalves e Caxias do Sul formam o maior polo vitivinícola do país."
    ],
    palavras: [
      { w: "nonno / nonna", m: "avô e avó, no vocabulário familiar do dia a dia" },
      { w: "chimia", m: "doce caseiro de frutas para passar no pão (do alemão schmier)" },
      { w: "galeto", m: "frango jovem assado na brasa, prato típico da região" }
    ],
    expressoes: ["“Ma che belo!”", "“Dio santo, que frio!”"],
    frase: "Ma che belo, a nonna já esquentou a polenta na chapa, vamo comer logo que esfriou de vereda!",
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
    imigracao: "Luso-açorianos, alemães, italianos, africanos e poloneses.",
    origem: "Fundada por casais açorianos no século XVIII, cresceu rápido como o principal porto fluvial da região.",
    fonetica: "Sotaque metropolitano com o “tu” bem marcado, frequentemente conjugado com verbos na terceira pessoa (ex: “tu vai”).",
    descricao: "Capital cultural dos gaúchos, onde o tradicionalismo se encontra com o concreto armado e as praças.",
    curiosidades: [
      "A orla do Guaíba e o Parque da Redenção são os grandes pontos de encontro nos finais de semana.",
      "Porto Alegre é uma das capitais mais arborizadas do país, famosa pela Rua Gonçalo de Carvalho."
    ],
    palavras: [
      { w: "tri", m: "prefixo usado para intensificar algo (ex: tri legal, tri caro)" },
      { w: "cacetinho", m: "pão francês de padaria" },
      { w: "lomba", m: "ladeira, rua íngreme" }
    ],
    expressoes: ["“Bá, que tri legal!”", "“Capaz, tchê!”"],
    frase: "Bá, tá tri legal o sol hoje pra tomar um chima lá na orla do Guaíba, né?",
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
    imigracao: "Luso-brasileiros, espanhóis, além de forte matriz indígena e africana nas charqueadas.",
    origem: "Disputas territoriais e militares entre Portugal e Espanha ao longo de séculos definiram esta fronteira.",
    fonetica: "Fala cadenciada, mais arrastada, com forte presença de vocabulário do “portunhol”.",
    descricao: "As terras planas do extremo sul, berço do gaúcho clássico, das charqueadas e das grandes estâncias de gado.",
    curiosidades: [
      "É a região com divisa seca com o Uruguai; em Sant'Ana do Livramento, basta atravessar a rua para chegar a Rivera.",
      "O pastoreio e a lida campeira tradicional ainda fazem parte do cotidiano das grandes estâncias."
    ],
    palavras: [
      { w: "minuano", m: "vento muito frio e cortante vindo do sudoeste" },
      { w: "cusco", m: "cachorro, geralmente pequeno ou vira-lata" },
      { w: "bombacha", m: "calça larga na altura dos tornozelos, vestimenta típica do gaúcho" }
    ],
    expressoes: ["“Mas bah, tchê!”", "“Te aprochega, vivente.”"],
    frase: "Te aprochega, vivente, que o minuano hoje tá cortando o rosto de tão frio.",
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

/* ---- ÁUDIO REAL ------------------------------------------------------
   O site toca SOMENTE gravações reais. Não existe mais voz sintética (IA).
   Uma região só mostra o botão "Ouvir o sotaque" (e só entra nos jogos de
   escuta) se tiver o arquivo real listado aqui embaixo.

   COMO ADICIONAR O ÁUDIO DE UMA REGIÃO (fluxo WhatsApp):
   1. Grave o áudio da região no WhatsApp.
   2. Baixe pelo WhatsApp Web (o áudio sai em .opus).
   3. Renomeie com o ID da região (ex.: curitiba.opus) e coloque em assets/audio/.
   4. Descomente (ou adicione) a linha correspondente aqui embaixo.

   Formato .opus toca no Chrome, Edge e Firefox. Para usar .mp3, troque a
   extensão na linha. Chave: "reg:<id>" = frase da região.
-------------------------------------------------------------------- */
const AUDIO_MANIFEST = {
  // Regiões COM gravação real (arquivo presente em assets/audio/):
  "reg:oeste-pr":      "oeste-pr.opus",
  "reg:campos-gerais": "campos-gerais.opus",
  "reg:oeste-vale":    "oeste-vale.opus",
  "reg:litoral-sc":    "litoral-sc.opus",
  "reg:oeste-sc":      "oeste-sc.opus",
  "reg:serra-gaucha":  "serra-gaucha.opus",
  "reg:porto-alegre":  "porto-alegre.opus"

  // Ainda SEM gravação real — grave o .opus, coloque em assets/audio/ e
  // descomente a linha (não esqueça a vírgula na linha anterior):
  // ,"reg:norte-pr":    "norte-pr.opus"
  // ,"reg:curitiba":    "curitiba.opus"
  // ,"reg:norte-sc":    "norte-sc.opus"
  // ,"reg:planalto-sc": "planalto-sc.opus"
  // ,"reg:missoes":     "missoes.opus"
  // ,"reg:campanha":    "campanha.opus"
};
/* Expõe no window: o app.js lê como window.AUDIO_MANIFEST.
   (const no topo não vira propriedade do window sozinho.) */
window.AUDIO_MANIFEST = AUDIO_MANIFEST;

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

/* ---- JOGO: A RECEITA DO DIALETO SULISTA -----------------------------
   Cada palavra é um "tempero"; o jogador descobre qual POVO (panela) a
   trouxe. Ensina a origem do vocabulário do Sul, na lógica da receita.
   Modo solo e modo duelo em dupla (mesmos temperos, ganha por pontos e,
   no empate, por tempo).
-------------------------------------------------------------------- */
const JOGO_POVOS = [
  { id: "indigena",  nome: "Indígena",            emoji: "🌿", cor: "#4e7a4a" },
  { id: "portugues", nome: "Português / Açoriano", emoji: "⚓", cor: "#2e6fa3" },
  { id: "italiano",  nome: "Italiano",            emoji: "🍷", cor: "#b8443e" },
  { id: "alemao",    nome: "Alemão",              emoji: "🍺", cor: "#d9a441" },
  { id: "africano",  nome: "Africano",            emoji: "🥁", cor: "#8a5a34" },
  { id: "platino",   nome: "Espanhol platino",    emoji: "🐴", cor: "#7b5aa6" }
];
const JOGO_TEMPEROS = [
  { w: "chimarrão", sig: "infusão de erva-mate na cuia",        povo: "indigena",  ori: "do guarani ka'a (erva); rito herdado dos povos originários" },
  { w: "pinhão",    sig: "semente da araucária, assada no fogo", povo: "indigena",  ori: "alimento típico dos indígenas do planalto" },
  { w: "guri",      sig: "menino, garoto",                       povo: "indigena",  ori: "do guarani 'ngiru' (companheiro)" },
  { w: "piá",       sig: "menino (marca do Paraná)",             povo: "indigena",  ori: "do tupi/kaingang: criança" },
  { w: "capão",     sig: "mata isolada no meio do campo",        povo: "indigena",  ori: "do guarani ka'a-pa'ũ (ilha de mato)" },
  { w: "mané",      sig: "nativo da Ilha de Florianópolis",      povo: "portugues", ori: "de 'Manuel', nome comum entre os açorianos" },
  { w: "rapariga",  sig: "moça, garota (sentido neutro)",        povo: "portugues", ori: "português antigo trazido pelos açorianos" },
  { w: "cacetinho", sig: "pão francês",                          povo: "portugues", ori: "do português 'cacete' (bastão)" },
  { w: "nona",      sig: "avó",                                  povo: "italiano",  ori: "do italiano 'nonna'" },
  { w: "grapa",     sig: "aguardente de bagaço de uva",          povo: "italiano",  ori: "do italiano 'grappa'" },
  { w: "filó",      sig: "reunião noturna entre vizinhos",       povo: "italiano",  ori: "do vêneto 'filò'" },
  { w: "polenta",   sig: "prato de fubá cozido",                 povo: "italiano",  ori: "da cozinha do norte da Itália" },
  { w: "cuca",      sig: "bolo com farofa doce",                 povo: "alemao",    ori: "do alemão 'Kuchen' (bolo)" },
  { w: "chope",     sig: "cerveja de barril",                    povo: "alemao",    ori: "do alemão 'Schoppen' (medida)" },
  { w: "kerb",      sig: "festa comunitária",                    povo: "alemao",    ori: "do alemão 'Kirchweih' (festa da igreja)" },
  { w: "vina",      sig: "salsicha (jeito curitibano)",          povo: "alemao",    ori: "de 'Wiener', a salsicha de Viena" },
  { w: "cafuné",    sig: "carinho na cabeça",                    povo: "africano",  ori: "de raiz banto/quimbundo" },
  { w: "moleque",   sig: "garoto levado",                        povo: "africano",  ori: "do quimbundo 'mu'leke'" },
  { w: "quilombo",  sig: "comunidade de resistência",            povo: "africano",  ori: "do quimbundo 'kilombo'" },
  { w: "caçula",    sig: "filho mais novo",                      povo: "africano",  ori: "de raiz banto" },
  { w: "bah",       sig: "interjeição de espanto",               povo: "platino",   ori: "da fronteira platina; virou marca do gaúcho" },
  { w: "tchê",      sig: "vocativo: 'ei, cara'",                 povo: "platino",   ori: "do 'che' platino (e guarani)" },
  { w: "bombacha",  sig: "calça larga do gaúcho",                povo: "platino",   ori: "do espanhol 'bombacha'" },
  { w: "cusco",     sig: "cachorro vira-lata",                   povo: "platino",   ori: "do quíchua/espanhol 'cusco'" }
];

/* ---- JOGO: A BATALHA DA FEIRA (arraste a comida certa) --------------
   Nomes de comida que confundem quem não é do Sul. emoji = a comida.
-------------------------------------------------------------------- */
const FEIRA_ITENS = [
  { term: "cacetinho", sig: "pão francês",          emoji: "🥖" },
  { term: "bergamota", sig: "mexerica / tangerina", emoji: "🍊" },
  { term: "vina",      sig: "salsicha",             emoji: "🌭" },
  { term: "cuca",      sig: "bolo com farofa doce",  emoji: "🍰" },
  { term: "chimarrão", sig: "erva-mate na cuia",     emoji: "🧉" },
  { term: "pinhão",    sig: "semente da araucária",  emoji: "🌰" },
  { term: "chimia",    sig: "geleia caseira",        emoji: "🍓" },
  { term: "aipim",     sig: "mandioca",              emoji: "🥔" }
];

/* ---- JOGO: DIRETOR DE CINEMA (escolha a legenda da cena muda) -------
   Cenas animadas por emoji (sem GIF externo — funciona offline).
   'anim' é a classe de animação no CSS. correta = índice da melhor legenda.
-------------------------------------------------------------------- */
const CINEMA_CENAS = [
  { gif: "https://media.giphy.com/media/J336VCs1JC42zGRhjH/giphy.gif", emoji: "🐶👍", anim: "cine-bounce",
    opcoes: ["Bah, com certeza, tchê!", "Deus o livre, nem pensar!", "Sei lá, tô na maior dúvida."],
    correta: 0, dica: "O cachorro concorda com tudo — é o maior 'sim'!" },
  { gif: "https://media.giphy.com/media/TbRkubcqlgBksEqMv4/giphy.gif", emoji: "😸", anim: "cine-bounce",
    opcoes: ["Bah, que tri legal, adorei!", "Que preguiça, vou dormir.", "Tô numa bronca danada hoje."],
    correta: 0, dica: "'Tri legal' = muito legal; é pura alegria!" },
  { gif: "https://media.giphy.com/media/g44IvsMccv59F5FODo/giphy.gif", emoji: "🤪", anim: "cine-shake",
    opcoes: ["Olha que chinelagem, tchê!", "Que corrida séria, hein!", "Tá um dia lindo pra estudar."],
    correta: 0, dica: "'Chinelagem' (do Vale do Itajaí) = uma bobagem sem noção." },
  { gif: "https://media.giphy.com/media/G6TgcESZt8FFk8XV7K/giphy.gif", emoji: "🐱❓", anim: "cine-shake",
    opcoes: ["Bah, fiquei sem entender nada, tchê.", "Que delícia, amei a comida!", "Tô super tranquilo aqui."],
    correta: 0, dica: "Cara de quem ficou boiando, sem entender nada." },
  { gif: "https://media.giphy.com/media/GRk3GLfzduq1NtfGt5/giphy.gif", emoji: "🙀", anim: "cine-pop",
    opcoes: ["Ó-lhó-lhó, o que foi isso?!", "Que sono, vou cochilar.", "Não tô nem aí pra isso."],
    correta: 0, dica: "'Ó-lhó-lhó' é a exclamação de surpresa do litoral catarinense." },
  { gif: "https://media.giphy.com/media/gKHGnB1ml0moQdjhEJ/giphy.gif", emoji: "🐶😨", anim: "cine-pop",
    opcoes: ["Bah, tchê, que susto de matar!", "Que tédio, nada acontece.", "Tô numa paz total."],
    correta: 0, dica: "Olhar de quem levou um baita susto." }
];

/* ---- JOGO: RODA DE CHIMARRÃO (batata-quente) — desafios fáceis ---- */
const CHIMARRAO_DESAFIOS = [
  "Qual povo formou o sotaque do Vale do Itajaí (Blumenau)?",
  "Qual imigração deu origem ao sotaque da Serra Gaúcha?",
  "De qual povo vem o 'manezês' do Litoral Catarinense?",
  "Qual migração formou o sotaque do Norte do Paraná?",
  "A fala fronteiriça da Campanha Gaúcha mistura o português com qual idioma?",
  "Qual povo, junto dos jesuítas, formou a fala da região das Missões?",
  "Qual povo colonizou Joinville, no Norte Catarinense?",
  "Qual o nome do dialeto italiano falado na Serra Gaúcha?",
  "Qual povo trouxe as palavras 'cuca' e 'chope'?",
  "O que significa 'bergamota'?",
  "O que é uma 'pandorga'?",
  "De onde vem a interjeição 'bah'?",
  "O que significa 'piá' — e de que origem vem?",
  "O que quer dizer a expressão 'de vereda'?"
];

/* ---- JOGO: TELEFONE SEM FIO (mímica/desenho em dupla) ---------------
   Frases curtas e desenháveis, cheias de regionalismos. dica = tradução.
-------------------------------------------------------------------- */
const MIMICA_FRASES = [
  { f: "O piá soltou a pandorga.",        dica: "piá = menino · pandorga = pipa" },
  { f: "O cusco fugiu no mato.",          dica: "cusco = cachorro vira-lata" },
  { f: "A nona fez cuca.",                dica: "nona = avó · cuca = bolo" },
  { f: "Tomei chimarrão na lomba.",       dica: "lomba = ladeira" },
  { f: "Comprei bergamota na feira.",     dica: "bergamota = mexerica" },
  { f: "O guri comeu o cacetinho.",       dica: "guri = menino · cacetinho = pão francês" },
  { f: "Que frio de renguear cusco!",     dica: "quer dizer: muito frio" },
  { f: "Bah, perdi a bombacha!",          dica: "bombacha = calça larga do gaúcho" },
  { f: "A vó passou chimia no pão.",      dica: "chimia = geleia caseira" },
  { f: "O gato subiu na araucária.",      dica: "araucária = pinheiro do Sul" }
];
