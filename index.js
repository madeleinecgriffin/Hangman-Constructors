var inquirer = require("inquirer");
var Word = require("./Word");

var randomWords = ['kanto', 'johto', 'suicune', 'pikachu', 'badges', 
'goldenrod', 'espeon', 'chikorita', 'cyndaquil', 'totodile', 'pokemon', 'crystal'];

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var guessedLetters = [];
var guessesRemain = 12;

var startGame = function() {
	gameOver = false;
	var chosenWord = randomWords[Math.floor(Math.random() * randomWords.length)];
	console.log(chosenWord);
	var formattedWord = new Word(chosenWord);
	formattedWord.getLetters();
	console.log(formattedWord.renderWord());
}

var runGame = function() {
	
	if (guessesRemain == 12) {
		startGame();
	}

	inquirer.prompt([
	{
		name: "guess",
		message: "Guess a letter!"
	}
	]).then(function(answers) {
		
		var currentGuess = answers.guess;


		if (guessedLetters.includes(currentGuess)) {
			guessedLetters = guessedLetters;
			guessesRemain = guessesRemain;
			console.log("You have already guessed this letter! Guess again.")
		}
		else {
			guessedLetters.push(currentGuess);
			guessesRemain = guessesRemain - 1;
		}


		console.log("Guesses remaining: " + guessesRemain);
		console.log("Letters you have already guessed:");
		for (var i = 0; i < guessedLetters.length; i++) {
			console.log(guessedLetters[i]);
		}



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