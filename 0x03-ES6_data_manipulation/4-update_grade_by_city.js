export default function updateStudentGradeByCity(arrayOfObjects, city, newGrades) {
  return arrayOfObjects
    .filter((object) => object.location === city)
    .map((object) => {
      const newGrade = newGrades.find((grade) => grade.studentId === object.id);
      return {
        ...object,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
