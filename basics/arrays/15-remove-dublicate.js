// Problem: Remove duplicate values from an array
// and store duplicate values separately.

// Input Array
const numbers = [1, 2, 3, 4, 4, 3, 8, 7, 6, 8, 15, 5, 8, 15];

// Stores only unique values
const uniqueNumbers = [];

// Stores duplicate values
const duplicateNumbers = [];

// Iterate through each element of the array
for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    // Check if the current number already exists
    // in the uniqueNumbers array
    if (!uniqueNumbers.includes(currentNumber)) {
        // First occurrence → add to uniqueNumbers
        uniqueNumbers.push(currentNumber);
    } else {
        // Duplicate occurrence → add to duplicateNumbers
        duplicateNumbers.push(currentNumber);
    }
}

// Print unique values
console.log("Unique Numbers:", uniqueNumbers);

// Print duplicate values
console.log("Duplicate Numbers:", duplicateNumbers);

/*
Output:

Unique Numbers:
[1, 2, 3, 4, 8, 7, 6, 15, 5]

Duplicate Numbers:
[4, 3, 8, 8, 15]
*/

// Time Complexity: O(n²)
// Reason: includes() internally performs a linear search.
// Space Complexity: O(n)
// Reason: Additional arrays are used to store unique and duplicate values.