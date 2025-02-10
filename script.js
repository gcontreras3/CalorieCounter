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
    
    return str.replace(regex, "");
}
// console.log(cleanInputString("+-99"));
function isInvalidInput(str){
    const regex = /[0-9]e[0-9]/i;
}