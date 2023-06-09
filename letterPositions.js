const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        // results[sentence[i]] = [...results[sentence[i]], i]
        let currentContent = results[sentence[i]];
        currentContent.push(i);
        results[sentence[i]] = currentContent;
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;