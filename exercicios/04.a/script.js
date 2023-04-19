class pessoa {
    constructor(nome, idade, rg) {
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
    }
    saudacao() {
        console.log(
            `Meu nome é ${this.nome} e eu tenho ${this.idade} anos, portador do RG: ${this.rg}`
        );
    }
}

const cliente1 = new pessoa(
    prompt("Digite seu nome:"),
    parseInt(prompt("Digite sua idade:")),
    prompt("Digite seu rg:")
);

console.log(cliente1.nome);
console.log(cliente1.idade);
console.log(cliente1.rg);

cliente1.saudacao();

const cliente2 = new pessoa(
    prompt("Digite seu nome:"),
    parseInt( prompt("Digite sua idade:")),
    prompt("Digite seu rg:")
);

cliente2.saudacao();
