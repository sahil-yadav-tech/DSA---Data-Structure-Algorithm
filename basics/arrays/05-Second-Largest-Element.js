const array = [1, 2, 3, 4, 5];

/**
 * Find the second largest number in a non-empty array.
 * @param {number[]} arr - Non-empty array of numbers
 * @returns {number} The second largest number in the array
 * Steps:       
 * 1. Validate input is a non-empty array.
 * 2. Initialize `largest` and `secondLargest` to the smallest possible number.
 * 3. Iterate through the array:    
 *   - If the current number is greater than `largest`, update `secondLargest` to `largest` and `largest` to the current number.
 *  - Else if the current number is greater than `secondLargest` and not equal to `largest`, update `secondLargest` to the current number.
 * Time Complexity: O(n) — one pass through the array.
 * Space Complexity: O(1) — constant extra space.
 * Professional
 *  
 * note: This function is pure (no side-effects) and returns a value so it can be easily unit tested and reused in other modules.
 * */

const secondLargest = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error('secondLargest requires an array with at least two elements');
  }

  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i += 1) {
    const value = arr[i];
    if (value > largest) {
      secondLargest = largest;
      largest = value;
    } else if (value > secondLargest && value !== largest) {
      secondLargest = value;
    }
  }

  if (secondLargest === Number.NEGATIVE_INFINITY) {
    throw new Error('Array must contain at least two distinct numbers');
  }

  return secondLargest;
};

console.log('Original array:', array);
console.log('Second largest number:', secondLargest(array));