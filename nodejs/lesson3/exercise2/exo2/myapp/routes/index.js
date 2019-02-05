var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/form', function(req,res,next) {
  var nom = req.body.nom;
  var prenom = req.body.prenom;
  var age = req.body.email;
  var message = "inscription reussie"
  if (nom.length >= 30 && nom.length <= 0){
    message = 'nom pas valide' 
  }
  else if (prenom.length >= 30 && prenom.length <= 0) {
    message = "prenom pas valide"
  }
  else if (age >= 100 && age <= 0) {
    message = "t'es pas encore mort?"
  }
  res.render('form', {'message' : message})
});

module.exports = router;
