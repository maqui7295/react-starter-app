const express = require('express');
require('dotenv').config();

// mock database
const users = [
  { id: 1, name: 'mark', email: 'admin5@gmail.com', role: 'admin' },
  { id: 2, name: 'grace', email: 'user1@gmail.com', role: 'user' },
  { id: 1, name: 'charles', email: 'user2@gmail.com', role: 'user' },
];

const app = express();

app.get('/public', function (req, res) {
  res.json({
    message: 'hello from a public api',
  });
});

app.get('/users', function (req, res) {
  res.json(users);
});

app.listen(3001);

console.log('Api server listening on ' + process.env.REACT_APP_API_URL);
