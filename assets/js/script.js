// Global variables declared
let roll = document.getElementById('roll');
let newDiceTotal = "";
const numberBlock = document.querySelectorAll(".number-block");
let numberBlockTotal = 45;
let numberBlockSelected = "";
let numbers = [];
let combi = [];
const messageBoard = document.getElementsByClassName("message-board")[0];

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
    
    roll.classList.remove('invisible');

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

    roll.classList.add('invisible');

    let newDice1 = Math.floor(Math.random() * 6) + 1;
    let newDice2 = Math.floor(Math.random() * 6) + 1;

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

    newDiceTotal = newDice1 + newDice2;

    checkGame();
}

/**
 * Checks the conditions of the game to see if the player have won, bust or can continue
 */
 function checkGame() {

    if (newDiceTotal === 0 && numberBlockTotal === 0) { 
        gameWon();
        return;
    } else if (newDiceTotal > numberBlockTotal) {
        gameBust(); // Checks whether the total value of the dice is higher than the total value of the remaining number blocks
        return;
    } else if (newDiceTotal === 0){
        allowRollDice();
        return;
    } 
    
    checkNumberBlockArray();

    if (combi.includes(newDiceTotal)) {
        selectNumberBlock();
    } else {
        gameBust();
    }

}

/**
 * Creates an array of remaining number blocks available
 * Then all combinations of these numbers added together is created in a new array
 */
function checkNumberBlockArray() {

    numbers = [];

    for (let i = 0; i < 9; i++) {
        let number = document.getElementsByClassName("number-block")[i].textContent;
 
        numbers.push(number);
    }

    // Original code source: https://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array

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
}

/**
 * Creates the event listeners for allowing the user to remove a number block
 */
function selectNumberBlock() {

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
        alertHighNumberBlock();
        return;
    }

    // Subtracts numberBlockSelected from newDiceTotal and numberBlockTotal
    newDiceTotal = newDiceTotal - numberBlockSelected;
    numberBlockTotal = numberBlockTotal - numberBlockSelected;

    // Make the selected Number Block Invisible
    numberBlock[--numberBlockSelected].classList.add('invisible');
    numberBlock[numberBlockSelected].innerHTML = 0;


    // Checks if the remaining numberBlocks are equal to the remaining newDiceTotal 
    // If not, the game asks for another number to be selected
    checkNumberBlockArray();

    let diceTotalString = newDiceTotal.toString();
    let remainingBlocksAvailable = numbers.includes(diceTotalString);
    let alert2 = document.getElementsByClassName("alert2")[0];

    if (remainingBlocksAvailable) {
        checkGame();
    } else {
        numberBlock[numberBlockSelected].classList.remove('invisible');
        numberBlock[numberBlockSelected].innerHTML = ++numberBlockSelected;

        newDiceTotal = newDiceTotal + numberBlockSelected;
        numberBlockTotal = numberBlockTotal + numberBlockSelected;

        messageBoard.classList.remove("invisible");
        alert2.classList.remove("invisible");

        let close = document.getElementsByClassName("close")[1];
        close.addEventListener('click', function() {
            messageBoard.classList.add("invisible");
            alert2.classList.add("invisible");

            selectNumberBlock();
        });

    }

}

/**
 * Displays an alert that the number block clicked is higher that the new dice total
 */
function alertHighNumberBlock() {

    let alert1 = document.getElementsByClassName("alert1")[0];

    messageBoard.classList.remove("invisible");
    alert1.classList.remove("invisible");

    let close = document.getElementsByClassName("close")[0];

    close.addEventListener('click', function() {
        messageBoard.classList.add("invisible");
        alert1.classList.add("invisible");

        selectNumberBlock();
    });
}

/**
 * Notifies the player that they have won the game (all number blocks have been clicked)
 */
function gameWon() {
    
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

    location.reload();

}