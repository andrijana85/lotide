const flatten = function(nestedArrays) {
  let newArray = [];
  for (let i = 0; i < nestedArrays.length; i++) {
    newArray.push(nestedArrays[i]);
    if (Array.isArray(nestedArrays)) {
      for (let j = 0; j < nestedArrays[j].length; j++) {
        console.log(i);
      }
    }
  }
  console.log(newArray);
};
module.exports = flatten;
