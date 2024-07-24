/* Day 12: Error handelling */
/* Activity 1: Basic Error handling with try catch */

// Task 1: Write a function that intentionally throws an error and use a try catch block to handle the error and tlog an appropriate message to the console

function demoErr(num) {
    try {
        if(num === 2) {
            console.log(`The number is valid`);
        } else {
            throw new Error("The number is not valid")
        }
        
    } catch (error) {
        console.error(`The message is ${error.message}`);
        
    }
}

console.log(demoErr(4));

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use try catch block to handle this error;
function divideNum(numerator, denominator) {
    try {
        if(denominator !== 0 ) {
            const result = numerator / denominator;
        } else {
            throw new Error('Result will not be there as denominator is zero')
        }
        
    } catch (error) {
        console.log(`${error.message}`);
        
    }
}

console.log(divideNum(4, 0));

/* Activity 2: Finally block */

// Task 3: Write a script , which includes try catch block and finally block, log the messages of try catch and finally block to observe the execution flow.

function performTask() {
    try {
        // code that may throw and error
        console.log("Inside the try block - 1");
        // Simulating an error
        throw new Error("Simulated error");
        
    } catch (error) {
        console.log(error.message);
        
    } finally {
        console.log("Inside finally block");

    }
}

console.log(performTask());

/* Activity 4: Custom error objects */

// Task 4 : Create an custom error class that extends the builtin error class. Throw an instance of this custom error in a function and handle it using try catch block

class ApiError extends Error {
    constructor(message="something went wrong") {
        super(message)
    }
}

function exampleFunction() {
    throw new ApiError("the error implementation is implemented correctly")
}

try {
    exampleFunction()
    
} catch (error) {
    console.error("Error caught:", error.message);
    
}

// Task 5: Write a function which validtes user input (eg. Checking if a string is not empty and throws a custom error if the validation fails, using try catch block)
class InputError extends Error {
    constructor(message= "Input validation error") {
        super(message);
        this.name = "InputError";
    }
}
function nameStr(input) {
   if(!input || input.trim() === "") {
    throw new InputError("Input cannot be empty");
   }
}

try {
    nameStr("")
    
} catch (error) {
    if(error instanceof InputError) {
        console.error("Input error caught", error.message)
    } else {
        // Handle other types of errors
        console.error("Error caught:", error.message);
    }
   
    
}

/* Activity 4: Error handeling in promises */

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console

function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();

        if(randomNum >= 0.5) {
            resolve(randomNum);
        } else {
            reject(new Error("Promise rejected"));
        }
    })
}

randomPromise()
.then(result => {
    console.log("Promise resolved with: " + result);

})
.catch(error => {
    console.error("Promise rejected: " + error.message);
});

// Task 7: Use a try catch with in a async function to handle the errors from a promise that randonly resolves or rejects, and log the error message
async function handleProm() {
    try {
        const result = await randomPromiseNew();
        console.log("promise resolved " + result );

    } catch(error) {
        console.error("Promise rejected: " + error.message)

    }
}

async function randomPromiseNew() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();

        if(randomNum >= 0.5) {
            resolve(randomNum);
        } else {
            reject(new Error("Promise rejected"));
        }
    })
}

handleProm();

/* Activity 5: Graceful handeling with fetch */

// Task8: Use the fetch API to request data from an invalid URL and handle the error using .catch() and log the message
fetch("http://invalidurl.com")
.then((res) => res.json())
.catch((error) => console.log('Error' + error));

// Task 9: Use fetch api to request data from and invalid url in async function and handle the error using try catch, log the appropriate message

const urlData = async() => {
    
    try {
        const result = await fetch("http://invalidurl.com")
         let data = await result.json();
         console.log(data)
        
    } catch (error) {
        console.error(`Error is ${error}`);
        
    }
}

urlData();


