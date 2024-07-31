/* Day 19: Regular expressions */

/* Activity 1: Basic regular expressions */

// Task 1: Write a regular expression to match simple pattern (Match all occurrences of the JavaScript and log the result)
const text = "JavaScript is a popular programming language";
const regex = /JavaScript/gi; // 'g' flag for global search, 'i' for case insensitive search

const matches = text.match(regex);
console.log(matches); // Output: [ 'JavaScript' ]


// Task 2: Write a regular expression to match all digits in a string. Log the matches.

const textTwo = "There are 123 apples and 456 oranges in a basket";
const regexTwo = /\d/g; // \d is the shorthand for matching digits

const matchesTwo = textTwo.match(regexTwo);
console.log(matchesTwo); // Output: [ '1', '2', '3', '4', '5', '6' ]

/* Activity 2: Character classes and quantifiers */

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const textThree = "Hello World! This is a Test string with Some Capitalized words.";
const regexThree = /\b[A-Z][a-z]*\b/g;

const matchesThree = textThree.match(regexThree);
console.log(matchesThree); // Output: [ 'Hello', 'World', 'This', 'Test', 'Some', 'Capitalized' ]

// Task 4: Write a regular expression to match all sequence of one or more digit in a string, and log the matches
 const textFour = "There are 123 apples and 486 oranges in a basket. The price is 786 dollars";
 const regexFour = /\d+/g; 

 const matchesFour = textFour.match(regexFour);

 console.log(matchesFour);

 /* Activity 3: Grouping and Capturing */

 // Task 5: Write a regular expression to capture the area code, central office code, and line no from US phone format, log the result

 const phoneNumber = "(123) 456-7890";
 const regexFive = /\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/;
 const matchesFive = phoneNumber.match(regexFive);
 
 if (matches) {
     const areaCode = matchesFive[1];
     const centralOfficeCode = matchesFive[2];
     const lineNumber = matchesFive[3];
     
     console.log(`Area Code: ${areaCode}`);
     console.log(`Central Office Code: ${centralOfficeCode}`);
     console.log(`Line Number: ${lineNumber}`);
 } else {
     console.log("No match found.");
 }

 // Task 6: Write an expression to capture username and domain from and email address and log the result
 function extractEmailParts(email) {
    const emailPattern = /^([^@]+)@([^@]+)$/;
    const match = email.match(emailPattern);
    
    if (match) {
        const username = match[1];
        const domain = match[2];
        console.log(`Username: ${username}, Domain: ${domain}`);
    } else {
        console.log("Invalid email address");
    }
}

// Example usage:
extractEmailParts("example@domain.com");

/* Activity 4: Assertion and boundaries */

// Task 7: Write a regular expression to match a word , only if it is at the begining of the string. log the matches
const str = "example word at the beginning";
const regexSix = /^\w+/;
const matchesSix = str.match(regexSix);
console.log(matchesSix);

// Task 8: Write a regular expression to match a word, only if it is at the end of the string, log the result
const strNew = "example word at the end";
const regexNew = /\b\w+\b$/;
const match = strNew.match(regexNew);

if (match) {
  console.log("Matched word at the end:", match[0]);
} else {
  console.log("No match found at the end of the string.");
}

/* Activity 5: Practical application */
// Task 9: Write a regular expression to validate a simple password(must include atleast one upper case letter, on lowercase letter, one digit and one special charecter), log the result
function validatePassword(password) {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (pattern.test(password)) {
        console.log("Password is valid");
    } else {
        console.log("Password is invalid");
    }
}

validatePassword("Password123!");

// Task 10: Write a regular expression to validate url: log wether the url is valid or not

function validateURL(url) {
    const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/;
    return pattern.test(url);
}

// Example usage:
const urls = [
    "https://www.example.com",
    "http://example.com",
    "www.example.com",
    "example.com",
    "https://www.example.com:8080/path?query=param#fragment",
    "ftp://example.com" // Invalid
];

urls.forEach(url => {
    console.log(`URL: ${url} is ${validateURL(url) ? "valid" : "invalid"}`);
});


