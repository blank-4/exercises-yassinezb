/* Créer une fonciton qui calcule l'aire d'un cercle :
* Cette fonction prend en paramètre le rayon de ce dernier
* Elle retourne l'aire du cercle

Créer une deuxième fonciton qui calcule le périmètre d'un cercle :
* Elle prend en paramètre le rayon du cercle
* Elle retourne le périmètre

Créer une fonction qui calcule le diamètre d'un cercle :
* Elle prend en paramètre le rayon d'un cercle
* Elle retourne le diamètre */

function calculateRayon(rayon) {
    var resultat = (3.14*(Math.pow(rayon,2)));
    return resultat;
}
console.log (calculateRayon(45));

function calculatePerimetre(rayon) {
    var resultat2 = (2*3.14*rayon);
    return resultat2;
}
console.log (calculatePerimetre(5));

function calculateDiametre(diamètre) {
    var resultat3 = (3.14*diamètre);
    return resultat3;
}
console.log (calculatePerimetre(22));


