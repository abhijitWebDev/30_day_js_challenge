// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person = require('./generic.js');

const newPerson = person;

newPerson.name = 'Abhijit';
newPerson.age = 40;

console.log(`I am ${newPerson.name} and I am ${newPerson.age}`);