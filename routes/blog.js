var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res) {
    res.render('blog', {
        isAdmin: req.isAuthenticated()
    });
});

module.exports = router;
