function y(){
var a=prompt("Jouer");
var b = Math.floor((Math.random() * 3) + 1);

if(b==1){
  b="pierre";
} else if (b==2){
   b="papier";
} else {
  b="ciseaux";
}
