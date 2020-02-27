// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';
// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElt);

var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

console.log(rubyElt);

var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, 
document.getElementById("php"));

//ajout du language Javascript avec C#
 let eltJs = document.createElement("li");
 eltJs.id = "js";
 eltJs.textContent = "Javascript";
 //document.appendChild(document.createTextNode("Javascript")); ajouter le contenu a l'element
 document.getElementById("langages").insertBefore(eltJs, document.getElementById("csharp"));

 // Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin", 
'<li id="javascript">JavaScriptP</li>');

//ajout du language bash a la place du language javascript
let eltBash = document.createElement("li");
eltBash.id = "bash";
eltBash.textContent = "Bash";
document.getElementById("langages").replaceChild(eltBash, document.getElementById("javascript"));

// //ajout d' un paragrape
// let eltP = document.createElement("p");
// eltP.id = "ajoutLanguage"
// eltP.innerHTML = 'Voici la <a href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation" target = "_blank">liste </a>complete des langages'
// eltP.style.color = "purple";
// document.getElementById("langages").appendChild(eltP);

//Exercice 1 : ajout d'un paragraphe contenant un lien
var pElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienElt.textContent = "liste";
pElt.appendChild(document.createTextNode("En voici une "));
pElt.appendChild(lienElt);
pElt.appendChild(document.createTextNode(" plus complète."));
document.getElementById("contenu").appendChild(pElt);