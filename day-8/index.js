/* Day 8: ES6 + Features */

/* Activity 1: Template Literals */

// Task 1 : Use template literals to create a string that includes variables for a persons name and persons age and log it to the console
const person = {
    name: 'Alice',
    age: 30
};

console.log(`The person's name is ${person.name} and their age is ${person.age}`);





// Task 2: create a multiline string using template literals and log it to the console

const multilineString = `
This is a multiline string.
It can span multiple lines without any issues.
You can include variables like this: ${new Date().toLocaleDateString()}.
And it preserves the formatting as you write it.
`;

console.log(multilineString);

/* Activity 2: Destructuring */

// Task 3: Use array destructuring to extract the first and second elements in an array of numbers and log them to the console
const [num1, num2] = [1, 2, 3, 4, 5];
console.log(num1, num2);

// Task 4: Use object destructuring  to extract the title and author from a book object and log them to the console
const book = {
    title: 'Sapiens',
    author: 'Harare',
}

const {title, author} = book;

console.log(title, author);

/* Activity 3: Spread and Rest operators */

// Task 5: Use the spread operator that to create a new array which includes the value of exisiting array and also new values and log it to the console.
const arr = ['a', 'b'];

const newArr = [1, 2, ...arr];
console.log(newArr);

// Task 6: Use the rest operator in a function to accept numbers of arbitary arguments, sum them and return the result .

function sumNumbers(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Test the function
console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15


/* Activity 4 : Default parameters */

// Task 7: Write a funtction and return their product , which takes two parameters , second parameter with the value of 1 , Log the result of this functin with and without the second parameter.

const product = (num1, num2=1) => {
    return num1 * num2;
}

const result = product(10);
console.log(result);

const newResult = product(10, 20);
console.log(newResult);


/* Activity 5: Enhanced object literals */

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console
const myObject = {
    property1: 'value 1',
    property2: 'value 2',
    method1() {
        console.log('This is method 1')
    },
    method2() {
        console.log(`this is method 2`);
    }
};

console.log(myObject);

// Task 9 : Create an object with a computed property names based on variables and logs the object to the console.

// Define variables for the property names
const propName1 = 'name';
const propName2 = 'age';

// Create an object with computed property names
const personJo = {
  [propName1]: 'John Doe',
  [propName2]: 30
};

// Log the object to the console
console.log(personJo);
