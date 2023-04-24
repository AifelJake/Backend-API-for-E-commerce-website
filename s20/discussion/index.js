// console.log("Hello World!");

// [SECTION] - Looping Statements
/*

1. While Loop
2. Do-While Loop
3. For Loop

*/


// While Loop
// A while loop takes in an expression/condition
// Expressions are any unit of codes that can be evaluated to a value
// If the condition is true, the statement or the code block will be executed.
// "Iteration" is the term given to the repetition of statements

/*
SYNTAX:

while(expression/contion){
	statement/code blocks
}

*/


let count = 0;
// count = 4; -> 1st iteration
// count = 3; -> 2nd iteration
// count = 2; -> 3rd iteration
// count = 1; -> 4th iteration
// count = 0; -> 5th iteration

// While the value of count is not equal to 0
while(count !== 10){
	console.log("While: " + count);
	//While: 5 -> 1st iteration
	//While: 4 -> 2nd iteration
	//While: 3 -> 3rd iteration
	//While: 2 -> 4th iteration
	//While: 1 -> 5th iteration
	count++;
}

// Do While Loop
/*

do{
	statement
} while (expression/condition)


*/

let number = Number(prompt("Give me a number"));

do{
	// The current value is printed out
	console.log("Do While: " + number);
	number++;
} while (number <= 30);

// For Loop

/*
SYNTAX:

for(intialization; expression/condition; finalExpression){
	statement/code block
}

*/

for(let count = 0; count <= 20; count++){
	console.log(count);
}

// Accessing elements of a string
// Individual characters of a string may be accessed using index number
// index number starts from 0

let myString = "alex";
console.log(myString.length);

// Accesing element/character using index number
console.log(myString[2]);
console.log(myString[0]);
console.log(myString[3]);

// Will create a loop that will print out the individual letters of myString

for(let x = 0; x < myString.length; x++){
	console.log(myString[x]);
}

let myName = "ALEx";

for(let i = 0; i < myName.length; i++){
	if(
		myName[i].toLowerCase() == "a" ||
		myName[i].toLowerCase() == "e" ||
		myName[i].toLowerCase() == "i" ||
		myName[i].toLowerCase() == "o" ||
		myName[i].toLowerCase() == "u" 
		){
			console.log(3);
	}else{
		console.log(myName[i]);
	}
}



// [SECTION] Continue and break Statement

for (let count = 0; count <= 20; count++) {
	if (count % 2 === 0){
		continue
	}

	console.log("Continue and Break: " + count);

	if (count > 10) {
		break;
	}
}

let name = "alexandro"

for(let i = 0; i < name.length; i++) {
	console.log(name[i]);
	if(name[i].toLowerCase() === 'a'){
		console.log("Continue to the next iteration");
		continue;
	}

	if (name[i] === 'd') {
		break;
	}
}