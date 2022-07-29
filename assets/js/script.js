// Global variables declared

let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let newDiceTotal = "";


/**
 * Sequence of events explained:
 * rollDice() called when the "Roll" button clicked
 *      - Updates the dice icons in html to a random new value (1-6)
 *      - Finally adds the value of both dice together
 * subtractNumberBlock() called when a number block is clicked
 */




/**
 * The main game "loop", called when the script is first loaded
 * Checks whether the total value of the dice rolled is higher than the total value of the remaining number blocks
 * Lets the game continue or calls gameWon() / gameBust()
 */
function runGame() {
    
}


/**
 * Roll of both dice, called when the "Roll" button clicked
 * Updates the dice icons in html to a random new value (1-6)
 * Finally adds the value of both dice together
 */
function rollDice(event) {
    
    let newDice1 = Math.floor(Math.random() * 6) + 1;
    let newDice2 = Math.floor(Math.random() * 6) + 1;

    console.log(newDice1);
    console.log(newDice2);

    if (newDice1 === 1) {
        dice1.outerHTML = `<i class="fa-solid fa-dice-one" id="dice1"></i>`;
    } else if (newDice1 === 2) {
        dice1.outerHTML = `<i class="fa-solid fa-dice-two" id="dice1"></i>"`;
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
        dice2.outerHTML = `<i class="fa-solid fa-dice-two" id="dice2"></i>"`;
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
}

/**
 * Hides the number block and stores value ready for subtraction from the total value of both dice
 * Subtracts the value of the number block from the total value of both dice
 */
function subtractNumberBlock() {
    // retreives the value of the number block clicked: event listener required
    // subtracts it from "newDiceTotal"
}

/**
 * Alert raised to notify of game won (All number blocks have been used)
 */
function gameWon() {
    alert("Congratulations!!! You have Shut the Box! Can you manage to complete is again?");
}

/**
 * Alert raise to notify of game bust (Total value of the dice rolled is higher 
 * than the total value of the remaining number blocks)
 */
function gameBust() {
    alert("You have gone bust! The total value of the dice rolled is higher than the total value of the remaining number blocks. Try again to see if you can Shut the Box!");
}

/**
 * Resets the game so all number blocks are visible: Both dice reset to number 1.
 * Called when the "reset" button is clicked or after the gamewon()/gameBust() alert boxes are closed.
 */
function resetGame() {
    let numberBlockArea = document.getElementsByClassName("number-block-area").innerhtml

    numberBlockArea = `
    <div class="number-block" id="num1">1</div>
    <div class="number-block" id="num2">2</div>
    <div class="number-block" id="num3">3</div>
    <div class="number-block" id="num4">4</div>
    <div class="number-block" id="num5">5</div>
    <div class="number-block" id="num6">6</div>
    <div class="number-block" id="num7">7</div>
    <div class="number-block" id="num8">8</div>
    <div class="number-block" id="num9">9</div>`
}