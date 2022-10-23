var idade = 23;
console.log(idade);
//OPERADORES NUMERICOS
var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 50;
var divisao = 100 / 50;
var expoente = 100 ** 50;
var modulo = 100 % 50;

//Operadores numéricos e strings
console.log("100" + 50);
console.log("100" - 50);
console.log("100" * "50");
console.log("comprei 100" / 50);

//Ordem das operações matemáticas
console.log(20 + 5 * 2);
console.log((20 + 5) * 2);
console.log((20 / 5) * 2);
console.log(10 + 10 * 2 + 20 / 2);

//Operadores Aritméticos Unários
var incremento = 5;
console.log(incremento++);
console.log(incremento);
console.log(++incremento);

// const naoincrementa = 5;
// console.log(++naoincrementa);

//Unários com strings

var frase = "Isso não é número";
console.log(+frase);
console.log(-frase);

var idade = "27";
console.log(+idade);
console.log(-idade);
console.log(+idade + 5);

// var possuiFaculdade = true;
// console.log(+possuiFaculdade);
