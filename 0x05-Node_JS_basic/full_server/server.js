const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
