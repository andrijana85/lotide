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
const eqArrays = function(array1, array2) {
 
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(` ✅Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(` ❌Assertion Failed ${actual} !== ${expected}`);
  }
};
module.exports = assertObjectEqual;
const obj1 = {a: '1', b: 2 };
const obj2 = {a: '3', b: 2 };
const obj3 = {a: '1', b: 2 };
assertObjectEqual(obj1, obj2);
assertObjectEqual(obj1, obj3);
assertObjectEqual(obj1, obj1);