var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('articles', { title: 'Express' });
});

router.get('/art1', function(req, res, next) {
  res.render('articles', { title: 'Express' });
});
router.post('/', function(req, res, next) {
  //res.render('articles', { title: 'Express' });
  res.send("oki");
});
module.exports = router;