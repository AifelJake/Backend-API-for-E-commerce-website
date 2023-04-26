// [SECTION] Objects
/*
    - An object is a data type that is used to represent real world objects
    - It is a collection of related data and/or functionalities
    - In JavaScript, most core JavaScript features like strings and arrays are objects (Strings are a collection of characters and arrays are a collection of data)
    - Information stored in objects are represented in a "key:value" pair
        - A "key" is also mostly referred to as a "property" of an object
        - Different data types may be stored in an object's property creating complex data structures
*/


// Creating objects using object initializers/literal notation
/*
    - This creates/declares an object and also initializes/assigns it's properties upon creation
    - A cellphone is an example of a real world object
    - It has it's own properties such as name, color, weight, unit model and a lot of other things
    - Syntax
        let objectName = {
            keyA: valueA,
            keyB: valueB
        }
*/


let cellphone = {
	name: "Nokia 3310",
	manufacturedDate: 1999
};

console.log("Result from creating objects using initializers literal notation")
console.log(cellphone);
console.log(typeof cellphone);

// Creating Objects using a constructor function
/*
    - Creates a reusable function to create several objects that have the same data structure
    - This is useful for creating multiple instances/copies of an object
    - An instance is a concrete occurence of any object which emphasizes on the distinct/unique identity of it
    - Syntax
        function ObjectName(keyA, keyB) {
            this.keyA = keyA;
            this.keyB = keyB;
        }
*/


// this is an object
// "this" keyword allows to assign a new value to a new object.

function Laptop(name, manufacturedDate) {
	this.name = name;
	this.manufacturedDate = manufacturedDate;
}

// This is a unique instance of the laptop
// "new" keyword to create a new instance or copy

let myLaptop = new Laptop("Lenovo", 2008);
console.log("Result from creating object using object constructor:");
console.log(myLaptop);

let laptop = new Laptop("Macbook Air", 2020)
console.log("Result from creating object using object constructor:");
console.log(laptop);

// We cannot create an instance or copyb wothout using "new" keyword.
let oldLaptop = Laptop("Portal R2E", 1980);
console.log("Result from creating object using object constructor:");
console.log(oldLaptop);

// creating an empty object
let computer = {};
let myComputer = new Object();


// [SECTION] Accessing Array Object
/*
    - Accessing array elements can be also be done using square brackets
    - Accessing object properties using the square bracket notation and array indexes can cause confusion
    - By using the dot notation, this easily helps us differentiate accessing elements from arrays and properties from objects
    - Object properties have names that makes it easier to associate pieces of information
*/

let array = [laptop, myLaptop];

// may be confused for accessing array index
console.log(array[0]["name"]);
// Differentation between accessing an array and object properties
// This tells us that array[0] is an obeject by using dot notation
console.log(array[0]);


// [SECTION] Init/Adding/Deleting/Re-assigning Oject Properties

let car = {};

// Init/Adding

car.name = "Honda Civic";
console.log("Result from adding property using dot notation");
console.log(car);

// Using bracket notation
car["manufacturedDate"] = 2019;
console.log(car["manufacturedDate"]);
console.log(car.manufacturedDate);
console.log(car);


// Deleting object properties

delete car.manufacturedDate;
console.log('Result from deleting properties')
console.log(car);

// Updating or re-assingning property value
car.name = "Dodge Charger R/T";
console.log('Result from updating properties')
console.log(car);





// [SECTION] Object methods
/*
    - A method is a function which is a property of an object
    - They are also functions and one of the key differences they have is that methods are functions related to a specific object
    - Methods are useful for creating object specific functions which are used to perform tasks on them
    - Similar to functions/features of real world objects, methods are defined based on what an object is capable of doing and how it should work
*/

let person = {
	name: "John",
	talk: function () {
		console.log("hello my name is " + this.name);
	}
}

console.log(person);
console.log("Result from object function/method");
person.talk();

// ADding methods to a object
person.walk = function(){
	console.log(this.name + ' walked 25 steps forward' );
}


person.walk();

// Methods are useful for creating reusable functions that perfrom task related objects


let friend = {
	firstName : "Joe",
	lastName: "Smith",
	address: {
		city: "Austin",
		country: "Texas",
	},
	emails: ["joe@mail.com", "joesmith@email.xyz"],
	introduce: function(){
		console.log("Hello my name is " + this.firstName + ' ' + this.lastName);
	}
}

friend.introduce();

// [SECTION] real world application of objects
/*
    - Scenario
        1. We would like to create a game that would have several pokemon interact with each other
        2. Every pokemon would have the same set of stats, properties and functions
*/


let myPokemon = {
    name: "Pikachu",
    level: 3,
    health: 100,
    attack: 50,
    tackle: function(){
        console.log( "This Pokemon tackled targetPokemon");
        console.log( "targetPokemon's health is now reduced to _targetPokemonhealth_");
    },
    faint : function() {
     console.log("Pokemon fainted");
    }
}


// Converting to Object Constructor

/*function Pokemon(name, level){
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;

	// Methods
	this.tackle = function(target) {
		console.log(this.name + " tackled " + target.name);
		console.log("targetPokemon's health is now reduced to _targetPokemonHealth_");
		
	}

	this.faint = function() {
		console.logI(this.name + " fainted.");
	}
}*/

// create instance
let pikachu = new Pokemon("Pikachu", 12);
let ratata = new Pokemon("Ratata", 8);

pikachu.tackle(ratata);

let trainer = {};

// Properties
trainer.name = "Ash Ketchum";
trainer.age = 10,
trainer.pokemon = ["Pikachu", "Charizard", "Squirtlet"]
trainer.friends = {
	kanto: ["Brock", "Misty"],
	hoenn: ["May", "Max"]
}
trainer.talk = function(){
	return "Pikachu! I choose you!";
}


console.log(trainer);	

// Access name using dot notation

console.log("Result from dot notation");
console.log(trainer.name);

// Access pokemon using bracket notation

console.log("Result from bracket notation");
console.log(trainer["pokemon"]);

trainer.talk();


function Pokemon(name, level, type){
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;
	this.type = type;

	// Methods
	this.tackle = function(target) {
		console.log(this.name + " tackled " + target.name);
		target.health -= this.attack;

		// If the health of the target is less than 0 
		if(target.health <= 0) {
			target.faint()
		} else {
			return target.name + "'s health is now reduced to " + target.health;
		}

	
	}

	this.faint = function() {
		console.log(this.name + " fainted.");
	}
	
	
}

let Geodude = new Pokemon("Geudude", 8)
console.log(Geodude);

let mewtwo = new Pokemon("Mewtwo", 100);
console.log(mewtwo);

Geodude.tackle(pikachu);
console.log(pikachu);

mewtwo.tackle(Geodude);
console.log(Geodude)

mewtwo.tackle(pikachu);
console.log(pikachu);	











