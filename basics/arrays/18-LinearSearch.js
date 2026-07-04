function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
}

// Example usage
const numbers = [10, 23, 45, 70, 11, 15];
const target = 70;
const result = linearSearch(numbers, target);
console.log(result); // Output: 3