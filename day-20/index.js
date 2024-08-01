/* Day 20:  Local storage and session storage */

/* Activity 1: Understanding local storage */
/* What is local storage */
// Local storage is a web storage mechanism supported by modern web browsers that allows web applications to store data locally within the user's browser. It provides a way for web pages to store key/value pairs locally, similar to cookies but with a larger capacity and improved performance.

// Task 1 : Write a script to save a string value in local storage and retrive it. log the retrive value. 

const nameNew = 'Abhijit';

localStorage.setItem('firstName', nameNew);

const firstName = localStorage.getItem('firstName',nameNew);

console.log(firstName);

// Task 2: Write a script to save an object in local storage by converting into a json string, retrive the parsed object and log it
const user = {
    firstName: "Abhijit",
    lastName: "Mone"
}

const transformedUser = JSON.stringify(user);
console.log(transformedUser);

localStorage.setItem('user', transformedUser);
const newUser = JSON.parse(localStorage.getItem('user', transformedUser));
console.log("Hello",newUser);


/* Activity 2: Using local storage */

// Task 3: Create a simple form that saves user input(eg name and email) to local storage when submitted, Retrive the display information data on page load
const form = document.getElementById('userForm');

// add submit event listener
form.addEventListener('submit', subDetails);

function subDetails(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // saving to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // display user information
    displayUserInfo(name, email);
}

// function to display userInfo
function displayUserInfo(name, email) {
    const userInfoDiv = document.getElementById('userInfo');

    userInfoDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
}

// call displayInfo on page load
window.onload = function() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    displayUserInfo(name, email);
};

// Task 4: write a script to remove item from local storage. log the local storage content before removal
// Assuming 'firstName' is the key you want to remove from local storage

// Log the local storage content before removal
console.log('Local Storage before removal:', localStorage.getItem('firstName'));

// Removing the value from local storage
localStorage.removeItem('firstName');

// Log the local storage content after removal to confirm it's been removed
console.log('Local Storage after removal:', localStorage.getItem('firstName'));

/* Activity 3: Understanding session storage */

// Task 5: Write a script to save a string to the session storage and retrive it. log the value
const nameSess = 'Ojas';

sessionStorage.setItem('newName', nameSess);

const nameStr = sessionStorage.getItem('newName');
console.log(nameStr);


// Task 6: Write a script to save an object in local storage by converting into a json string, retrive the parsed object and log it
sessionStorage.setItem('user', transformedUser);

const newSessUser = JSON.parse(sessionStorage.getItem('user', transformedUser));
console.log(newSessUser);

/* Activity 4: Using session storage */

// Task 7: Create a simple form that saves user input(eg name and email) to local storage when submitted, Retrive the display information data on page load
const formNew = document.getElementById('userForm');

// add submit event listener
formNew.addEventListener('submit', subDetailsNew);

function subDetailsNew(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // saving to local storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);

    // display user information
    displayUserInfoNew(name, email);
}

// function to display userInfo
function displayUserInfoNew(name, email) {
    const userInfoDiv = document.getElementById('userInfo');

    userInfoDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
}

// call displayInfo on page load
window.onload = function() {
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    displayUserInfoNew(name, email);
};

// Task 8 : write a script to remove an item from session storage, log the result

// Assuming 'firstName' is the key you want to remove from local storage

// Log the local storage content before removal
console.log('Local Storage before removal:', sessionStorage.getItem('newName'));

// Removing the value from local storage
sessionStorage.removeItem('newName');

// Log the local storage content after removal to confirm it's been removed
console.log('Local Storage after removal:', newName.getItem('newName'));

/* Activity 4: */
// Task 9: Write a function that accepts key and value, and saves both to local storage and session storage. retrive the values and log it
// Function to save key and value to both local storage and session storage
function saveToStorage(key, value) {
    // Save to local storage
    localStorage.setItem(key, value);

    // Save to session storage
    sessionStorage.setItem(key, value);
}

// Function to retrieve values from both local storage and session storage and log them
function retrieveFromStorage(key) {
    // Retrieve from local storage
    const localValue = localStorage.getItem(key);
    console.log("Value from local storage:", localValue);

    // Retrieve from session storage
    const sessionValue = sessionStorage.getItem(key);
    console.log("Value from session storage:", sessionValue);
}

// Test the functions
saveToStorage('username', 'JohnDoe');
retrieveFromStorage('username');

// Task 10: Write a function that clears all the data from local storage and session storage and verify the data is empty
function clearAllStorage() {
    localStorage.clear();

    sessionStorage.clear();
}

// verify the local and session storage are empty

function verifyStorageIsEmpty() {
// Check if local storage is empty
const isLocalStorageEmpty = localStorage.length === 0;
console.log("Is local storage empty?", isLocalStorageEmpty);

// Check if session storage is empty
const isSessionStorageEmpty = sessionStorage.length === 0;
console.log("Is session storage empty?", isSessionStorageEmpty);

return isLocalStorageEmpty && isSessionStorageEmpty;
}

// Test the functions
clearAllStorage();
const isEmpty = verifyStorageIsEmpty();
console.log("Are both storages empty?", isEmpty);
