const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
// const eqArrays = function(array1, array2) {
 
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


const eqObjects = function(object1, object2) {
  //create the arrays with an Objects keys using Object.keys to compare the length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //if the length of arrays ia not equal return false
    return false;
  }// console.log to check for bugs
  // console.log("object has equal length");
  //loop with for..of since the keys are an array
  for (const key of Object.keys(object1)) {
    //check if they are arrays and pass them to eqArrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) { ////check if tha values are equal
      return false;
    }
  }
  return true;

};
module.exports = eqObjects;
//test

const shirtObject = { color: "red", size: "medium" };

const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);