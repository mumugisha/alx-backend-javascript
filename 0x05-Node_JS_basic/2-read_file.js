const fs = require('fs');

function countStudents(NameOfFile) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const dataContents = fs.readFileSync(NameOfFile, 'utf8');
    const lines = dataContents.toString().split('\n');
    for (let a = 1; a < lines.length; a += 1) {
        if (lines[a]) {
           length += 1;
      const field = lines[a].toString().split(',');
      if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students(field[3].push(field[0]);
      } else {
        students[field[3]].push(field[0]);
    }
    if (Object.prototype.hasOwnProperty.call(students, field[3])) {
         field[field[3] += 1;
    } else {
      fields(field[3]] = 1;
    }
  }
}
    const 1 = length - 1;
    console.log(`Number of students: ${1}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
      console.log(
        `Number of students in ${key}: ${value}. List: ${student
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
    }
  }
 }
 catch (error) {
     throw Error("Cannot load the database");
 }
}

module.exports = countStudents;
