const API =
"https://script.google.com/macros/s/SUA_URL/exec";

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
