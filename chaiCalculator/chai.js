function calculateChaiIngredients() {
    const recipe = {
        water: { amount: 200, unit: 'ml'},
        milk: { amount: 100, unit: 'ml'},
        teaLeaves: { amount: 10, unit: 'tablespoon'},
        sugar: { amount: 5, unit: 'tablespoon'},
    }
}

let numberOfCupsInput;
let numberOfCups = 1;

do {
    numberOfCupsInput = prompt("Karibu! How many cups of chai would you like to make?");

    if (numberofcupsinput === null) {
        console.log("Chai calculation cancelled by the UserActivation.");
        return;
    }

    numberofcups = parseInt(numberofCupsInput);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        alert("Please enter a valid positive number for the cups of chai.");
    }
} while (isNaN(numberOfCups) || numberOfCups <= 0);
// calculate required amounts //
const calculatedwater = numberOfCups * recipe.water.amount;
const calculatedMilk = numberOfCups * recipe.milk.amount;
const calculatedTeaLeaves = numberOfCups * recipe.teaLeaves.amount;
const calculatedSugar = numberOfCups * recipe.sugar.amount;
// Display the results //
let output = `To make ${numberOfCups} cups of Kenyan chai, you will need:\n`;
output += `Water: ${calculatedwater} ${recipe.water.unit} \n`;
output += `Milk: ${calculatedMilk} ${recipe.milk.unit} \n`;
output += `Tea Leaves (Majani): ${calculatedTeaLeaves} ${recipe.teaLeaves.unit}${calcutedTealeaves > 1 ? 's' :}\n`;
output += `Sugar (Sukari): ${calculatedSugar} ${recipe.sugar.unit}${calculatedSugar > 1 ? 's' :} \n`;
output += "Enjoy your Chai Bora!";

console.log(output);

