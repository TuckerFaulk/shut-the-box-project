// Global variables declared
let roll = document.getElementById('roll');
let newDiceTotal = "";
const numberBlock = document.querySelectorAll(".number-block");
let numberBlockTotal = 45;
let numberBlockSelected = "";
var combi = [];

// Event listener added to the roll button on DomContentLoaded allowing the game to run
document.addEventListener("DOMContentLoaded", function() {

    let reset = document.getElementById('reset');
    reset.addEventListener('click', resetGame);
    
    allowRollDice();
});

/**
 * Makes the roll button visible and creates the event listener for allowing the user to roll the dice
 */
function allowRollDice() {

    roll.outerHTML = `<button id="roll invisible">Roll</button>`;
    
    roll.addEventListener('click', rollDice);

}

/**
 * Roll of both dice, called when the "Roll" button clicked
 * Updates the dice icons in html to a random new value (1-6)
 * Finally adds the value of both dice together
 * Removes the roll event listner to prevnt the user re-rolling the dice 
 * Hides the roll button so the user is aware that the dice have been rolled
 */
function rollDice(event) {

    roll.removeEventListener('click', rollDice);

    roll.outerHTML = `<button id="roll invisible">Roll</button>`;

    let newDice1 = Math.floor(Math.random() * 6) + 1;
    let newDice2 = Math.floor(Math.random() * 6) + 1;

    console.log("dice1 new value = " + newDice1); // To be delete
    console.log("dice2 new value = " + newDice2); // To be delete

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

    console.log(document.getElementById("dice1").outerHTML); // To be delete
    console.log(document.getElementById("dice2").outerHTML); // To be delete

    newDiceTotal = newDice1 + newDice2;

    console.log("newDiceTotal = " + newDiceTotal); // Delete

    checkGame();
}

/**
 * To be completed...
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
        console.log("newDiceTotal is equal to 0: allowDiceRoll."); // To be deleted
        allowRollDice();
        return;
    } 
    
    checkNumberBlockArray();

    if (combi.includes(newDiceTotal)) {
        console.log("sum of two numberBlocks = newDiceTotal"); // To be deleted
        selectNumberBlock();
    } else {
        console.log("sum of two numberBlocks != newDiceTotal"); // To be deleted
        gameBust();
    }

}

/**
 * To be completed...
 */
function checkNumberBlockArray() {

let numbers = [];

for (let i = 0; i < 9; i++) {
    let number = document.getElementsByClassName("number-block")[i].textContent;
    console.log(number); // To be deleted
    numbers.push(number); // To be deleted
    console.log(numbers); // To be deleted
}

// Code source: !!!!!!

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

console.log(combi); // To be delete

}

/**
 * Creates the event listeners for allowing the user to remove a number block
 */
function selectNumberBlock() {

    console.log("selectNumberBlock called"); // To be delete

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

    // Change the below to an html div not alert box !!!!!!!!!!!!

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
    numberBlock[--numberBlockSelected].outerHTML = `<div class="number-block invisible">0</div>`;

    // Checks if the remaining numberBlocks = to the remaining newDiceTotal
    // To be completed...
    // if numbers.includes(newDiceTotal) {checkGame();} else {keep previously selectedNumberBlock > alert() > selectNumberBlock();}

    checkGame(); // To be deleted: see above
}

/**
 * Notifies the player that they have won the game (all number blocks have been used)
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
 * Notifies the player that they have gone bust (Total value of the dice rolled is higher 
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