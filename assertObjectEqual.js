const eqObjects = require('./eqObjects');

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
