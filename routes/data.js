var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  // open movies.json from database
  var fs = require('fs');
  var movies = JSON.parse(fs.readFileSync(__dirname + '/../database/movies.json', 'utf8'));

  // limit movies
  var limit = parseInt(req.query.limit);
  var start = parseInt(req.query.start);
  var movies_limit = movies.slice(start, (limit + start));

  // send response to client
  res.json(movies_limit);
});

module.exports = router;
