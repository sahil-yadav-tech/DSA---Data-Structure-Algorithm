// Two Sum
// Given an array and a target, find two numbers whose sum equals the target.
// Concept: HashMap / Object / Map
// ===============================================================================

let array = [15, 50, 88, 66, 20, 90, 18];
let target = 108;
const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j]
      }
    }
  }
};

console.log(twoSum(array, target));

