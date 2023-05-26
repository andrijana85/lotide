const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  // use a for...of loop to iterate over each key in the array.(Object.keys suggested from the Compass)
  //if the key is same as a value return key, otherwise return undefined
  //got the help from mentor for Obect.key
  for( let key of Object.keys(object)) { 
    if (object[key] === value) {
      return key;
  }
  // for( let key in object) {
  //   if (object[key] === value) {
  //     return key;
  // }
}
return undefined;

}
// test
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const bestTvSeries = {
  old: "Desperates Housewifes",
  new: "Lost"
}
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTvSeries, "Lost"), "drama");
assertEqual(findKeyByValue(bestTvSeries, "Lost"), "new");