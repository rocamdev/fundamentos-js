function mostrarCarro() {
  var carro = "Fusca"; //Erro criando variável global
  console.log(carro);
}

//VARIÁVEL VAZANDO DO ESCOPO
if (true) {
  var mes = "Dezembro";
  console.log(mes);
}
console.log(mes);
