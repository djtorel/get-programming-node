const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Universe!');
  console.log(req.params);
  console.log(req.body);
  console.log(req.url);
  console.log(req.query);
});

const port = 3000;
app.listen(port, () => {
  console.log(
    `The Express.js server has started and is listening on port ${port}`
  );
});
