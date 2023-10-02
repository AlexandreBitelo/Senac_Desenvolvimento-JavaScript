// this is a js file
// Alexandre Bitelo

/*
*
* EXERCÍCIOS COMPLEMENTARES
*
*/

// 1.



function calculaIdade (nasc, atual) {
    return (`Você tem ${atual - nasc} anos de idade`)


};

let anoNasc = Number(prompt("Qual seu ano de nascimento? "));
let anoAtual = Number(prompt("Em que ano estamos? "));

console.log (calculaIdade (anoNasc, anoAtual));




// 2.



function parOuImpar (A) {
    if (A % 2 === 0){
        return "Este número é par";



    }else{
        return "Este número é impar";



    };


};

let n = Number(prompt("Digite um número: "));

console.log (parOuImpar(n));




// 3. 

let frase = prompt ("Digite uma frase: ")

function contadorDeVogais (texto) {
    let palavras = texto.split ("");

    let numeroDeVogais = 0;


    for (let cont = 0; cont < palavras.length; cont++) {
        const element = palavras[cont].toLowerCase() ;

        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {

            numeroDeVogais ++;

        }
        

    }
    return numeroDeVogais;


}

console.log (contadorDeVogais (frase))




// 4.


function celciusParaFah (C) {
    return `${C}ºC equivalem a ${((C * 9/5) + 32)}ºF`
}

let tempC = Number(prompt("Digite a temperatura em Celsius: "))

console.log (celciusParaFah (tempC))






