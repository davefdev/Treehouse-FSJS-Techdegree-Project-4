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
                      new Phrase("Say good bye"),
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
  }
  
  const poly1 = new Polygon();
  
  console.log(poly1.name);
  // expected output: "Polygon"