var Letters = require("./Letters");

var Word = function(word) {
  this.word = word;
  this.objLetters = [];
  this.checkWord = function(currentGuess) {

    //checks if letters are guessed correctly by referring to letters array
    for (var i=0; i < this.objLetters.length; i++) {
      this.objLetters[i].checkLetter(currentGuess);
    }

  };

  this.getLetters = function() {
    //render word with _ and letters depending on what the user has guessed with the letter rendor method

    //this creates an array displaying either the letter if guessed correctly or an underscore
    //this also stores the letters array and object array of all the letter constructors if they do not exist already
    if (this.objLetters.length < 1) {
      var store = '';
      var objStore = [];
      for (var i=0; i < this.word.length; i++) {
        var hold = new Letters(this.word.charAt(i));
        store += hold.letterRender();
        objStore.push(hold);
      }
      this.objLetters = objStore;
    }

    //this is the same as above, only it uses existing letters and object arrays
    else {
      var store = '';
      for (var i=0; i < this.objLetters.length; i++) {
        store += this.objLetters[i].letterRender();
      }
    }

    //logs the current underscore + correct letter guessed combination
    console.log("*********************************************\n");
    console.log("Below is the status of your current word. Keep guessing to fill in the blanks!\n");
    console.log(store);
    console.log("\n*********************************************");
    return store;

  };
};

module.exports = Word;