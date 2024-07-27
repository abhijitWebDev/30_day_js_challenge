/* Day 15: Closures */

/* Activity 1 */

// Task 1 : write a function that returns another function , where inner function access the variable from outer functions scope. call inner functions and log the result

function outer() {
    let a = 10;

    function inner() {
        console.log(a);

    }

    return inner;
}

const innerFunction = outer();

innerFunction();

// Task 2: Create a closure that maintains a private counter. implement functions to increament and get the current value of the counter
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        }
    }
}

const counter = createCounter();

counter.increment();
console.log(counter.getValue());

counter.increment();

counter.increment();

console.log(counter.getValue());

/* Activity 2: Practical Closures */

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateUniqueId() {
    let lastId = 10;

    return function() {
        lastId++;
        return lastId;
    }

}

const uniqueGenerator = generateUniqueId()

console.log(uniqueGenerator());
console.log(uniqueGenerator());
console.log(uniqueGenerator());

// Task 4: create a closure that captures user name, return a greet function which greets the user by its name

function greetUser(user) {
    let userFromInput = user;
    console.log(typeof userFromInput);

    if (typeof userFromInput !== 'string') {
        return 'Please enter a valid user';
    }

    return function() {
        return `Welcome ${userFromInput}, happy to see you`;
    };
}

const greetNewUser = greetUser('Abhijit');

console.log(greetNewUser()); // Call the function to get the greeting message

/* Activity 3: Closures in loops */

// Task 5: write a loop that creates an array of functions. each function should log its index when called. use closure to ensure that each function call the correct index.
function createFunctionArray() {
    let functions = [];

    for (let i = 0; i < 10; i++) {
        functions[i] = (function(index) {
            return function() {
                console.log(`The function index is ${index}`);
            }
        })(i);
        
    }
    return functions;
}

const functionArray = createFunctionArray();

for (let i = 0; i < functionArray.length; i++) {
    functionArray[i]();
    
}

/* Activity 4: Module Pattern */
//Task 6:  Use closures to create a simple module for managing a collection of items, implement methods to add, remove and list items.

const ItemModule = (() => {
    const items = [];

    const addItem = (item) => {
        items.push(item);
    }

    const removeItem = (index) => {
        items.splice(index, 1);
    }

    const listItems = () => {
        return items;
    }

    return {
        addItem,
        removeItem,
        listItems,
    }
})();

// Example Usage
ItemModule.addItem("Item 1");
ItemModule.addItem("Item 2");
ItemModule.addItem("Item 3");

console.log(ItemModule.listItems());

ItemModule.removeItem(1);

console.log(ItemModule.listItems());

/* Activity 5: Memoization */

// Task 7: Write a function that memoize the result of another function. Use a closure to store the result of the previous computations.

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if(cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result
        }
    };
}

function slowFunction(num) {
    // similates a slow computation
    for(let i=0;i<1e6; i++) {

    }
    return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Computed and cached
console.log(memoizedSlowFunction(5)); // Retrieved from cache
console.log(memoizedSlowFunction(10)); // Computed and cached
console.log(memoizedSlowFunction(10)); // Retrieved from cache

// Task 8: create a memoized version of a function which calculates the factorial of a number

function memoizeNew(fn) {
    const cache = {};
    return function(...args) {
        const key = args.toString();
        if(cache[key] !== undefined) {
            return cache[key];
        };
        const result = fn(...args);
        cache[key] = result;
        return result; 
    };
}

function factorial(n) {
    if(n <= 1) {
        return 1;
    }
    return n*factorial(n-1);
}

const memoizeFactorial = memoizeNew(factorial);

console.log(memoizeFactorial(5));
console.log(memoizeFactorial(6));
console.log(memoizeFactorial(5));
