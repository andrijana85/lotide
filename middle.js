const middle = function(array) {
  let n = Math.floor(array.length / 2);  // array at the middle index
  let m = array.length / 2;
 
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return array[n];
  } else if (array.length % 2 === 0) {
    return [array[m - 1], array[m]];

  }
};
module.exports = middle;
