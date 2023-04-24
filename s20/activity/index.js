// console.log("Hello World");

//Objective 1
let string = 'supercalifragilisticexpialidocious';
console.log(string);
let filteredString = '';

//Add code here

var extractedLetters = /[aioue]/ig;

for (let i = 0; i < string.length; i++){
    if (string[i].match(extractedLetters)){
        continue;
    } else {
        string[i] + filteredString;
    }

    console.log(string[i]);
}





//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        filteredString: typeof filteredString !== 'undefined' ? filteredString : null

    }
} catch(err){

}