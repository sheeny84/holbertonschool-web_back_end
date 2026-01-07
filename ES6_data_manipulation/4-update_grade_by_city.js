export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter by city
  const studentsByCity = students.filter(({ location }) => location === city);
  // Update grades
  return studentsByCity.map((student) => {
    const newGrade = newGrades.find((newGrade) => newGrade.studentId === student.id);
    let grade = 'N/A';
    if (newGrade) {
      grade = newGrade.grade;
    }
    return { ...student, grade };
  });
}
