// Global variables declared

let roll = document.getElementById('roll');
let newDiceTotal = "";
const numberBlock = document.querySelectorAll(".number-block");
let numberBlockTotal = 45;
let numberBlockSelected = "";
var combi = [];

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

    if (newDiceTotal === 0 && numberBlockTotal === 0) { 
        gameWon();
        return;
    } else if (newDiceTotal > numberBlockTotal) {
        gameBust(); // Checks whether the total value of the dice is higher than the total value of the remaining number blocks
        return;
    } else if (newDiceTotal === 0){
        console.log("newDiceTotal is equal to 0: allowDiceRoll.");
        allowRollDice();
        return;
    } 
    
    checkNumberBlockArray();

    if (combi.includes(newDiceTotal)) {
        console.log("sum of two numberBlocks = newDiceTotal");
        selectNumberBlock();
    } else {
        console.log("sum of two numberBlocks != newDiceTotal");
        gameBust();
    }

}

/**
 * 
 */
function checkNumberBlockArray() {

let numbers = [];

for (let i = 0; i < 9; i++) {
    let number = document.getElementsByClassName("number-block")[i].textContent;
    console.log(number);
    numbers.push(number);
    console.log(numbers);
}

combi = [];
var temp= 0;
var numLen = Math.pow(2, numbers.length);
	
for (var i = 0; i < numLen ; i++){
    temp = 0;
    for (var j=0;j<numbers.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += parseInt(numbers[j]);
        }
    }
    if (temp !== 0) {
        combi.push(temp);
    }
}

console.log(combi);

}

/**
 * Creates the event listeners for allowing the user to remove a number block
 * It only adds event listeners to values <= newDiceTotal : delete
 */
function selectNumberBlock() {

    console.log("selectNumberBlock called");

    // Array [remaining numberBlock values]
    // Of remaining numberBlock values, get combination that add to newDiceTotal
        // If numbers add to newDiceTotal: add event listeners to them
        // If no numbers add to newDiceTotal: game bust

    // Add event listeners
    numberBlock.forEach(number => {
        number.addEventListener('click', subtractNumberBlock);
    });

}

/**
 * Hides the number block and stores value ready for subtraction from the total value of both dice
 * Subtracts the value of the number block from the total value of both dice
 */
function subtractNumberBlock(event) {

    // Removes event listeners from the number blocks
    numberBlock.forEach(number => {
        number.removeEventListener('click', subtractNumberBlock);
    });

    // Sets the value of the numberBlockSelected 
    numberBlockSelected = event.target.innerHTML;

    // Checks if the numberBlockSelected is greater that the newDiceTotal: if so, asks the player to select another number
    if (numberBlockSelected > newDiceTotal) {
            alert("Click a number block less than the remaining dice total.")
            selectNumberBlock();
            return;
    }

    console.log("subtractNumberBlock() called!"); // Delete
    console.log("numberBlockTotal = " + numberBlockTotal); // Delete

    // Subtracts numberBlockSelected from newDiceTotal and numberBlockTotal
    newDiceTotal = newDiceTotal - numberBlockSelected;
    numberBlockTotal = numberBlockTotal - numberBlockSelected;

    console.log("numberBlockSelected = " + numberBlockSelected); // Delete
    console.log("newDiceTotal = " + newDiceTotal); // Delete
    console.log("numberBlockTotal = " + numberBlockTotal); // Delete


    // Make the selected Number Block Invisible
    numberBlock[--numberBlockSelected].outerHTML = `<div class="number-block invisible">0</div>`; // remove #num1

    checkGame();
}

/**
 * Alert raised to notify of game won (all number blocks have been used)
 */
function gameWon() {
    
    let messageBoard = document.getElementsByClassName("message-board")[0];
    let gameWonAlert = document.getElementsByClassName("game-won")[0];

    messageBoard.classList.remove("invisible");
    gameWonAlert.classList.remove("invisible");

    let tryAgain = document.getElementsByClassName("try-again")[1];
    tryAgain.addEventListener('click', resetGame);

}

/**
 * Alert raise to notify of game bust (Total value of the dice rolled is higher 
 * than the total value of the remaining number blocks)
 */
function gameBust() {

    let messageBoard = document.getElementsByClassName("message-board")[0];
    let gameBustAlert = document.getElementsByClassName("game-bust")[0];
    let bustDiceTotal = document.getElementById("bust-dice-total");

    messageBoard.classList.remove("invisible");
    gameBustAlert.classList.remove("invisible");
    bustDiceTotal.innerHTML = newDiceTotal;

    let tryAgain = document.getElementsByClassName("try-again")[0];
    tryAgain.addEventListener('click', resetGame);

}

/**
 * Resets the game by refreshing the page.
 * Called when the "reset" button is clicked or after the gamewon()/gameBust() "try again" buttons are clicked.
 */
function resetGame() {

    location.reload()

}