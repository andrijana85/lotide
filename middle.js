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
// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`Assertion Passed ${array1} === ${array2}`);
//   } else {
//     console.log(`Assertion Failed ${array1} !== ${array2}`);
//   }
// };
// // If array has 0-2 elements return an empty array
// // else if array has odd number of elements
// // return an array with one middle element (array at the middle index (Math.floor(array.length/2)))
// // else if array has even number of elements
// // return an array with two middle elements
const middle = function(array) {
  let n = Math.floor(array.length / 2);  // array at the middle index
  let m = array.length / 2;
 
  if (array.length <= 2) {
    console.log([]);
  } else if (array.length % 2 === 1) {
    console.log(array[n]);
  } else if (array.length % 2 === 0) {
    console.log([array[m - 1], array[m]]);

  }
};
module.exports = middle;
// middle([1, 2, 3, 4, 5, 6, 7, 8]);
// middle([1, 2, 3, 7, 8]);
// middle([1]);