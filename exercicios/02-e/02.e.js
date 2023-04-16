let gabarito = ["", "", "", "", "", "", "", "", "", ""];
let opcaomenu;
let notaFinal;

function mostrarMenu() {
    opcaomenu = prompt("1- cadastrar Gabarito \n2-cadastrar prova \n3-resultado \n4-Sair");
}

do {
    mostrarMenu();

    switch (opcaomenu) {
        case "1":
            cadastrarGabarito();
            break;
        case "2":
            notaFinal = cadastrarProva();

            break;  

            case'3':
            console.log(`Nota final: ${notaFinal}`)
            console.log(`Situação: ${verificarSituacao(notaFinal)}`)
            break;

            case'4':
            console.log('Programa finalizado!')
            break;

        default:
            console.log("Opção inválida! Digite 1, 2, 3 ou 4.");
            break;
    }
} while (opcaomenu !== "4");

function cadastrarGabarito() {
    
    for (i = 0; i < 10; i++) {
        gabarito[i] = String(prompt(`Informe a resposta da questão ${i + 1}`)).toLowerCase();
    }
}

function cadastrarProva() {
    let nota = 0;

    for (i = 0; i < 10; i++) {
        let resposta = String(prompt(`informe a resposta da questão ${i + 1}`)).toLowerCase();

        if (resposta === gabarito[i]) {
            nota = nota + 1;
        }
    }
    return nota;
}

function verificarSituacao(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}


