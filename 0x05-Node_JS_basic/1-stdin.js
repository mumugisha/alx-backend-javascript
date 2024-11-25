process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Check if process.stdin is in TTY mode
if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
}

// Add a listener for the 'exit' event
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
