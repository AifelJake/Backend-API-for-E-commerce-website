//Important Note: Do not change the variable names. 
//All required classes, variables and function names are listed in the exports.

// Exponent Operator
let getCube = Math.pow(2, 3)
console.log(`The cube of 2 is ${getCube}`)
// Template Literals

// Array Destructuring
const address = ["258", "Washington Ave NW", "California", "90011"];

let [postalCode, street, city, houseNumber] = address;
console.log(`I live at ${postalCode} ${street} ${city} ${houseNumber}`)
// Object Destructuring
const animal = {
	name: "Lolong",
	species: "saltwater crocodile",
	weight: "1075 kgs",
	measurement: "20 ft 3 in"
}

let {name, species, weight, measurement} = animal;
console.log(`${name} was a ${species}. He weighed ${weight} with a measurement of ${measurement}.`);
// Arrow Functions
let numbers = [1, 2, 3, 4, 5, 15];

numbers.forEach((number) =>{
    console.log(number);
})
// Javascript Classes
class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
}

let myDog = new Dog("Frankie", 5, "Miniature Dachshund");
console.log(myDog);


//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        getCube: typeof getCube !== 'undefined' ? getCube : null,
        houseNumber: typeof houseNumber !== 'undefined' ? houseNumber : null,
        street: typeof street !== 'undefined' ? street : null,
        state: typeof state !== 'undefined' ? state : null,
        zipCode: typeof zipCode !== 'undefined' ? zipCode : null,
        name: typeof name !== 'undefined' ? name : null,
        species: typeof species !== 'undefined' ? species : null,
        weight: typeof weight !== 'undefined' ? weight : null,
        measurement: typeof measurement !== 'undefined' ? measurement : null,
        reduceNumber: typeof reduceNumber !== 'undefined' ? reduceNumber : null,
        Dog: typeof Dog !== 'undefined' ? Dog : null

    }
} catch(err){

}