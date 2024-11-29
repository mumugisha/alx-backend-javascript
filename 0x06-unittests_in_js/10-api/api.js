const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([9]+)', (request, response) => {
  response.send(`payment methods for cart ${request.params.id}`);
});

app.get('/available_payments', (request, response) => {
  response.set('Content-Type', 'application/json');
  const payMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  response.send(payMethods);
});

app.post('/login', (request, response) => {
  const userName = request.body.username;
  if (userName) {
    response.send(`welcome ${userName}`);
  } else {
    response.status(404).send();
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
