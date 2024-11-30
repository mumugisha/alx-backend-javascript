const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(FileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(FileName, (error, data) => {
      if (error) {
        reject(error);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let a = 1; a < lines.length; a += 1) {
          if (lines[a]) {
            length += 1;
            const field = lines[a].toString().split(',');
            if (Object.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        length -= 1;
        output += `Number of students: ${length}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('content-type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((output) => {
        const outString = output.slice(0, -1);
        response.end(outString);
      })
      .catch(() => {
        response.statusCode = 404;
        response.end('Cannot load the database');
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
