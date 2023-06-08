
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed ${array1} !== ${array2}`);
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

const flatten = function(nestedArrays) {
  let newArray = [];
  for (let i = 0; i < nestedArrays.length; i++) {
    newArray.push(nestedArrays[i]);
    if (Array.isArray(nestedArrays)) {
      for (let j = 0; j < nestedArrays[j].length; j++) {
        console.log(i);
      }
    }
  }
  console.log(newArray);
};

flatten([1, 2, [3,4], 5, [6]]);
flatten([1, 2, 5, [6]]);