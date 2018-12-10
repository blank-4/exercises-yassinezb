/* * créer une page html vide .

* Dans votre script créez une fonction qui contiendra le code pour les consignes suivantes :

* déclarer un tableau contenant quatre items .

* insérer une ul contenant quatre li ayant chacune pour contenu un item du tableau .
 */

 function maFonction() {
     var monTableau = ["item1", "item2", "item3", "item4"];
    

     var uneUl = document.createElement("ul");
    document.body.appendChild(uneUl);
    uneUl.setAttribute("id","toto")
    console.log(uneUl);

    for (var i = 0; i < monTableau.length; i++) {
    /* var l = monTableau[i] */

    var lesLi = document.createElement("li");
    document.getElementById("toto").appendChild(lesLi).innerHTML = monTableau[i];
    } 
    
 }

 maFonction()



