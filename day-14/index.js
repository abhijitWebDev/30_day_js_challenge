/* Day 14- Classes */

/* Activity 1 : class definition */

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message. 

class Person {
    constructor(name, age, lastName) {
        this.name = name;
        this.age = age;
        this.lastName = lastName;
    }

    greet() {
        return `Hello, my name is ${this.name}`
    }

    static genericGreeting() {
        return `This is a generic greeting message`;
    }

    getFullName() {
        return `Hello my full name is ${this.name} ${this.lastName}`
    }


    createBirthday() {
        this.age++;
        console.log(`Happy birthday! now i am ${this.age} years old`);
    }

    setFullName(newName, newLastName) {
        this.name = newName;
        this.lastName = newLastName;
    }
}

const person1 = new Person("Abhijit Mone", 38);

console.log(person1)



// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
person1.createBirthday();

/* Activity 2: class inheritance */

// Task 3 : Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person {
    static count = 0;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.count++;
        console.log(`The total number of students: ${Student.count}`);
    }

    getStudentId() {
        return this.studentId;
    }

    greet() {
        return ` Hello, I am ${this.name} and my student id is ${this.getStudentId()}`;
    }

   

    
}

const newStudent = new Student('Alice Smith', 20, 'S123');

console.log(newStudent.getStudentId());
// task 4:// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

console.log(newStudent.greet());

/* Activity 3: Static methods and properties */

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.genericGreeting());

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
const student1 = new Student('Aniket Joshi', 30, 'S124');
const student2 = new Student('Ojas Mirikar', 40, 'S345');

console.log(student1.getStudentId());
console.log(student2.getStudentId());

/* Activity 4: Getters and Setters */

// Task 7: Add a getter method to the Person class to return the full name (assume a FirstName and LastName property). Create an instance and log the full name using the getter.
const newPer = new Person('Abhijit', 40, 'Mone');

console.log(newPer.getFullName());

// Task 8: Add a setter method to the Person class to update the name properties (FirstName and LastName). Update the name using the setter and log the updated full name.

const newPer2 = new Person("Abhijit", 40, "Mone");

console.log(newPer2.getFullName());

newPer2.setFullName('Ojas', 'Mirikar');

console.log(newPer2.getFullName());

/* Activity 5:  Private Fields (Optional) */

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance= initialBalance;
    }
    deposit(amount) {
        if(amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`)
        } else {
            console.log(`Deposit amount must be positive`);
        }
    }

    withdraw(amount) {
        if(amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log(`Insufficient funds in account`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new Account(100);
account.deposit(50);

console.log(`Balance: $${account.getBalance()}`);

account.withdraw(30);
console.log(`Balance: $${account.getBalance()}`)
account.withdraw(150);

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const newAccount2 = new Account();


newAccount2.deposit(500);

console.log(`Balance: $${newAccount2.getBalance()}`);

newAccount2.withdraw(200);
console.log(`Balance: $${newAccount2.getBalance()}`)
newAccount2.withdraw(150);

