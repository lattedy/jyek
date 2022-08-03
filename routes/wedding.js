var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('wedding router');
});

router.get('/dress', function(req, res, next) {
  db.query('SELECT NOW()', '',(err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
});

module.exports = router;
