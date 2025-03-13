//criando um modulo no meu projeto
//exporta minha funcionalidades

export function calculaimc(peso,altura){
    return peso/(altura*altura);
}
 export const tabelaimc= [
    { limiter:18.5,classificacao: "magreza"},
    { limiter:24.9,classificacao: "normal"},
    { limiter:29.9,classificacao: "sobrepeso"},
    { limiter:34.9,classificacao: "obesidade gra1"},
    { limiter:39.9,classificacao: "obesidade grau2"},
    { limiter:48.0,classificacao: "obesidade grau 3"},
 ]


