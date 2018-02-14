var Letters = function(letter) {
  this.letter = letter;
  this.guessed = false;

  this.letterRender = function() {

  	//render either the letter or _ depending on if the guess is correct
  	if (this.letter == " ") {
  		this.guessed = true;
  		return " ";
  	}

  	if (this.guessed) {
  		return " " + this.letter + " ";
  	}
  	else {
  		return " _ ";
  	}
  };

  this.checkLetter = function(currentGuess) {

  	//if the current guess equals this letter in the stored word array, then updated the guessed value to true
  	if (this.letter == currentGuess) {
  		this.guessed = true;
  	}

  	console.log("Your guess " + currentGuess + " is " + this.guessed);
  };
};

module.exports = Letters;