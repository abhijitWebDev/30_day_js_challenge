/* Day-21: Leet code easy */

/* Activity 1: Two sum */

// Task 1: Solve the two sum problem on leetcode

 /**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */

 function twoSum(nums, target) {
   const numMap = {};

   for (let i = 0; i < nums.length; i++) {
     const complement = target - nums[i];
     if (numMap[complement] !== undefined) {
       return [numMap[complement], i];
     }
     numMap[nums[i]] = i
   };
return [];
 }

 console.log(twoSum([7, 2, 13, 10], 12));

 /* Activity 2: Reverse integer */

 // Task 2: Solve the Reverse Integer problem on leet code
 /* Write a function that takes an integer and returns it with its digits reversed.
    Handle the edge cases like negative numbers and numbers ending in zero.
    Log the reversed integers for a few test cases */

    function reveseInteger(num) {
        const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
        return reversed

    }

console.log(reveseInteger(123)); // Output: 321
console.log(reveseInteger(-123)); // Output: -321
console.log(reveseInteger(120));

/* Activity 3: Pallindrome number */
// Task 3: Palindrome Number

function isPallindrome(num) {
    let reverse;
    const orignalNum = Math.abs(num);

    reverse = reveseInteger(num);

    return orignalNum === reverse ? true : false;
}

console.log(isPallindrome(4554));

/* Activity 4: Merge two sorted lists */

// Task 4:

// definition for singly linkedlist
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    // create a dummy node to start the merging
    let dummy = new ListNode();
    let current = dummy;

    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;

        }
        current = current.next;
    }
    // adding remaining parameters
    current.next = l1 !== null ? l1:l2;
    return dummy.next;
}
    
// Example usage:
let list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

let mergedList = mergeTwoLists(list1, list2);

// print the list
function printList(node) {
    let current = node;
    while(current !== null) {
        console.log(current.val);
        current = current.next;
        
    }
}

printList(mergedList);

/* Activity 5: Valid parenthesis */

function validPar(s) {
    let stack = [];
    let map = {
        "(":")",
        "{":"}",
        "[":"]",
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if(map[char]) {
            // if the charecter is an opening bracket push it in stack
            stack.push(char);
        } else {
            // if the charecter is closing backet, pop it from stack
            const top = stack.pop();
            if(map[top] !== char) {
                return false;
            }
        }
        
    }
    // if the stack is empty , all the parentehesis were match 
    return true;
}

// Example usage:
console.log(validPar("(",")")); // true
console.log(validPar("()[]{}")); // true
console.log(validPar("(]")); // false
console.log(validPar("([)]")); // false
console.log(validPar("{[]}")); // true
