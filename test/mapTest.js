const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ],[ 'g', 'c', 't', 'm', 't' ]);