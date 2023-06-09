const assertEqual = require('./assertEqual');

// function findKey which takes in an object and a callback
const findKey = function(objects, callback) {
  //loop over the object with for...in
  for (let key in objects) {
    if (callback(objects[key])) {
      return key;
    }
  }
};

const keyExample1 = {
  name: 'Andrijana',
  lastName: 'Zivkovic',
  cohort: 'May',
  isInstructor: false
};
//compass example
const keyExample = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

console.log(findKey(keyExample, x => x.stars === 2));
module.exports = findKey;
//test
assertEqual(findKey(keyExample, x => x.stars === 3), 'Akaleri');
assertEqual(findKey(keyExample1, x => x.length === 9), 'name');
assertEqual(findKey(keyExample1, x => x.length === 3), 'name');
assertEqual(findKey(keyExample1, x => x.length === 3), 'cohort');