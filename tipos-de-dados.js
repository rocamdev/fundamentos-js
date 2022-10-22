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
