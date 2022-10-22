//descobrindo tipo de variável
var idade = 27;
var time = null;
var simbolo = Symbol();
console.log(typeof simbolo);

//strings
var nome = "Rodolfo ";
var sobrenome = "Campos";
var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = "Halland fez " + gols + " " + "gols";
console.log(frase);

//concatenando strings

var ano = "2018";
var mes = 8;

console.log(ano + mes);
console.log(typeof (ano + mes));

//uso das aspas
var melhor = "teste";
var frase1 = "Esse é o 'melhor' jogo";
console.log(frase1);
var frase1 = 'Esse é o "melhor" jogo';
console.log(frase1);

//template string
// var frase2 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2);

//EXERCÍCIO

//Declare uma variável contendo uma string
var cor = "azul";

//Declare uma variável contendo um número dentro de uma string
var numerostring = "1";
//Declare uma variável com sua idade
var idade2 = 27;

//Declare duas variáveis, uma com seu nome
var nome2 = "Rodolfo";

//E outra com seu sobrenome e some as mesmas
var sobrenome2 = "Campos";
var nomecompleto2 = nome2 + " " + sobrenome;

//Coloque a seguinte frase em uma variável: It's time
var frase3 = "It's time";

//Verifique o tipo de variável que contém seu nome
console.log(typeof nomecompleto2);
