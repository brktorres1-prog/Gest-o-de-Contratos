const API =
"https://script.google.com/macros/s/AKfycbz1yi-nk_DCgTSgFdbtoca19tjM4n6J9sI31M1dwnlbsVuJMJg5IzN_s17aFzBG8SPj/exec";

async function carregarDashboard(){

const resposta =
await fetch(API + "?acao=dashboard");

const dados =
await resposta.json();

document.getElementById("clientes")
.innerText =
dados.clientes;

}

carregarDashboard();
