/* 
let condicao = false

if (condicao) {
    console.log ("Entrei no if");
}else {
    console.log ("entri no else")
}

*/
/*
function saoIguais (A, B) {

    if (A === B) {
        return "Os números são iguais!";


    }else if (A > B) {

        return "O primeiro número é maior que o segundo!";
    
    }else {
        return "O segundo número é maior que o primeiro!";
    

    }
};


let num1 = 5;
let num2 = 7;

saoIguais (num1, num2);

num1 = Number(prompt ("Digite um número: "));
num2 = Number(prompt ("Digite outro número: "));

console.log (saoIguais(num1, num2));

/* 
console.log (saoIguais(
    Number(prompt ("Digite um número: ")),
    Number(prompt ("Digite outro número: "
))
*/

/*
let condicao1 = false;
let condicao2 = true;

if (condicao1) {
    console.log ("Entrei no if 1! ");



} else {
    if (condicao2) {
        console.log ("Entri no if 2! ");




    };


};


console.log ("Olá, Mundo!");
*/

/* 
let condicao1 = false;
let condicao2 = false;

if (condicao1) {
    console.log ("Entrei no if 1!");



}else if (condicao2) {
    console.log ("Entrei no if 2!");




}else {
    console.log ("Entrei no else!");




}
*/

let paisDeOrigem;
/* 
if (paisDeOrigem === 'Brasil') {
    console.log ("Brasileiro")
} else if (paisDeOrigem === "EUA") {
    console.log ("Norte Americano")
} else if (paisDeOrigem === "Inglaterra") {
    console.log ("Inglês")
} else if (paisDeOrigem === "França"){
    console.log ("Francês")
}else if (paisDeOrigem === "Itália") {
    console.log ("italiano")
} else if (paisDeOrigem === "Canadá"){
    console.log ("Canadense")
} else {
    console.log ("Nacionalidade não encontrada")
}
*/
/*
paisDeOrigem
switch (paisDeOrigem) {

    case "Brasil":
        console.log ("Brasileiro")
        break

    case "EUA":
        console.log ("Norte Ametricano")
        break

    case "Inglaterra":
        console.log ("Inglês")
        break

    default:
        console.log ("Nascionalidade não encontrada")
        break


}
*/

alert ("Bem-Vindo (a) ao mundo Pokemon!!");

pok = prompt ("Escolha um Pokemon [Bulbasauro], [Charmander] ou [Squirtle]: ");

switch (pok.toLowerCase()) {
    case "bulbasauro":
        console.log ("Você escolheu Bulbasauro e o tipo dele é Planta e Veneno!")
        break
    case "charmander":
        console.log ("Você escolheu Charmander e o tipo dele é Fogo!")
        break
    case "squirtle":
        console.log ("Você escolheu Squirtle e o tipo dele é Água!")
        break
    default:
        console.log ("Pokemon não cadastrado!");
        break
}
