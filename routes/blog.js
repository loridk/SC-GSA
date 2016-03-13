var express = require('express');
var router = express.Router();
var isloggedin = require('../utils/isloggedin');

/* GET blog page. */
router.get('/', function(req, res) {
    res.render('blog', {
        isAdmin: req.isAuthenticated()
    });
});

/* GET new blog page */
router.get('/new', isloggedin.isloggedin, function(req, res) {
    res.render('blog-new', {
        isAdmin: req.isAuthenticated()
    });
});

module.exports = router;
