function clic(){
    compteClics++;
    document.getElementById("compteurClics").textContent = compteClics;
}

var compteClics = 0;
document.getElementById("clic").addEventListener("click", clic);
document.getElementById("desactiver").addEventListener("click", function(){
    document.getElementById("clic").removeEventListener("click", clic);
    let pElt = document.createElement('p');
    pElt.textContent = "Le bouton de comptage de clics a ete desactive"
    pElt.style.color = "red";
    document.querySelector("body").appendChild(pElt);
})