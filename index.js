var inquirer = require("inquirer");
var UserSearch = require("./UserSearch");

var randomWords = ['kanto', 'johto', 'suicune', 'pikachu', 'badges', 
'goldenrod', 'espeon', 'chikorita', 'cyndaquil', 'totodile', 'pokemon', 'crystal'];

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var guessesRemain = 12;
var gameOver = false;
var chosenWord = randomWords[Math.floor(Math.random() * randomWords.length)];

var runGame = function() {

	if (guessesRemain == 12) {
		var newWord = new Word(chosenWord);
	}

	else {

		if (gameOver = false) {
			inquirer.prompt([
			{
				guess: "guess",
				message: "Guess a letter!"
			}
			]).then(function(answers) {

				guessesRemain = guessesRemain - 1;

				runGame();
			});
		}
		else {
			console.log("Your game is over.");
			return
		}
	}
}
};

runGame();