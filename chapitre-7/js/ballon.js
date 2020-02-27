let demarrerBtn = document.getElementById("demarrer");
let arrerterBtn = document.getElementById("arreter");
let cadre = document.getElementById("cadre");
cadre.style.border = "solid 2px purple";
let ballon = document.getElementById("ballon");
let vitesse = 10;    
let xMin = 0; // Position gauche minimale (bord gauche)
let direction = 1; // le sens du deplacement de la balle 1 = droite et 2 = gauche;

// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
let largeurBallon = parseFloat(getComputedStyle(ballon).width);

let animationId = null;
// Déplace de l'image sur sa gauche jusqu'au bord du cadre
function deplacerImage(){
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBallon = parseFloat(getComputedStyle(ballon).left);

    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    let xcadre = parseFloat(getComputedStyle(cadre).width);
    // Si le ballon arrive à un bord du cadre
  if (xBallon + largeurBallon > xcadre || (xBallon < xMin)) {
       // On inverse le sens de déplacement du ballon
       direction *= -1;
   }
   // Déplacement du ballon dans le sens actuel
   ballon.style.left = (xBallon + vitesse * direction) + "px";
   animationId = requestAnimationFrame(deplacerImage);
}
demarrerBtn.addEventListener("click", function(){
    //changer l'etat des buttons
    demarrerBtn.disabled = true;
   arrerterBtn.disabled = false;
    //on demarre l'animation
    requestAnimationFrame(deplacerImage)
});

arrerterBtn.addEventListener("click", function(){
    //changer l'etat des buttons
    demarrerBtn.disabled = false;
   arrerterBtn.disabled = true;
    //on demarre l'animation
   cancelAnimationFrame(animationId);
});




   

