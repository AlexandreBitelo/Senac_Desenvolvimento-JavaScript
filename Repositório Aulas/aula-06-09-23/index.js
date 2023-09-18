


let objeto = {
    direcao: "Diretor",
    nome: "nome do fime",
    ano: 1234,
    elenco: ["ator1", "ator2", "ator3"],
    javiu: Boolean(false),
}

console.log (objeto.direcao);
console.log (objeto.nome);
console.log (objeto['ano']);
console.log (objeto["elenco"]);



//O que é const é apenas o objeto!!!


const pessoa = {
    nome: "Ana",
    idade: 19,
    generoMusical: "Rock", 
}

console.log (`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`);



const donoDoPet = {
    nome: "Vitor Hugo",
    pet: {
        nomeDoPet: "Wanda",
        raca: "Vira-lata",
        idade: 1,
    }

},


console.log (donoDoPet.pet.nomeDoPetnomeDoPet);




const curso = {
    nome: "Noturno front-end",
    linguagens: ["JS", "CSS", "HTML"],
};

console.log (curso.linguagens[0]);




const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mika", modulo: 3},
];

console.log (professores[0].nome);



curso.numeroEstudantes = 50
// ou
curso['numeroEstudantes'] = 50

console.log (curso);




let objeto = {
    direcao: "Diretor",
    nome: "nome do fime",
    ano: 1234,
    elenco: ["ator1", "ator2", "ator3"],
    javiu: Boolean(false),
}





objeto.nomesDosPersonagens = ["Alexandre", "Paulo", "Rafael"];

console.log (`O ator ${objeto.nomesDosPersonagens [0]} é do elenco ${objeto.elenco [0]}`);
console.log (`O ator ${objeto.nomesDosPersonagens [1]} é do elenco ${objeto.elenco [1]}`);
console.log (`O ator ${objeto.nomesDosPersonagens [2]} é do elenco ${objeto.elenco [2]}`);

objeto.nomesDosPersonagens [0] = "Xuxa";

console.log (objeto);


const usuario = {
    nome: "prof",
    idade: 25,
    email: "prof@senacrs.com.br",
    cidade: "São Paulo",
};

 

const novoUsuario = {
    ...usuario,
    nome: "João",
    idade: 28,
};

console.log (usuario);
console.log (novoUsuario);

 

const listaDeNomes = ["Mika", "Paula", "Vitor"];

const copiaListaDeNomes = [...listaDeNomes];

copiaListaDeNomes [0] = "Vitor";

console.log (copiaListaDeNomes);

 



const pessoa = {
    nome: "Ana",
    idade: 19,
    generoMusical: "Rock", 
}




function funcaoPessoa (novoObjeto) {
    novoObjeto.comidasPreferidas = ["Arroz", "batata", "Macarrao"],
    novoObjeto.melhorAmigo = {
        nome: "Lucas",
        idade: 20,
    }
    console.log (`O nome da pessoa é ${novoObjeto.nome} e suas comidas preferidas são ${novoObjeto.comidasPreferidas [0]}, ${novoObjeto.comidasPreferidas [1]} e ${novoObjeto.comidasPreferidas [2]}. E seu melhor melhor amigo se chama ${novoObjeto.melhorAmigo.nome} e tem ${novoObjeto.melhorAmigo.idade} anos`)
    return novoObjeto
};
 
console.log = funcaoPessoa(pessoa);


