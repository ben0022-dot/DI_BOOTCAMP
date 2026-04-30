function greet(name) {
  return `Hello, ${name}! Welcome to Node.js modules.`;
}

module.exports = greet;

const greet = require('./greeting');
console.log(greet('Owino'));

const chalk = require('chalk');

function showColorfulMessage() {
  console.log(chalk.blue('This is blue text!'));
  console.log(chalk.red.bold('This is bold red!'));
  console.log(chalk.green.underline('Green underlined!'));
}

module.exports = showColorfulMessage;

const showColorfulMessage = require('./greeting');
showColorfulMessage();

const fs = require('fs');
const path = require('path');

function readFileContent() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt');
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log('File content:');
    console.log(content);
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

module.exports = readFileContent;

const readFileContent = require('./greeting');
readFileContent();

const greet = require('./greeting');
const showColorfulMessage = require('./colorful-message');
const readFileContent = require('./read-file');

console.log(greet('Owino'));
console.log('\n--- Colorful Message ---');
showColorfulMessage();
console.log('\n--- File Content ---');
readFileContent();

