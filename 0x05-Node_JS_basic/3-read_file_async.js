const { readFile } = require('fs');

function countStudents(FileName) {
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(FileName, 'utf-8', (error, data) => {
      if (error) {
        console.error(`Error reading file: ${error.message}`);
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.toString().split('\n');
      for (let i = 1; i < lines.length; i += 1) {
        // Skip empty lines
        if (lines[i].trim()) {
          const field = lines[i].split(',');
          if (field.length >= 4) { // Ensure each line has at least 4 fields
            length += 1;

            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          } else {
            console.warn(`Skipping malformed line: "${lines[i]}"`);
          }
        }
      }
      console.log(`Number of students: ${length}`);
      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
          console.log(
            `Number of students in ${key}: ${value}. `
            + `List: ${students[key].join(', ')}`,
          );
        }
      }
      resolve(data);
    });
  });
}

module.exports = countStudents;
