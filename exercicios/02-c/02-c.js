let lado1;
let lado2;
let lado3;

function lerDados() {
    lado1 = parseFloat(prompt("lado1: "));
    lado2 = parseFloat(prompt("lado2: "));
    lado3 = parseFloat(prompt("lado3: "));
}

function ehtriangulo() {
    if (
        lado1 > lado2 + lado3 ||
        lado2 > lado1 + lado3 ||
        lado3 > lado1 + lado2
    ) {
        return false;
    } else {
        return true;
    }
}

function tipoDeTriangulo(){
    if(lado1 === lado2 && lado2 === lado3){
        return "Equilátero"
    } else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
        return "isósceles"
    }else{
        return "Escaleno"
    }
}

lerDados()
 if(ehtriangulo()){
    console.log(tipoDeTriangulo())
 } else{
    console.log('Não é triangulo')
 }
