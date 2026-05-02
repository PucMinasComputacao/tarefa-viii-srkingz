// ======================================================
// B.1 - Definição dos dados em JSON
// ======================================================

const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama"],
    nota: 9.3,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 3,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["ficção científica", "terror", "aventura"],
    nota: 8.7,
    assistido: false
  },
  {
    id: 4,
    titulo: "O Senhor dos Anéis",
    tipo: "filme",
    ano: 2001,
    generos: ["fantasia", "aventura"],
    nota: 9.0,
    assistido: true
  },
  {
    id: 5,
    titulo: "Friends",
    tipo: "serie",
    ano: 1994,
    generos: ["comédia"],
    nota: 8.9,
    assistido: false
  },
  {
    id: 6,
    titulo: "Vingadores: Ultimato",
    tipo: "filme",
    ano: 2019,
    generos: ["ação", "aventura"],
    nota: 8.4,
    assistido: true
  }
];

// ======================================================
// B.2 - Acesso e leitura dos dados
// ======================================================

console.log("Catálogo completo:");
console.log(catalogo);

console.log("Título do primeiro item:");
console.log(catalogo[0].titulo);

console.log("Ano do último item:");
console.log(catalogo[catalogo.length - 1].ano);

console.log("Segundo gênero do terceiro item:");

if (catalogo[2].generos[1]) {
  console.log(catalogo[2].generos[1]);
} else {
  console.log("O terceiro item não possui segundo gênero.");
}

// ======================================================
// B.3.A - Listagem com forEach
// ======================================================

console.log("Listagem de todos os títulos:");

catalogo.forEach(function(item) {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// ======================================================
// B.3.B - Transformação com map
// ======================================================

const titulosEmCaixaAlta = catalogo.map(function(item) {
  return item.titulo.toUpperCase();
});

console.log("Títulos em caixa alta:");
console.log(titulosEmCaixaAlta);

// ======================================================
// B.3.C - Seleção com filter
// ======================================================

const naoAssistidos = catalogo.filter(function(item) {
  return item.assistido === false;
});

console.log("Quantidade de itens não assistidos:");
console.log(naoAssistidos.length);

// ======================================================
// B.3.D - Busca com find
// ======================================================

const primeiroNotaAlta = catalogo.find(function(item) {
  return item.nota >= 9;
});

console.log("Primeiro item com nota maior ou igual a 9:");

if (primeiroNotaAlta) {
  console.log(`${primeiroNotaAlta.titulo} - Nota: ${primeiroNotaAlta.nota}`);
} else {
  console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.");
}

// ======================================================
// B.3.E - Agregação com reduce
// ======================================================

const somaNotas = catalogo.reduce(function(acumulador, item) {
  return acumulador + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(function(item) {
  return item.assistido === true;
});

const somaNotasAssistidos = assistidos.reduce(function(acumulador, item) {
  return acumulador + item.nota;
}, 0);

const mediaAssistidos = somaNotasAssistidos / assistidos.length;

console.log("Média geral das notas:");
console.log(mediaGeral.toFixed(2));

console.log("Média das notas dos assistidos:");
console.log(mediaAssistidos.toFixed(2));

// ======================================================
// B.3.F - Checagens com some e every
// ======================================================

const existeItemAntesDe2000 = catalogo.some(function(item) {
  return item.ano < 2000;
});

const todosTemGenero = catalogo.every(function(item) {
  return item.generos.length >= 1;
});

console.log("Existe algum item com ano menor que 2000?");
console.log(existeItemAntesDe2000);

console.log("Todos os itens têm pelo menos 1 gênero?");
console.log(todosTemGenero);

// ======================================================
// B.4 - Saída na tela com DOM simples
// ======================================================

const quantidadeFilmes = catalogo.filter(function(item) {
  return item.tipo === "filme";
}).length;

const quantidadeSeries = catalogo.filter(function(item) {
  return item.tipo === "serie";
}).length;

const rankingTop3 = [...catalogo]
  .sort(function(a, b) {
    return b.nota - a.nota;
  })
  .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
  <h2>Resumo do Catálogo</h2>

  <p><strong>Total de itens:</strong> ${catalogo.length}</p>
  <p><strong>Quantidade de filmes:</strong> ${quantidadeFilmes}</p>
  <p><strong>Quantidade de séries:</strong> ${quantidadeSeries}</p>
  <p><strong>Quantidade de não assistidos:</strong> ${naoAssistidos.length}</p>
  <p><strong>Média geral de notas:</strong> ${mediaGeral.toFixed(2)}</p>

  <h3>Top 3 maiores notas</h3>

  <ol>
    ${rankingTop3.map(function(item) {
      return `<li>${item.titulo} - Nota: ${item.nota}</li>`;
    }).join("")}
  </ol>
`;