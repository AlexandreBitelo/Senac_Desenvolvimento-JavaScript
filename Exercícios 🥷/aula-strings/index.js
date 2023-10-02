// this is a js file
// Alexandre Bitelo

// 1) mostrará, respectivamente;

a. null
b. null
c. 11
d. 3
e. O 4 do array mudará para 19
f. 9


//2)

//"SUBI NUM ÔNIBUS EM MIRROCOS" 27

// Exercícios de escrita de código


let nome = prompt ("Qual seu nome? ");
let email = prompt ("Qual seu email? ");
console.log (`O e-mail ${email} foi cadastrado com sucesso! Seja bem-vindo (a), ${nome}!`);
console.log ("O e-mail " + email + " foi cadastrado com sucesso! Seja bem-vindo (a) " + nome + "!");



let minhasComidas = ["alface", "massa", "pastel", "bolacha", "tomate"];

console.log (minhasComidas);

console.log ("Essas são minhas comidas favoritas: ")
console.log  (minhasComidas[0]);
console.log  (minhasComidas[1]);
console.log  (minhasComidas[2]);
console.log  (minhasComidas[3]);
console.log  (minhasComidas[4]);




let comidaUsu = prompt ("Qual sua comida favorita? ");

minhasComidas [1] = comidaUsu;
console.log  (minhasComidas[0]);
console.log  (minhasComidas[1]);
console.log  (minhasComidas[2]);
console.log  (minhasComidas[3]);
console.log  (minhasComidas[4]);



let listaDeTarefas = [];

listaDeTarefas[0] = prompt ("Qual sua 1º tarefa? ");
listaDeTarefas[1] = prompt ("Qual sua 2º tarefa? ");
listaDeTarefas[2] = prompt ("Qual sua 3º tarefa? ");

console.log (listaDeTarefas);

var rem = prompt ("Qual o índice da tarefa que você terminou (0, 1, 2) ?  ");

listaDeTarefas.splice (rem,1);

console.log (listaDeTarefas);


let frase = prompt ("Digite uma frase: ");

let vet = [];

var test;
var conf;


test = (frase.trim(conf));

console.log (test);
console.log (conf);



/
let frase = prompt("escreva uma frase");
//Sempre que tiver um espaço no array ele irá acrescentar uma vírgula, separando os elementos do array
let arrayFrase = frase.split(" ");

console.log(arrayFrase);






let vet = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

//Mostra a posição do elemento no vetor
console.log (vet.indexOf("Abacaxi"));
//--------------------------------------------

console.log (vet.length);


