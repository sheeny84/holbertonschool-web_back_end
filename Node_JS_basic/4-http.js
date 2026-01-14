const { createServer } = require('node:http');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245, '127.0.0.1', () => {
  console.log('Server on http://127.0.0.1:1245');
});

// Properly close a server
process.on('SIGINT', () => {
  console.log('\nSIGINT received: closing server...');
  app.close(() => {
    console.log('Closed. Exiting.');
    process.exit(0);
  });
});

module.exports = app;
