const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  for (const item of allItems) { // loop over all the items in the array
    console.log(item);
    if (itemsToCount[item]) {  // increment our count in results if the item is found in the itemsToCount object.
      if (results[item]) { // Increment the count of each item into results as we encounter each string item in the array.
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;
