// codigo para executar o projeto

//importa o modulo

import { calculaimc, tabelaimc } from "./calculadoraIMC.js"

const peso = 140;
const altura = 1.93;

const resultado = calculaimc(peso, altura);
console.log("resultado do imc:", resultado);

console.log("tabela imc")
console.log(resultado.toFixed(3))
console.table(tabelaimc);

//importar modulo externo
import moment from "moment"

const hoje = moment().locale("pt-br");
console.log("Data");
console.log(hoje.format("DD/MM/YYYY"));