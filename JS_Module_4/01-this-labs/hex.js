class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return "0x" + this.value
  }

  plus()
}

let FF = new Hex(255); 
console.log(FF)
console.log(FF.toString()); 
// FF.valueOf() + 1 == 256; 
// let a = new Hex(10); 
// let b = new Hex(5); 
// console.log(a.plus(b).toString()); 
// console.log(a.plus(b).toString() === '0xF');



// class Hex {
//     constructor(number) {
//         this.value = number;
//     }
//     //This Function Should Return the Value Property of the Hex Class
//     valueOf() {
//         return this.value;
//     }
//     //This function will show its hexadecimal value starting with "0x"
//     toString() {
//         return '0x' + (this.value.toString(16)).toUpperCase();
//     }
//     //This function should add a number or Hex object and return a new Hex object
//     plus(number) {
//         let sum = this.value + number.value;
//         let hex = sum.toString(16).toUpperCase();
//         return `0x${hex}`;
//     }
//     //This function should subtract a number or Hex object and return a new Hex object.
//     minus(number) {
//         let sum = this.value - number.value;
//         let hex = sum.toString(16).toUpperCase();
//         return `0x${hex}`;
//     }
//     //Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers.
//     parse(string) {
//         return parseInt(string, 16);
//     }
// }