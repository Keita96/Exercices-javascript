let couleurText = prompt("Entrer la couleur du text que vous voulez en anglais");
let couleurFond = prompt("Enter la couleur de fond que vous voulez en anglais hein !");

let divElt = document.getElementsByTagName("div");

for (let i = 0; i < divElt.length; i++) {
   divElt[i].style.color = couleurText;
   divElt[i].style.backgroundColor = couleurFond;
    
}

