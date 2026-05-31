const array = [1, 2, 3, 4, 5];

/**
 * 
 * Reverse an array in place.
 *
 * @param {any[]} arr - The array to reverse        
 * Steps:
 * 1. Validate input is an array.
 * 2. Initialize two pointers: `left` at the start and `right` at the end of the array. 
 * 3. While `left` is less than `right`, swap the elements at these pointers and move them towards the center.
 * Time Complexity: O(n) — each element is visited at most once.
 * Space
 *  Complexity: O(1) — in-place reversal uses constant extra space.
 * Professional
 *  note: This function is pure (no side-effects) and modifies the input array in place, which is a common requirement for array manipulation tasks.
 *  It does not return a new array, so it can be easily unit tested by checking the modified input array.
 * */

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('reverseArray requires an array as input');
  }
  let left = 0;
  let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left += 1;
        right -= 1;
    }

    console.log('Reversed array:', arr);
}

reverseArray(array);