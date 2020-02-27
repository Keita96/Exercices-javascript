let infoElt = document.getElementById("contenu")

let eltHaut = getComputedStyle(infoElt).height;
let elLarg = getComputedStyle(infoElt).width;

let contenu = document.getElementById("infos");
let h3Elt = document.createElement("h3");
let ulElt = document.createElement("ul");
let liElt1 = document.createElement("li");
liElt1.textContent = "Hauteur : " + eltHaut;
let liElt2 = document.createElement("li");
liElt2.textContent = "Largeur : " + elLarg;

ulElt.appendChild(liElt1);
ulElt.appendChild(liElt2);



h3Elt.textContent = "Informations sur l'element !"


contenu.appendChild(h3Elt);
contenu.appendChild(ulElt);


// var styleElement = getComputedStyle(document.getElementById("contenu"));
// var listeElt = document.createElement("ul");
// var longueurElt = document.createElement("li");
// longueurElt.textContent = "Longueur : " + styleElement.width;
// var hauteurElt = document.createElement("li");
// hauteurElt.textContent = "Hauteur : " + styleElement.height;
// listeElt.appendChild(hauteurElt);
// listeElt.appendChild(longueurElt);
// document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
// document.getElementById("infos").appendChild(listeElt);