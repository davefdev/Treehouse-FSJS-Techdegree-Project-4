/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
      //set initial miss value to 0  (no guesses)
      this.missed = 0;
      //create phrase object
      this.phrases = [
                      new Phrase("I never can "),
                      new Phrase("Say goodbye"),
                      new Phrase("Oh no no no I"),
                      new Phrase("Never can say good bye"),
                      new Phrase("Even though the pain and heart ache seems to follow me whereever I go")
                    ];  

      //make activePhrase null
      this.activePhrase = null;
    }

    //method to generate random phrase
    getRandomPhrase() {
      //random number * phrase arrays length creates a random phrase every time called
      this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    //Step 7
    //method to make the startGame function and remove the overlay to display it
    startGame() {
      //access the overlay id element
      const screenOverlay = document.querySelector('#overlay');
      //make it hidden (to display the game)
      screenOverlay = style.visibility = 'hidden';
      //call getrandomphrase method to generate random phrase from the array
      const randomPhrase = this.getRandomPhrase();
      //adds to gameboard by calling method from the Phrase file
      randomPhrase.addPhraseToDisplay();
      //store the selected phrase in the activePhrase prop
      this.activePhrase = randomPhrase;
     
      //randomPhrase.matched = [];

    }

    //step 9
    //add user interaction in handleInteraction method
    handleInteraction() {
  
    }

    //method to check if player has revealed all letters, should return true boolean
    checkForWin() {

    }

    //method to remove a life off the scoreboard and provide conditional for 5 missed guesses
    removeLife() {

    }
  
    //method to check whether game is won or lost, takes in a boolean parameter
    gameOver(gameWon) {

    }





  }
  /**

  }
  
  const game1 = new Game();
  
  console.log(game1.name);
  // expected output: "Polygon"