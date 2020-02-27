let button = document.querySelector("button");
let button2 = document.getElementById("zero")
let compterElt = document.getElementById("temps");


let setIntervalId = null;
let demarre = false;  // Etat du chronomètre : démarré (true) ou arrêté (false)

// Augmente le compteur de 1

function augmenterCompteur(){
    compterElt.textContent = Number(compterElt.textContent) + 1;

}

button.addEventListener('click', function(){
    if (!demarre) {
        console.log(demarre);

         // Démarre le chronomètre : appelle augmenterCompteur toutes les secondes
        setIntervalId = setInterval(augmenterCompteur, 1000);
        compterElt.style.color = "red";
        button.textContent = "Arreter";
    }
    else{
        clearInterval(setIntervalId);
        button.textContent = "Demarre";
    }
    // Inverse la valeur de l'état du chronomètre
   demarre = !demarre;

});

button2.addEventListener("click", function(){
    compterElt.textContent = 0;
    clearInterval(setIntervalId);
    compterElt.style.color = "default";
});