const arrayValue = [41, 25, 63, 56, 45, 100, 10, 500];

const maxDifference = (array) => {
  let maxDifferenceIs = -Infinity;
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let difference = array[i] - array[j];
      if (difference > maxDifferenceIs) {
        maxDifferenceIs = difference;
      }
    }
  }
  
  return maxDifferenceIs;  // ✅ Return the calculated value
};

console.log("The maxDifference of array is ", maxDifference(arrayValue));
// Output: 490 (500 - 10)

