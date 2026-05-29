const array = [1, 0, 2, 3, 0, 4, 5, 0];

/**
 * Move all zeros in an array to the end while preserving the order of non-zero values.
 *
 * Steps:
 * 1. Traverse the input array.
 * 2. Add every non-zero element to a new result array.
 * 3. Count how many zeros are found.
 * 4. Append the counted zeros to the end of the result array.
 *
 * This approach preserves relative order and keeps all zeros at the end.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function moveZeroes(arr) {
  console.log("Original array:", arr);

  const result = [];
  let zeroCount = 0;

  // Step 1: Collect non-zero values and count zeros
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) {
      zeroCount += 1;
    } else {
      result.push(arr[i]);
    }
  }

  console.log("Non-zero elements after traversal:", result);
  console.log("Number of zeros found:", zeroCount);

  // Step 2: Append zeros to the end of the result array
  for (let i = 0; i < zeroCount; i += 1) {
    result.push(0);
  }

  console.log("Final array after moving zeros to the end:", result);
  return result;
}

moveZeroes(array);
