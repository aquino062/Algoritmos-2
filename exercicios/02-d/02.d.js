let clientes = Array(5);
let opcaomenu;
let indiceSucesso;
let nomeAPesquisar;
let indiceExclusao;

function mostrarMenu() {
  opcaomenu = prompt("1- Cadastrar \n2- Pesquisar \n3- Excluir");
}

do {
  mostrarMenu();

  switch (opcaomenu) {
    case "1":
      cadastrar();
      break;
    case "2":
      pesquisar();
      break;
    case "3":
      excluir();
      break;
    default:
      console.log("opção inválida");
      break;
  }
} while (opcaomenu !== "4");


function cadastrar() {
  let nomeCliente;
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i] === undefined) {
      nomeCliente = prompt("Informe o nome do cliente");
      clientes[i] = nomeCliente;
      break;
    }
  }
}


function pesquisar() {
  nomeAPesquisar = prompt("Informe o nome do cliente a pesquisar");

  indiceSucesso = clientes.indexOf(nomeAPesquisar);

  if (indiceSucesso === -1) {
    console.log("Não foi encontrado");
  } else {
    console.log("Cliente encontrado na posição " + indiceSucesso);
  }
}


function excluir() {
  indiceExclusao = prompt("Informe o índice a excluir");

  if (indiceExclusao >= 0 && indiceExclusao < clientes.length) {
    clientes.splice(indiceExclusao, 1);
  } else {
    console.log("Índice inválido");
  }
}


