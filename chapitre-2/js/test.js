/*
 Exercice : attributs et classes
*/

// Affiche des informations sur les liens
function infosLiens() {
    var liensElts = document.getElementsByTagName("a");
    var nombreLiens = liensElts.length;
    console.log(nombreLiens);

    if (nombreLiens > 0) {
        console.log(liensElts[0].getAttribute("href"));
        console.log(liensElts[nombreLiens - 1].getAttribute("href"));
    }
}
