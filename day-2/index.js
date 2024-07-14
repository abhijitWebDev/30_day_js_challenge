//Activity 1: Arethmatic operators

// Task 1 program for adding two nos and printing it in console
{
let a = 10;
let b = 20;
let c = a + b;
console.log(`The addition of the no is ${c}`);
}


// Task 2 : program for subtracting two nos and printing values in console
{
    let a = 30;
    let b = 20;
    let c = a - b;
    console.log(`The addition of the no is ${c}`);
}

// Task 3 : program for multiplying two nos and printing values in console
{
    let a = 30;
    let b = 20;
    let c = a * b;
    console.log(`The addition of the no is ${c}`);
}

// Task  4 : program for divide two nos and printing values in console
{
    let a = 60;
    let b = 20;
    let c = a / b;
    console.log(`The addition of the no is ${c}`);
}

// Activity 2: Assignment operators
// Task 6: Use the += operator to add number to a variable and log the result to the console
{
    let a = 20;
    a+=40;
    console.log(`The added number is ${a}`);
}
// Task 7: Use the -= operator to add number to a variable and log the result to the console
{
    let a = 100;
    a-=40;
    console.log(`The added number is ${a}`);
}

// Actvity 3 : Comparison operators
// Task 8 Write a program to compare two numbers using > and < and log the result to the console
{
    let a = 30;
    let b = 40;

    console.log(`Is a grater than b: ${a > b}`);
    console.log(`Is a lesser than b: ${a < b}`);

}

// Task 9 Write a program to compare two numbers using >= and <= and log the result to the console
{
    let a = 15;
    let b=20;
    console.log(`Is a grater or equal to b: ${a >= b}`);
    console.log(`Is a lesser than or equa to b: ${a <= b}`);
}

// Task 10 Write a program to compare two numbers using == and === and log the result to the console
{
    let a = 15
    let b = '15'
    console.log(`Is a grater or equal to b: ${a == b}`);
    console.log(`Is a lesser than or equa to b: ${a === b}`);
}

// Activity 4 Logical operators
// Task 11 Write a program that uses && operator to combine two condition and print the result in the console
{
    let a = 20;
    let b = 30;
   if(a > 0 && b < 31) {
    console.log(`Using the and operator, both condition should be true`);
   } else {
    console.log(`Using the and operator, both statement should be false`);
   }
    
}

// Task 12 Write a program that uses || operator to combine two condition and print the result in the console
{
    let a = 20;
    let b = 30;
   if(a > 0 || b < 29) {
    console.log(`Using the and operator, both condition should be true`);
   } else {
    console.log(`Using the and operator, both statement should be false`);
   }
    
}

// Task 13 Write a program that uses ! operator to negatge a condition and print the result in the console
{
    let a = '';

    if(!a) {
        console.log(`The value of a is empty`);
    } else {
        console.log(`The value of a is ${a}`)
    }
}

// Activity 5 Ternary operator
// Task 14 Write a program which uses ternary operator to check if the number is positive or negative and log the result to the console
{
    let a = 30;

    // use of ternary operator
    (a > 0) ? console.log( `The value of a is positive`) : console.log( `The value of a is negative`)

    
} 

// Feature request
// Arithmatic operations script operations (add, subtract, multiply, divide, remainder) on two numbers and log the result
{
    let a = 100;
    let b = 20;

    console.log(`The addition is ${a + b}`)
    console.log(`The addition is ${a - b}`)
    console.log(`The addition is ${a * b}`)
    console.log(`The addition is ${a / b}`)
    console.log(`The addition is ${a % b}`)
    
    let c = 2;
    console.log(`The value of c is ${c += 5}`)
    console.log(`The value of c is ${c -= 5}`)
}

// comparision and logical operations script
{
    let a = 30;
    let b = 40;
    let c = '30'
    console.log(` is a grater than ${a > b}`)
    console.log(` is a lesser ${a < b}`)
    console.log(` is a lesser than or equal to b, the value is ${a <= b}`)
    console.log(` is a grater than or equal to b, the value is ${a >= b}`)
    console.log(` is a == c ${a == c}`)
    console.log(` is a === c ${a === c}`)

    // Logical operators
    let d = 40;
    let e = 50; 
    let f = 60;

  

    // and operator
   console.log(d < e && e < f);

   // or operator
   console.log(d > e || e > f);


};

// using ternary operator
{
    let a = 100;
    let result = ( a > 100) ? "grater" : "lesser";
    console.log(`The result is ${result}`);
}