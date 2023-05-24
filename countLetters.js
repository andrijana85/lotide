const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
// declare an empty object obj to store the count of each letter.
// Create a function called countLetters
// The function uses for...of loop to iterate over each character letter in the string.
// inside the for loop is If..else to check if the letter is ' '.
// check if the property exists ( +1) or not (set to 0)
//retun the obj

const countLetters = function(string) {
  const obj = {};
  for (const letter of string) {
   
    if (letter !== ' ') {
      if (obj[letter]) {
        obj[letter] = obj[letter] + 1;
      } else {
        obj[letter] = 1;
      }
    }
  }
  return obj;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("My name is Andrijana"));
