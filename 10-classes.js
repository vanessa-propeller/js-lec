// CLASSES
// The same person object can also be represented as a Class

class Person {
  // Get method to define properties
  get location() {
    return "Olongapo City";
  }

  // Constructor is a method which executes by default when you create object of the classes
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    console.log(`Person's full name is ${this.firstName} ${this.lastName}`);
  }
}

// However, to be able to access the properties of the Person class, you need to construct a new object from it like so:
let person = new Person();
console.log(person.location);

// Construct a new person by inserting the firstName and lastName properties
let person2 = new Person("Vanessa", "Evanculla");
console.log(person2.fullName());
