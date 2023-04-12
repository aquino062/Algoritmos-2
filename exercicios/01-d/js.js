/*              
const numeros = []
const numerosReverso = []


for(i = 1; i <= 5; i++){
    const numero = Number(prompt('digite um numero'))
numeros.push(numero)
}



for(let aux = numeros.length - 1; aux >= 0 ; aux--){
    numerosReverso.push(numeros[aux])
}

console.log(`Os números digitados foram: ${numeros}`);
console.log(`Os números em ordem inversa são: ${numerosReverso}`);

*/


const array1 = [1 ,3 ,5];
const array2 = [7 , 2 , 4];

let soma = [];

for(let i = 0 ; i <= array1.length - 1; i++){
    soma.push( array1[i] + array2[i])
}

console.log(soma);