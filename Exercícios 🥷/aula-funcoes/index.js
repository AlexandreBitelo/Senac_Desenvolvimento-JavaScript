// this is a js file
// Alexandre Bitelo

//Exercícios de interpretação de código 
// 1.

// a)
/*
Será impresso, respectivamente:

10
50
*/

//b)
//Não seria impresso nada, devido a falta do comando console.log. Seria feita a função, mas não imprimiria nada

// 2.

// a)
//Essa função verifica se há a palavra cenoura, independente se a prompt do usuário tenha a palavra cenoura em maiusculo e depois imprime a frase junto com true ou false

//b)
/*
Será impresso, respectivamente:

eu gosto de cenoura true
cenoura é bom pra visita true
cenouras crescem na terra terra false
*/

//Exercícios de escrita de código:

//1.

a)
function apresentacao () {
    console.log ("Me chamo Alexandre, tenho 18 anos, moro em São Leopoldo e sou estudante");
};

apresentacao ()


// b)

function introduce (nomeFuncao, idadeFuncao, cidadeFuncao, profissaoFuncao) {

    console.log (`Eu sou ${nomeFuncao}, tenho ${idadeFuncao} anos, moro em ${cidadeFuncao} e sou ${profissaoFuncao}.`)

}

let nome = "Afonso";
let idade = 28;
let cidade = "São Paulo";
let profissão = "Padeiro";

introduce (nome, idade, cidade, profissão)


// 2. 

// a)

function soma (A, B) {
    return (A + B)    
}

let n1 = 5;
let n2 = 7;

console.log (soma (n1, n2));



function maiorOuigual (A, B) {
    const resp = A >= B
    return resp
}

let n1 = prompt ("Digite um numero: ");
let n2 = prompt ("Digite outro número: ");

n1 = Number (n1);
n2 = Number (n2);

console.log (maiorOuigual(n1, n2));


// b)

function par (A) {
    return (A % 2 === 0)
}

let n = prompt ("Digite um número: ");

n = Number (n);

console.log (`Esse número é par? ${par(n)}`);



d)

let mensagem = "Meu nome é alexandre, tenho 18 anos E SOU UM ESTUDANTE";

function paraMaiusculas (frase) {
    console.log(`O tamanho da frase é ${frase.length}` );
    console .log (frase.toUpperCase())
}

paraMaiusculas (mensagem);




function soma (A, B) {
    return (A + B)
}

function diferenca (A, B) {
    return (A - B)
}

function multiplicacao (A, B) {
    return (A * B)
}

function divisao (A, B) {
    return (A / B)
}

let n1 = prompt ("Digite um número: ");
let n2 = prompt ("Digite outro valor: ");

n1 = Number (n1);
n2 = Number (n2);

console.log (`Numeros inseridos ${n1} e ${n2}`);
console.log (`Soma: ${soma(n1, n2 )}`);
console.log (`Diferença: ${diferenca(n1, n2 )}`);
console.log (`Multiplicação: ${multiplicacao (n1, n2) }`);
console.log (`Divisão: ${divisao (n1, n2)}`)



const calculaArea = function (altura, largura) {
    const area = altura * largura 
    return area
}

const areaCalculada = calculaArea(2, 3)

console.log (areaCalculada);


const calculaArea = (altura, largura) => {
    const area = altura * largura 
    return area 
}

const areaCalculada = calculaArea (2, 3);

console.log (areaCalculada)



// DESAFIOS 🥷

a)
const frase = (txt) => console.log (txt)

let texto = "Hoje é um dia muito bonito";

let mensagem = frase (texto);
b)
n1 = 4;
n2 = 5;

const soma = (A, B) => A + B

frase (soma(n1, n2));


const frase = (txt) => console.log (txt);

function hipotenusa (cat1, cat2) {
    const hip = Math.sqrt( ( (cat1**2) + (cat2**2) ) )
    return hip
}

let catetoAdj = 3;
let catetoOp = 4;

frase (hipotenusa(catetoAdj, catetoOp))
