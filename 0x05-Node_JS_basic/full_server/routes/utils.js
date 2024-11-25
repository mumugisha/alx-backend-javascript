const { readFile } = require('fs');

module.exports = function ReadDatabase(filePath) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const noHeader = lines.slice(1);
        for (let a = 0; a < noHeader.length; a += 1) {
          if (noHeader[a]) {
            const field = noHeader[a].toString().split(',');
            if (field.length >= 4) {
              if (Object.prototype.hasOwnProperty.call(students, field[3])) {
                students[field[3]].push(field[0]);
              } else {
                students[field[3]] = [field[0]];
              }
            }
          }
        }
        resolve(students);
      }
    });
  });
};
