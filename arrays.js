var videoGames = ["Switch", "PS4", "XBox"];

//Métodos
videoGames.pop(); //Retorna e remove o ultimo item
videoGames.push("Nintendo"); //Add um item à ultima posição

//Loops
for (var numero = 0; numero < 10; numero++) {
  console.log(`Array n ${numero}`);
}
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
function listGames() {
  for (var j = 0; j < videoGames.length; j++) {
    console.log(videoGames[j]);
  }
}

// Usando o ForEach
var frutas = ["banana", "maçã", "pera", "morango"];
frutas.forEach(function (item) {
  console.log(item);
});
