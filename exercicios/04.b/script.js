class cadastro {
    constructor(nome, rg, idade) {
        this.nome = nome;
        this.rg = rg;
        this.idade = idade;    
    }

}

const clientes = [];
let opcao;
let rgPesquisa;

do {
     opcao = prompt("1-Cadastrar: \n2-Pesquisar:\n3-Sair:");
    if (opcao === "1") {
       
                const nome = prompt("Nome:");
                const rg = prompt("RG:");
                const idade =parseInt(prompt("Idade:"));
                const pessoa = new cadastro(nome, rg, idade);
                clientes.push(pessoa);
            }
            
        
   
    else if (opcao == "2") {
         rgPesquisa = prompt("insira o rg:");
        for (i = 0; i < clientes.length; i++) {
            if (clientes[i].rg === rgPesquisa) {
                console.log(clientes[i].nome + ' encontrado');
                break; 
            }
            else{
                console.log('cliente não encontrado!')
            }
        }
    }else if (opcao !== "3") {
        console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== "3");


