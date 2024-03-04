// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Heather';
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Haymond';
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
//     (remember, you already have variables for this, can you use those?)
//     Console log the value of `fullName`
let fullName = 'Heather Haymond';
console.log(fullName)
// 4 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
//     Console log the value of `luckyNumber`
let luckyNumber = 11;
// 5 - Create a variable `introduction` and using the variables from above,
//     give it the value of:
//     'My name is (full name), and I think (lucky number) is a winner!'.
//     Refer back to the videos if you need help with this one.
//     Console log the value of `introduction`
let introduction = "My name is " + fullName + ", and I think " + luckyNumber + " is a winner!";
console.log(introduction)// My name is Heather Haymond, and I think 11 is a winner!
// 6 - Create a variable named `adventurous` and set it to a boolean value (true or false)
//     Console log the value of `adventurous`
let adventurous = true
console.log(adventurous) // true
// 7 - Create a variable named `food`, and set its value to a string of your favorite food
//     Console log the value of `food`
let food = 'fruit'
console.log(food)
// 8 - Create a variable called `pets` and set it to the value of the number of pets you have
//     Console log the value of `pets`
let pets = 1
console.log(pets) // 1
// 9 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 0
// 10 - Add two pets to your `pets` variable
friendsPets += 2;
// 11 - Create a constant variable called `allowedPets` and set it to a number value of your choice
let allowedPets = 4
// 12 - Create a variable called `result`. Create a conditional:
//      if adventurous is true, set `result` to be "Adventures are great!", 
//      if it's not true,  set `result` to be "How about we stay home?"
//      Console log the value of `result`
let result;  // declare variable without assigned value
if (adventurous) {  
  result = "Adventures are great!";
} else {
  result = "How about we stay home?";
} // conditional if else statement sets value of variable
console.log(result); //check expected result - "Adventures are great!"
// 13 - Create a variable called `diceRoll` and set it to the value of "Try again later.".
//      Create a compound conditional: 
//      if luckyNumber is 2 and adventurous is true,
//      set `diceRoll` to be "Roll the dice!"
//      Console log the value of `diceRoll`

let diceRoll = "Try again later." //default value set to variable 
if (luckyNumber === 2 && adventurous) {
  diceRoll = "Roll the dice!"; 
}//updates value of diceRoll
console.log(diceRoll); //checks for expected result - "Try again later."

// 14 - Create a variable called `petStatus`. 
//      Write a conditional that covers the following:
//      if the value of `pets` is less than the value of `allowedPets`,
//      set `petStatus` to the value of "I can have more pets" 
//      if the value of `pets` is equal to the value of `allowedPets`,
//      set `petStatus` to the value of "I have enough pets" 
//      if the value of `pets` is greater than the value of `allowedPets`.
//      set `petStatus` to the value of "Oh no, I have too many pets!"

let petStatus; // decalre variable without assigned value
if (pets < allowedPets){ //statement assigns value
  petStatus = "I can have more pets";
} else if (pets === allowedPets){
  petStatus = "I have enough pets";
} else if (pets < allowedPets){ //else statements do not take conditions *reminder*
  petStatus = "Oh no, I have too many pets!";
} //condition sets value to petStatus
console.log(petStatus); //expected result check - "I can have more pets"
 // STRETCH GOALS:

// 15 - Make a variable called `mostPets` and a conditional that
//      correctly checks the `pets` and `friendsPets` variables, and
//      assigns the highest value to `mostPets`. There's several possibilities --
//      be sure to think through all the scenarios. 
//      console.log `mostPets` after the conditional has run.
let mostPets; // set variable
if (pets > friendsPets) { 
  mostPets = pets;
} else { //does not need addicional condition comparison because there are only two options. if the first option is false, than the alernative boolian value is true by default
  mostPets = friendsPets; 
} // conditions sets value of mostPets 
console.log(mostPets);// checks expected outcome - 2


// 16 - Make a variable called `luckyResult`
//      Write a *switch* statement that sets `luckyResult` to:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!
//      console.log `luckyResult` after the conditional has run.
let luckyResult; // set variable without value 
switch (luckyNumber){ //great option for many or multiple conditions.
  case 1: //alrenative to if statement
    luckyResult = "First is the worst";
    break; //seperates each case
    case 2: //alrenative to else if statement
      luckyResult = "Second is the best";
      break;//seperates each case
  case 3:  //alrenative to else if statement
      luckyResult = "Third is the one with the polka dot dress";
      break; //seperates each case
  default: //alrenative to else statement
      luckyResult = "Luck is what happens when preparation meets opportunity";
} // value is assigned to the variable "luckyResult" after running through the conditions
console.log(luckyResult); // checks expercted results -"Luck is what happens when preparation meets opportunity";

// 17 -- Rewrite question 12 with a `ternary` operator. You'll need to do research!
  result = adventurous ? "Adventures are great!" : "How about we stay home?"; // Great option for boolean values conditionals. 

console.log(result); // checks expercted outcome - "Adventures are great!"










// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    firstName: typeof firstName !== 'undefined' ? firstName : undefined,
    lastName: typeof lastName !== 'undefined' ? lastName : undefined,
    fullName: typeof fullName !== 'undefined' ? fullName : undefined,
    luckyNumber: typeof luckyNumber !== 'undefined' ? luckyNumber : undefined,
    introduction: typeof introduction !== 'undefined' ? introduction : undefined,
    adventurous: typeof adventurous !== 'undefined' ? adventurous : undefined,
    food: typeof food !== 'undefined' ? food : undefined,
    pets: typeof pets !== 'undefined' ? pets : undefined,
    friendsPets: typeof friendsPets !== 'undefined' ? friendsPets : undefined,
    allowedPets: typeof allowedPets !== 'undefined' ? allowedPets : undefined,
    result: typeof result !== 'undefined' ? result : undefined,
    diceRoll: typeof diceRoll !== 'undefined' ? diceRoll : undefined,
    petStatus: typeof petStatus !== 'undefined' ? petStatus : undefined,
    mostPets: typeof mostPets !== 'undefined' ? mostPets : undefined,
    luckyResult: typeof luckyResult !== 'undefined' ? luckyResult : undefined,
  };
} catch (e) {
  // Do nothing
}