const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const bestTvSeries = {
  old: "Desperates Housewifes",
  new: "Lost"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTvSeries, "Lost"), "drama");
assertEqual(findKeyByValue(bestTvSeries, "Lost"), "new");