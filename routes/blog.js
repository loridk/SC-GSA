var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res) {
    console.log('router blog');
    res.render('blog');
});

module.exports = router;
