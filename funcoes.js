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
