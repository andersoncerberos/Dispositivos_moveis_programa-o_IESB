// comentario de uma linha
/*
comentario em bloco
 */
// variaveis
// var não e muito utilizado

let nome = "joão";
const idade = 22;

// idade = 30; não pode ser feoito pois a variavel e uma costante

// operadores
const soma = 2 + 2;
const subitracao = 2 - 2;
const multiplicacao = 2 * 2;
const divisao = 2 / 2;
const resto = 2 % 2;

// operadores de comparação
const igual = 2 == 2;
const diferente = 2 != 2;
const maior = 2 > 2;
const menor = 2 < 2;
const maiorOuIgual = 2 >= 2;
const menorOuIgual = 2 <= 2;

// estruturas condicionais
if (idade >= 18) {
    console.log("maior de idade");
}
if (idade >= 18) {
    console.log("maior de idade");
} else {
    console.log("menor de idade");
}

// operador ternario

const mensagem = idade >= 18 ? "maior de idade" : "menor de idade";
console.log(mensagem);

//ARRAYS

const frutas = ['banana', 'maca', 'uva', 'abacaxi'];

console.log(frutas[0]);
console.log(frutas[1]);
console.log("quantas frutas tem dentro do array?")
console.log(frutas.length);

console.log("adicionar uma fruta no arryas");
frutas.push("laranja");

frutas.forEach(frutas => console.log(frutas));//imprimer todos os itens do array

frutas.pop();//remove o ultimo item
console.log(frutas);

// objetos

let pessoa = {

    nome: "carlos",
    idade: 33,
    peso: 140,
    altura: 170
}

console.log(pessoa.nome)
console.log(pessoa.idade)
pessoa.idade = 23
console.log(pessoa.idade)
console.log(pessoa.nome)
//desatribuicao de objetos

const { peso, altura } = pessoa
console.log(peso)
console.log(altura)

//progacao de objetos

const enderecao = {
    cidade: "brasilia",
    UF: "DF"
}

const pessoacompleto = {
    ...pessoa,
    ...enderecao
}

console.log(pessoacompleto)

//funções
//declarando a função

function somar(numa, numb) {
    const resultado = numa + numb;
    console.log(resultado)
}

//uso
console.log("somando numeros")
somar(2,2)
somar(4,2)
somar(2,72)
somar(2,82)
somar(20,2)

//função anonima
console.log("subatraindo numeros")

const subitrair = function(numa,numb){
    const resultado = numa - numb;
    console.log(resultado)
}
subitrair(4,2)
subitrair(4,5)
subitrair(4,7)
subitrair(8,2)

//arrow function


const multiplicar = (numa,numb) => numa * numb

multiplicar(2,4)
multiplicar(4,4)
multiplicar(26,4)

//importa uma função de outro arquivo
//no padaro node sem o projeto não funciona
//o import por modulos
//import {calculaimc} from "./calculadoeIMC"

const calculadoeIMC = require ("./calculadoeIMC")
const res = calculaimc(80,170)

console.log(res)




