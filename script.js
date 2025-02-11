const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

function cleanInputString(str){
    // console.log("original string: ", str);
    // you need to use the \ character in regex to escape the + symbol because it has a specail meaning in regex
    // In regex, shorthand character classes allow you to match specific characters
    // regex can alter the pattern matching behavior, "global" will tell the pattern to continue looking after it has found a match.
    const regex = /[+-\s]/g;
    // replace takes two parameters
    return str.replace(regex, "");
}
// console.log(cleanInputString("+-99"));
function isInvalidInput(str){
    // Includes a + modifier, allows you to match a pattern that occurs one or more times.
    // Shorthand character class to match any digit: \d
    // Strings have a .match() method. Which returns an array with any matches found in the string.
    const regex = /\d+e\d+/i;
    return str.match(regex);
}
    // testing isInvalidInput function
console.log(isInvalidInput("1e3"));
console.log(cleanInputString("++---Hello-+++"))

    // testing a valid input 
console.log(isInvalidInput("10")); // returns null, match method with no matches found.
    // testing the value of entryDropdown  
console.log(entryDropdown.value);

// Allow users to add entries to the calorie counter
function addEntry(){
    // Need to know which category the entry goes in.
    const targetId = "#" + entryDropdown.value;
    const targetInputContainer = document.querySelector(targetId + ' .input-container');
}
