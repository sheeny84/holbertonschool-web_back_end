import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const database = request.app.get('database');
    readDatabase(database)
      .then((data) => {
        let output = 'This is the list of our students';
        const sortedFields = Object.keys(data)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of sortedFields) {
          output += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
        }

        response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const database = request.app.get('database');
    response.setHeader('Content-Type', 'text/plain');
    const path = request.url.split('/');
    const major = path[2];
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(database)
        .then((data) => {
          const names = data[major];
          const output = `List: ${names.join(', ')}\n`;
          response.status(200).send(output);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    }
  }
}

module.exports = StudentsController;
