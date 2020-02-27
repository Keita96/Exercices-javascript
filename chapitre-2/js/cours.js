let t = document.getElementById('contenu').textContent;
console.log(t);

if (document.getElementById("merveilles").classList.contains("existe")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}


if (document.querySelector("a").hasAttribute("target")) {
    console("il a un attribut taguet");
}
else{
    console.log("il n' a pas cet attribut");

}