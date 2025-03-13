console.log("execicio1")

const nome = "anderson";
console.log("nome original")
console.log(nome);

const maior = nome.toUpperCase();
console.log("nome maiusculo")
console.log(maior);

console.log("nome minusculo")
const menor = nome.toLowerCase();
console.log(menor);

console.log("nome invertido")

const invertido = nome.split("").reverse().join("");
console.log(invertido)
console.log("nome alterando um caracter")

const novoNome = nome.replace("d", "X");
console.log(novoNome);

console.log("execicio2")
const numA = 15;
const numB = 5;

soma = numA + numB;
subitrair = numA - numB;
multiplicar = numA * numB;
dividir = numA / numB;

console.log(soma);
console.log(multiplicar);
console.log(subitrair);
console.log(dividir);

if (numA > numB) {
    console.log("numero A e maior")
    const resultado = soma;
    console.log(resultado)
} else {
    console.log("numero A e menos")
    const resultado = dividir;
    console.log(resultado)
}

console.log("execicio3")

const idade = 70;

if (idade >= 18) {
    console.log("maior de idade")
} if (idade >= 65) {
    console.log("pessoa idosa")
}
else {
    console.log("menor de idade")
}

console.log("execicio4")

for(let  i = 0; i <=100 ; i++ ){
    console.log(i);
}

console.log("execicio5")

function dobro(numA) {

    const resultado = numA * 2; 
    console.log(resultado)
}

function triblo(numA) {

    const resultado = numA * 3;
    console.log(resultado)
    
    
}

function quadublo(numA) {

    const resultado = numA * 4;
    console.log(resultado)
    
}
dobro(5);
triblo(5);
quadublo(5);

console.log("execicio6")

let numeros = [10,20,30,40,50]
numeros.push(60)
console.log(numeros)
numeros.shift()
console.log(numeros)












