
var joueur = 0;
var Ordi = 0;
// var a =""
var choixuser="";
function choix(x){
  choixuser=x;
  document.getElementById('demo').innerHTML =  choixuser;
  game();
}
function game(choix) {
  a=choixuser;

if (joueur < 3 && Ordi < 3 ){
  // var a=prompt("Jouer");
var b = Math.floor((Math.random() * 3) + 1);



if(b==1){
  b="pierre";
} else if (b==2){
   b="papier";
} else {
  b="ciseaux";
}

document.getElementById('demo').innerHTML = "L'Ordinateur a choisi " + "" + b;

if(a==b){
  document.getElementById("goku").src = "img/gogeta_by_brolyangel-d5zmm4f.png";
  document.getElementById("win").src = "img/gogeta_by_brolyangel-d5zmm4f.png";
}
else if(a==="pierre" && b==="papier"){
  // alert("l'ordi gagne. L'ordi avait choisit : " + b);
Ordi++;
}
else if(a==="ciseaux" && b==="papier"){
  // alert("Tu gagne. L'ordi avait choisit : " + b);
joueur++;
}
else if(a==="papier" && b==="pierre"){
  // alert("Tu gagne. L'ordi avait choisit : " + b);
joueur++;
}
else if(a==="papier" && b==="ciseaux"){
  // alert("L'ordi gagne. L'ordi avait choisit : " + b);
Ordi++;
}
else if(a==="ciseaux" && b==="pierre"){
  // alert("L'ordi gagne. L'ordi avait choisit : " + b);
Ordi++;
}
else if(a==="ciseaux" && b==="papier"){
  // alert("Tu gagne. L'ordi avait choisit : " + b);
joueur++;
}

document.getElementById("joueur").innerHTML = joueur;
document.getElementById("Ordi").innerHTML = Ordi;
// else if (a === "" || a !== "pierre" || a !== "papier" || a !== "ciseaux") {
// alert("Entrez soit pierre, papier ou ciseaux");
// }
if (joueur == 1) {
  document.getElementById("goku").src = "img/5934fdaa8e0f7833128f0e8dc704bc1f.png";
;
}
if (joueur == 2) {
  document.getElementById("goku").src = "img/Super_Saiyan_2_Goku_Dragon_Ball_Z.png";
;
}
if (joueur == 3) {
  document.getElementById("goku").src = "img/goku1.png";
;
}
else if(Ordi==1){
  document.getElementById("win").src = "img/vegeta_ssj_by_naironkr-dadgz00.png";
}
else if(Ordi==2){
  document.getElementById("win").src = "img/Majin_vegeta_by_joseg2099-d5gvfzw.png";
}
else if(Ordi==3){
  document.getElementById("win").src = "img/vegeta.png";
}
if(a==b){
  document.getElementById("goku").src = "img/gogeta_by_brolyangel-d5zmm4f.png";
  document.getElementById("win").src = "img/gogeta_by_brolyangel-d5zmm4f.png";
}
// else {
//
// }

}
// var choixuser="";
// function choix(x){
//   choixuser=x;
//   document.getElementById('demo').innerHTML =  choixuser;
//   game();
// }

}
