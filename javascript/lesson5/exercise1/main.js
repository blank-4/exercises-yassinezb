/* Amusons un peu avec le DOM !

* Créez une page html contenant une balise "p" vide ayant pour id "texte".
le "p" devra être en display none .

* Avec "innerHTML" ajouter du lorem ipsum dans "texte".

* Créez une fonction "afficher" qui, lorsqu'elle est appelé affiche le texte en changeant son display.

* Ajouter un bouton au dessus du "p" qui lorsque l'on cliquera dessus appellera la fonction "afficher".

* Créez un second bouton qui lorsque l'on cliquera dessus masquera le texte.

* Créez une fonction qui changera la couleur du texte de manière aléatoire et l'affichera dans la console. Enfin exécutez la.
 */

 
 
document.getElementById("texte").innerHTML = "lorem ipsum";

function afficher() {
     document.getElementById("texte").style.display = "block";
     console.log("test");
     }

function masquer() {
    document.getElementById("texte").style.display = "none";
}

function changecolor() {
    var random1 = ["red", "blue", "green", "black", "white", "gray", "brown", "purple"];
    console.log(random1.length);
    var randNb = Math.floor(Math.random()*random1.length);

    var res = random1[randNb];

    document.getElementById("texte").style.color = res;
    console.log(res)

    //console.log(Math.random(random1));
}
changecolor();