var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/blog', function(req, res) {
    res.render('blog');
});

module.exports = router;
