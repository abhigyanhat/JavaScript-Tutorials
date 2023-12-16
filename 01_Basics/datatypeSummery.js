//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

//const myFunction = function(){
  //  console.log("Hello world");


//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Practise

let stringNumber = "45782"  // Output: String
let someNumber = 57866  // Output: Number
const accountCreated = false;  // Output: Boolen
const tampNumber = null;  // Output: Object
let notexistNumber;  // Output: Undefined
const SmileSymoble = Symbol('547') // Output: Symbol
const value = 7845796547n  // Output: BigInt

console.log(typeof stringNumber);
console.log(typeof someNumber);
console.log(typeof accountCreated)
console.log(typeof tampNumber)
console.log(typeof notexistNumber)
console.log(typeof SmileSymoble)
console.log(typeof value)

