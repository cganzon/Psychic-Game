var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var currentGuesses = [];
var guessesLeft = 15;
var winsDisplay = document.getElementById("wins");
var lossDisplay = document.getElementById("losses");
var currentGuessesDisplay = document.getElementById("guesses");
var guessesLeftDisplay = document.getElementById("guessesLeft");

// Function to update UI
function update () {
    currentGuesses = [];
    currentGuessesDisplay.textContent = currentGuesses;
    guessesLeft = 15;
    guessesLeftDisplay.textContent = guessesLeft;
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
};

// Randomly picks a letter from the letters array. This is the computer's choice.
var computerChoice = letters[Math.floor(Math.random() * letters.length)];

// This function is run whenever the user takes a guess.
document.onkeypress = function (event) {
    // Determines which letter the user picked and stores it in a variable.
    var userGuess = event.key.toUpperCase();

    // displays user's choices on screen
    currentGuesses.push(userGuess);
    currentGuessesDisplay.textContent = currentGuesses;

    // compare user's choice to computer's choice
    // if wrong, decrease guesses left by 1, and adds letter to current guesses
    if (userGuess !== computerChoice) {
        guessesLeft--;
        guessesLeftDisplay.textContent = guessesLeft;
    }

    // if correct, alert "Correct! Picking a new letter.", increment Wins by 1, current guesses is reset, and computer picks new letter
    if (userGuess === computerChoice) {
        alert("Correct! The letter was " + computerChoice + "!");
        alert("Picking a new letter!");
        wins++;
        winsDisplay.textContent = wins;
        update();
    }

    // // if out of guesses, alert "Game Over!", increases Losses by 1, current guesses is reset, and computer picks new letter
    if (guessesLeft === 0) {
        alert("Out of guesses! The letter was " + computerChoice + "!");
        alert("Picking a new letter!");
        losses++;
        lossDisplay.textContent = losses;
        update();
    }
};






