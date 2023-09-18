/* 
let estomago = 0;

while (estomago < 100) { 
    console.log ("Quero comer mais coxinhas");
    estomago = estomago + 10;
}


let cont = 0;

console.log ("Olá")
if (resp ==! 0) {
    resp = Number (prompt ("Digite um número: "))
    while (cont < resp){
        resp = Number (prompt ("Digite um número: "))
        let soma = soma + resp
    }


}
*/


/* 
let soma = 0;
let numero = Number (prompt ("Digite um número: "));

while (numero !== 0) {
    soma = soma + numero;
    numero = Number (prompt ("Digite um número"));
}

console.log ("A soma dos números inseridos é: " + soma);
*/

//para i recebe 0 enquanto i for menor que 10, acrescenta mais 1
//for (let i = 0; i < 10; i++)

/*
//for Atalho!! 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
/* 
const numeros = [14, 67, 89, 15, 23];

for (let i = 0; i < 5; i++) {
    const elemento = numeros [i];
    console.log (elemento);
}
*/
/* 
function maiorElemento (list) {
    let cont = 0;
    let maior = list[0];


    for (let cont = 0; cont < list.length; cont++) {
        const elemento = list[cont];


        if (elemento > maior) {
            maior = elemento


        }


        
    }

    return maior




}

let vet = [11, 15, 18, 14, 12, 13];

console.log (maiorElemento (vet));
*/

//para cada elemento do array numeros declara um númeo


//const numeros = [14, 67, 89, 15, 23];

// for (let numero of numeros) {
//     console.log (numero)
// }

//Para cada elemento de numeros é criado um número
//Do meu array para cada elemento executa um código

/* 
numeros.forEach (numero => {
    console.log (numero)
});
*/

//for (let frase)


let palavras = ["a", "b", "c"];

function retornaFraseCompleta (arrayDePalavras) {
let frase = " ";
        for (let i = 0; i < arrayDePalavras.length; i++) {
            const elemento = arrayDePalavras[i];
            frase = frase + " " + elemento;

        } 
    
    return frase;
}

console.log (retornaFraseCompleta (palavras));
















