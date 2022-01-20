var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('index.html',{
    // root with this directory
    root: __dirname + '/../views/'
  });
});

module.exports = router;
