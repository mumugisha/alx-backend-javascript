/**
 * Basic Express server that listens on port 1245.
 * Provides a single route at '/' that responds with a greeting.
 */

const express = require('express');

const app = express();
const port = 1245;

// Route to respond with a greeting message
app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

// Start the server
app.listen(port, () => {});

module.exports = { app };
