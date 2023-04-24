// console.log("Hello Wolrd!");

// [SECTION] if, else, else if Statement
// Conditional Statements
	// It allow us to control the flow of our program. It allows us to run a statement or instruction if a condition is met.

let numA = -1;

// if Statement
// Executes a statement if a specified condition is "true"
/*

SYNTAX:

if(condition){
	//codeblock or statement
}


*/

if(numA < 0){
	console.log("Hello");
}

// Basic Checking
console.log(numA < 0);

// Let's update numA and run our system
numA = 0;

if(numA < 0){
	console.log("Hello again id numA is 0");
}

// Another Example

let city = "New York";

if(city === "New York"){
	console.log("Welcome to new york!");
}

// else if Clause
/* 
    - Executes a statement if previous conditions are false and if the specified condition is true
    - The "else if" clause is optional and can be added to capture additional conditions to change the flow of a program
*/

let numH = 1;

if(numA < 0){
	console.log("Hello");
} else if (numH > 0){
	console.log("World");
}

numA = 1;

if(numA > 0){
	console.log("Hello");
} else if (numH > 0){
	console.log("World");
} else if (numH < 0){
	console.log("Again");
}

// else Statement
/* 
    - Executes a statement if all other conditions are false
    - The "else" statement is optional and can be added to capture any other result to change the flow of a program
*/

if(numA < 0){
	console.log("Hello");
}else if (numH === 0){
	console.log("World");
}else{
	console.log("Again");
}

/*
We cannot use else statement alone, and so with else if

else{
	console.log("test");
}

*/

/*
We cannot use else statement alone, and so with else if
if statement should be present on our structure


else if (numH === 0){
	console.log("world");
}else{
	console.log("again");
}

*/

/*

STRUCTURE

if

if
else if

if
else

if
else if
else if
else if
else

Avoid using this structure -> error

if
else
else if

*/

// if, else if, else Statements with Functions

let message = "No message.";
console.log(message);


function determineTyphoonIntensity(windSpeed){
	if(windSpeed < 30){
		return "Not a typhoon yet.";
	}else if(windSpeed <= 61){
		return "Tropical Depression detected.";
	}else if(windSpeed >= 62 && windSpeed <= 88){
		return "Tropical Storm detected.";
	}else if(windSpeed >= 89 && windSpeed <= 117){
		return "Sever tropical storm detected.";
	}else{
		return "Typhoon Detected."
	}

}

message = determineTyphoonIntensity(75);
console.log(message);

if (message == "Tropical Storm detected."){
	console.error(message);
}

// Truthy and Falsy

// Truthy
if(true){
	console.log("truthy");
}

if(1){
	console.log("truthy");
}

if([]){
	console.log("truthy");
}

// Falsy
if(false){
	console.log("Falsy");
}

if(0){
	console.log("Falsy");
}

if(undefined){
	console.log("Falsy");
}

// [SECTION] Conditional (Ternary) Operator
/* 
    - The Conditional (Ternary) Operator takes in three operands:
        1. condition
        2. expression to execute if the condition is truthy
        3. expression to execute if the condition is falsy
    - Can be used as an alternative to an "if else" statement
    - Ternary operators have an implicit "return" statement meaning that without the "return" keyword, the resulting expressions can be stored in a variable
    - Commonly used for single statement execution where the result consists of only one line of code
    - For multiple lines of code/code blocks, a function may be defined then used in a ternary operator
    - Syntax
        (expression) ? ifTrue : ifFalse;
*/

// Single statement execution
let ternaryResult = (1 > 18) ? true : false;

console.log("Result of ternary operator: " + ternaryResult);

// Multiple Statement Execution

let name;

function isOfLegalAge(){
	name = "John";
	return "You are of the legal age limit.";
}

function isUnderage(){
	name = "Jane";
	return "You are under the age limit.";
}

let age = parseInt(prompt("What is your age?"));
console.log(age);
let legalAge = (age >= 18) ? isOfLegalAge() : isUnderage();
console.log("Result of Ternary Operator in functions: " + legalAge + ", " + name);

// [SECTION] Switch Statement
/*
SYNTAX

switch(expression){
	case value:
		statement;
		break;
	default:
		statement;
		bvrak;
}

*/

let day = prompt("What day of the week is it today?").toLowerCase();
console.log(day);

switch (day) {
	case "monday":
		console.log("The color of the day is red.");
		break;
	case "tuesday":
		console.log("The color of the day is orange.");
		break;
	case "wednesday":
		console.log("The color of the day is yellow.");
		break;
	case "thursday":
		console.log("The color of the day is green.");
		break;
	case "friday":
		console.log("The color of the day is blue.");
		break;
	case "saturday":
		console.log("The color of the day is indigo.");
		break;
	case "sunday":
		console.log("The color of the day is violet.");
		break;
	default:
		console.log("Please input a valid day");
		break;
}

// [SECTION] Try-Catch-Finally

function showIntensityAlert(windSpeed){
	try{
		alerat(determineTyphoonIntensity(windSpeed));
	}catch (error){
		console.log(typeof error);
		console.warn(error.message);
	}finally{
		// Continue the execution of the code
		alert("Intensity updates will show new alert.");
	}
}


showIntensityAlert(56);