const fs = require('node:fs/promises');

async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // get rows of data
  let rows = data.trim().split('\n');
  // remove first line which is the headings for each col
  rows = rows.slice(1);

  // students is an array of objects with key-value pairs for firstname and field
  const students = rows.map((row) => {
    // split each row of the array into its values
    const [firstname, , , field] = row.split(',');
    // return an object with firstname and field key-value pairs
    return { firstname, field };
  });
  console.log(`Number of students: ${students.length}`);

  // create an empty object for the processed student data
  const processedStudents = {};
  students.forEach(({ firstname, field }) => {
    // if processedStudents doesn't already contain the field, add it
    if (!processedStudents[field]) {
      // add the field and set the value to an empty array
      processedStudents[field] = [];
    }
    // add the firstname to names array for its field
    processedStudents[field].push(firstname);
  });

  // processedStudents has key-value pairs for each field where value is the array of names
  for (const field in processedStudents) {
    if (processedStudents[field]) {
      const names = processedStudents[field];
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  }
}

module.exports = countStudents;
