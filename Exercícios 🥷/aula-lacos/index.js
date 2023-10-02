//is this file
//Alexandre Bitelo

// 1.
/*
Ele vai somar a variável valor mais o valaor da variavel i
valor = valor + i
será impresso no console 15
*/

// 2.
/*
a) 19, 21, 23, 25, 27, 30

b) sim, porém para cada índice do vetor seria necessário criar uma variável no for of
*/

//3. 
// 3 linhas

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

let numeroDePets = Number(prompt("Quantos animais de estimação você tem? "));
let nomes = [];


if (numeroDePets === 0) {
    console.log ("Que pena! Você pode adotar um pet!")


} else {

    let cont = 0;
   
    while (cont < numeroDePets) {
    
        nomes [cont] = prompt ("Qual nome deles? ")

        cont ++
    }

}

console.log (nomes)



const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function imprimeArray(vet) {


    for (let cont = 0; cont < vet.length; cont++) {
        let elemento = vet[cont];
        console.log(elemento)
    }


}

function dividePorDez(vet) {
    for (let cont = 0; cont < vet.length; cont++) {
        let dividido = vet[cont] / 10;
        console.log(dividido)
    }

}

function apenasNumerosPares(vet) {
    for (let cont = 0; cont < vet.length; cont++) {
        let element = vet[cont];
        if (element % 2 === 0) {
            console.log(element)
        }


    }



}

function posisaoDoElemento(vet) {
    for (let cont = 0; cont < vet.length; cont++) {
        let element = vet[cont];
        console.log(`O elemento do índex ${cont} é: ${vet[cont]}`)
    }
}

function maiorEMenorElemento(vet) {
    let menor;
    let maior;

    for (let cont = 0; cont < vet.length; cont++) {
        const element = vet[cont];
        
        if (cont === 0) {
            menor = element;
            maior = element;
        }

        if (menor > element) {

            menor = element;


        } else if (maior < element) {
            maior = element



        }





    }


    console.log(`O menor valor é ${menor}`)
    console.log(`O maior valor é ${maior}`)


}


console.log (imprimeArray(arrayOriginal));
console.log (dividePorDez(arrayOriginal))
console.log (apenasNumerosPares(arrayOriginal))
console.log (posisaoDoElemento(arrayOriginal))
maiorEMenorElemento(arrayOriginal)


//let numeroCerto = Number(prompt("Digite o número pensado: "));

//ALTERAÇÃO
let numeroCerto;

numeroCerto = (Math.random () * (50 - 0) + 0)

numeroCerto = Number.parseInt (numeroCerto);

console.log (numeroCerto)



console.log("Vamos Jogar!");

let vitoria = 0;
let contador = 0;


while (vitoria !== 1) {


    let resp = Number(prompt("Qual é o número? "));


    if (resp === numeroCerto) {
        console.log("Acertou!!!")
        vitoria = 1;



    } else if (resp > numeroCerto) {
        console.log(`O número chutado foi: ${resp}`);
        console.log(`Errrrrrrou, é menor`);



    } else if (resp < numeroCerto) {
        console.log(`O número chutado foi: ${resp}`);
        console.log(`Errrrrrrou, é maior`);



    }

    contador ++



}

console.log (`O número de tentativas foi: ${contador}`)











