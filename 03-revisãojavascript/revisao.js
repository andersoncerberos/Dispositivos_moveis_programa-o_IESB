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
const soma = 2 +2;
const subitracao = 2 - 2;
const multiplicacao = 2 * 2;
const divisao = 2 / 2;
const resto  = 2 % 2;

// operadores de comparação
const igual = 2 == 2;
const diferente = 2 != 2;
const maior = 2 > 2; 
const menor = 2 < 2;
const maiorOuIgual = 2 >= 2;
const menorOuIgual = 2 <= 2;

// estruturas condicionais
if(idade >= 18){
    console.log("maior de idade");
}
if(idade >= 18){
    console.log("maior de idade");
}else{
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

