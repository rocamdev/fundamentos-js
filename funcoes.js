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
