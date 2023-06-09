const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
  //create the arrays with an Objects keys using Object.keys to compare the length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //if the length of arrays ia not equal return false
    return false;
  }// console.log to check for bugs
  // console.log("object has equal length");
  //loop with for..of since the keys are an array
  for (const key of Object.keys(object1)) {
    //check if they are arrays and pass them to eqArrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) { ////check if tha values are equal
      return false;
    }
  }
  return true;

};
module.exports = eqObjects;