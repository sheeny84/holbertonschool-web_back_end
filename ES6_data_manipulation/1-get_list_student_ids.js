export default function getListStudentIds(students) {
  if (students instanceof Array === false) {
    return [];
  }
  // Destructuring directly in func arguments
  // i.e. ({ id }) => id is equiv to (student => student.id)
  return students.map(({ id }) => id);
}
