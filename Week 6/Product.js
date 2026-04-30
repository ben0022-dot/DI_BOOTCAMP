// products.js
const products = [
  { name: 'Laptop', price: 999, category: 'Electronics' },
  { name: 'Book', price: 20, category: 'Education' },
  { name: 'Shirt', price: 25, category: 'Clothing' }
];

module.exports = products;

// shop.js
const products = require('./products.js');

function findProduct(name) {
  return products.find(p => p.name.toLowerCase() === name.toLowerCase());
}

console.log(findProduct('Laptop')); // { name: 'Laptop', price: 999, category: 'Electronics' }
console.log(findProduct('Book'));
console.log(findProduct('Shirt'));

// data.js
const persons = [
  { name: 'Alice', age: 25, location: 'Nairobi' },
  { name: 'Bob', age: 30, location: 'Mombasa' },
  { name: 'Carol', age: 28, location: 'Kisumu' }
];

export default persons;

// app.js
import persons from './data.js';

function averageAge(people) {
  const avg = people.reduce((sum, p) => sum + p.age, 0) / people.length;
  console.log(`Average age: ${avg.toFixed(2)}`);
}

averageAge(persons); // Average age: 27.67

// fileManager.js
const fs = require('fs');

module.exports = {
  readFile: (path) => fs.readFileSync(path, 'utf8'),
  writeFile: (path, content) => fs.writeFileSync(path, content)
};

// app.js
const { readFile, writeFile } = require('./fileManager.js');

const helloContent = readFile('Hello World.txt');
console.log('Read:', helloContent); // Hello World !! 

writeFile('Bye World.txt', 'Writing to the file');

console.log('Bye World.txt updated');

// todoApp/todo.js
export class TodoList {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push({ task, complete: false });
  }

  markComplete(taskName) {
    const task = this.tasks.find(t => t.task === taskName);
    if (task) task.complete = true;
  }

  list() {
    this.tasks.forEach(t => console.log(`${t.task}: ${t.complete ? 'Complete' : 'Pending'}`));
  }
}

// todoApp/app.js
import { TodoList } from './todo.js';

const todo = new TodoList();
todo.add('Learn JS');
todo.add('Exercise');
todo.markComplete('Learn JS');
todo.list();
// Learn JS: Complete
// Exercise: Pending

// math-app/math.js
module.exports = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

// math-app/app.js
const math = require('./math.js');
const _ = require('lodash');

const num1 = 5, num2 = 10;
console.log(`Add: ${math.add(num1, num2)}`); // 15
console.log(`Multiply: ${math.multiply(num1, num2)}`); // 50
console.log(`Sum with lodash: ${_.sum([num1, num2])}`); // 15
