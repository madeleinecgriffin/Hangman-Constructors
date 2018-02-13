var Letters = function(letter) {
  this.letter = letter;
  this.guessed = guessed
  this.letterRender = function() {
  	
  	if (this.letter == " ") {
  		this.guessed = true;
  		return " ";
  	}

  	if (guessed) {
  		return letter;
  	}
  	else {
  		return "_";
  	}
  };

  this.checkLetter = function(letter) {

  };
};

module.exports = Letters;