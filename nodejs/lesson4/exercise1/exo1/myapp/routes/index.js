var express = require('express');
var router = express.Router();
var result = 0;

/* GET home page. */
router.get('/', function(req, res) {
  var name = 'CurrentDate';
  var value = new Date(Date.now());
  var options = {
    expires: new Date(Date.now() + 900000),
    httpOnly: true
  };
  res.cookie(name, value, options);
  res.render('index', { title: "Express"});
});

router.get('/users', function(req, res) {
  var cookieTheme = req.cookies['CurrentDate'];
  console.log(cookieTheme);
  console.log(result);
  res.render('users', { cookie: cookieTheme, refresh: result });
})

module.exports = router;
