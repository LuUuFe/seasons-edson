// listas de meses e estações (sem acentos em IDs)
const meses = [
  "janeiro","fevereiro","março","abril","maio","junho",
  "julho","agosto","setembro","outubro","novembro","dezembro"
];
const estacoesNome = ["primavera","verao","outono","inverno"];

const primavera = [
  {nome:"Rosa chá", cor:"rgb(255,182,193)"},
  {nome:"Lilás", cor:"rgb(200,162,200)"},
  {nome:"Verde menta", cor:"rgb(152,255,152)"},
  {nome:"Amarelo limão", cor:"rgb(255,250,85)"},
  {nome:"Peônia", cor:"rgb(255,105,180)"}
];
const verao = [
  {nome:"Turquesa", cor:"rgb(64,224,208)"},
  {nome:"Verde limão", cor:"rgb(173,255,47)"},
  {nome:"Amarelo ouro", cor:"rgb(255,223,0)"},
  {nome:"Laranja pastel", cor:"rgb(255,179,71)"},
  {nome:"Coral", cor:"rgb(255,127,80)"}
];
const outono = [
  {nome:"Amarelo suave", cor:"rgb(255,239,184)"},
  {nome:"Bege claro", cor:"rgb(210,180,140)"},
  {nome:"Pêssego suave", cor:"rgb(255,218,185)"},
  {nome:"Marrom claro", cor:"rgb(222,184,135)"},
  {nome:"Laranja pastel", cor:"rgb(255,160,122)"}
];
const inverno = [
  {nome:"Azul gelo", cor:"rgb(240,248,255)"},
  {nome:"Branco gelo", cor:"rgb(240,255,255)"},
  {nome:"Lavanda", cor:"rgb(230,230,250)"},
  {nome:"Azul suave", cor:"rgb(135,206,235)"},
  {nome:"Azul profundo", cor:"rgb(0,191,255)"}
];

let vetEst = primavera;
let num_cor = 0;
let intervalo;

// calcula estação com base no select e dispara a rotação
function calcula_estacao() {
  if (intervalo) clearInterval(intervalo);

  const m = parseInt(document.getElementById("i_mes").value, 10);
  let idx;
  if ([12,1,2].includes(m))      { idx = 1; vetEst = verao; }
  else if (m >= 3 && m <= 5)      { idx = 2; vetEst = outono; }
  else if (m >= 6 && m <= 8)      { idx = 3; vetEst = inverno; }
  else                            { idx = 0; vetEst = primavera; }

  // exibe nome do mês e da estação
  document.getElementById("nomeMes").textContent     = meses[m-1];
  document.getElementById("nomeEstacao").textContent = estacoesNome[idx];

  // destaca a imagem correta
  document.querySelectorAll(".estacao").forEach(el => el.classList.remove("destaque"));
  document.getElementById(estacoesNome[idx]).classList.add("destaque");

  // reinicia rotação
  num_cor = 0;
  coresEstacao();
  intervalo = setInterval(coresEstacao, 5000);
}

// atualiza nomes, cores dos cards e fundo da página
function coresEstacao() {
  const itens = document.querySelectorAll(".cor");
  const atual = vetEst[num_cor];
  itens.forEach((el, i) => {
    const x = vetEst[(num_cor + i) % vetEst.length];
    el.textContent           = x.nome;
    el.style.backgroundColor = x.cor;
  });

  // muda fundo do .estacoes e do body
  document.querySelector(".estacoes").style.background = atual.cor;
  document.body.style.background = atual.cor;

  num_cor = (num_cor + 1) % vetEst.length;
}

// inicia tudo ao carregar a página
window.addEventListener("load", calcula_estacao);

// Roda a função novamente toda vez que o mês for alterado
document.getElementById("i_mes").addEventListener("change", calcula_estacao);