function areaQadrado(lado) {
  return lado * lado;
}
console.log(areaQadrado(4));

// FUNCAO COM STRINGS
function corFavorita(cor) {
  if (cor == "azul") {
    return "eu gosto do ceu";
  } else if (cor == "verde") {
    return "Eu gosto de mato";
  } else {
    return "não gosta de ceu nem de mato";
  }
}

//FUNÇÕES COMO ARGUMENTOS
addEventListener("click", function () {
  console.log("Clicou");
});

// VALORES RETORNADOS
//Função sem return retorna Undefined
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
console.log(imc(73, 1.76));

//valores retornados
function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "informe sua idade";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(61));
console.log(terceiraIdade("oi"));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(18));

//EXERCICIOS
//Crie uma função para verificar se um valor é true
function verdade(info) {
  if (info == true) {
    return "é True!";
  } else {
    return "Não é True";
  }
}

//Crie uma função matemática que retorne o perimetro de um quadrado
function perimetro(lado) {
  return lado * 4;
}

//Crie uma funcao que retornE seu nome completo
function nomeCompleto(nome, sobrenome) {
  return "Seu nome é " + nome + " " + sobrenome;
}

//Crie uma função que verifique se um numero é par
function epar(numero) {
  if (numero % 2 == 0) {
    return "É par!";
  } else {
    return "É Impar";
  }
}

//Crie uma função que retorne o tipo  de dado presente nela
function tipoDeDado(dado) {
  return typeof dado;
}

//addEventListener é uma função dativa do JavaScript
//O primeiro parâmetro é o evento que ocorre e o segundo o callback
//utilize essa função para mostrar no console seu nome completo quando o eventro scroll ocorrer

addEventListener("scroll", function () {
  console.log("Seu nome é Rodolfo Campos");
});

addEventListener("scroll", function () {
  console.log("Rodolfo Campos");
});
