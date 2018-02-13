var inquirer = require("inquirer");
var UserSearch = require("./Word");

var randomWords = ['kanto', 'johto', 'suicune', 'pikachu', 'badges', 
'goldenrod', 'espeon', 'chikorita', 'cyndaquil', 'totodile', 'pokemon', 'crystal'];

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var guessesRemain = 11;
var gameOver = false;
var chosenWord = randomWords[Math.floor(Math.random() * randomWords.length)];

var runGame = function() {

	inquirer.prompt([
	{
		name: "guess",
		message: "Guess a letter!"
	}
	]).then(function(answers) {

		guessesRemain = guessesRemain - 1;

		if (guessesRemain == 0) {
			gameOver = true;
			console.log("Your game is over.");
			return
		}
		else {
			runGame();
		}
	});
}


runGame();