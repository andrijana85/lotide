const assertEqual = require('../assertEqual');
const findKey = require('../findKey');


const keyExample1 = {
  name: 'Andrijana',
  lastName: 'Zivkovic',
  cohort: 'May',
  isInstructor: false
};
const keyExample = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

console.log(findKey(keyExample, x => x.stars === 2));

assertEqual(findKey(keyExample, x => x.stars === 3), 'Akaleri');
assertEqual(findKey(keyExample1, x => x.length === 9), 'name');
assertEqual(findKey(keyExample1, x => x.length === 3), 'name');
assertEqual(findKey(keyExample1, x => x.length === 3), 'cohort');