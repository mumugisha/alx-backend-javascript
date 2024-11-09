export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
    // Avoid redeclaring variables by using different variable names
    const innerTask = true;
    const innerTask2 = false;
  }
  /* eslint-enable no-unused-vars */

  return [task, task2];
}
