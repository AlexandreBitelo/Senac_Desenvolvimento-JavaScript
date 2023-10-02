// this is a js file
// Alexandre Bitelo

// 1.
/* O resultado será, respectivamente;
a. false
b. false
c. true
d. true
 */

// 2.
/* O primeiro numero concatenado com o segundo, porque o prompt só retorna valores como String, portanto é necessário converte-los para numero
 */

// 3.

/* let primeiroNumero = prompt ("Digite um número: ");
let segundoNumero = prompt ("Digite outro numero: ");

primeiroNumero = Number(primeiroNumero);
segundoNumero = Number (segundoNumero);

const soma = primeiroNumero + segundoNumero;

console.log (soma);
  */




// Exercícios de escrita de código;

// 1.

let idadeUsu = prompt ("Qual sua idade? ");
let idadeAmg = prompt ("Qual a idade de seu melhor amigo? ");

idadeUsu = Number(idadeUsu);
idadeAmg = Number(idadeAmg);

console.log ("Sua idade é maior do que a do seu amigo? ", idadeUsu > idadeAmg);
console.log ("A diferença de idade é", idadeUsu - idadeAmg, "anos");
 

// 2.

let n = prompt ("Digite um número par: ");

n = Number(n);

console.log ("O resto da divisão deste número por 2 é: ", n % 2);

// todos os números que divididos por 2 e o resto da divisão é igual a zero significam que são pares.
//Logo, se o usuário digitar um número impar o resto da divisão será diferente de zero, sendo 1.

 

// 3.

let idade = prompt ("Qual a sua idade (em anos)? ");

idade = Number(idade);

console.log ("Sua idade em meses é: ", idade * 12);
console.log ("Sua idade em dias é: ", idade * 365);
console.log ("Sua idade me horas é: ", idade * 24)
 

// 4.

let n1 = prompt ("Digite um número: ");
let n2 = prompt ("Digite outro número: ");

n1 = Number(n1);
n2 = Number(n2);
 
console.log ("O primeiro número é maior que o segundo?", n1 > n2);
console.log ("O primeiro número é igual ao segundo? ", n1 === n2);
console.log ("O primeiro número é divisível pelo segundo? ", ((n1 % n2) === 0)); 
console.log ("O segundo número é divisivel pelo primeiro? ", ((n2 % n1) === 0));
 
// Desafios 🐱‍🚀

let tempC;
let tempK;
let tempF;

tempC = Number(tempC);
tempK = Number(tempK);
tempF = Number (tempF);

//a)

tempK = (77 - 32) * (5/9) + 273.15;
console.log ("77ºF equivalem a:", tempK, "K");

tempK = null

//b)
tempF = (80) * (9/5) + 32;
console.log ("80ºC equivalem  a:", tempF, "ºF");

tempF = null;

//c)

tempF = (30) * (9/5) + 32;
tempK = (tempF - 32) * (5/9) + 273.15;
console.log ("30ºC equivalem a ", tempF,"°F", "e equivale a ", tempK,"K");

tempF = null;
tempK = null;

tempC = prompt("Digite uma valor em ºC para converter: ");
tempF = (tempC) * (9/5) + 32;
tempK = (tempF - 32) * (5/9) + 273.15;
console.log (tempC,"ºC equivalem a ", tempF,"°F", "e equivale a ", tempK,"K");

 */

// 2.
//a)


let kw = 280;
let kwh = kw * 0.05
console.log ("Você terá que pagar R$", kwh , "por usar 250Kwh");


//b)
console.log ("Você terá que pagar", (kwh - (kwh * 0.15)), "por ter tido 15% de desconto");
 

// 3.
//a)
console.log ("20lb equivalem a", 20 / 2.205, "Kg");
//b)
console.log ("10.5oz equivalem a", 10.5 /3.527, "Kg");
//c)
console.log ("100mi equivalem a", 100 * 1609, "m");
//d)
console.log ("50ft equivalem a", 50 /  3.281, "m");

console.log ("103.56gal equivalem a", 103.56 * 378.5, "l");

console.log ("450xic equivalem a", 450 / 6, "l");

let lib = prompt ("Digite o valor em libras que você quer converter: ");

lib = Number(lib);

console.log (lib,"lb equivalem a", lib / 2.205,"Kg");
