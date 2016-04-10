var express = require('express');
var router = express.Router();
var isloggedin = require('../utils/isloggedin');
var models = require('../models');

/* GET / */
router.get('/', function(req, res) {
    var responseData = {};
    models.Blogpost.findAll()
        .then(function(data) {
            responseData.error = false;
            responseData.posts = data;
            res.render('blog', {
                isAdmin: req.isAuthenticated(),
                posts: responseData.posts
            });
        })
        .catch(function(err) {
            console.log(new Date());
            console.log(err);
            responseData.error = true;
            responseData.errors = err.errors;
            responseData.message = 'Error getting blog posts';
            res.status(500);
            res.json(responseData);

        });
});

/* GET /new */
router.get('/new', isloggedin.isloggedin, function(req, res) {
    res.render('blog-new', {
        isAdmin: req.isAuthenticated()
    });
});

/* POST /create */
router.post('/create', function(req, res) {
    console.log('THIS IS THE REQUEST FROM BLOG/NEW TO BLOG/CREATE :', req.body);

    models.Blogpost.create({
        user_id: '1',
        title: req.body.title,
        content: req.body.content
    })
        .then(function(data) {
            console.log('post_id', data.dataValues.post_id);
            res.json(data);
        })
        .catch(function(error) {
            console.log('ERROR! ', error.errors);
        });
});

/* GET /:id */
router.get('/:id', function(req, res) {
    responseData = {};
    id = req.params.id;
    models.Blogpost.findById(id)
        .then(function(data) {
            responseData.error = false;
            responseData.post = data;
            res.render('blog-singlePost', {
                post: responseData.post
            });
        })
        .catch(function(data) {
            console.log(new Date());
            console.log(data);
            responseData.error = true;
            responseData.errors = data.errors;
            responseData.message = 'Error getting blog post';
            res.status(500);
            res.json(responseData);
        });
});


module.exports = router;
