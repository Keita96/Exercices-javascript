document.addEventListener("keypress", function(e){
   let touche = String.fromCharCode(e.charCode);
    touche = touche.toUpperCase();
    let couleur = "";
    let  couleurEcrit = "";
    switch(touche){
        case "R" :
            couleur = "red";
            couleurEcrit = "green";
            break;
        case "V":
            couleur = "green";
            couleurEcrit = "#fff";
            break;
        case "J":
            couleur = "yellow";
            break;
        case "B":
            couleur = "blue";
            break;
        case "P":
            couleur = "purple";
            break;
        default:
            console.log("Touche " + touche + " n'est pas prise en compte");
            

    }
    let div = document.getElementsByTagName("div");
    for (let i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = couleur;
        div[i].style.color = couleurEcrit;
    }
});
