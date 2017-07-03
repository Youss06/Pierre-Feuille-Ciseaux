function game() {

  var joueur = 0;
  var Ordi = 0;

// var a=prompt("Jouer");
var b = Math.floor((Math.random() * 3) + 1);

while (Ordi < 3 && joueur <  3) {
 var a=prompt("Jouer");

if(b==1){
  b="pierre";
} else if (b==2){
   b="papier";
} else {
  b="ciseaux";
}



if(a==b){
  alert("égalité");
}
else if(a==="pierre" && b==="papier"){
  alert("l'ordi gagne. L'ordi avait choisit : " + b);
}
else if(a==="ciseaux" && b==="papier"){
  alert("Tu gagne. L'ordi avait choisit : " + b);
}
else if(a==="papier" && b==="pierre"){
  alert("Tu gagne. L'ordi avait choisit : " + b);
}
else if(a==="papier" && b==="ciseaux"){
  alert("L'ordi gagne. L'ordi avait choisit : " + b);
}
else if(a==="ciseaux" && b==="pierre"){
  alert("L'ordi gagne. L'ordi avait choisit : " + b);
}
else if(a==="ciseaux" && b==="papier"){
  alert("Tu gagne. L'ordi avait choisit : " + b);
}
else if (a === "" || a !== "pierre" || a !== "papier" || a !== "ciseaux") {
alert("Entrez soit pierre, papier ou ciseaux");
}
if (pointUser < 3) {
alert("Tu as gagné la partie !");
}
else {
alert("Tu as perdu la partie !");
}

}
}
