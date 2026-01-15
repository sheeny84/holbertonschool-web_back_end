const { createServer } = require('node:http');
const fs = require('node:fs');

const args = process.argv.slice(2);

const app = createServer((req, res) => {
  const pathname = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    res.write('This is the list of our students\n');

    fs.readFile(args[0], 'utf8', (error, data) => {
      if (error) {
        throw new Error('Cannot load the database');
      }
      let rows = data.trim().split('\n');
      rows = rows.slice(1);

      const students = rows.map((row) => {
        const [firstname, , , field] = row.split(',');
        return { firstname, field };
      });
      res.write(`Number of students: ${students.length}\n`);

      const processedStudents = {};
      students.forEach(({ firstname, field }) => {
        if (!processedStudents[field]) {
          processedStudents[field] = [];
        }
        processedStudents[field].push(firstname);
      });

      for (const field in processedStudents) {
        if (processedStudents[field]) {
          const names = processedStudents[field];
          res.write(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`,
          );
        }
      }
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404: Page not found.\n');
  }
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
