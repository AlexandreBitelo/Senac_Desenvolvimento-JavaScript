/* 
* Alexandre Bitelo
*
*
*/

let nome = prompt ("Qual seu nome? ");
let cor = prompt ("Qual sua cor favorita? ");
console.log ("A cor favorita de "+ nome + " é " + cor);
console.log (`A cor favorita de ${nome} é ${cor}`); 

 
// lowerCase ()
const frase = "OieEeEee!";
console.log (frase); 


const fraseMinuscula = frase.toLowerCase ();
console.log (fraseMinuscula); 


const fraseMaiuscula = frase.toUpperCase();
console.log (fraseMaiuscula);



//MUITO IMPORTANTE; Tira os espaços
const email = "    mika@gmail.com     "

console.log (email.trim())
// "mika@gmail.com"
 

const frase = "Hoje comi cenoura";
console.log (frase.includes ("cenoura")); // true
console.log (frase.includes ("batata"));  //false



const frase = "Hoje comi cenoura, adoro cenoura";
const novaFrase = frase.replaceAll ("cenoura", "batata");
// novaFrase = hoje comi batata, adoro batata
console.log (novaFrase);



const fraseUsuario = prompt ("Digite uma frase: ");
console.log (fraseUsuario.toUpperCase());
console.log (fraseUsuario.replaceAll ("o","I"));
console.log (fraseUsuario.length);


//arrays são vetores
// listas também são vetores

const listaDeCompras = ["batata", "alface", "quijo"];
const listaDeNumerosMega = [2, 13 , 26 , 35 , 41 , 60 ];

const meuArray = ["banana", 15, true];


const listaDeCompras = ["abacate", "banana", "tomate"];
const segundoItem = listaDeCompras[2]; // tomate



const raças = ["bulldog", "pincher", "Chiuaua", "Pitbull", "Rusck Siberiano"];

let resp = prompt("Digite um número de 0 a 4: ");

console.log ("Você escolheu", raças[resp]);


const pokemon = ["bulbassauro", "squirtle", "charmander"];
console.log (pokemon.length); //3



//Inclue itens no vetor 0
const seriesBoas = ["the big bang theory", "brooklyn Nine-nine"];
seriesBoas.includes ("the big bang theory"); //true
seriesBoas.includes ("Game of thrones"); //false

const numeros = [1, 2, 3];

numeros.push (4);
console.log (numeros) //[1, 2, 3, 4]

numeros.push (5,6,7);
console.log (numeros);


const meusPeixes = ["palhaço", "mandarim", "esturjão"];

meusPeixes.pop();
console.log (meusPeixes) // ["palhaço", "mandarim"];



const letras = ["A", "B", "C", "D", "E", "F", "G", "H"];
//Includes (i)

console.log (letras);

letras.splice (2, 1);

console.log (letras);

letras.splice (3, 2);

console.log (letras)


const vet = [1, 2, 3, 4, 5, 6];

console.log (vet.length);
vet.push (7);
console.log (vet);
 
vet.splice (3, 2);
console.log (vet);

console.log (vet.length)









               


