/**
 * objects(hash tabels):- In JavaScript, an object is a collection of key-value pairs. 
 * This data structure is also called map, dictionary or hash-table in other programming languages
 * 
 * Objects can store both values and functions. When talking about objects, 
 * values are called properties, and functions are called methods.
 */


// example 1 
const obj = {
    prop1: 'hello',
    prop2: function () {
        console.log("I'm a property dude!");
    }
}
console.log(obj); // output :- { prop1: 'hello', prop2: [Function: prop2] }
console.log(obj.prop1); // output :- hello
console.log(obj['prop1']); // output :- hello
console.log(obj.prop2); // output :- [Function: prop2]
obj.prop2(); // output :- I'm a property dude!


// example 2 :- The syntax to assign new values is quite similar:
obj.prop4 = 125;
obj['prop5'] = "The new prop on the block"
obj.prop6 = () => console.log("yet another example")

console.log(obj.prop4) // 125
console.log(obj["prop5"]) // "The new prop on the block"
obj.prop6() // "yet another example"


// example 3 
// Define an object representing a person
let person = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345"
    }
  };
  
  // Display the person's information
  console.log("Name: " + person.name);
  console.log("Age: " + person.age);
  console.log("Email: " + person.email);
  console.log("Address: " + person.address.street + ", " + person.address.city + ", " + person.address.state + " " + person.address.zipCode);
  
  // Update the person's age
  person.age = 35;
  
  // Add a new property to the person object
  person.occupation = "Engineer";
  
  // Display the updated information
  console.log("Updated Age: " + person.age);
  console.log("Occupation: " + person.occupation);
  