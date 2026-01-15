import readDatabase from '../utils'
const args = process.argv.slice(2);

export default class StudentsController {
  static getAllStudents(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    readDatabase(args[0])
      .then((data) => {
        response.statusCode = 200;
        for (const field in data) {
          if (data[field]) {
            const names = data[field];
            response.write(
              `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`,
            );
          }
        }
        response.end();
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end('Cannot load the database')
      })
  }

  static getAllStudentsByMajor(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    let path = request.url.split('/');
    const major = path[2];
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.end('Major parameter must be CS or SWE')
    } else {
      readDatabase(args[0])
        .then((data) => {
          response.statusCode = 200;
          const names = data[major];
          response.end(
            `List: ${names.join(', ')}\n`,
          );
        })
        .catch((error) => {
          response.statusCode = 500;
          response.end('Cannot load the database')
        })
    }
  }
}