// TODO : écrire la fonction compterElements
function compterElements(elt){
let elmt = document.querySelectorAll(elt).length;
return elmt;
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2