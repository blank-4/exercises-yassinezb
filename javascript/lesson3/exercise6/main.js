
 /* function calculatePuissance (Nombre,Puissance) {
     var resultat = Math.pow(Nombre,Puissance);
     return resultat;
 }
 console.log (calculatePuissance(7,2)); */

function calculatePuissance(nombre, puissance) {
	var result = 1;
	if(puissance == undefined)
		puissance = 2;
	for(var i=1; i<=puissance; i++) {
		result = result * nombre;
	}
	return result;
}
console.log(calculatePuissance(7,2));

/* function calculatePuissance (Nombre, Puissance) {
    for (i=Puissance; i<Puissance; i= Nombre*Nombre);
}

console.log (calculatePuissance(7,2));
 */


/*  var pas;
for (pas = 0; pas < 5; pas++) {
  // Ceci sera exécuté 5 fois
  // À chaque éxécution, la variable "pas" augmentera de 1
  // Lorsque'elle sera arrivée à 5, le boucle se terminera.
  console.log("Faire un pas vers l'est");
} */