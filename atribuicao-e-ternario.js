//operadores de atribuição
var numero = 20;
numero += 10;
numero /= 10;
numero %= 10;

//operador ternário
idade = 19;
var podeBeber = idade >= 18 ? "Pode beber." : "Não pode beber.";

//Exercícios
//some 500 ao valor de scroll abaixo, atribuindo o novo valor ao scroll
var scroll = 1000;
scroll += 500;

//atribua true para a variavel darCredito, caso o cliente possua carro e casa. E false caso o contrário

var possuiCarro = false;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;
console.log(darCredito);
