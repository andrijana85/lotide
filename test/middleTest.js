// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
// middle([1, 2, 3, 4, 5, 6, 7, 8]);
// middle([1, 2, 3, 7, 8]);
// middle([1]);
const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });

  it("returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4,5]);
  });
  it("returns [] for [1,]", () => {
    assert.deepEqual(middle([1]), []);
  });
});