var express = require('express');
var router = express.Router();
var isloggedin = require('../utils/isloggedin');
var models = require('../models/blogpost');

/* GET / */
router.get('/', function(req, res) {
    res.render('blog', {
        isAdmin: req.isAuthenticated()
    });
});

/* GET /new */
router.get('/new', isloggedin.isloggedin, function(req, res) {
    res.render('blog-new', {
        isAdmin: req.isAuthenticated()
    });
});

/* POST /create */
router.post('/', function(req, res) {
    console.log('THIS IS THE REQUEST FROM BLOG/NEW TO BLOG/CREATE :', req.body);
    models.Blogpost.create({
        user_id: '1',
        title: req.body.title,
        content: req.body.content
    });
});

module.exports = router;
