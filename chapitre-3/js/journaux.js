// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
// function afficherListeJourneaux(){
//     journaux.forEach(journal =>{
//         console.log(journaux);

//     });
// }



for (let i = 0; i < journaux.length; i++) {
         element = journaux[i];
         let aElt = document.createElement("a");
         aElt.textContent = element;
         document.getElementById("contenu").appendChild(aElt);
         document.getElementById("contenu").appendChild(document.createElement("br"));
 }
    

