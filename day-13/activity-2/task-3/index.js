// Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { addition, subtraction, product, division } from "./generic.mjs";

const resAdd = addition(20, 50);

const resSub = subtraction(40, 50);

const resProd = product(20, 30);

const resDiv = division(50, 25);


console.log(resAdd, resSub, resProd, resDiv);