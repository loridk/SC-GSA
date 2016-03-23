// route middleware to make sure a user is logged in
var isloggedin = function (req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        req.isAdmin = true;
        return next();
    }
    // if they aren't, redirect them to the login page
    res.redirect('/');
};

var isAdmin = function(req, res, next) {
    if (req.isAuthenticated()) {
        req.isAdmin = true;
    } else {
        req.isAdmin = false;
    }
};

module.exports = {
    isloggedin: isloggedin,
    isAdmin: isAdmin
};