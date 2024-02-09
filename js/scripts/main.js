/*
const cardsData = [
  {
    title: "Art. 9º",
    content:
      "A prestação de serviços à comunidade consiste na atribuição ao condenado de tarefas gratuitas junto a parques e jardins públicos e unidades de conservação, e, no caso de dano da coisa particular, pública ou tombada, na restauração desta, se possível.",
  },
  {
    title: "Art. 10",
    content:
      "As penas de interdição temporária de direito são a proibição de o condenado contratar com o Poder Público, de receber incentivos fiscais ou quaisquer outros benefícios, bem como de participar de licitações, pelo prazo de cinco anos, no caso de crimes dolosos, e de três anos, no de crimes culposos.",
  },
  {
    title: "Art. 11",
    content: "A suspensão de atividades será aplicada quando estas não estiverem obedecendo às prescrições legais.",
  },
  {
    title: "Art. 12",
    content:
      "A prestação pecuniária consiste no pagamento em dinheiro à vítima ou à entidade pública ou privada com fim social, de importância, fixada pelo juiz, não inferior a um salário mínimo nem superior a trezentos e sessenta salários mínimos. O valor pago será deduzido do montante de eventual reparação civil a que for condenado o infrator.",
  },
  {
    title: "Art. 13",
    content:
      "O recolhimento domiciliar baseia-se na autodisciplina e senso de responsabilidade do condenado, que deverá, sem vigilância, trabalhar, frequentar curso ou exercer atividade autorizada, permanecendo recolhido nos dias e horários de folga em residência ou em qualquer local destinado a sua moradia habitual, conforme estabelecido na sentença condenatória.",
  },
  {
    title: "Art. 14",
    content: "São circunstâncias que atenuam a pena:",
    listItems: [
      "I - baixo grau de instrução ou escolaridade do agente;",
      "II - arrependimento do infrator, manifestado pela espontânea reparação do dano, ou limitação significativa da degradação ambiental causada;",
      "III - comunicação prévia pelo agente do perigo iminente de degradação ambiental;",
      "IV - colaboração com os agentes encarregados da vigilância e do controle ambiental.",
    ],
  },
  {
    title: "Art. 15.",
    content: "São circunstâncias que agravam a pena, quando não constituem ou qualificam o crime:",
    listItems: [
      "I - reincidência nos crimes de natureza ambiental;",
      "II - ter o agente cometido a infração:",
      "a) para obter vantagem pecuniária;",
      "b) coagindo outrem para a execução material da infração;",
      "c) afetando ou expondo a perigo, de maneira grave, a saúde pública ou o meio ambiente;",
      "d) concorrendo para danos à propriedade alheia;",
      "e) atingindo áreas de unidades de conservação ou áreas sujeitas, por ato do Poder Público, a regime especial de uso;",
      "f) atingindo áreas urbanas ou quaisquer assentamentos humanos;",
      "g) em período de defeso à fauna;",
      "h) em domingos ou feriados;",
      "i) à noite;",
      "j) em épocas de seca ou inundações;",
      "l) no interior do espaço territorial especialmente protegido;",
      "m) com o emprego de métodos cruéis para abate ou captura de animais;",
      "n) mediante fraude ou abuso de confiança;",
      "o) mediante abuso do direito de licença, permissão ou autorização ambiental;",
      "p) no interesse de pessoa jurídica mantida, total ou parcialmente, por verbas públicas ou beneficiada por incentivos fiscais;",
      "q) atingindo espécies ameaçadas, listadas em relatórios oficiais das autoridades competentes;",
      "r) facilitada por funcionário público no exercício de suas funções.",
    ],
  },
  {
    title: "Art. 16",
    content:
      "Nos crimes previstos nesta Lei, a suspensão condicional da pena pode ser aplicada nos casos de condenação a pena privativa de liberdade não superior a três anos.",
  },
  {
    title: "Art. 17",
    content:
      "A verificação da reparação a que se refere o § 2º do art. 78 do Código Penal será feita mediante laudo de reparação do dano ambiental, e as condições a serem impostas pelo juiz deverão relacionar-se com a proteção ao meio ambiente.",
  },
  {
    title: "Art. 18",
    content:
      "A multa será calculada segundo os critérios do Código Penal; se revelar-se ineficaz, ainda que aplicada no valor máximo, poderá ser aumentada até três vezes, tendo em vista o valor da vantagem econômica auferida.",
  },
  {
    title: "Art. 18",
    content:
      "A perícia de constatação do dano ambiental, sempre que possível, fixará o montante do prejuízo causado para efeitos de prestação de fiança e cálculo de multa.",
  },
  {
    title: "Art. 19",
    content:
      "A perícia de constatação do dano ambiental, sempre que possível, fixará o montante do prejuízo causado para efeitos de prestação de fiança e cálculo de multa.",
    additionalContent:
      "Parágrafo único. A perícia produzida no inquérito civil ou no juízo cível poderá ser aproveitada no processo penal, instaurando-se o contraditório.",
  },
  {
    title: "Art. 20",
    content:
      "A sentença penal condenatória, sempre que possível, fixará o valor mínimo para reparação dos danos causados pela infração, considerando os prejuízos sofridos pelo ofendido ou pelo meio ambiente.",
    additionalContent:
      "Parágrafo único. Transitada em julgado a sentença condenatória, a execução poderá efetuar-se pelo valor fixado nos termos do caput, sem prejuízo da liquidação para apuração do dano efetivamente sofrido.",
  },
  {
    title: "Art. 21",
    content:
      "As penas aplicáveis isolada, cumulativa ou alternativamente às pessoas jurídicas, de acordo com o disposto no art. 3º, são:",
    listItems: ["I - multa;", "II - restritivas de direitos;", "III - prestação de serviços à comunidade"],
  },
  {
    title: "Art. 22",
    content: "As penas restritivas de direitos da pessoa jurídica são:",
    listItems: [
      "I - suspensão parcial ou total de atividades;",
      "II - interdição temporária de estabelecimento, obra ou atividade;",
      "III - proibição de contratar com o Poder Público, bem como dele obter subsídios, subvenções ou doações.",
      "§ 1º A suspensão de atividades será aplicada quando estas não estiverem obedecendo às disposições legais ou regulamentares, relativas à proteção do meio ambiente.",
      "§ 2º A interdição será aplicada quando o estabelecimento, obra ou atividade estiver funcionando sem a devida autorização, ou em desacordo com a concedida, ou com violação de disposição legal ou regulamentar.",
      "§ 3º A proibição de contratar com o Poder Público e dele obter subsídios, subvenções ou doações não poderá exceder o prazo de dez anos.",
    ],
  },
  {
    title: "Art. 23",
    content: "A prestação de serviços à comunidade pela pessoa jurídica consistirá em:",
    listItems: [
      "I - custeio de programas e de projetos ambientais;",
      "II - execução de obras de recuperação de áreas degradadas;",
      "III - manutenção de espaços públicos;",
      "IV - contribuições a entidades ambientais ou culturais públicas.",
    ],
  },
  {
    title: "Art. 24",
    content:
      "A pessoa jurídica constituída ou utilizada, preponderantemente, com o fim de permitir, facilitar ou ocultar a prática de crime definido nesta Lei terá decretada sua liquidação forçada, seu patrimônio será considerado instrumento do crime e como tal perdido em favor do Fundo Penitenciário Nacional.",
  },
  {
    title: "Art. 25",
    content: "Verificada a infração, serão apreendidos seus produtos e instrumentos, lavrando-se os respectivos autos",
    listItems: [
      "§1º  Os animais serão prioritariamente libertados em seu habitat ou, sendo tal medida inviável ou não recomendável por questões sanitárias, entregues a jardins zoológicos, fundações ou entidades assemelhadas, para guarda e cuidados sob a responsabilidade de técnicos habilitados.        (Redação dada pela Lei nº 13.052, de 2014)",
      "II - execução de obras de recuperação de áreas degradadas;",
      "III - manutenção de espaços públicos;",
      "IV - contribuições a entidades ambientais ou culturais públicas.",
    ],
  },
];


function createCard(cardData) {
  const card = document.createElement("div");
  card.classList.add("card-lei");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  titleDiv.innerHTML = `<h2>${cardData.title}</h2><img src="/assets/caret-down.svg" alt="" />`;
  card.appendChild(titleDiv);

  const corpoDiv = document.createElement("div");
  corpoDiv.classList.add("corpo");
  corpoDiv.innerHTML = `<p>${cardData.content}</p>`;

  if (cardData.listItems) {
    const ul = document.createElement("ul");
    cardData.listItems.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = item;
      ul.appendChild(li);
    });
    corpoDiv.appendChild(ul);
  }

  if (cardData.additionalContent) {
    const additionalParagraph = document.createElement("p");
    additionalParagraph.classList.add("paragrafo-unico");
    additionalParagraph.innerHTML = cardData.additionalContent;
    corpoDiv.appendChild(additionalParagraph);
  }

  card.appendChild(corpoDiv);
  cardsArea.appendChild(card);

  return card;
}

cardsData.forEach((data) => {
  const card = createCard(data);
});
*/

const cards = document.querySelectorAll(".card-lei");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    const corpo = card.querySelector(".corpo");
    corpo.style.display = corpo.style.display === "block" ? "none" : "block";
  });
});
