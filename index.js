//initialize requirements
var inquirer = require("inquirer");
var Word = require("./Word");


//initialize variables
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

//function for starting the game
var startGame = function() {
	console.log("*********************************************\n");
	console.log("You are now playing hangman! Guess one letter at a time to fill in the blanks below and guess the word.");
	console.log("The theme is: POKEMON\n");

	//sets gameover to false
	gameOver = false;

	//chooses random word from list
	var chosenWord = randomWords[Math.floor(Math.random() * randomWords.length)];

	//creates a new word object using the constructor for the word.js file
	newWord = new Word(chosenWord);

	//displays blank word since no guesses made yes
	newWord.getLetters();
}


//function checks if user guesses correctly every time they enter a letter
var checkGuess = function(currentGuess, newWord) {

	//converts node guess to string
	currentGuess = currentGuess.toString();

	//does nothing if guess was already guessed and prompts user to try again
	if (guessedLetters.includes(currentGuess)) {
		guessedLetters = guessedLetters;
		guessesRemain = guessesRemain;
		console.log("*********************************************\n");
		console.log("You have already guessed this letter! Guess again.\n")
	}

	//if guess is new, run functions
	else {
		guessedLetters.push(currentGuess);
		guessesRemain = guessesRemain - 1;
		newWord.checkWord(currentGuess);
	}

	//display game status to the players
	console.log("*********************************************\n");
	console.log("Guesses remaining: " + guessesRemain);
	console.log("\nLetters you have already guessed:\n");
	console.log(guessedLetters + "\n");
	var currentState = newWord.getLetters();
	
	//if there are no more underscores, the user has won the game so end the game
	if (currentState.includes("_")) {

	}

	else {
		console.log("Congrats! You guessed all the letters in the word correctly. The word was " + newWord.word + ".");
		console.log("*********************************************");
		guessesRemain = 0;
		return;
	}
}

//recursion function that runs the game until complete
var runGame = function() {
	
	//sets the game to start when guesses = 12
	if (guessesRemain == 12) {
		startGame();
	}

	if (guessesRemain > 0) {

	//prompts user to guess a letter
	inquirer.prompt([
	{
		name: "guess",
		message: "Guess a letter!"
	}
	]).then(function(answers) {
		
		//stores user guess
		var currentGuess = answers.guess;

		if (alphabet.includes(currentGuess)) {
			checkGuess(currentGuess, newWord);
		}

		//runs check guess function
		else {
			console.log("*********************************************\n");
			console.log("Please only enter letters as guesses. Other characters will not be accepted.");
			console.log("Please enter only one letter as a guess at a time when prompted.");
			console.log("\n*********************************************");
		}

		//ends game if user is out of guesses
		if (guessesRemain == 0) {
			gameOver = true;
			console.log("Your game is over. Run the file to play again.");
			console.log("*********************************************\n");
			return;
		}

		else {
			//continues running game if guesses remain
			runGame();
		}

	});
}
}

runGame();