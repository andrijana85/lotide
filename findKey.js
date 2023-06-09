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

module.exports = findKey;