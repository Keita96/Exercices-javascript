/*
 Exercice : attributs et classes
*/

// Affiche des informations sur les liens
function infosLiens() {
    var liensElts = document.getElementsByTagName("a");
    var nombreLiens = liensElts.length;
    console.log(nombreLiens);
    //console.log(document.getElementsByTagName("a")[0].textContent);

    if (nombreLiens > 0) {
        console.log(liensElts[0].getAttribute("href"));
        console.log(liensElts[nombreLiens - 1].href);
    }
}

function possede(id, classe){
    let instrumant = document.getElementById(id)
    if (instrumant !== null) {
        console.log(instrumant.classList.contains(classe));
        
    }
    else{
        console.log("Aucun element ne possede cet identifiant " + id);
    }

}

infosLiens();
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur