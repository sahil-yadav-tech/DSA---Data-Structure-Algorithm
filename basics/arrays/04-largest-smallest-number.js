const array = [1, 0, 2, 3, 0, 4, 5, 0, 8];

/**
 * Find the largest number in a non-empty array.
 *
 * @param {number[]} arr - Non-empty array of numbers
 * @returns {number} The largest number in the array
 *
 * Steps:
 * 1. Validate input is a non-empty array.
 * 2. Initialize `maxValue` to the first element.
 * 3. Iterate remaining elements and update `maxValue` when a larger
 *    value is encountered.
 *
 * Time Complexity: O(n) — one pass through the array.
 * Space Complexity: O(1) — constant extra space.
 *
 * Professional note: This function is pure (no side-effects) and returns
 * a value so it can be easily unit tested and reused in other modules.
 */
function largestNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('largestNumber requires a non-empty array');
  }

  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}

/**
 * Find the smallest number in a non-empty array.
 *
 * @param {number[]} arr - Non-empty array of numbers
 * @returns {number} The smallest number in the array
 *
 * Steps:
 * 1. Validate input.
 * 2. Initialize `minValue` to the first element.
 * 3. Iterate and update `minValue` when a smaller value is found.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function smallestNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('smallestNumber requires a non-empty array');
  }

  let minValue = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }

  return minValue;
}

// Runner: log original array and results
console.log('Original array:', array);
console.log('Largest number:', largestNumber(array));
console.log('Smallest number:', smallestNumber(array));

