var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {
    res.render('contact');
});

module.exports = router;