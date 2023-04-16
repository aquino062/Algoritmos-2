let clientes = Array(5);
let opcaomenu;
let indiceSucesso;
let nomeAPesquisar;
let indiceExclusao;

function mostrarMenu() {
    opcaomenu = prompt(
        "1- Cadastrar \n2- Pesquisar \n3- Excluir \n4- exibir clientes \n5- sair"
    );
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

        case "4":
            exibirClientes();
            break;
        default:
            console.log("opção inválida");
            break;
    }
} while (opcaomenu !== "5");

function cadastrar() {
    for (let i = 0; i <= 4; i++) {
        if (clientes[i] === undefined) {
            clientes[i] = prompt("Informe o nome do cliente");
            exibirClientes();
            break;
        }
    }
}

function pesquisar() {
    nomeAPesquisar = String(prompt("Informe o nome do cliente a pesquisar"));

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

function exibirClientes() {
    console.log(clientes);
}
