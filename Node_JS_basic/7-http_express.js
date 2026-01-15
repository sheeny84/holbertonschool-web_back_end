const express = require('express');
const fs = require('node:fs');

const app = express();
const PORT = 1245;
const args = process.argv.slice(2);

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  fs.readFile(args[0], 'utf8', (error, data) => {
    if (error) {
      res.end('Cannot load the database');
      return;
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
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server listening on PORT', PORT);
});

module.exports = app;
