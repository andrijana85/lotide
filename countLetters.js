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
module.exports = countLetters;

