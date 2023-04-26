// [SECTION] Exponent operator

const firstNum = 8 ** 2;
console.log(firstNum);

const secondNum = Math.pow(8, 5);
console.log(secondNum);

// [SECTION] Template Literals
/*
	- Allows to write strings without using the concatenation operator (+)
	- Greatly helps with code readability
*/

// Pre-template literals string

let name = "John"
let message = "hello " + name + "! Welcome to programming!";

console.log("Message without template literals:");
console.log(message);

// Using template literals
// Backticks (``)


message = `Hello ${name}! Welcome to programming!`;
console.log(`Message with template literals: ${message}`);

// Multi-line using template literal
const anotherMessage = `
${name} attended math competition.
He won it by solving the problem 8 ** 2 with the solution of ${firstNum}
`

console.log(anotherMessage);
const interestRate = .1;
const principal = 1000;

console.log(`the interest on your savings account is ${principal * interestRate}`)


// [SECTION] Pre-array Destructuring
/*
	- Allows to unpack elements in arrays into distinct variables
	- Allows us to name array elements with variables instead of using index numbers
	- Helps with code readability
	- Syntax
		let/const [variableName, variableName, variableName] = array;
*/

const fullName = ["Juan", "Dela", "Cruz"]

console.log(fullName[0])
console.log(fullName[1])
console.log(fullName[2])


console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! it's nice to meet you`);

// Array destructuring

const [firstName, middleName, lastName] = fullName;
console.log(`Hello ${firstName} ${middleName} ${lastName}! it's nice to meet you`);


// [SECTION] Object Destructuring
/*
	- Allows to unpack properties of objects into distinct variables
	- Shortens the syntax for accessing properties from objects
	- Syntax
		let/const {propertyName, propertyName, propertyName} = object;
*/

const person = {
	givenName: "Jane",
	maidenName: "Dela",
	familyName: "Cruz"
}

// pre-object destructuring
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

console.log(`Hello ${person.givenName} ${person.maidenName} ${person.familyName}! It's goood to see you again`);

// Object Destructuring

const {givenName, maidenName, familyName} = person;

console.log(`Hello ${givenName} ${maidenName} ${familyName}! It's goood to see you again`);

function getFullName({givenName, maidenName, familyName}) {
	console.log(`${givenName} ${maidenName} ${familyName}`)
}

getFullName(person);

// [SECTION] Arrow Function
/*
	- Compact alternative syntax to traditional functions
	- Useful for code snippets where creating functions will not be reused in any other portion of the code
	- Adheres to the "DRY" (Don't Repeat Yourself) principle where there's no longer need to create a function and think of a name for functions that will only be used in certain code snippets
*/

/*
const variableName = () => {
	console.log()
}
*/


const hello = () => {
	console.log("Hello World!");
}

const printFullName = (firstName, middleName, lastName) => {

	console.log(`${firstName} ${middleName} ${lastName}`);
}


printFullName("john", "d", "smith");

const students = ["John", "Jane", "Judy"];

// Arrow Functions with Loops

// Pre-arrow function
students.forEach(function(student){
	console.log(`${student} is a student.`);
})


// Using Arrow Function

students.forEach((student) => {
	console.log(`${student} is a student.`);
})


// [SECTION] Implicit Return Statement
/*
	- There are instances when you can omit the "return" statement
	- This works because even without the "return" statement JavaScript implicitly adds it for the result of the function
*/

// Arrow function
const add = (num1, num2) => num1 + num2;

let total = add(1, 2);
console.log(total);

// [SECTION] Default Function Argument Value
const greet = (name = "user") => {
	return `Good morning, ${name}!`
}

console.log(greet());
console.log(greet("John"));


// [SECTION] Class Based Object Blueprint
class Car {
	constructor(brand, name, year) {
		this.brand = brand;
		this.name = name;
		this.year = year;
	}
}


const myCar = new Car();
console.log(myCar);

myCar.brand = "Ford";
myCar.name = "Ranger Raptor";
myCar.year = 2021;

console.log(myCar);

const myNewCar = new Car ("Toyota", "Vios", 2021);











