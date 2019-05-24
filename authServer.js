
const express = require("express");
require("dotenv").config();
const jwt = require("express-jwt"); // validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retrieve the RSA keys from a json web key set (JWKS) endpoint
const checkScope = require("express-jwt-authz"); // validate jwt scopes


const checkJwt = jwt({
     
    // Dynamically provide a signing key based on the kid in the header
    // and the signing keys provided by the JWKS endpoint

    secret: jwksRsa.expressJwtSecret({

        cache: true, // cache the signin key
        rateLimit: true,
        jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
        jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/well-known/jwks.json`

    }),

    // validate the audience and the issuer
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

    // this must match the algorithm selected in the Auth0 dashboard under your app's advanced settings under the OAuth tab

    algorithms: ["RS256"]


})

const app = express();

app.get('/public', function(req, res){
    res.json({
        message: "hello from a public api"
    });
});

app.get('/private', checkJwt, function(req, res){
    res.json({
        message: "hello from a private api"
    });
});

// return courses for a user that has read courses scope
app.get('/course', checkJwt, checkScope(["read:courses"]), function(req, res){
    res.json({

        // in the real world, one would read tge sub (subscriber ID) from the access token
        // and use it to query the database for the author's courses

        courses: [
            {id: 1, title: "a demo title"},
            {id: 2, title: "a demo title"}
        ]
    });
});

function checkRole(role) {

    return function(req, res, next){

        const assignedRoles = req.user['http://localhost:3000/roles'];

        if(Array.isArray(assignedRoles) && assignedRoles.includes(role)){
            return next();
        } else {
            return res.status(401).send('insufficient role');
        }

    };
    
}

app.get('/admin', checkJwt, checkRole('admin'), function (req, res) {
    res.json({
        message: "hello from an admin api"
    });
});

app.listen(3001);

console.log("Api server listening on " + process.env.REACT_APP_API_URL);
