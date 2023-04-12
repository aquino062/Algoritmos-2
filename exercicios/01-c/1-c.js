let nomes = [];
let encotrado = false


for (let i = 0; i < 5; i++) {
let nome = String(prompt('digite um nome'));
nomes.push(nome)
}


let pesquisa = String(prompt('informe um nome a pesquisar'))

for( i = 0; i < 5 ;i++){
    if(nomes[i] === pesquisa){
        encotrado = true
        break;
        
    } 
}

if(encotrado){
    console.log('encontrado')
}else{
    console.log('nao encontrado')
}