/* Day-16 Recursion */

/* Activity 1: Basic recursion */

// Task 1: write a recursive function to calculate a factorial of a number, log the result for a fewer test case;

const factorial = (num) => {
    if(num <= 1) {
        return 1;
    }

    return num * factorial(num-1);
}

console.log(factorial(5));
console.log(factorial(6));

// Task 2: Write a recursive function to calculate the nth fibonacci number, log the result for few test cases
const fibonacci = (num) => {
    if(num <= 1) {
        return 1;
    }

    return (fibonacci(num-1) + fibonacci(num-2));
}

console.log(fibonacci(6));
console.log(fibonacci(7));

/* Activity 2: Recursion with arrays */

// Task 3: Write a recursive function that sums all the elements in an array , and log the result with few test cases
const sumArray = (arr) => {
    // base case, if the array is empty then return 0
    if(arr.length === 0) {
        return 0;
    };
    // Recursive function : sum the first element in the array and the result of sumArray function
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([20, 30, 40, 50]));
console.log(sumArray([7, -3, 2, 1]));
console.log(sumArray([]));
console.log(sumArray([100]));

// Task 4: Write a recursive function to find an maximum element in a array, log the result with few test cases

const findMax = (arr) => {
    // Base case: If the array has only one element, return the element
    if(arr.length === 1) {
        return arr[0];
    }

    // Recursive case: compare the first element with the maximum of the rest of the array
    const restMax = findMax(arr.slice(1));

    return arr[0] > restMax ? arr[0] : restMax;
}

console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMax([20, 30, 40, 50]));
console.log(findMax([7, -3, 2, 1]));
console.log(findMax([-10, -20, -30, -40]));
console.log(findMax([100]));

/* Activity 3 : String manipulation with recursion */
// Task 5: Write a recursive function to reverse a string, log with few test cases


const recursiveReverseString= (string) => {
    // console.log(`The current string: ${string}`)
    // // base case 
    // if(string === '') {return string}
    // let reversePart = recursiveReverseString(string.substring(0, string.length - 1));
    // let result = string[string.length-1] + reversePart;
    // console.log(`Reversing: lastChar:${string[string.length-1]} added in front of reverse part: ${reversePart} to form a result :${result} `);
    // return result

    console.log(`The current string is : ${string}`)
    // base case
    if(string === '') return string;

    let reversePart = recursiveReverseString(string.substring(0, string.length - 1));
    let result = string[string.length-1] + reversePart;
    console.log(console.log(`Reversing: lastChar:${string[string.length-1]} added in front of reverse part: ${reversePart} to form a result :${result} `));
    return result
}


console.log(recursiveReverseString('abhijit'));
console.log(recursiveReverseString('ojas'));

console.log(recursiveReverseString('hello'));

// Task 6: Write a recursive function to check if a string is a pallindrome. log with few test cases

function pallindrome(string) {
    if(string.length <= 1) {
        return true;
    };

    if(string[0] === string[string.length - 1]) {
        return pallindrome(string.substring(1, string.length-1))

    } else {
        return false;
    }
}

console.log(pallindrome('madam'));
console.log(pallindrome('abhijit'));

/* Activity 7: Recursive search */

// Task 7: Write a recursive function to perform binary search on the sorted array, log the index of the target element and few test cases
const binarySearch = (arr, target,start=0, end=arr.length-1) => {
    if(start > end) {
        return - 1; // Target not found
    }
    const mid = Math.floor((start + end) / 2);
    if(arr[mid] === target) {
        return mid;
    } else if(arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end);
    } else {
        return binarySearch(arr, target, start, mid-1);
    }
}
const arr1 = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(arr1, 7));
console.log(binarySearch(arr1, 13));
console.log(binarySearch(arr1, 2));

// Task 8: Write a recursive function to count occuerences of a target element in a array, log the result for a few test cases

const countOccur = (arr, target, index=0) => {
    // base case: if the index is out of bounds, return 0;
    if(index >= arr.length) {
        return 0;
    }

    // check if the current element matches the target element
    const match = arr[index] === target ? 1 : 0;

    // recursive call to check the rest of the array
    return match + countOccur(arr, target, index + 1);

}

const testArray = [1, 2, 3, 4, 2, 2, 5];
const testArray1 = ['a', 'b', 'b', 'c', 'c', 'c', 'a'];
const testArray2 = [true, false, false, true, true];

console.log(countOccur(testArray, 2));
console.log(countOccur(testArray1, 'a'));
console.log(countOccur(testArray2, true));

/* Activity 4: recursive trees */

// Task 9: write a recursive function to perform in order travesal of a binary tree, and log the nodes as they are visited
 class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
 }

 function inOrderTraversal(node) {
    if(node === null) {
        return;
    }
    // visit the left subtree
    inOrderTraversal(node.left);

    // visit the root node
    console.log(node.value);

    // traverse the right subtree
    inOrderTraversal(node.right);
 }

 // usage
 let root = new Node(1);

 root.left = new Node(2);

 root.right = new Node(3);

 root.left.left = new Node(4);

 root.right.right=  new Node(5);

 console.log("In-order traversal of the binary tree is: ");
 inOrderTraversal(root);

 // Task 10: Write a function which calculate depth of a binary tree. log the result for few test cases
 class Node1 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(node) {
    if (node === null) {
        return 0;
    } else {
        let leftDepth = maxDepth(node.left);
        let rightDepth = maxDepth(node.right);

        return Math.max(leftDepth, rightDepth) + 1;
    }
}

// Test cases
let root1 = new Node1(1);
root1.left = new Node1(2);
root1.right = new Node1(3);
root1.left.left = new Node1(4);
root1.left.right = new Node1(5);

console.log("Depth of the binary tree is:", maxDepth(root)); // Output: 3

let root2 = new Node1(1);
root2.left = new Node1(2);
root2.right = new Node1(3);
root2.left.left = new Node1(4);
root2.left.left.left = new Node1(5);

console.log("Depth of the binary tree is:", maxDepth(root2)); // Output: 4

let root3 = new Node1(1);

console.log("Depth of the binary tree is:", maxDepth(root3)); // Output: 1

let root4 = null;

console.log("Depth of the binary tree is:", maxDepth(root4)); // Output: 0
