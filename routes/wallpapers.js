var express = require('express');
var moment = require('moment');
var logger = require('../utils/logger');

var router = express.Router();

/* GET home page. */
router.get('/:date', function(req, res, next) {
  if ((moment(req.params.date, 'YYYY-MM-DD', true).isValid())) {
    var imgDir = __dirname + '/../imgs/';
    var filePath = imgDir + req.params.date + '.JPG';
    res.download(filePath, function(err) {
      if (err) {
        logger.error(err);
        res.status(err.status).send("Cannot find image");
      } else {
        logger.info('Sent: %s', fileName);
      }
    })
  } else {
    res.status(400).send("Invalid date");
  }
});

module.exports = router;
