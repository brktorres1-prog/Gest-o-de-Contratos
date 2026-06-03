const API =
"https://script.google.com/macros/s/AKfycbz1yi-nk_DCgTSgFdbtoca19tjM4n6J9sI31M1dwnlbsVuJMJg5IzN_s17aFzBG8SPj/exec";

async function carregarDashboard() {

  try {

    console.log("Iniciando");

    const resposta =
      await fetch(API + "?acao=dashboard");

    console.log("Resposta recebida");

    const dados =
      await resposta.json();

    console.log(dados);

    document.getElementById("clientes").innerText =
      dados.clientes;

  } catch (erro) {

    console.error(erro);

  }

}

carregarDashboard();
