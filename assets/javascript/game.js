$(document).ready(function() {

// VARIABLES
// ==================================================

// Create key variables for the game
var targetNumber = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var userWins = 0;
var userLosses = 0;
var userScore = 0;

// Create variables for sounds
var winningSound = new Audio("./assets/sounds/ta-da.mp3");
var losingSound = new Audio("./assets/sounds/sad-trombone.mp3");


// FUNCTIONS
// ==================================================

// Generate a random "target number" between 19 and 120
var createRandomTarget = function() {
    targetNumber = Math.floor(Math.random() * (101) + 19);
    console.log("Target number: " + targetNumber);
};

// Generate random numbers between 1 and 12 for the four crystals
var createRandomNumbers = function() {
    num1 = Math.floor(Math.random() * (11) + 1);
    num2 = Math.floor(Math.random() * (11) + 1);
    num3 = Math.floor(Math.random() * (11) + 1);
    num4 = Math.floor(Math.random() * (11) + 1);
    console.log("Crystal 1: " + num1);
    console.log("Crystal 2: " + num2);
    console.log("Crystal 3: " + num3);
    console.log("Crystal 4: " + num4);
};

// Check for wins or losses
var checkScore = function() {
    populatePage();
    if (userScore === targetNumber) {
        userWins++;
        winningSound.play();
        resetGame();
    }
    else if (userScore > targetNumber) {
        userLosses++;
        losingSound.play();
        resetGame();
    }
};

// Start the game
var startGame = function() {
    createRandomTarget();
    createRandomNumbers();
    populatePage();
};

// Reset the game after each win or loss
var resetGame = function () {
    userScore = 0;
    startGame();
};

// Populate the web page
var populatePage = function() {
    $("#target").text("Try to match this number: " + targetNumber);
    $("#score").text("Your Current Score: " + userScore);
    $("#wins").text("Wins: " + userWins);
    $("#losses").text("Losses: " + userLosses);
};


// MAIN PROCESS
// ==================================================

// Define behavior when the crystals are clicked
$("#crystal1").on("click", function(){
    userScore = (userScore + num1);
    checkScore();
});
$("#crystal2").on("click", function(){
    userScore = (userScore + num2);
    checkScore();
});
$("#crystal3").on("click", function(){
    userScore = (userScore + num3);
    checkScore();
});
$("#crystal4").on("click", function(){
    userScore = (userScore + num4);
    checkScore();
});

// Start the first game 
startGame();

});