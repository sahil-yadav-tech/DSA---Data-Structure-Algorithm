// Find First Unique Element

const numbers = [4, 5, 6, 5, 4, 3, 2];

let firstUniqueElement = null;

// Traverse each element
for (let i = 0; i < numbers.length; i++) {
    let count = 0;

    // Count occurrences of current element
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            count++;
        }
    }

    // If element appears only once,
    // it is the first unique element
    if (count === 1) {
        firstUniqueElement = numbers[i];
        break;
    }
}

console.log("First Unique Element:", firstUniqueElement);

/*
Output:
First Unique Element: 6
*/

// Time Complexity: O(n²)
// Space Complexity: O(1)