// console.log("Hello World!");

// An array in programming is simply a list of data.

let studentNumberA = "2020-1923";
let studentNumberB = "2020-1923";
let studentNumberC = "2020-1925";
let studentNumberD = "2020-1926";
let studentNumberE = "2020-1927";

// Now, with an array, we can siomply write the code above like this:

let studentNumbers = ["2020-1923", "2020-1924", "2020-1925", "2020-1926", "2020-1927"];

// [SECTION] Arrays
/*
    - Arrays are used to store multiple related values in a single variable
    - They are declared using square brackets ([]) also known as "Array Literals"
    - Commonly used to store numerous amounts of data to manipulate in order to perform a number of tasks
    - Arrays also provide access to a number of functions/methods that help in achieving this
    - A method is another term for functions associated with an object and is used to execute statements that are relevant to a specific object
    - Majority of methods are used to manipulate information stored within the same object
    - Arrays are also objects which is another data type
    - The main difference of arrays with an object is that it contains information in a form of a "list" unlike objects which uses "properties"
    - Syntax
        let/const arrayName = [elementA, elementB, ElementC...]
*/

// Common examples of arrays

let grades = [98, 94, 89, 90];
let computerBrands = ["Acer", "Asus", "Lenovo", "Neo", "Toshiba"];

// Possbile use but not recommended

let mixArr = [12, "Asus", null, undefined, {}];

console.log(grades);
console.log(computerBrands);
console.log(mixArr);

// Alternative way to write an array

let myTasks = [
    "drink html",
    "eat java script",
    "inhale css",
    "bake sass"
    ];

// Creating an array with values from variables
let city1 = "Tokyo";
let city2 = "Manila";
let city3 = "Jakarta";

let cities = [city1, city2, city3];

console.log(myTasks);
console.log(cities);

// [SECTION] Length Property

console.log(myTasks.length);
console.log(cities.length);

let blankArr = [];
console.log(blankArr.length);

// using length property in a string

let fullName = "Jamie Noble";
console.log(fullName.length);

// deleting an item inside an array
myTasks.length = myTasks.length - 1;
console.log(myTasks.length);
console.log(myTasks);

// shorthand method for deleting an item in an array
// Thru decrementation

cities.length--;
console.log(cities);

// Using String
// We cannot do deleting of characters in a string
fullName.length = fullName.length - 1;
console.log(fullName.length);
fullName.length--;
console.log(fullName);

// Adding the length of an array

let theBeatles = ["John", "Paul", "Ringo", "George"];
theBeatles.length++;
console.log(theBeatles);

// [SECTION] Reading from Arrays
/*
    - Accessing array elements is one of the more common tasks that we do with an array
    - This can be done through the use of array indexes
    - Each element in an array is associated with it's own index/number
    - In JavaScript, the first element is associated with the number 0 and increasing this number by 1 for every element
    - The reason an array starts with 0 is due to how the language is designed
    - Array indexes actually refer to an address/location in the device's memory and how the information is stored
    - Example array location in memory
        Array address: 0x7ffe9472bad0
        Array[0] = 0x7ffe9472bad0
        Array[1] = 0x7ffe9472bad4
        Array[2] = 0x7ffe9472bad8
    - In the example above, the first element and the array itself points to the same memory location and therefore is at 0 elements away from the location of the array itself
    - Syntax
        arrayName[index];
*/

// let grades = [98, 94, 89, 90];
// let computerBrands = ["Acer", "Asus", "Lenovo", "Neo", "Toshiba"];

console.log(grades[0]);
console.log(computerBrands[3]);
// Accessing an array element that does not exist will return "undefined"
console.log(grades[20]);

let lakersLegends = ["Kobe", "Shaq", "Lebron", "Magic", "Kareem"];
// Access the second item
console.log(lakersLegends[1]);
// Access the fourth item
console.log(lakersLegends[3]);

// You can also save/store array items in another variable
let currentLaker = lakersLegends[2];
console.log(currentLaker);

// Re-assigning array value thru index number

console.log("Array before re-assignment");
console.log(lakersLegends);
lakersLegends[2] = "Pau Gasol";
console.log("Array after re-assignment");
console.log(lakersLegends);

// Accessing the last element in an array

let bullsLegends = ["Jordan", "Pippen", "Rodman", "Rose"];

let lastElementIndex = bullsLegends.length - 1;

console.log(bullsLegends[lastElementIndex]);

// You can do this directly
console.log(bullsLegends[bullsLegends.length - 1]);

// Adding an item into the array

let newArr = [];
console.log(newArr[0]);

// newArr[0] is undefine since we haven't defined an item.
newArr[0] = "Cloud Strife";
console.log(newArr);

console.log(newArr[1]);
newArr[1] = "Tifa Lockhart";
console.log(newArr);

// Add item automatically at the end of the array
newArr[newArr.length] = "Barrett Wallace";
console.log(newArr);

// Looping an Array
// You can use a for loop to iterate over all items in an array

for(let index = 0; index < newArr.length; index++){
    console.log(newArr[index]);
}

let numArray = [5, 12, 30, 46, 40];

for(let index = 0; index < numArray.length; index++){
    if(numArray[index] % 5 === 0){
        console.log(numArray[index] + " is divisible by 5.");
    }else{
        console.log(numArray[index] + " is not divisible by 5.");
    }
}

// [SECTION] Multidimensional Array

let chessBoard = [
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']
];


console.log(chessBoard);
console.table(chessBoard);

// accessing an element inside a multidimensional array
console.log(chessBoard[1][4]);
