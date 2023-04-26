// [SECTION] Array Methods
// JS has built-in functions and methods for arrays. This allows to manipulate arrays items.

/*
        - Mutator methods are functions that "mutate" or change an array after they're created
        - These methods manipulate the original array performing various tasks such as adding and removing elements
*/


// push()

/*
    - Adds an element in the end of an array AND returns the array's length
    - Syntax
        arrayName.push();
*/

let fruits = ["apple", "orange", "kiwi", "dragon fruit"];
console.log("Current array: " + fruits)


let fruitsLength = fruits.push("mango");
console.log(fruitsLength);

console.log("Mutated array from push method: ");
console.log(fruits);

// Adding multiple values or elements
fruits.push("Avocado", "Guava");
console.log("Mutated array from push method: ");
console.log(fruits);

// pop()
/*
    - Removes the last element in an array AND returns the removed element
    - Syntax
        arrayName.pop();
*/

let removedFruit = fruits.pop();
console.log(removedFruit);
console.log("Mutated array from pop method: ");
console.log(fruits);


// unshift() 
/*
    - Adds one or more elements at the beginning of an array
    - Syntax
        arrayName.unshift('elementA');
        arrayName.unshift('elementA', elementB);
*/

fruits.unshift("Lime", "Banana")
console.log("Mutated array from unshift method: ");
console.log(fruits);


//shift()
/*
    - Removes an element at the beginning of an array AND returns the removed element
    - Syntax
        arrayName.shift();
*/

let anotherFruit = fruits.shift();
console.log(anotherFruit);
console.log("Mutated array from shift method: ");
console.log(fruits);


// splice()
/* 
    - Simultaneously removes elements from a specified index number and adds elements
    - Syntax
        arrayName.splice(startingIndex, deleteCount, elementsToBeAdded)
*/

fruits.splice(1, 2, "lime", "cherry")
console.log("Mutated array from splice method: ");
console.log(fruits);

//sort
/*
    - Rearranges the array elements in alphanumeric order
    - Syntax
        arrayName.sort();
*/

fruits.sort();
console.log("Mutated array from sort	 method: ");
console.log(fruits);

// reverse()
/*
    - Reverses the order of array elements
    - Syntax
        arrayName.reverse();
*/

fruits.reverse();
console.log("Mutated array from reverse	 method: ");
console.log(fruits);


// Non Mutator Methods

let countries = ['US', 'PH', 'CAN', 'SG', 'TH', 'PH', 'FR', 'DE'];

// indexOf()
/*
    - Returns the index number of the first matching element found in an array
    - If no match was found, the result will be -1.
    - The search process will be done from first element proceeding to the last element
    - Syntax
        arrayName.indexOf(searchValue);
        arrayName.indexOf(searchValue, fromIndex);
*/

let firstIndex = countries.indexOf("PH");
console.log("results from indexOf method: " + firstIndex);

let invalidCountry = countries.indexOf("BR");
console.log("results from indexOf method: " +invalidCountry);

// lastIndexof()
/*
    - Returns the index number of the last matching element found in an array
    - The search process will be done from last element proceeding to the first element
    - Syntax
        arrayName.lastIndexOf(searchValue);
        arrayName.lastIndexOf(searchValue, fromIndex);
*/

let lastIndex = countries	.lastIndexOf("PH");
console.log("results from lastindexOf method: " + lastIndex);

let lastIndexStart = countries.lastIndexOf("PH", 6)
console.log("results from lastindexOf method: " + lastIndexStart);

// slice()
/*
    - Portions/slices elements from an array AND returns a new array
    - Syntax
        arrayName.slice(startingIndex);
        arrayName.slice(startingIndex, endingIndex);
*/

// Slicing of elements from specifiefd elements to the last elements

let slicedArrayA = countries.slice(2);
console.log("results from slice method");
console.log(slicedArrayA);

let slicedArrayB = countries.slice(2, 4)
console.log("results from slice method");
console.log(slicedArrayB);

let slicedArrayC = countries.slice(-3);
console.log("results from slice method");
console.log(slicedArrayC);

// toString()
/*
    - Returns an array as a string separated by commas
    - Syntax
        arrayName.toString();
*/


let stringArr = countries.toString();
console.log("results from toString method");
console.log(stringArr);



