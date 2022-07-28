// Source: Code Institute - Love Maths Project

let roll = document.getElementsByClassName("roll")[0];

roll.addEventListener("click", rolldice);


/**
 * The main game "loop", called when the script is first loaded
 */
function runGame() {
    
}

function rollDice(event) {
    
    let newDice1 = Math.floor(Math.random() * 6) + 1;
    let newDice2 = Math.floor(Math.random() * 6) + 1;

    console.log(newDice1);
    console.log(newDice2);

    if (newDice1 === 1) {
        document.getElementById("dice1").outerHTML = `<i class="fa-solid fa-dice-one" id="dice1"></i>`;
    } else if (newDice1 === 2) {
        document.getElementById("dice1").outerHTML = `<i class="fa-solid fa-dice-two" id="dice1"></i>"`;
    } else if (newDice1 === 3) {
        document.getElementById("dice1").outerHTML = `<i class="fa-solid fa-dice-three" id="dice1"></i>`;
    } else if (newDice1 === 4) {
        document.getElementById("dice1").outerHTML = `<i class="fa-solid fa-dice-four" id="dice1"></i>`;
    } else if (newDice1 === 5) {
        document.getElementById("dice1").outerHTML = `<i class="fa-solid fa-dice-five" id="dice1"></i>`;
    } else if (newDice1 === 6) {
        document.getElementById("dice1").outerHTML = `<i class="fa-solid fa-dice-six" id="dice1"></i>`;
    };

    if (newDice1 === 1) {
        document.getElementById("dice2").outerHTML = `<i class="fa-solid fa-dice-one" id="dice2"></i>`;
    } else if (newDice1 === 2) {
        document.getElementById("dice2").outerHTML = `<i class="fa-solid fa-dice-two" id="dice2"></i>"`;
    } else if (newDice1 === 3) {
        document.getElementById("dice2").outerHTML = `<i class="fa-solid fa-dice-three" id="dice2"></i>`;
    } else if (newDice1 === 4) {
        document.getElementById("dice2").outerHTML = `<i class="fa-solid fa-dice-four" id="dice2"></i>`;
    } else if (newDice1 === 5) {
        document.getElementById("dice2").outerHTML = `<i class="fa-solid fa-dice-five" id="dice2"></i>`;
    } else if (newDice1 === 6) {
        document.getElementById("dice2").outerHTML = `<i class="fa-solid fa-dice-six" id="dice2"></i>`;
    };

    console.log(document.getElementById("dice1").outerHTML);
    console.log(document.getElementById("dice2").outerHTML);
}

function calculateDice() {
    
}

function subtractNumberBlock()

function gameWon()

function resetGame()