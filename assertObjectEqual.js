const eqObjects = function(object1, object2) {
  //create the arrays with an Objects keys using Object.keys
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //loop with for..of since the keys are an array
  for(let key of Object.keys(object1)) {
    //check if they are arrays and pass them to eqArrays 
  if(!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
    return false;
  } else if(!eqArrays(object1[key], object2[key])) {
    return false;
    }
  }
return true;

};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
    if (eqObjects(actual, expected)) {
      console.log(` ✅Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(` ❌Assertion Failed ${actual} !== ${expected}`);
    }
  };
  const obj1 = {a: '1', b: 2 };
  const obj2 = {a: '3', b: 2 };
  const obj3 = {a: '1', b: 2 };
  assertObjectsEqual(obj1, obj2);
  assertObjectsEqual(obj1, obj3);
  assertObjectsEqual(obj1, obj1);