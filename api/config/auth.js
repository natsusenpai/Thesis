// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    
        // 'facebookAuth' : {
        //     'clientID'      : 'your-secret-clientID-here', // your App ID
        //     'clientSecret'  : 'your-client-secret-here', // your App Secret
        //     'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
        // },
    
        // 'twitterAuth' : {
        //     'consumerKey'       : 'your-consumer-key-here',
        //     'consumerSecret'    : 'your-client-secret-here',
        //     'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
        // },
    
        'googleAuth' : {
            'clientID'      : '666332185461-15htibgqrs6o1m0umi319vdo92pe74ae.apps.googleusercontent.com',
            'clientSecret'  : 'z0uhGMJwqXaqt_RUyftxqhUq',
            'callbackURL'   : 'http://localhost:8080/auth/google/callback'
        }
    
    };
    
    