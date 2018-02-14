# Hangman-Constructors

This is a hangman game made with constructors and recursion in Javascript. It is run through Node.js.

To play the game, run "node index.js". The game will being and prompt you to continue to guess letters for a randomly generated word. Follow the prompts to play the game and see if you can successfully guess the word!

The index file stores the game data as well as the inquirer prompt that asks the user to guess a letter. The file keeps asking the user to guess a letter through recursion.

The word.js file stores a constructor that makes and object for the randomly generated word for the game. It stores
1) the randomly generated word,
2) an array of objects for each letter of the word generated by the Letters constructor,
3) a method that iterates through every letter object and prints an underscore or the letter to display to the user depending on if the letter has been guessed correctly or not, and 
4) a method that passes the user guess from the Word object through the object of each individual Letter and updates the letter's status if it has been guessed.

The letter.js file stores a constructor for making objects for every letter of the randomly generated word. It stores 
1) the letter itself, 
2) a boolean value stating if the letter has been guessed correctly by the user, 
3) a method for returning the letter or an underscore to print to the user depending on whether or not the booelean value is true or not, and 
4) a method for updating the boolean value from false to true if the user guesses the letter.