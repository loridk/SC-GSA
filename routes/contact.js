var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {
    res.render('contact', {
        isAdmin: req.isAuthenticated()
    });
});

module.exports = router;
