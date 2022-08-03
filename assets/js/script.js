// Global variables declared

let roll = document.getElementById('roll');
let newDiceTotal = "";
const numberBlock = document.querySelectorAll(".number-block");
let numberBlockTotal = 45;
let numberBlockSelected = "";

document.addEventListener("DOMContentLoaded", function() {

    let reset = document.getElementById('reset');
    reset.addEventListener('click', resetGame);
    
    allowRollDice();
});

/**
 * Creates the event listeners for allowing the user to roll the dice
 */
function allowRollDice() {

    roll.addEventListener('click', rollDice);

}

/**
 * Roll of both dice, called when the "Roll" button clicked
 * Updates the dice icons in html to a random new value (1-6)
 * Finally adds the value of both dice together
 */
function rollDice(event) {

    roll.removeEventListener('click', rollDice);

    let newDice1 = Math.floor(Math.random() * 6) + 1;
    let newDice2 = Math.floor(Math.random() * 6) + 1;

    console.log("dice1 new value = " + newDice1); // Delete
    console.log("dice2 new value = " + newDice2); // Delete

    let dice1 = document.getElementById("dice1");
    let dice2 = document.getElementById("dice2");

    switch (newDice1) {
        case 1:
            dice1.outerHTML = `<i class="fa-solid fa-dice-one" id="dice1"></i>`;
            break;
        case 2:
            dice1.outerHTML = `<i class="fa-solid fa-dice-two" id="dice1"></i>`;
            break;
        case 3:
            dice1.outerHTML = `<i class="fa-solid fa-dice-three" id="dice1"></i>`;
            break;
        case 4:
            dice1.outerHTML = `<i class="fa-solid fa-dice-four" id="dice1"></i>`;
            break;
        case 5:
            dice1.outerHTML = `<i class="fa-solid fa-dice-five" id="dice1"></i>`;
            break;
        case 6:
            dice1.outerHTML = `<i class="fa-solid fa-dice-six" id="dice1"></i>`;
            break;
    }

    switch (newDice2) {
        case 1:
            dice2.outerHTML = `<i class="fa-solid fa-dice-one" id="dice2"></i>`;
            break;
        case 2:
            dice2.outerHTML = `<i class="fa-solid fa-dice-two" id="dice2"></i>`;
            break;
        case 3:
            dice2.outerHTML = `<i class="fa-solid fa-dice-three" id="dice2"></i>`;
            break;
        case 4:
            dice2.outerHTML = `<i class="fa-solid fa-dice-four" id="dice2"></i>`;
            break;
        case 5:
            dice2.outerHTML = `<i class="fa-solid fa-dice-five" id="dice2"></i>`;
            break;
        case 6:
            dice2.outerHTML = `<i class="fa-solid fa-dice-six" id="dice2"></i>`;
            break;
    }

    console.log(document.getElementById("dice1").outerHTML);
    console.log(document.getElementById("dice2").outerHTML);

    newDiceTotal = newDice1 + newDice2;

    console.log("newDiceTotal = " + newDiceTotal); // Delete

    checkGame();
}

/**
 * 
 */
 function checkGame() {

    console.log("checkGame() called!"); // To be deleted
    console.log("numberBlockTotal = " + numberBlockTotal); // To be deleted

    if (newDiceTotal && numberBlockTotal === 0) { 
        gameWon();
    } else if (newDiceTotal > numberBlockTotal) {
        gameBust(); // Checks whether the total value of the dice is higher than the total value of the remaining number blocks
    } else if (newDiceTotal === 0){
        console.log("newDiceTotal is equal to 0: allowDiceRoll.");
        allowRollDice();
    } else {
        console.log("newDiceTotal is greater than 0: selectNumberBlock.");
        selectNumberBlock();
    }

}

/**
 * Creates the event listeners for allowing the user to remove a number block
 * It only adds event listeners to values <= newDiceTotal : delete
 */
function selectNumberBlock() {

    console.log("selectNumberBlock called.")

    numberBlock.forEach(number => {
        number.addEventListener('click', subtractNumberBlock);
    });

}

/**
 * Hides the number block and stores value ready for subtraction from the total value of both dice
 * Subtracts the value of the number block from the total value of both dice
 */
function subtractNumberBlock(event) {

    numberBlock.forEach(number => {
        number.removeEventListener('click', subtractNumberBlock);
    });

    numberBlockSelected = event.target.innerHTML;

    console.log("subtractNumberBlock() called!"); // Delete
    console.log("numberBlockTotal = " + numberBlockTotal); // Delete

    // subtracts numberBlockSelected from newDiceTotal and numberBlockTotal
    newDiceTotal = newDiceTotal - numberBlockSelected;
    numberBlockTotal = numberBlockTotal - numberBlockSelected;

    console.log("numberBlockSelected = " + numberBlockSelected); // Delete
    console.log("newDiceTotal = " + newDiceTotal); // Delete
    console.log("numberBlockTotal = " + numberBlockTotal); // Delete


    // Make the selected Number Block Invisible
    numberBlock[--numberBlockSelected].outerHTML = `<div class="number-block invisible" id="num1">0</div>`; // remove #num1

    checkGame();
}

/**
 * Alert raised to notify of game won (All number blocks have been used)
 */
function gameWon() {
    alert("Congratulations!!! You have Shut the Box! Can you manage to complete is again?");
    resetGame();
}

/**
 * Alert raise to notify of game bust (Total value of the dice rolled is higher 
 * than the total value of the remaining number blocks)
 */
function gameBust() {
    alert("You have gone bust! The total value of the dice rolled is higher than the total value of the remaining number blocks. Try again to see if you can Shut the Box!");
    resetGame();
}

/**
 * Resets the game by refreshing the page.
 * Called when the "reset" button is clicked or after the gamewon()/gameBust() alert boxes are closed.
 */
function resetGame() {

    location.reload()

}