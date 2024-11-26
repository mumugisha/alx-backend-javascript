const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');

    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i]) {
        totalStudents += 1;

        const studentData = lines[i].toString().split(',');

        if (Object.prototype.hasOwnProperty.call(students, studentData[3])) {
          students[studentData[3]].push(studentData[0]);
        } else {
          students[studentData[3]] = [studentData[0]];
        }

        if (Object.prototype.hasOwnProperty.call(fields, studentData[3])) {
          fields[studentData[3]] += 1;
        } else {
          fields[studentData[3]] = 1;
        }
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, count] of Object.entries(fields)) {
      const studentList = students[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
