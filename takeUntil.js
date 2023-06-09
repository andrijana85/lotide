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
module.exports = takeUntil;