/* 
function olaMundo () {
    console.log ("Olá Mundo!");
}

olaMundo();
*/






/* 
function olaNome  (nomefunc){
    console.log (`Olá ${nomefunc}!`);
}

let nome = prompt ("Qual é seu nome? ");
olaNome (nome);



function imprimirNome (nome){
    console.log ("Olá" + nome);
}

*/

//Interação com usuário FICA FORA DA FUNÇÃO -> BOAS PRÁTICAS DA PROMGRAMAÇÂO

/* 
imprimirNome ("Alexandre");
imprimirNome ("Carlos");
imprimirNome ("Maria");
imprimirNome ("joão");
*/

/* 
const a = 1;

function imprimeVariavel (){
    const b = 2
    console.log ("Variavel a", a);
    console.log ("Variavel b", b);
}


imprimeVariavel ();

console.log ("Variavel a", a);
console.log ("Variavel b", b);
*/

//Cada função tem UM RETORNO, APENAS UMA VARIÁVEL ou array
/* 
function calculaArea (altura, largura) {
    const area = altura * largura
    return area
}

const areaCalculada = calculaArea(2, 3);


console.log (areaCalculada);
*/

/* 
function soma(A, B){
    return A + B;
}


 
let n1 = prompt ("Digite um número: ");
let n2 = prompt ("Digite outro número:");
let total;

n1 = Number(n1);
n2 = Number(n2);

total = soma(n1, n2);

console.log (`A soma entre ${n1} e ${n2} é igual a ${total}`);

*/



/* 
let vet = [6, 1, 2, 9];

console.log (vet)


function divideArray (novoArray){
    novoArray [0] = novoArray [0] / 2;
    novoArray [3] = novoArray [3] / 2;
    
    return novoArray;
}

let novoVet = divideArray (vet);

console.log (novoVet);

*/

let vet = [6, 1, 2, 9, 10, 24];
console.log (vet);



function divideArray (novoArray){
    
    /* 
    novoArray [0] = novoArray [0] / 2;
    novoArray [tamanhoDoVetor] = novoArray [tamanhoDoVetor] / 2; 
    */
    let tamanhoDoVetor = (vet.length - 1);
    A = novoArray [0] / 2;
    B = novoArray [tamanhoDoVetor] / 2

    novoArray = [A, B];

    return novoArray;
}

let novoVet = divideArray (vet);

console.log (novoVet);



funcao retornaPrimeiroEUltimo(meuarray = []){
    let novoArray = [];
    novoArray [0] = (meuarray[meuarray.length - 1]) /2;
    novoArray [1] = (meuarray[0]) /2;
    return novoArray;
}

let antigoArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log (retornaPrimeiroEUltimo(antigoArray));














