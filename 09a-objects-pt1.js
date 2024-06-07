// OBJECTS
// Basically, an object is a collection of properties
// Kind of like the PQ options

// For example, let's create a 'person' object
// Properties are in the form of key-value pairs

let person = {
  firstName: "Vanessa", // key = firstName; value = "Vanessa" | value can be any data type

  lastName: "Evanculla",
};

// Access the properties of the person object
console.log(person.firstName); // prints "Vanessa"
console.log(person.lastName); // prints "Evanculla"

// Update/modify the firstName property
person.firstName = "Vanessa Geanne";
console.log(person.firstName);

// Add a property to the person object
person.sex = "Female";
console.log(person);
