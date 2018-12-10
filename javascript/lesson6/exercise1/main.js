/* * Créez une page html contenant une balise "p" avec comme id "horloge".

* Créez une fonction "temps" qui affichera la date dans la balise "p"
et faites en sorte qu'elle se mette à jour à chaque seconde.
 */

function temps() {
    var laDate = new Date ();
    document.getElementById("horloge").innerHTML = ("nous sommes le " + laDate.getHours()+":"+laDate.getMinutes()+":"+laDate.getSeconds());
}
setInterval(temps, 1000);

/* document.getElementById("horloge").innerHTML += "" */

