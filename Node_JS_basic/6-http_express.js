const express = require('express');

const app = express();
const PORT = 1245;

// Without middleware
app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server listening on PORT', PORT);
});

module.exports = app;
