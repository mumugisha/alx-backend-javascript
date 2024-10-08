const { getListStudents } from '../0-get_list_students.js';

test('student data should match expected values', () => {
  const students = getListStudents();
  const expected = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];
  expect(students).toEqual(expected);
});
