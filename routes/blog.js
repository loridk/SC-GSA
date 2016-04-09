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
            console.log('data returned from findAll ', data);
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
    //
    //responseData.posts = [];
    //for (var i = 0; i < responseData.data.length; i++) {
    //    responseData.posts[i] = responseData.data[i].dataValues;
    //}
    //console.log('responseData ', responseData);


    res.render('blog', {
        isAdmin: req.isAuthenticated(),
        posts: responseData.posts
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
    models.Blogposts.create({
        user_id: '1',
        title: req.body.title,
        content: req.body.content
    })
        .then(function(data) {
            console.log('asdfasdf', data);
            res.json(data);
        })
        .catch(function(error) {
            console.log('ERROR! ', error.errors);
        });
});

module.exports = router;
