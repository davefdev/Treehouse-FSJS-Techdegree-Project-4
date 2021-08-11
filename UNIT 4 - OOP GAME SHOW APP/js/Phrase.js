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
    //method to generate 
    addPhraseToDisplay() {
      //access the phrase Ul element to hold the li's
      const phraseUl = document.querySelector('#phrase ul');
      //get how many letters are required
      const phraseLetters = this.phrase.length;
      
      //loop through letters and generate correct li elements to display
      for (let i = 0; i < phraseLetters; i++) {
        let letterLi = document.createElement('#phrase ul li')
        letterLi.setAttribute()



      }
    

      




    }
  }
  
  const poly1 = new Polygon();
  
  console.log(poly1.name);
  // expected output: "Polygon"
  
  