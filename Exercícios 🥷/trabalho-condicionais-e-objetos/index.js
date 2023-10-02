//
//Alexandre Bitelo

// INTERPRETAÇÃO DE CÓDIGO

// 1.
// a )Diz se a pessoa pode ou não dirigir

// b) será impresso a primeira mensagem dizendo que ela pode dirigir, já a outra mensagem não será impresso

// 2.

// a) dizer se o animal é carnívoro ou não

// b) Leão é um animal carnívoro.

// 3.

// a) Diz se o número é maior que 5 e diz se o número é par
/*
b)
O número é maior que 5.
O número é par
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1. 

let idade = Number(prompt ("Qual sua idade? "));

if (idade >= 18) {
    console.log ("Você é maior de idade");
}else {
    console.log ("Você é menor de idade");
}


// 2.

let turno = prompt("Em qual turno você estuda? \n [M] matutino \n [T] tarde \n [N] noturno");

if (turno.toLocaleUpperCase() === "M") {
    console.log ("Bom Dia!");
}else if (turno.toLocaleUpperCase() === "T") {
    console.log ("Boa Tarde!");
}else {
    console.log ("Boa Noite!");
}


// 3.


let turno = prompt("Em qual turno você estuda? \n [M] matutino \n [T] tarde \n [N] noturno");

switch (turno.toLocaleUpperCase ()) {
    case "M": 
        console.log ("Bom dia!");
        break;


    case ("T"):
        console.log ("Boa Tarde!");
        break;

    case "N":
        console.log ("Boa Noite!");
        break;
}


// 4.

const aluno = {
    nome: "Jorge",
    idade: 18,
    tipoDeCurso: "graduação",
    temBolsa: false
}

function podeSeCandidatar (candidato) {
    if (candidato.idade < 30 && candidato.tipoDeCurso.toLowerCase () === "graduação" && candidato.temBolsa === false) {
        console.log ("Você pode se candidatar a uma bolsa de estudos!")


    }else{
        console.log ("Desculpe, você não atende os requesitos para bolsa.")
    
    }
}


podeSeCandidatar (aluno)


// 5.

let produto = {
    nome: "Desodorante",
    preco: 15.4,
    desconto: 0.15,
    freteGratis: true,

}

function impressaoDoProduto (prod) {

    if (prod.desconto > 0 && prod.freteGratis === true){
        return `Preço final: ${prod.preco - (prod.preco * prod.desconto)} (Frete Grátis)`


    } else if (prod.desconto > 0 && prod.freteGratis === false) {
        return (`Preço final: ${(prod.preco - (prod.preco * prod.desconto))}`)



    }else if (prod.desconto === 0 && prod.freteGratis === true) {
        return (`Preço final: ${prod.preco} (Frete Grátis)`)


    }else {
        return (`Preço final: ${prod.preco}`)


    }


}


impressaoDoProduto (produto)
