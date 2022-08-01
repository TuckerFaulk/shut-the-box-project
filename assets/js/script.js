// Global variables declared

let newDiceTotal = "";
let numberBlock = document.getElementsByClassName("number-block");
let numberBlockTotal = "";
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
    let roll = document.getElementById('roll');
    roll.addEventListener('click', rollDice);
}

/**
 * Roll of both dice, called when the "Roll" button clicked
 * Updates the dice icons in html to a random new value (1-6)
 * Finally adds the value of both dice together
 */
function rollDice(event) {
    
    let newDice1 = Math.floor(Math.random() * 6) + 1;
    let newDice2 = Math.floor(Math.random() * 6) + 1;

    console.log("dice1 new value = " + newDice1);
    console.log("dice2 new value = " + newDice2);

    let dice1 = document.getElementById("dice1");
    let dice2 = document.getElementById("dice2");

    if (newDice1 === 1) {
        dice1.outerHTML = `<i class="fa-solid fa-dice-one" id="dice1"></i>`;
    } else if (newDice1 === 2) {
        dice1.outerHTML = `<i class="fa-solid fa-dice-two" id="dice1"></i>`;
    } else if (newDice1 === 3) {
        dice1.outerHTML = `<i class="fa-solid fa-dice-three" id="dice1"></i>`;
    } else if (newDice1 === 4) {
        dice1.outerHTML = `<i class="fa-solid fa-dice-four" id="dice1"></i>`;
    } else if (newDice1 === 5) {
        dice1.outerHTML = `<i class="fa-solid fa-dice-five" id="dice1"></i>`;
    } else if (newDice1 === 6) {
        dice1.outerHTML = `<i class="fa-solid fa-dice-six" id="dice1"></i>`;
    };

    if (newDice2 === 1) {
        dice2.outerHTML = `<i class="fa-solid fa-dice-one" id="dice2"></i>`;
    } else if (newDice2 === 2) {
        dice2.outerHTML = `<i class="fa-solid fa-dice-two" id="dice2"></i>`;
    } else if (newDice2 === 3) {
        dice2.outerHTML = `<i class="fa-solid fa-dice-three" id="dice2"></i>`;
    } else if (newDice2 === 4) {
        dice2.outerHTML = `<i class="fa-solid fa-dice-four" id="dice2"></i>`;
    } else if (newDice2 === 5) {
        dice2.outerHTML = `<i class="fa-solid fa-dice-five" id="dice2"></i>`;
    } else if (newDice2 === 6) {
        dice2.outerHTML = `<i class="fa-solid fa-dice-six" id="dice2"></i>`;
    };

    console.log(document.getElementById("dice1").outerHTML);
    console.log(document.getElementById("dice2").outerHTML);

    newDiceTotal = newDice1 + newDice2;

    console.log("newDiceTotal = " + newDiceTotal); // Delete

    checkGame();
}

/**
 * Creates the event listeners for allowing the user to remove a number block
 * It only adds event listeners to values <= newDiceTotal
 */
function selectNumberBlock() {

    let num1 = document.getElementById('num1');
    num1.addEventListener('click', function() {
       numberBlockSelected = num1.innerHTML;
       console.log("You have selected number block:" + numberBlockSelected);
       subtractNumberBlock();
       });

    let num2 = document.getElementById('num2');
    num2.addEventListener('click', function() {
       numberBlockSelected = num2.innerHTML;
       console.log("You have selected number block:" + numberBlockSelected);
       subtractNumberBlock();
       });
}

/**
 * Hides the number block and stores value ready for subtraction from the total value of both dice
 * Subtracts the value of the number block from the total value of both dice
 */
function subtractNumberBlock(event) {

    console.log("subtractNumberBlock() called!");
    console.log("numberBlockTotal = " + numberBlockTotal);

    // subtracts numberBlockSelected from newDiceTotal and numberBlockTotal
    newDiceTotal = newDiceTotal - numberBlockSelected;
    numberBlockTotal = numberBlockTotal - numberBlockSelected;

    console.log("numberBlockSelected = " + numberBlockSelected);
    console.log("newDiceTotal = " + newDiceTotal);
    console.log("numberBlockTotal = " + numberBlockTotal);


    // Make the selected Number Block Invisible
    numberBlock[--numberBlockSelected].outerHTML = `<div class="number-block invisible" id="num1">0</div>`;

    checkGame();
}

/**
 * 
 */
function checkGame() {

    console.log("checkGame() called!")

    // Checks whether the total value of the dice is higher than the total value of the remaining number blocks
    numberBlockTotal = 0;

    for (let i = 0; i < 9; i++){
        numberBlockTotal = numberBlockTotal + parseInt(numberBlock[i].innerHTML);
    }

    console.log("numberBlockTotal = " + numberBlockTotal);

    if (numberBlockTotal < newDiceTotal) {
        gameBust();
    }

    // Checks whether to allow number blocks to be selected: if "0" checks whether game is won
    if (newDiceTotal > 0) {
        console.log("newDiceTotal is greater than 0: selectNumberBlock.");
        selectNumberBlock();
    } else if (newDiceTotal && numberBlockTotal === 0) { 
        gameWon();
    } else {
        console.log("newDiceTotal is equal to 0: allowDiceRoll.");
        allowRollDice();
    } 

}

/**
 * Alert raised to notify of game won (All number blocks have been used)
 */
function gameWon() {
    alert("Congratulations!!! You have Shut the Box! Can you manage to complete is again?");
    // resetGame();
}

/**
 * Alert raise to notify of game bust (Total value of the dice rolled is higher 
 * than the total value of the remaining number blocks)
 */
function gameBust() {
    alert("You have gone bust! The total value of the dice rolled is higher than the total value of the remaining number blocks. Try again to see if you can Shut the Box!");
    // resetGame();
}

/**
 * Resets the game so all number blocks are visible: Both dice reset to number 1.
 * Called when the "reset" button is clicked or after the gamewon()/gameBust() alert boxes are closed.
 */
function resetGame() {

    console.log("resetGame() called!")

    let numberBlockArea = document.getElementsByClassName("number-block-area")[0].innerhtml

    numberBlockArea = `<div class="number-block" id="num1">1</div>
    <div class="number-block" id="num2">2</div>
    <div class="number-block" id="num3">3</div>
    <div class="number-block" id="num4">4</div>
    <div class="number-block" id="num5">5</div>
    <div class="number-block" id="num6">6</div>
    <div class="number-block" id="num7">7</div>
    <div class="number-block" id="num8">8</div>
    <div class="number-block" id="num9">9</div>`;

    allowRollDice();
}