// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
let dlElt = document.createElement("dl");

mots.forEach(mot =>{
    let dtElt = document.createElement("dt");
    let strongElt = document.createElement("strong");
    strongElt.textContent = mot.terme;
    let ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;
    let brElt = document.createElement("hr");
    brElt.style.color = "blue"
    ddElt.appendChild(brElt);

    dtElt.appendChild(strongElt);
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);

});
document.getElementById("contenu").appendChild(dlElt);