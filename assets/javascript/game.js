$(document).ready(function() {

// VARIABLES
// ==================================================

// Create key variables for the game
var targetNumber;
var num1;
var num2;
var num3;
var num4;
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
}

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
}

// Populate the web page
var populatePage = function() {
    $("#target").text("Try to match this number: " + targetNumber);
    $("#score").text("Your Current Score: " + userScore);
    $("#wins").text("Wins: " + userWins);
    $("#losses").text("Losses: " + userLosses);
}

// Check for wins or losses
var checkScore = function() {
    populatePage();
    if (userScore === targetNumber) {
        youWin();    
    }
    else if (userScore > targetNumber) {
        youLose();
    }
}

// Process wins
var youWin = function() {
    userWins++;
    winningSound.play();
    $("#result").html("<img src = './assets/images/you-win.png'>");
    setTimeout(function() {
        $("#result").html("");
    }, 4000);
    resetGame();
}

// Process losses
var youLose = function() {
    userLosses++;
    losingSound.play();
    $("#result").html("<img src = './assets/images/you-lose.png'>");
    setTimeout(function() {
        $("#result").html("");
    }, 4000);
    resetGame();
}

// Start the game
var startGame = function() {
    createRandomTarget();
    createRandomNumbers();
    populatePage();
}

// Reset the game after each win or loss
var resetGame = function () {
    userScore = 0;
    startGame();
}


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