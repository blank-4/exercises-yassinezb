/* * Créer une fonction qui porte le nom `exercice1`, elle contiendra le code pour les consignes suivantes :

* Déclarer une variable `inventaire` de type tableau.
* Elle contient trois élements de votre choix (par exemple: `"salade", "tomate", "oignons"`).

* Afficher la taille d'`inventaire` dans la console.
* Afficher le premier élément du tableau dans la console.

* Ajouter un quatrième élément au tableau (par exemple : `sauce blanche`)
* Afficher à nouveau la taille d'`inventaire` dans la console.

* Retirer le dernier élément du tableau.

* Créer une deuxième fonction qui prend en paramètre un tableau. Lors de son exécution, elle affiche de manière itérative son contenu.
* Appeler cette fonction dans la fonction `exercice1` en lui passant `inventaire` en paramètre.

* Éxécutez `exercice1`.
 */

 function exercice1 () {
     var inventaire = ["salade", "tomate", "oignons"];  
     console.log(inventaire.length);  
     console.log(inventaire[0]); 
     (inventaire.push("sauce blanche"));
     console.log(inventaire);
     console.log(inventaire.length);
     inventaire.pop();
     console.log(inventaire);
}

exercice1(fonction2.inventaire);

function fonction2 () {
    var inventaire2 = ["1","2","3"];

for (var i = 0; i < inventaire2.length; i++) {
    console.log(inventaire2[i]); 
}
}

fonction2();