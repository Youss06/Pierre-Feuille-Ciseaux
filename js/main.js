function game() {

  var joueur = 0;
  var Ordi = 0;

// var a=prompt("Jouer");
while (joueur < 3 && Ordi < 3 ){
var a=prompt("Jouer");
var b = Math.floor((Math.random() * 3) + 1);



if(b==1){
  b="pierre";
} else if (b==2){
   b="papier";
} else {
  b="ciseaux";
}

document.getElementById('demo').innerHTML = "L'Ordinateur à choisi " + "" + b;

if(a==b){
  alert("égalité");
}
else if(a==="pierre" && b==="papier"){
  alert("l'ordi gagne. L'ordi avait choisit : " + b);
Ordi++;
}
else if(a==="ciseaux" && b==="papier"){
  alert("Tu gagne. L'ordi avait choisit : " + b);
joueur++;
}
else if(a==="papier" && b==="pierre"){
  alert("Tu gagne. L'ordi avait choisit : " + b);
joueur++;
}
else if(a==="papier" && b==="ciseaux"){
  alert("L'ordi gagne. L'ordi avait choisit : " + b);
Ordi++;
}
else if(a==="ciseaux" && b==="pierre"){
  alert("L'ordi gagne. L'ordi avait choisit : " + b);
Ordi++;
}
else if(a==="ciseaux" && b==="papier"){
  alert("Tu gagne. L'ordi avait choisit : " + b);
joueur++;
}
else if (a === "" || a !== "pierre" || a !== "papier" || a !== "ciseaux") {
alert("Entrez soit pierre, papier ou ciseaux");
}
// if (joueur < 3) {
// alert("Tu as gagné la partie !");
// }
// else {
// alert("Tu as perdu la partie !");
// }
// document.getElementById('demo').innerHTML = "Ordi " + "" + b;
}
}
