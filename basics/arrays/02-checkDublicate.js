const array = [1, 2, 3, 4, 5, 1];

/**
 * Check for duplicates in an array.
 *
 * Brute Force Approach:    
 * - Compare each element with every other element.
 * - If a match is found, a duplicate exists.
 * Example:
 * array = [1,2,3,4,5,1]
 * Output:
 * "Duplicate found: 1"
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */     
function checkDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log("Duplicate found: " + arr[i]);
        return;
      }
    }
  }
  console.log("No duplicates found.");
}

checkDuplicate(array);
