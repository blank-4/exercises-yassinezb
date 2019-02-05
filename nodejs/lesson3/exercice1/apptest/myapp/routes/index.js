var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { utilisateur: req.query.user,
    mdp: req.query.password
  });
});
  
  router.post('/', function(req, res, next) {
    res.render('index', 
    { utilisateurRetour: req.body.password, 
      Demande: req.body.password 
    });
});

module.exports = router;