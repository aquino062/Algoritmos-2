class pessoa{
    constructor(nome, rg, idade){
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
    }


saudacao(){
    console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos, portador do rg: ${this.rg}`)
}
}


const pessoa1 = new pessoa('maria', '123456789', 30 );
const pessoa2 = new pessoa('joão', '123456789',23);

console.log(pessoa2.nome)
console.log(pessoa2.idade)
console.log(pessoa2.rg)

pessoa1.saudacao()