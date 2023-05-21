const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed ${array1} !== ${array2}`);
  }
};
const without = function(source, itemsToRemove) {
  const result = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  console.log(result);

};
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);