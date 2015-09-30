var express = require('express');
var moment = require('moment');
var router = express.Router();

/* GET home page. */
router.get('/:date', function(req, res, next) {
  if ((moment(req.params.date, 'YYYY-MM-DD', true).isValid())) {

    var options = {
      root: __dirname + '/../imgs/'
    }

    var fileName = req.params.date + '.JPG';
    res.sendFile(fileName, options, function(err) {
      if (err) {
        console.log(err);
        res.status(err.status).send("Cannot find image");
      } else {
        console.log('Sent:', fileName);
      }
    })
  } else {
    res.status(400).send("Invalid date");
  }
});

module.exports = router;
