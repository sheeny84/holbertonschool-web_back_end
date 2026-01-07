export default function getStudentsByLocation(students, loc) {
  // student => student.location === loc
  // with object destructuring:
  return students.filter(({ location }) => location === loc);
}
