const fs = require('fs');

/**
 * Counts students and their distribution across fields in a CSV file.
 * @param {string} NameOfFile - The path to the CSV file.
 */
function countStudents(NameOfFile) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const dataContents = fs.readFileSync(NameOfFile, 'utf8');
    const lines = dataContents.toString().split('\n').filter(Boolean);

    if (lines.length <= 1) {
      throw new Error('No data available in the file.');
    }

    for (let a = 1; a < lines.length; a += 1) {
      const field = lines[a].toString().split(',');

      // Ensure the line has at least 4 columns
      if (field.length < 4) {
        console.warn(`Skipping malformed line ${a + 1}: ${lines[a]}`);
        continue;
      }

      const fieldName = field[3].trim();
      const studentName = field[0].trim();

      if (students[fieldName]) {
        students[fieldName].push(studentName);
      } else {
        students[fieldName] = [studentName];
      }

      fields[fieldName] = (fields[fieldName] || 0) + 1;
      length += 1;
    }

    const studentCount = length;
    console.log(`Number of students: ${studentCount}`);
    for (const [key, value] of Object.entries(fields)) {
      console.log(
        `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`
      );
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
  }
}

module.exports = countStudents;
