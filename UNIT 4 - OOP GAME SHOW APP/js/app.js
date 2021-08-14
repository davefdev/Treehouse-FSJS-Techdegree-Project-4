/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




const phrase = new Phrase();
const game = new Game();

/*
const logPhrase = (phrase) => {
  console.log(`Phrase - phrase: `, phrase.phrase);
}

logPhrase(game.getRandomPhrase());

*/
//set variables
const startBtn = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
let game;

//create eventlisteners for start and onscreen keyboard buttons
//step 8, add click event listener to the button
startBtn.addEventListener('click', (e) => {
  //call new instance of game object
  game = new Game();
  //call startGame function
  game.startGame();
});


keyboard.addEventListener('click', (e) => {
    game.receiveInt(e.target);
});


