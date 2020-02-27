
//creation des elements form, p, input et le button submit;
let formElt = document.createElement("form");
formElt.id = "form";
let pElt1 = document.createElement("p");
pElt1.class = "fm";

let pElt2 = document.createElement("p");
pElt1.class = "fm";

let pElt3 = document.createElement("p");
pElt1.class = "fm";

let pElt4 = document.createElement("p");
pElt1.class = "fm";

let inputElt1 = document.createElement("input");
inputElt1.id = "nom";
inputElt1.type = "text";



let inputElt2 = document.createElement("input");
inputElt2.id = "prenom";
inputElt2.type = "text";
 
let inputElt3 = document.createElement("input");
inputElt3.id = "email";
inputElt3.type = "email";


let inputElt4 = document.createElement("input");
inputElt4.id = "mdp";
inputElt4.type = "password";

btnElt = document.createElement("button");
btnElt.id = "btn";
btnElt.type = "submit";
btnElt.textContent = "Envoyer";

//Ajout des element input entre les element <p>



pElt1.textContent = "Votre Nom :"
pElt1.appendChild(inputElt1);

pElt2.textContent = "Votre prenom :"
pElt2.appendChild(inputElt2);

pElt3.textContent = "Votre email :"
pElt3.appendChild(inputElt3);

pElt4.textContent = "Votre mot de passe :"
pElt4.appendChild(inputElt4);

//Ajout des elemetn p contenant les input dans l'element form;

formElt.appendChild(pElt1);
formElt.appendChild(pElt2);
formElt.appendChild(pElt3);
formElt.appendChild(pElt4);
formElt.appendChild(btnElt);





document.getElementById("form").appendChild(formElt);
