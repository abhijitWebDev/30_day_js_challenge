

// 1. To print numbers 1 to 10 using a for loop:
{
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
}

// 2. To print the multiplication table of 5 using a for loop:
{
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
}


// 3. To print a pattern using nested loops:
//javascript
{
let n = 5;
for (let i = 1; i <= n; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}
}


// 4. To calculate the sum of numbers from 1 to 10 using a while loop:javascript
{
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);
}


5. // To calculate the factorial of a number using a do...while loop:
{
let num = 5;
let factorial = 1;
let i = 1;
do {
    factorial *= i;
    i++;
} while (i <= num);
console.log(factorial);
}
