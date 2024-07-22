// Ensure the elements exist in your HTML
const text = document.getElementById('text-con');
const butt = document.getElementById('butt');

function changeParaTxt() {
    text.textContent = "Welcome to my world of mystery";
}

butt.addEventListener('click', changeParaTxt)

// Task 2: add an double click event listener that toggles its visiblity 
// const imgEl = document.querySelector('#imgTog');
// console.log(imgEl);

// function toggleVisiblity() {
//     if(imgEl.style.display === 'none') {
//         imgEl.style.display = 'block';
//     } else {

//        imgEl.style.display = 'none';
//     }
    
// }

// imgEl.addEventListener('dbClick', toggleVisiblity);


const imgEl = document.querySelector('#imgTog');

function toggleVisiblity() {
    if (imgEl.style.display === 'none') {
        imgEl.style.display = 'block';
    } else {
        imgEl.style.display = 'none';
    }
}

imgEl.addEventListener('dblclick', toggleVisiblity);

/* Activity 2 */

// Task3: add an event listener mouse over, which changes the background color of the element
const el = document.getElementById('mouse-change');

el.addEventListener('mouseover', () => {
    el.style.backgroundColor = 'red';
})

// Task 4: add a mouse out event listener to an element that resets its background color
el.addEventListener('mouseout', () => {
    el.style.backgroundColor = '';
});

/* Activity 3 */

// Task 5: Add a keydown event to an input field which logs the key press to the console.

// Select the input field by its id
const inputField = document.getElementById('key-pressed');

function logKeyPress(event) {
    console.log('Key pressed:', event.key);
}

// Add keydown event listener to the input field
inputField.addEventListener('keydown', logKeyPress);

// Task 6:
const inputFieldNew = document.getElementById('inputField');
    const displayValue = document.getElementById('displayValue');

    inputFieldNew.addEventListener('keyup', function() {
      displayValue.textContent = inputFieldNew.value;
    });

/* Activity 4 : Form events */

// Task 7: Add a submit event listener that prevents submitting by default and logs the form data to the console.

// Assuming you have a form with an ID of "myForm"
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);

  // Log form data to console
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

// Task 8: Add a change event listener to select a dropdown that displays selected value in the paragraph
// Assuming you have a select dropdown with an id of "myDropdown" 
// and a paragraph with an id of "paragraph"

const dropdown = document.getElementById("myDropdown");
const paragraph = document.getElementById("paragraph");

dropdown.addEventListener("change", (event) => {
  // Get the selected option's value
  const selectedValue = event.target.value;

  // Update the paragraph with the selected value
  paragraph.textContent = `You selected: ${selectedValue}`;
});

/* Activity 5: Event delegation */

// Task 9: Add a click listener to the list which logs the content of the clicked list item using event delegation
const myList = document.getElementById('myList');

// Add a click listener to the list
myList.addEventListener('click', function(event) {
  // Check if the clicked element is a list item
  if (event.target.tagName === 'LI') {
    // Log the content of the clicked list item
    console.log(event.target.textContent);
  }
});

// Task 10: Add an event listener to a parent element that listens for events dynamically added child elements
const parent = document.getElementById('parent');
    const addChildButton = document.getElementById('add-child');

    // Function to handle clicks on dynamically added children
    function handleClick(event) {
      if (event.target.tagName === 'P') {
        console.log('You clicked on a dynamically added paragraph!');
      }
    }

    // Add event listener to the parent element
    parent.addEventListener('click', handleClick);

    // Add event listener to the button to dynamically add children
    addChildButton.addEventListener('click', () => {
      const newParagraph = document.createElement('p');
      newParagraph.textContent = 'New Paragraph!';
      parent.appendChild(newParagraph);
    });