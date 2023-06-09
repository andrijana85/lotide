const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');

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