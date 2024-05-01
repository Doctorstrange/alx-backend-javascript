const fileSystem = require('fs');

const countStudents = (dataPath) => {
  if (!fileSystem.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fileSystem.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fileSystem
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {};
  const databaseFieldNames = fileLines[0].split(',');
  const studentPropertyNames = databaseFieldNames.slice(0, databaseFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropertyValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = studentPropertyNames
      .map((propertyName, idx) => [propertyName, studentPropertyValues[idx]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(studentGroups)
    .reduce((previous, current) => (previous || []).length + current.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
