// Input array
const array = [1, 2, 3, 4, 5];

// Target sum value
const target = 5;


/**
 * Find indices of two numbers whose sum equals target.
 *
 * Brute Force Approach:
 * - Compare every element with remaining elements.
 * - Return indices once target sum is found.
 *
 * Example:
 * array = [1,2,3,4]
 * target = 5
 *
 * Output:
 * [0,3]
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
function twoSum(array, target) {

    // Loop through each element
    for (let i = 0; i < array.length; i++) {

        /**
         * Start from i + 1
         * to avoid:
         * - comparing same element
         * - duplicate comparisons
         */
        for (let j = i + 1; j < array.length; j++) {

            // Calculate current pair sum
            const currentSum = array[i] + array[j];

            // Check whether pair matches target
            if (currentSum === target) {

                console.log(
                    `Target found using ${array[i]} and ${array[j]}`
                );

                // Return indices of matched elements
                return [i, j];
            }
        }
    }

    // Return null if no valid pair exists
    return null;
}


// Execute function fn
console.log(twoSum(array, target));

