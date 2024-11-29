const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        for (let a = 1; a < lines.length; a += 1) {
          const row = lines[a].split(',');
          if (row.length >= 4) {
            totalStudents += 1;
            const name = row[0].trim();
            const field = row[3].trim();

            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(name);

            if (!fields[field]) {
              fields[field] = 0;
            }
            fields[field] += 1;
          }
        }

        let output = `Number of students: ${totalStudents}\n`;
        for (const [key, value] of Object.entries(fields)) {
          output += `Number of students in ${key}: ${value}. `;
          output += `List: ${students[key].join(', ')}\n`;
        }
        resolve(output.trim());
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  const fileName = process.argv[2];

  countStudents(fileName)
    .then((output) => {
      response.send(`This is the list of our students\n${output}`);
    })
    .catch(() => {
      response.send(
        'This is the list of our students\nCannot load the database',
      );
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
