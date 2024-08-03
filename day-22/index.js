/* Day 22: Leet code medium */

/* Activity 1: Add two numbers */
// Task 1: solve the "Add Two Numbers" problem on leet code

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;
  
    while (p !== null || q !== null) {
      let x = p !== null ? p.val : 0;
      let y = q !== null ? q.val : 0; // Use 'y' instead of redeclaring 'q'
  
      let sum = carry + x + y;
  
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
  
      if (p !== null) p = p.next;
      if (q !== null) q = q.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  };
  
  const createLinkedList = (arr) => {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
      current.next = new ListNode(num);
      current = current.next;
    }
    return dummyHead.next;
  };
  
  let l1 = createLinkedList([2, 4, 3]); // represents the number 342
  let l2 = createLinkedList([5, 6, 4]); // represents the number 465
  
  let result = addTwoNumbers(l1, l2);
  
  const printLinkedList = (node) => {
    let arr = [];
    while (node !== null) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr.join(' -> '));
  };
  
  printLinkedList(result); // Output should be 7 -> 0 -> 8, which represents the number 807
  

  /* Acvitity 2: Longest substring without repeating charecters */

  // Task 2: Longest substring without repeating charecters
  /**
  * @param {string} s
  * @return {number}
  */

  const lengthOfLongestSubstring = function(s) {
    // Initiazlize a set to store the charecters in the set
    let charSet = new Set();

    // Initialize pointers for the sliding window
    let left = 0;
    let maxLength = 0;

    // Iterate throught the string with the right pointer
    for (let right = 0; right < s.length; right++) {
        // If the charecter is already in the set, remove the charecters from the left
        while(charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++
        };
        // add the current charecter to the right
        charSet.add(s[right]);
        // update the maximum length if the current window length is larger
        maxLength = Math.max(maxLength, right - left + 1);
        
    }
    return maxLength;
  }

  console.log(lengthOfLongestSubstring('bbbbb'));

  /* Activity 3: container with most water */

  // Task 3: Container with most water

  /**
 * @param {number[]} height
 * @return {number}
 */

  const maxArea = (height) => {
    let maxWater = 0;
    let left = 0;
    let right = height.length-1;

    while(left<right) {
        let currentHeight = Math.min(height[left], height[right]);
        let currentWidth = right - left;
        let currentArea = currentHeight * currentWidth;

        maxWater = Math.max(maxWater, currentArea);

        // move the pointers 
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
  }

  const arr = [1,8,6,2,5,4,8,3,7]
  const arr2 = [1, 1]
  console.log(maxArea(arr2));

  /* Activity 4: 3 sum */

  // Task 4: Solve three sum problem
  const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    let triplets = [];
 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
 
        if (i === 0 || nums[i] !== nums[i-1]) {
            let left = i + 1;
            let right = nums.length - 1;
 
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
 
                if (sum < 0) left++;
                else if (sum > 0) right--;
                else {
                    triplets.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
 
               while (left < right && nums[left] === nums[left - 1]) left++;
                }
            }
        }
    }
    return triplets;
  }

  console.log(threeSum([-1,0,1,2,-1,-4]))
  console.log(threeSum([0,1,1]))
  console.log(threeSum([0, 0, 0]));

  /* Activity 5: Group anagrams */

  // Task 5: Group anagrams

 /**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }
    
    return Array.from(map.values());
};


  console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

  // output [["eat","tea","ate"],["tan","nat"],["bat"]]
  