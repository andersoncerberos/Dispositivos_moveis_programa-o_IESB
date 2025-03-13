import { divisao,multiplicacao,subitracao,soma } from './calculadora.js';
import moment from 'moment';

console.log("Soma: ", soma(10, 5));
console.log("Subtração: ",subitracao(10, 5));
console.log("Multiplicação: ", multiplicacao(10, 5));
console.log("Divisão: ", divisao(10, 5));

function calcularIdade(anoNascimento) {
    // implemente a lógica para calcular a idade
    const anoatual = moment().year();
    return anoatual - anoNascimento;
}

const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log("idade:",idade);
