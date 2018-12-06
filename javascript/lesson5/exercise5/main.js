/* * créer une page html contenant un lien qui va vers la page print "print" .

* le but n'est pas d'aller sur la page print mais lorsque l'on clique sur le liens cela doit imprimer la page actuelle.
 */


var unLien = document.createElement("a");
document.body.appendChild(unLien).innerHTML = "et mercééééééééé hein";
unLien.setAttribute("href", "#");
unLien.setAttribute("onclick", "clique()")

function clique() {
    window.print();
}