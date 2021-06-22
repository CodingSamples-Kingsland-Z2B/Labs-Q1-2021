class Person {

  // OBJECT MAKER 

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // FUNCTIONS AND FEATURES OF MY OBJECTS FROM THE FACTORY 

  get fullName() {
    return this.firstName + " " + this.lastName
  }
  set fullName(name) {
    //let nameArray = name.split(" ")  // nameArray = [ "John", "Smith"]
    let [first, last] = name.split(" "); // must have "john doe" to be valid
    //if (typeof first === "string" && typeof last === "string") { // if no last name? not valid by default, must have both
    if (first && last ) {
      this.firstName = first,
      this.lastName = last  
    } else {
      return;
    }
  }
}

// let person = new Person("Albert", "Simpson"); 
// console.log(person.fullName); 
// person.firstName = "Simon"; 
// console.log(person.fullName); 
// person.fullName = "Peter"; 
// console.log(person.firstName); 
// console.log(person.lastName);

let person = new Person("Peter", "Ivanov"); 
console.log(person.fullName);//Peter Ivanov 
person.firstName = "George"; 
console.log(person.fullName);//George Ivanov 
person.lastName = "Peterson"; 
console.log(person.fullName);//George Peterson 
person.fullName = "Nikola"; 
console.log(person.firstName)//Nikola 
console.log(person.lastName)//Tesla