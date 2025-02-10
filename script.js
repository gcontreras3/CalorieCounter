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
    // Strings have a .match() method.
    const regex = /\d+e\d+/i;
    str.match(regex);
}