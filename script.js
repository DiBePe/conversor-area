// Tabela de conversão: tudo em metros quadrados
const paraM2 = {
  m2: 1,
  ha: 10000,
  km2: 1000000,
  alqueire: 24200,
};

const nomes = {
  m2: "Metro quadrado (m²)",
  ha: "Hectare (ha)",
  km2: "Quilômetro quadrado (km²)",
  alqueire: "Alqueire paulista",
};

const botao = document.getElementById("btn-converter");

botao.addEventListener("click", function () {
  const valor = parseFloat(document.getElementById("valor").value);
  const unidade = document.getElementById("unidade").value;
  const lista = document.getElementById("lista-resultados");
  const resultados = document.getElementById("resultados");

  // Validação
  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido maior que zero.");
    return;
  }

  // Converte para m² primeiro, depois para cada unidade
  const emM2 = valor * paraM2[unidade];

  // Limpa resultados anteriores
  lista.innerHTML = "";

  // Gera uma linha para cada unidade
  Object.keys(paraM2).forEach(function (chave) {
    if (chave === unidade) return; // pula a unidade de origem

    const convertido = emM2 / paraM2[chave];
    const formatado = convertido.toLocaleString("pt-BR", {
      maximumFractionDigits: 6,
    });

    const li = document.createElement("li");
    li.innerHTML = nomes[chave] + ": <span>" + formatado + "</span>";
    lista.appendChild(li);
  });

  resultados.classList.remove("oculto");
});
