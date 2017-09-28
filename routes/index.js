var express = require('express');
var router = express.Router();
var transliteration=require("transliteration");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


console.info(transliteration.transliterate("你好"));

module.exports = router;
