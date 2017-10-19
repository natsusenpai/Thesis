"use strict"

const mongoose = require('mongoose'),
      bcrypt   = require('bcrypt');

// define the schema for our user model
let authSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

let dog = 

// generating a hash
authSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
authSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create a new GOOGLE identity
authSchema.methods.createAuthGoogle = function(accessToken, refreshToken, profile, callback) {
    this.google.id    = profile.id;
    this.google.token = accessToken;
    this.google.name  = profile.displayName;
    this.google.email = profile.emails[0].value; // pull the first email

    return this.save((err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });    
};





// create the model for users and expose it to our app
module.exports = mongoose.model('User', authSchema);

