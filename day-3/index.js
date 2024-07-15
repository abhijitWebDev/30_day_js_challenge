/* Activity 1: if - else statements */

// Task 1: Write a program to check if a number is positive, negative or zero , and log the result to the console
{
  let number = -5;

  // checking if the number is positive
  if (number > 0) {
    console.log(`The number is positive`);
  } else if (number < 0) {
    console.log(`The number is negative`);
  } else {
    console.log(`The number is zero`);
  }
}

// Task 2: Write a program to check if a person is eligible to vote >= 18 , and log the result to the console
{
  let person = {
    name: 'Abhijit',
    age: 30,
  };

  if (person.age >= 18) {
    console.log(`${person.name} is eligible to vote`);
  } else {
    console.log(`${person.name} is not eligible to vote`);
  }
}

/* Activity 3: Switch case */
// Task 4: Write a program that uses switch case to determine the day of the week base on number (1 - 7) and log it to the console
{
  let number = 3; // You can change this number to test different cases

  let day;
  switch (number) {
    case 1:
      day = 'Sunday';
      break;
    case 2:
      day = 'Monday';
      break;
    case 3:
      day = 'Tuesday';
      break;
    case 4:
      day = 'Wednesday';
      break;
    case 5:
      day = 'Thursday';
      break;
    case 6:
      day = 'Friday';
      break;
    case 7:
      day = 'Saturday';
      break;
    default:
      day = 'Invalid day';
  }

  console.log(`The day of the week is: ${day}`);
}

// Task 5: Write a program that uses switch case to assign a grade(A, B, C, D, E , F) based on score and log it to console.
{
  let score = 85;
  let grade;

  switch (true) {
    case score >= 90:
      grade = 'A';
      break;
    case score >= 80:
      grade = 'B';
      break;
    case score >= 70:
      grade = 'C';
      break;
    case score >= 60:
      grade = 'D';
      break;
    case score >= 50:
      grade = 'E';
      break;
    default:
      grade = 'F';
  }

  console.log(`The grade for the score ${score} is: ${grade}`);
}

/* Activity 4 */
// Task 6: Write a program which uses ternary operator to check if a number is even or odd and log it to console.
{
  let num = 15;

  let result =
    num % 2 === 0
      ? console.log(`The number is even`)
      : console.log(`The number is odd`);
  console.log(result);
}

/* Activity  5: combining conditions */
// Task 7: write a program to check if it is a leap year or not using multiple conditions (divisible by 4 but not by 100 unless it is divisble by 400 ) and log it to console
{
  let year = 2024; // You can change this value to test different years

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + ' is a leap year.');
  } else {
    console.log(year + ' is not a leap year.');
  }
}
