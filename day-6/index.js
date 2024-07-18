/* Arrays */

/* Activity 1: Array creation and access */

// Task 1 : Create an array of numbers 1 to 5 and log it to the console.
{
    const num = [1, 2 , 3 ,4, 5];
    console.log(num);


// Task 2: Access the first and last elements of the array and log them to the console
   const first = num[0];
   const last = num[4];

   console.log(`The first element of the array is ${first}`);
   console.log(`The last element of the array is ${last}`)


/* Activity 2: Arrays basic operations / Methods(Basic) */

// Task 3 : Use the push method to add a new number to the array in the last position and log it to the console.
num.push(6);
console.log(num);

// Task 4 : Use the pop method to remove the last element in an array and log it to the console
num.pop();
console.log(num);

// Task 5 : Use the shift method to remove an first element in an array and log it to the console
num.shift();
console.log(num);

// Task 6 : Use the unshift method to add an first element in an array and log it to the console
num.unshift(1);
console.log(num);


/* Activity 3: Array Methods  */

// Task 7 : use map method to create a new array where each number is doubled in the new array and log it in the console
const doubledArr = num.map(n => n * 2);
console.log(doubledArr);

// Task 8 : use filter method to create a new array with only even numbers and log it in the console
const filteredArray = num.filter(n => n%2 === 0);
console.log(filteredArray);

// Task 9 : use reduce method to calculate the sum of the numbers in an array and log the result
const sumArr = num.reduce((acc, currVal) => acc + currVal, 0);
console.log(sumArr);

/* Activity 4 : Array Iteration :bell: */


// Task 10 : Use for loop to itterate over an array and log result to the console.
for (let i = 0; i < num.length; i++) {
    console.log(`The elements in array are ${i}`);
    
}

// Task 11: use foreach loop to itterate over an array log each element to the console
 num.forEach(e => console.log(`The elements using forEach loop are ${e}`));
}

/* Activity 5: Multi dimensonal arrays */


// Task 12: create an 2d array (matrix) and log the entire array in the console

const matrix = [
    [1, 2, 3], [4, 5, 6], [7, 8 , 9]
]

console.log(matrix);

// Task 13: Access a specific element in a 2d array (matrix) and log it in the console

const oneValue = matrix[0][2];
const secondValue = matrix[1][1];
const thirdValue = matrix[2][0];

console.table([oneValue, secondValue, thirdValue]);