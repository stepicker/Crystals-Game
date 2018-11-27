// Create global variables
var userWins = 0;
var userLosses = 0;

// Create the main function, to be run on the first page load and after each win or loss
var resetGame = function() {

    // Generate a random number between 19 and 120
    var targetNumber = Math.floor(Math.random() * (101) + 19);
    console.log(targetNumber);

    // Generate random numbers between 1 and 12 for the four crystals
    var num1 = Math.floor(Math.random() * (11) + 1);
    var num2 = Math.floor(Math.random() * (11) + 1);
    var num3 = Math.floor(Math.random() * (11) + 1);
    var num4 = Math.floor(Math.random() * (11) + 1);
    console.log("num1 " + num1);
    console.log("num2 " + num2);
    console.log("num3 " + num3);
    console.log("num4 " + num4);

    // Reset the user score
    var userScore = 0;
    console.log("userScore " + userScore);

    // Populate the web page
    $("#target").text("Try to match this number: " + targetNumber);
    $("#score").text("Your Current Score: " + userScore);
    $("#wins").text("Wins: " + userWins);
    $("#losses").text("Losses: " + userLosses);

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

    // Check for wins or losses
    var checkScore = function() {

        $("#score").text("Your Current Score: " + userScore);

        if (userScore === targetNumber) {
            userWins = (userWins + 1);
            resetGame();
        }
        else if (userScore > targetNumber) {
            userLosses = (userLosses + 1);
            resetGame();
        }

    }

}

// Start the game when the page is first loaded
$(document).ready(resetGame);