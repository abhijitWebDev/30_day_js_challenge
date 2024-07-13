
// Activity 1: declare a variable using var and assign a number  and log the value in the console.
var num1 = 10;
console.log(num1);

// Activity 2: declare a variable using let and assign a string  and log the value in the console.
let str = 'abc';
console.log(str);

// Activity 3: declare a variable using const and assign a boolean  and log the value in the console.
const bool = true;
console.log(bool);

// Activity 4 create a variables of different data types (number, string, boolean, object, araay) and log each variable type using typeof
let newNum = 10;
// string
let newStr = 'abc';
// boolean 
let newBool = false;
// object
let per = {
    name: "abc",
    age: 20
}
// array
let fruits=["apple", "strawberry"]; // arrays are objects in js

const variables = [
    { variable: 'newNum', value: newNum, type: typeof newNum },
    { variable: 'newStr', value: newStr, type: typeof newStr },
    { variable: 'newBool', value: newBool, type: typeof newBool },
    { variable: 'per', value: per, type: typeof per },
    { variable: 'fruits', value: fruits, type: typeof fruits }
];

console.table(variables);

// Activity 5,  reassign let value and log it to console
let age= 40;
console.log(`currnet age is: ${age}`);
age = 30;
console.log(`modified age is : ${age}`);

// Activity 6, const declaration
const newAge = 20;
console.log("Initial value of newAge:", newAge);
// redeclaration
newAge=30
console.log(`after change: ${newAge}`);

console.log(newAge);


