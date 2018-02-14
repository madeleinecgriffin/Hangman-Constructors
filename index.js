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
var newWord;

var startGame = function() {
	console.log("*********************************************\n");
	console.log("You are now playing hangman! Guess one letter at a time to fill in the blanks below and guess the word.");
	console.log("The theme is: POKEMON\n");
	gameOver = false;
	var chosenWord = randomWords[Math.floor(Math.random() * randomWords.length)];
	newWord = new Word(chosenWord);
	newWord.getLetters();
	var formattedWord = newWord.word;
}

var checkGuess = function(currentGuess, newWord) {

	currentGuess = currentGuess.toString();

	if (guessedLetters.includes(currentGuess)) {
		guessedLetters = guessedLetters;
		guessesRemain = guessesRemain;
		console.log("You have already guessed this letter! Guess again.")
	}
	else {
		guessedLetters.push(currentGuess);
		guessesRemain = guessesRemain - 1;
		newWord.checkWord(currentGuess);
	}

	console.log("*********************************************");
	console.log("Guesses remaining: " + guessesRemain);
	console.log("Letters you have already guessed:");
	console.log(guessedLetters);

	newWord.getLetters();
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

		checkGuess(currentGuess, newWord);

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