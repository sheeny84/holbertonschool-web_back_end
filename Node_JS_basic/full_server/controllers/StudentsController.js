import readDatabase from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2]; // must be here, at request time
    try {
      const data = await readDatabase(databaseFile);
      let responseText = 'This is the list of our students\n';
      const fields = Object.keys(data).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      fields.forEach((field) => {
        responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });
      res.status(200).send(responseText.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const major = req.params.major;

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(databaseFile);
      res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
