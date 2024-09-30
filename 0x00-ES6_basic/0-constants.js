function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

function taskNext() {
  let combination = 'But sometimes let';
  combination += ' is okay';
  return combination;
}

module.exports = { taskFirst, taskNext };
