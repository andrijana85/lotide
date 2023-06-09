const findKeyByValue = function(object, value) {
  // use a for...of loop to iterate over each key in the array.(Object.keys suggested from the Compass)
  //if the key is same as a value return key, otherwise return undefined
  //got the help from mentor for Obect.key
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;

};
module.exports = findKeyByValue;
