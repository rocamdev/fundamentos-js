// Criando um objeto
var pessoa = {
  nome: "Rodolfo",
  idade: 28,
  profissao: "Frontend Developer",
  temExperiencia: true,
};

//Acessando propriedades do objeto
console.log(pessoa.nome);

// Objeto com uma função como propriedade
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};
