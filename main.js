/*
=======================================================
Notes on JavaScript basic syntax learned in JS workshop
=======================================================
*/

// variables

var variable = 1;


// assignment operators

x = y   // x = y
x += y  // x = x + y
x -= y  // x = x - y
x *= y  // x = x * y
x /= y  // x = x / y


// logical operators

===   // equal value and type
!==   // not equal value or not equal type
>=    // greater than or equal to
<=    // less than or equal to
?     // ternary -- shorthand for a conditional
  // true/false comaprison ? 'do this if true': 'do this if false'
  // ex: var canDrink = age > 21 ? 'Go drink!' : 'Sorry you're too young!'

('comparison1' && 'comparison2')  // returns true if both are true
('comparison1' || 'comparison2')  // returns true if at least one is true
!('comparison')  // returns opposite of boolean value (if comparison is false, it returns true)


// arrays

var arrayName = ['add text', 23, true];
var arrayName2 = [];


// access array items

arrayName[i]  // item in the ith position of the array


// add to array

arrayName2.push('what you want to add'); // adds to end, back of the line cant push forward
arrayName2.unshift('new addition', 'another new additon');  //adds the front, un is bad - the items are cutting everyone to get to the front


// remove from array

arrayName2.pop(); // last item pops off
arrayName2.shift(); // first item is removed and all others shift up in line


// splicing arrays

arrayName[i].splice(j,k,x);
  // where i is the array index (if you have an array inside an array),
  // j is the item index
  // k is hte number of items to remove
  // x is items to add


// rename item in an array

arrayName[i] = 'new value'  // where i is the index of the item being replaced


// if else

if (condition) {
  console.log('do this if true');
} else {
  console.log('do this if false')
}


// for loop

for (i = 0; i < 10; i++) {
  console.log(i);
}
  // i = 0 -- starting value of i
  // i < 10 -- how many times loop will run
  // i++ -- how to increment i after loop, adds 1 to i
    // i+=# -- will incrememnt by the # specified
  // use j for loop inside of a loop


// while loop

while (condition) {
  console.log('do this');
}
  // will run until condition is false, could run zero times


// do while loop

do {
  console.log('do something')
} while (condition);
  // will run at least once and continues to run until condition is false


// objects

var objectName = {
  property1: "can be text",
  property2: ['or', 'an', 'array'],
  property3: true,
  property4: {
    subProperty1: "amanda",
    subProperty2: 10,
  }
}

// access items in an object (dot notation):
console.log(objectName.property1);
console.log(objectName.property2[2]);


//  object starting with blank

var newObject = new Object();

newObject.property1 = "can add text";
newObject.property2 = [1,2,3,4];
newObject.property3 = {
  subProperty1: 'new text',
  subProperty2: 10,
  subProperty3: [2,4,6]
}

console.log(newObject);


// functions

function functionName(property) {
  return property;
}


// call a function
functionName(enterProperty);


// is NaN

function isNAN(testValue) {
  return Number.isNaN(Number(testValue));
}


// random number generator

Math.random() // generates number between 0 and 1, multiply to get whole numbers

// round down

Math.floor(number to round down);
