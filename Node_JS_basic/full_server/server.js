const express = require('express');
const routes = require('./routes/index.js');
const database = process.argv[2];

const app = express();
const PORT = 1245;

app.set('database', database);

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
