var letters = require("./Letters");

var Word = function(word) {
  this.word = word;
  this.letters = [];
  this.renderWord = function() {
    var store = '';
    for (var i=0; i < this.letters.length; i++){
      store += this.letters[i].letterRender();
    }
    return store;
  };

  this.getLetters = function() {
    for (var i=0; i < this.letters.length; i++) {
      var holdLets = new Letter(this.letters[i]);
      this.letters.push(holdLets);
    }
  };
};

module.exports = Word;