function main() {
 return (function() {
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
            SPADES: '♠',
            HEARTS: '♥',
            DIAMONDS: '♦',
            CLUBS: '♣'
        }
    console.log("This one " ,Object.values(Suits));
    
    class Card {
      constructor(face, suit) {
        // Check to see if face is valid
        if (validFaces.includes(face)) {
          this._face = face;
        } else {
          console.log("Error");
        } if (Object.values(Suits).includes(suit)) {
          this._suit = suit;
        } else {
          console.log("Error");
        }
      }
      // getter for face
      get face() {
        return this._face;
      }
      // setter for face
      set face(newFace) {
        if(validFaces.includes(newFace)) {
          this._face = newFace;
        } else {
          console.log("Error");
        }
      }

      // getter for suits
      get suits() {
        return this._suits;
      }
      // setter
      set suits(newSuit) {
        if (Object.values(Suits).includes(newSuit)) {
          this._suit = newSuit
        } else {
          console.log('Error');
        }
      }
    }
    
    return {
      Suits: Suits,
      Card: Card
    }
   
 }()) 
}



let result = main(); 
let Card = result.Card; 
let Suits = result.Suits; 
console.log("Card is the object factory", result.Card);
console.log("The suits ", result.Suits);
let card = new Card('Q', Suits.CLUBS); 
console.log(card); 
card.face = 'A'; // Prevents invalid card type with the setter
console.log(card); 
card.suits = Suits.DIAMONDS; // Hello Setter ! 
console.log(card); 
let card2 = new Card("1", Suits.DIAMONDS);
console.log(card._face);
card._face = "Bee"; // Can change to invalid card type
console.log(card._face);


// Card { _face: 'Q', _suits: '♣' }
// Card { _face: 'A', _suits: '♣' }
// Card { _face: 'A', _suits: '♦' }
// Error