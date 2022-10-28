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

//mais propriedades de objetos
nome = "Rodolfo";
console.log(nome.length);
console.log(nome.charAt(1));
console.log(nome.replace("fo", "pho"));
console.log(nome);

//PreviaElementos do DOM

var btn = document.querySelector(".btn");
btn.classList.add("azul");
console.log(btn.innerText);
btn.addEventListener("click", function () {
  console.log("Clicou");
});

//EXERCICIOS
//Nomei 3 propriedades ou métodos de strings

//nomeio 5 propriedades ou métodos de elementos do DOM

//busque na web um objeto (método) capaz de interagir com o clipboard,
//Clipboard é a parte do seu computador que lida com o CTRL+C e CTRL +V
