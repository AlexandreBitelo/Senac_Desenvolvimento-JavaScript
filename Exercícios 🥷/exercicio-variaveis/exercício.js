/*
* Alexandre Bitelo
*
*/

// 1. Será exibido o valor da variavel b na tela (10) e depois será exibido o valor de (a) concatenado com (b) Dessa maneira será exibido na tela, respectivamente:
// 10
// 10 5


// 2. Será exibido:
// 20 10 10

// 3. As vaiáveis poderiam ser substituídas por:
// j -> horasTrab
// t -> sal

//Exercícios de escrita de código

let nome;
let idade;

console.log (typeof nome);
console.log (typeof idade);

//Devido a falta de tipagem da variável, ou seja, dizer o tipo dela (string, number etc) a linguagem interpretá como sedo undefined. Uma variável indefinida.



nome = prompt("Qual é seu nome? ");
idade = prompt ("Qual é sua idade? ");

console.log (typeof nome);
console.log (typeof idade);


//Ambas são do tipo string, porque todo comando de entrada recebido pelo usuário vira uma string. Para mudar a idade para Number seria necessário convertê-la para Number

console.log ("Olá", nome, "você tem", idade, "anos.", "Onde", nome, "e", idade, "são os valores que o usuário inseriu");

// 2.
let resp1;
let resp2;
let resp3;

resp1 = prompt ("Você já almoçou hoje? ");
resp2 = prompt ("Você está usando calça jeans? ");
resp3 = prompt ("Você têm um carro? ");

console.log ("Você já almoçou hoje?","-",resp1);
console.log ("Você está usando calça jeans?","-",resp2);
console.log ("Você têm um carro? ","-",resp3);

let a = 10;
let b = 25;
//-------
let c;
c = a;
a = b;
b = c;

console.log ("O novo valor de a é", a);
console.log ("O novo valor de b é", b);

//---- Desafio

let n1;
let n2;

n1 = prompt ("Digite um número: ")
n2 = prompt ("Digite outro número: ")



console.log ("O primeiro número somado ao segundo número resultaria em: ", Number(n1) + Number(n2) );

console.log ("O primeiro número multiplicado pelo segundo número resultaria em: ", Number(n1) * Number(n2));


















