/* * Créez une html dont le body sera vide .

* Dans votre script créez une fonction qui, elle contiendra le code pour les consignes suivantes :

* Créer une div .

* Attribuez lui une taille et une background-color avec JS.

* Lorsque l'on passe la souris sur la div elle devra changer de couleur de fond .
 */


 function maFonction () {
    var division = document.createElement("div");
    document.body.appendChild(division);
    console.log(division);
    division.style.width = "1500px";
    division.style.height = "2000px";
    division.style.backgroundColor = "green"
    division.setAttribute("id", "madiv");
    /* document.getElementById("texte").style.display = "none"; */
 } 
 maFonction();
 
 var madiv = document.getElementById("madiv");

 madiv.onmouseover = function(){
    madiv.style.backgroundColor = "blue";
  };

