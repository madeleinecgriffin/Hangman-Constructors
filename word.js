var letters = require("./Letters");

var Word = function(word) {
  this.word = word;
  this.letters = [];
  this.renderWord = function() {
    //render word with _ and letters depending on what the user has guessed with the letter rendor method
    var store = '';
    for (var i=0; i < this.letters.length; i++){
      store += this.letters[i].letterRender();
    }
    return store;
  };

  this.getLetters = function() {
    //stores each letter of the word into an object with the Letter constructor
    for (var i=0; i < this.letters.length; i++) {
      var holdLets = new Letter(this.letters[i]);
      this.letters.push(holdLets);
    }
  };
};

module.exports = Word;