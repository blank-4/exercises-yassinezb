var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', 
  { title: 'Express', 
  ip: req.ip,
  host: req.host,
  method: req.method,
  });
});

module.exports = router;
