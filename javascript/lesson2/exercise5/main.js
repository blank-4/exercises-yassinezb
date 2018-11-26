var i = 1;
for ( var i = 1 ; i < 100 ; i++ ) {
    console.log("J'affiche les nombres jusqu'a " + i);
    if (i %5==0) {
        console.log("fizz");
      } else if (i %7==0) {
        console.log("buzz");
      }
    }

