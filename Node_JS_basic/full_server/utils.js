const fs = require('node:fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      reject(error);
      return;
    }
    let rows = data.trim().split('\n');
    rows = rows.slice(1);

    const students = rows.map((row) => {
      const [firstname, , , field] = row.split(',');
      return { firstname, field };
    });

    const processedStudents = {};
    students.forEach(({ firstname, field }) => {
      if (!processedStudents[field]) {
        processedStudents[field] = [];
      }
      processedStudents[field].push(firstname);
    });
    resolve(processedStudents);
  });
});

module.exports = readDatabase;