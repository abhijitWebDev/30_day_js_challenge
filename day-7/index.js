/* Day 7 : objects */

/* Activity 1: Object creation */

// Task 1: Create an object representing a book with properties such as Title, Author and year and log it to the console
const book = {
    Title: "Sapiens",
    Author: "Harare",
    year: 1987,
}

console.log(book);

// Task 2: Access and log the title and author property of the book
console.log(`The title of the book is ${book.Title} and author of the book is ${book.Author}`);

/* Activity 2: Object Methods */

// Task 3: Write a method in the book object , which returns a string with the books title and author and log the result
book.info=function() {
    return `The title of the books is ${book.Title} and the author of the book is ${book.Author}`
}
console.log(book.info());

// Task 4: Write a method which takes parameter as a year, and update the year of the books and logs the updated value

book.addYear = function(year) {
    book.year= year;
}
book.addYear(2021);
console.log(book);

/* Activity 3: Nested objects */

// Task 5: Create a nested objects representing a libarary with properties name and books, (an array of book objects) , and log the library object to the console
let library = {
    name:"ABC",
    books: [
        {
            title: "The hindu 1",
            year: "2021"
        },
        {
            title:"The hindu 2",
            year: "2023",
        }
    ],
}

console.log(library)

// Task 6 : Access and log the name of the library and titles of all the books in the library
console.log(`The name of the lib is ${library.name}`);
library.books.forEach(e => console.log(`The titles of the books are ${e.title}`));

/* Activity 4: this keyword */
// Task 7: Add a method to the book object which uses this keyword to return a string with the book's title and year, and log the result of calling this method
book.getVal = function() {
    return `The title of the book is ${this.Title} and the year is ${this.year}`
}

console.log(book.getVal());

/* Activity 5: object itteration */
// Task 8 : Use for in loop to itterate over the properties of the book object and log its properties and methods

for(singlebook in book) {
    console.log(`The keys are ${singlebook} and the values are ${book[singlebook]}`);
}

// Using has own property method
for (let singlebook in book) {
    if (book.hasOwnProperty(singlebook)) {
        console.log(`The key is ${singlebook} and the value is ${book[singlebook]}`);
    }
}



