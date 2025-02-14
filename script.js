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
    // const targetId = "#" + entryDropdown.value;
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input id="${entryDropdown.value}-${entryNumber}-calories" type="number" min="0" placeholder="Calories" />`;
    // Call insertAdjacentHTML on targetInputContainer without changing its existing content.
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}
function calculateCalories (e) {
    e.preventDefault();
    isError = false;
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type="number"]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type="number"]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type="number"]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type="number"]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type="number"]');
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput])
    if (isError){
        return
    }
    // Calorie calculations.
    // Need to know if the user is in a caloric surplus or deficit.
    // Burning as many calories as you consume is called maintenace, can be thought of as a surplus.
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
    output.innerHTML = `<span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>`;
    output.classList.remove("hide");
}
function getCaloriesFromInputs(list){
    let calories = 0;
    for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
        if(invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
        console.log(list);
        return calories;
    }
    
}
function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll(".input-container"));
    for (const container of inputContainers) {
        container.innerHTML = "";
    }
    budgetNumberInput.value = "";
    output.innerText = "";
    output.classList.add("hide");
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
