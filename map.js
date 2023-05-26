const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  // console.log('array: ', array );
  // console.log('callback ', callback);
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(` ✅Assertion Passed ${array1} === ${array2}`);
  } else {
    console.log(` ❌Assertion Failed ${array1} !== ${array2}`);
  }
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

const results1 = map(words, word => word[0]);
console.log(results1);

//compare the results from map with expected array results
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ],[ 'g', 'c', 't', 'm', 't' ]);