/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//create the Phrase class
class Phrase {
  //recieves a phrase parameter
  constructor(phrase) {
    //make the phrase property to lower case
    this.phrase = phrase.toLowerCase();
  }

  //STEP 6
  //method to generate letter placeholders when the game starts
  addPhraseToDisplay() {
    //access the phrase Ul element to hold the li's
    const phraseUl = document.querySelector('#phrase ul');
    //get how many letters are required
    const phraseNumber = this.phrase.length;
    
    //loop through letters and generate correct placeholder li elements to display
    for (let i = 0; i < phraseNumber; i++) {
      //get the letters to be generated
      let phraseLi = document.createElement('#phrase ul li');
      //set the newly created li element's text content to the current placeholder 
      phraseLi.textContent = this.phrase[i];
      //conditional to check if empty string
      if (phraseLi.textContent == '') {
        //then set its class to space
        phraseLi.setAttribute('class','space');
      } else {
        //if not set it to 
        phraseLi.setAttribute('class', 'hide letter ' + this.phrase[i]);
      }
      //send the placeholder li to the Ul 
      phraseUl.appendChild(phraseLi);
    }
    
  }
   
  //checks if letter is contained in phrase array, takes in a letter
  checkLetter(letter) {
    //includes method to check if the letter is in, true or false.
    return this.phrase.includes(letter);
  }

 
  //show the matched letters on board 
  showMatchedLetter(letter) {
     

  }



  }
  
  const poly1 = new Polygon();
  
  console.log(poly1.name);
  // expected output: "Polygon"
  
  