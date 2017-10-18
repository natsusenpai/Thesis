// config/passport.js
"use strict"

const GoogleStrategy = require('passport-google-oauth20').Strategy,
      User           = require('../app/models/auth-model'),
      configAuth     = require('./auth');



module.exports = function(passport) {
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new GoogleStrategy({
        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL
        },
        function(accessToken, refreshToken, profile, done) {
            // make the code asynchronous
            // User.findOne won't fire until we have all our data back from Google
            process.nextTick(function() {
                User.findOne({ 'google.id' : profile.id }, function(err, user) {
                    if (err)  throw err;
                    if (user) return done(null, user);
                    else {
                        let newUser = new User();
                        newUser.createAuthGoogle(accessToken, refreshToken, profile, (err) => {
                            if (err) throw err;
                            return done(null, newUser);
                        });
                    }
                });
            }) 
        }
    ));
}