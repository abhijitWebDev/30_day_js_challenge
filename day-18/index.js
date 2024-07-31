/* Day-18 : Algorithms */

/* Activity 1: Sorting Algorithms */

// Task 1: Implement a bubble sort algorithm to sort an array in ascending order. Log the sorted array.

/**
 * Sorts an array using the bubble sort algorithm.
 *
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function bubbleSort(arr) {
  let isSwap;

  // implementing a do while loop
  do {
    isSwap = false;
    // Implementing for loop
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwap = true;
      }
    }
  } while (isSwap);
  return arr;
}

console.log(bubbleSort([6, 8, 5, 20]));

// Task 2: Implement a Selection sort algorithm to sort an array in ascending order. Log the sorted array.
/**  Sorts an array using selection sort algorithm
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */

function selectionSort(arr) {
  let n = arr.length; // we are holding length

  for (let i = 0; i < n; i++) {
    let minIndex = i; // we are holding index

    // initiating another loop
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort([10, 20, 5, 25, 15, 40]));

//  Task 3: Implement a Quick sort algorithm to sort an array in ascending order. Log the sorted array.

/**  Sorts an array using selection sort algorithm
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      let pivotIndex = partition(arr, low, high);
      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
  }
  
  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // final swap of pivot and ith value
    return i + 1;
  }

console.log(quickSort([30, 29, 26, 36, 41]));

/* Activity 2: Searching algorithms */

// Task 4: Implement a linear search algorithm and find a target value in a array, log the result to the console
/** Sorts an array using linear search algorithm
 * @param {Array<number>} arr -> the array to be sorted
 * @returns {Array<number>} arr-> returns sorted array
 */

function linearSearch(arr, target) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage
const array = [5, 3, 8, 1, 2, 9]

const target = 8;

const index = linearSearch(array, target);

// if(index !== -1) {
//   console.log(`Targett ${target} found at : ${index}`)
// } else {
//   console.log(`Targett ${target} not  found in array`);
// }

// Task 5: Implement an binary search algorithm and find a target value in a sorted array, log it to the console
/** Sorts an array using linear search algorithm
 * @param {Array<number>} arr -> the array to be sorted
 * @returns {Array<number>} arr-> returns sorted array
 */

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const arrayEx = [1, 3, 5, 7, 9, 11, 13];

const targetEx = 7;

const indexEx = binarySearch(arrayEx, targetEx);

if (indexEx !== -1) {
console.log(`Target ${targetEx} found at index ${indexEx}.`);
} else {
console.log(`Target ${targetEx} not found in the array.`);
}

/* Activity 3: String Algorithmns */

// Task 6: write a function to calculate each occurence of the charecter in a string, Log the charecter counts
function countCharecter(str) {
  const charecterCount = {};

  for(let char of str) {
    if(charecterCount[char]) {
      charecterCount[char]++;
    } else {
      charecterCount[char] = 1;
    }
  }

  for(let char in charecterCount) {
    console.log(`Charecter ${char} occurs ${charecterCount[char]} times`);
  }
}

countCharecter("Hello world");

// Task 7: Write a function to find the longest substring without repeating charecters in a string. log the result to the console
function longestStr(s) {
  let start = 0;
  let maxlength = 0;
  let charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    const currChar = s[end];

    if(charIndexMap[currChar] !== undefined && charIndexMap[currChar] >= start) {
      start = charIndexMap[currChar] + 1;
    }

    charIndexMap[currChar] = end;
    maxlength = Math.max(maxlength, end-start + 1);
    
  }
  return maxlength;
}


const testString = "abcabcbb";
const result = longestStr(testString);
console.log(`The length of the longest substring without repeating characters is: ${result}`);


/* Activity 4: Array algorirhtms */

// Task 8: Write a function to rotate an array by k positions, log the rotated array
function rotateArray(arr,k) {
  // Normalize k to insure its within the bounds of the array
  k = k % arr.length;

  // split the array into two parts and rejoin them in the reverse order
  let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));

  // Log the rotated array
  console.log(rotatedArray);

  return rotatedArray;
}

// Usage
let arrayRo = [1, 2, 3, 4, 5, 6, 7];
let k = 6;
console.log(rotateArray(arrayRo, k));

// Task 9 : write a function to merge to sorted arrays. into one sorted array and log the merged array
function mergeSortedArrays(arr1, arr2) {
let mergedArray = [];
let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
if (arr1[i] < arr2[j]) {
mergedArray.push(arr1[i]);
i++;
} else {
mergedArray.push(arr2[j]);
j++;
}
}

// If there are remaining elements in arr1, add them to the merged array
while (i < arr1.length) {
mergedArray.push(arr1[i]);
i++;
}

// If there are remaining elements in arr2, add them to the merged array
while (j < arr2.length) {
mergedArray.push(arr2[j]);
j++;
}

// Log the merged array
console.log(mergedArray);

return mergedArray;
}

// Example usage:
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
mergeSortedArrays(array1, array2); // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]

/* Activity 5: Dynamic programming */

// Task 10: Write a function to solve fibonacci sequence using dynamic programming, log the result
function fibonacci(n) {
  // create a array to store the fibonacci no
  let fib = new Array(n+1);

  // base cases
  fib[0] = 0;
  fib[1] = 1;

  // fill the array with fibonacci nos
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
    
  }
  console.log(fib[n]);
  return fib[n];
}

console.log(fibonacci(10));

// Task 11: Write a function to solve the knapsack problem using dynamic programming, log result to the console
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
          if (weights[i - 1] <= w) {
              dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
          } else {
              dp[i][w] = dp[i - 1][w];
          }
      }
  }

  return dp[n][capacity];
}

// Example usage:
const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;

const resultNew = knapsack(weights, values, capacity);
console.log("Maximum value in knapsack:", result);
