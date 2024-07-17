/* Day 5 : Functions */

/* Activity 1: Function declaration */
// Task 1: Write a function to check if a number is odd or even and log the result to the console
function evenodd(number) {
    if(number % 2 === 0) {
        console.log(`The number is even`);
    } else {
        console.log(`The number is odd`);
    }
};
evenodd(20);
evenodd(21);

// Task 2: Write a function to calculate the square of a number and return the result

function squareNum(num) {
    let result = num * num;
    // return the result
    return result;
}
const finalResult = squareNum(40);
console.log(`The square of the number is ${finalResult}`)

/* Activity 2: Function expression */

// Task 3 : Write a function expression to find maximum of two numbers and log result in the console
const maxNum = function maxNumber(num1, num2) {
    let result = Math.max(num1, num2);
    console.log(`The maximum number is ${result}`);
    
}
maxNum(15, 20);

// Task 4: Write a function exppression to concantenate two strings and return the value or result
const resultStr = function strConcat(str1, str2) {
    let mergeStr = str1 + str2;
    return mergeStr;
}

console.log(`The concatted string is ${resultStr("abs", "xyz")}`);

/* Activity 3 : Arrow functions */
// Task 5: Write an arrow function to calculate sum of two numbers and return result
let result = (num1, num2) => {
    return num1 + num2;
}
let newRes = result(3 , 2);
console.log(`The sum of two numbers is ${newRes}`);

// Task 6 : Write a arrow funnction to check if a string contains a specific charecter and return a boolean value
let strCont = (str) => {
    return str.includes('a');
}
const res = strCont('abcde');
console.log(`The value is present in the string is ${res}`)

/* Acitvity 4: function parameters and default values */
// Task 7 : Write a function which takes two parameters and returns their product, pass default value for the second parameter
function product(num1, num2=10) {
    let result = num1 * num2;
    return result;
}
const prodRes = product(20);
console.log(`The product of two nos is: ${prodRes}`)

// Task 8 : Write a function which takesa persons name and age and returns a greeting message , provide the default value for age
function greet(name, age=30) {
    return `Good morning, Welcome ${name}, your age is ${age}`;
}

const greeting = greet('Abhijit');
console.log(greeting);

/* Activity 5: Higher order functions */

// Task 8 : Write a higher order function , that take function and a number and calls the function that many times

function callFunctionTimes(func, n) {
    for(let i=0; i<n; i++) {
        func();
    }
    
}

function printHello() {
    console.log('Hello');
}

callFunctionTimes(printHello, 10);

// Task 9 : Write a higher order function, that takes two functions as a value, applies first function to the value, and then applies second function to the result

function applyFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
}

function addTwo(x) {
    return x + 2;
};

function multiplyByThree(x) {
    return x * 3;
}

const initialValue = 5;

const finalResultHOC = applyFunctions(addTwo, multiplyByThree, 5);

console.log(finalResultHOC);