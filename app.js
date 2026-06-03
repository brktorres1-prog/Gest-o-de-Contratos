const API =
"https://script.google.com/macros/s/AKfycbz1yi-nk_DCgTSgFdbtoca19tjM4n6J9sI31M1dwnlbsVuJMJg5IzN_s17aFzBG8SPj/exec";

async function carregarDashboard() {

  try {

    const resposta = await fetch(API + "?acao=dashboard");
    const dados = await resposta.json();

    document.getElementById("clientes").innerText =
      dados.clientes || 0;

    document.getElementById("sinistros").innerText =
      dados.sinistros || 0;

    document.getElementById("transportadores").innerText =
      dados.transportadores || 0;

    document.getElementById("planos").innerText =
      dados.planos || 0;

  } catch (erro) {
    console.error("Erro:", erro);
  }

}

carregarDashboard();
