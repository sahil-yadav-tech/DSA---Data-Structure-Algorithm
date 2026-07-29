// Starting array
const array = [45, 55, 25, 10, 98, 87, 10];

// Repeat the process (array length - 1) times
for (let i = 0; i < array.length - 1; i++) {
  
  // Check each pair of numbers (skip already sorted ones at the end)
  for (let j = 0; j < array.length - 1 - i; j++) {
    
    console.log(`Comparing: ${array[j]} and ${array[j + 1]}`);
    
    // If left number is bigger than right number, swap them
    if (array[j] > array[j + 1]) {
      let temp = array[j];        // Save left number
      array[j] = array[j + 1];    // Move right number to left
      array[j + 1] = temp;        // Move saved number to right
      console.log(`Swapped: ${array[j]} and ${array[j + 1]}`);
    }
  }
}

// Print final sorted array
console.log("Sorted array:", array);