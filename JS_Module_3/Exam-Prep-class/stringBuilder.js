// Write a class that holds, validates and manipulates characters (strings with length 1) in an array. An instance of the class should support the following operations:
// ● Can be instantiated with a passed in string argument or without anything
// ● append(string)-convertsthepassedinstringargumenttoanarrayandaddsittotheendofthestorage
// ● prepend(string)-convertsthepassedinstringargumenttoanarrayandaddsittothebeginningofthe
// storage
// ● insertAt(string,index)-convertsthepassedinstringargumenttoanarrayandaddsitatthegiven
// index (there is no need to check if the index is in range)
// ● remove(startIndex,length)-removeselementsfromthestorage,startingatthegivenindex
// (inclusive), length number of characters (there is no need to check if the index is in range)
// ● allToUpper()–changesallcharactersintheclassinstancetouppercase
// ● allToLower()-changesallcharactersintheclassinstancetolowercase
// ● toUpper(index)–Changesacharacterataspecificindextouppercase
// ● toLower(index)-Changesacharacterataspecificindextolowercase
// ● toString()-returnsastringwithallelementsjoinedbyanemptystring
// ● All passed in arguments should be strings. If any of them are not, throws a type error with the following
// message: "Argument must be a string"


class StringBuilder {
  constructor(someInput) {
    if (typeof someInput === "string") {
    this.newString = someInput.split(""); // original array when we made the object 
    } else {
       throw "TypeError:'Argument must be string'";
    }
  }
  append(stringToAdd) {
    // Check to see if stringToAdd is a string, using typeof
    if (typeof stringToAdd === "string") {
      this.newString = this.newString.concat(stringToAdd.split(""));
    } else { 
       throw "TypeError:'Argument must be string'";
    }
  }

  prepend(stringToAdd) {
    if (typeof stringToAdd === "string") {
      this.newString = stringToAdd.split("").concat(this.newString);
    }
     else {
        throw "TypeError:'Argument must be string'";
    } 

   
  }

  insertAt(stringToAdd, index) {
     if (typeof stringToAdd === "string") {
        let tempArray = stringToAdd.split("");
        this.newString.splice(index,0, ...tempArray);
        //console.log("My new new string is ", this.newString);
     } else {
       throw "TypeError:'Argument must be string'";
     }
  }

  remove(startIndex, givenLength) {
    this.newString.splice(startIndex, givenLength);
  }

  allToUpper() {
    this.newString = this.newString.map(eachLetter => eachLetter.toUpperCase());
  }

  allToLower() {
    this.newString = this.newString.map(eachLetter => eachLetter.toLowerCase());
  }

  toUpper(index) {
    let tempLetter = this.newString[index].toUpperCase();
    this.newString.splice(index,1, tempLetter);
  }

  toLower(index) {
   let tempLetter = this.newString[index].toLowerCase();
   this.newString.splice(index,1, tempLetter);
  }

  toString() {
    return this.newString.join("");
  }
}


try { let str = new StringBuilder('hello'); 
   str.append(', there'); 
   str.prepend(28);
   console.log(str.toString()); } 
catch(e) { console.log(e) }

// let str = new StringBuilder("Hello"); 
// str.append(', there'); 
// str.prepend('User, '); 
// str.insertAt('woop',5 ); 
// console.log(str.toString()); 
// str.remove(6, 3); 
// str.allToUpper(); 
// console.log(str.toString());

// let str2 = new StringBuilder('hello'); 
// str2.append(', there'); 
// str2.prepend('User, '); 
// str2.insertAt('woop',100 ); 
// console.log(str2.toString()); 
// str2.remove(6, 3); 
// str2.allToUpper(); 
// console.log(str2.toString());