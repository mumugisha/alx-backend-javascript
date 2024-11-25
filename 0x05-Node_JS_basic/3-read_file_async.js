const { readFile } = require('fs');

function countStudents(NameOfFile) {
  return new Promise((resolve, reject) => {
    readFile(NameOfFile, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      const fields = {};
      let length = 0;

      const lines = data.split('\n').filter((line) => line.trim().length > 0);
      for (let a = 1; a < lines.length; a += 1) {
        const parts = lines[a].split(',');

        if (parts.length >= 4) { // Ensure the line has at least 4 columns
          length += 1;
          const name = parts[0].trim();
          const field = parts[3].trim();

          if (students[field]) {
            students[field].push(name);
          } else {
            students[field] = [name];
          }

          if (fields[field]) {
            fields[field] += 1;
          } else {
            fields[field] = 1;
          }
        }
      }

      console.log(`Number of students: ${length}`);
      for (const [key, value] of Object.entries(fields)) {
        console.log(
          `Number of students in ${key}: ${value}. ` +
          `List: ${students[key].join(', ')}`
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;
