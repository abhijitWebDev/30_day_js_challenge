// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as myModule from './generic.mjs';

console.log(myModule.PI);
console.log(myModule.square(5));
console.log(myModule.cube(3));