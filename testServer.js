
const express = require("express");
require("dotenv").config();

// mock database
const users = [
    {id: 1, name: "mark", email: "admin5@gmail.com", role: "admin"},
    {id: 2, name: "grace", email: "user1@gmail.com", role: "user"},
    {id: 1, name: "charles", email: "user2@gmail.com", role: "user"},
]

const app = express();

app.get('/public', function (req, res) {
    res.json({
        message: "hello from a public api"
    });
});

app.get('/users', function (req, res) {
    res.json(users);
});

app.get('/private', function (req, res) {
    res.json({
        message: "hello from a private api"
    });
});

// return courses for a user that has read courses scope
app.get('/course', function (req, res) {
    res.json({

        // in the real world, one would read tge sub (subscriber ID) from the access token
        // and use it to query the database for the author's courses

        courses: [
            { id: 1, title: "a demo title" },
            { id: 2, title: "a demo title" }
        ]
    });
});

function checkRole(role) {

    return function (req, res, next) {

        const assignedRoles = req.user['http://localhost:3000/roles'];

        if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
            return next();
        } else {
            return res.status(401).send('insufficient role');
        }

    };

}

app.get('/admin',  checkRole('admin'), function (req, res) {
    res.json({
        message: "hello from an admin api"
    });
});

app.listen(3001);

console.log("Api server listening on " + process.env.REACT_APP_API_URL);
