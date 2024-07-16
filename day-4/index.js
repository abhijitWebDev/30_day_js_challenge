/*Day 4:  Activity 1 - > loops */

// Task 1 Write a prorgam to print numbers 1 to 10 using for loop
{
    let num = 10;
    for (let i = 1; i <= num; i++){
        console.log(i);
1       
    }
}

// Task2 : Write a program to print multilication of table 5 in for loop
{
    let num = 10;
    for (let i = 1; i <= num; i++) {
        console.log(`The result is ${5 * i}`);
        
    }
}

/* Activity 2 : while loop */
// Task 3 Write a program to calculate the sum of 1 to 10 using while loop and print result to the console
{
    let sum = 0;
    let i = 1

    while(i <= 10){
        sum += i;
        i++;
    }
    console.log("The sum of numbers from 1 to 10 is: " + sum);
}

// Task 4 : Write a program to print the numbers 10 to 1 using while loop
{
    let num = 11;
    let i = 11;

    while(i <= num && i > 1) {
        i--;
        console.log(` The numbers are ${i}`)
    }
    }

/* Activity 3: Do while loop; */
// Task 5: Write a program to print the numbers from 1 to 5 using a do while loop and log result to console
{let num = 5;
let i=1;

do {
    console.log(`The numbers are ${i}`);
    i++
    
} while (i <= num);
}
// Task 6: write a program to calculate the factorial of a number using a do while loop 

{
    let n = 5;
let result = 1;
let i = n;

do {
    result *=i;
    i--;
    
} while (i>0);



console.log(`The factorial of the ${n} is ${result}`);
}

/* Activity 4 : Nested loops */
// Task 7: Write a program to print a pattern using nested loops

{
    let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

}

/* Activity 5: loop control statements */
// Task 8: Write a program to print numbers 1 to 10 , but skip the number 5 using the continue statement;

{
    let number =1;

    while(number <= 10) {
        if(number === 5) {
            number++;
            continue;
        }
        console.log(number);
        number++
    }
}

// Task 9: Write a program to print numbers 1 to 10 , stop the loop at 7 using the break statement
{
    let number = 1;
    while(number <= 10) {
        if(number === 7) break;
        console.log(number);
        number++;
    }
}
    



