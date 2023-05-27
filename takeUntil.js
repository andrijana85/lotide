//implement a function takeUntil with two parameters: array and callback
const takeUntil = function(array, callback) {
  // function shoud return the array
  const result = [];
  // iterate over the array with for..of loop
  for (let item of array) {
    //  takeUntil function doesn't need to loop through the entire array once the callback returns a truthy value
    if (callback(item)) {
      break;
    }
    //if is false, with .push add item in the array
    result.push(item);
  }
  return result;
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
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(` ✅Assertion Passed ${array1} === ${array2}`);
  } else {
    console.log(` ❌Assertion Failed ${array1} !== ${array2}`);
  }
};
// test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
// const results2 = takeUntil(data1, x => x === 4);
// console.log(results2);
console.log(takeUntil(data1, x => x < 0));
assertArraysEqual(takeUntil(data1,x => x < 0),[ 1, 2, 5, 7 ,2 ]);
assertArraysEqual(takeUntil(data1,x => x === 5),[ 1, 2, 5, 7 ,2 ]);
assertArraysEqual(takeUntil(data1,x => x === 7),[ 1, 2, 5 ]);