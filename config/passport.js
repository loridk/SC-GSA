// load google oauth
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./config.json');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        return done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function (user, done) {
        return done(null, user);
    });

    passport.use(new GoogleStrategy({
        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL,
        passReqToCallback : true
    },
    function(req, token, refreshToken, profile, done) {
        if (profile.emails[0].value != "scgsa.test@gmail.com") {
            req.session.destroy();
            console.log('YOU ARE NOT AN ADMIN USER', req.isUnauthenticated());
            var err = new Error();
            err.status = 403;
            err.message = "Invalid email address.";
            done(err);
        } else {
            console.log('profile ', profile);
            process.nextTick(function() {
                console.log('CONGRATS, YOU ARE AN ADMIN USER');
                req.admin = true;
                return done(null, profile);
            });
        }
    }));
};