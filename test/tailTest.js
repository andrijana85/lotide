// const tail = require('../tail');
// const assertEqual = require('../assertEqual');



// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// assertEqual(words.length, 3);
// const words1 = ["Yo Yo"];
// console.log(tail(words1));
// const words2 = [];
// console.log(tail(words2));
const assert = require('chai').assert;
const tail = require('../tail');
describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

});