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
}

// Generate a random number between 1 and 12
var randomGenerator = function() {
    num = Math.floor(Math.random() * (11) + 1);
    return num;
}

// Get four random numbers using the previous function
var createRandomNumbers = function() {
    num1 = randomGenerator();
    num2 = randomGenerator();
    num3 = randomGenerator();
    num4 = randomGenerator();
    // Assign those numbers to the four crystals as image attributes
    $('#crystal1').attr("num", num1);
    $('#crystal2').attr("num", num2);
    $('#crystal3').attr("num", num3);
    $('#crystal4').attr("num", num4);
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
    if (userScore === targetNumber) {
        youWin();    
    }
    else if (userScore > targetNumber) {
        youLose();
    }
}

// Process wins
var youWin = function() {
    winningSound.play();
    $("#result").html("<img src = './assets/images/you-win.png'>");
    setTimeout(function() {
        $("#result").html("");
    }, 2000);
    userWins++;
    resetGame();
}

// Process losses
var youLose = function() {
    losingSound.play();
    $("#result").html("<img src = './assets/images/you-lose.png'>");
    setTimeout(function() {
        $("#result").html("");
    }, 2000);
    userLosses++;
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
    setTimeout(function() {
        userScore = 0;
        startGame();
    }, 2000);
}


// MAIN PROCESS
// ==================================================

// Define behavior when the crystals are clicked, using the crystal num attribute converted into a number
$(".crystal").on("click", function(){
    userScore = (userScore + Number($(this).attr("num")));
    checkScore();
    populatePage();
});

// Start the first game 
startGame();

});