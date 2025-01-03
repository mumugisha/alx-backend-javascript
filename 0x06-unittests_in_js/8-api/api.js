const express = require('express');
const api = require('./api');

const app = express();
const port = 7865;

app.get('/', (request, response) => {
  return response.send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
