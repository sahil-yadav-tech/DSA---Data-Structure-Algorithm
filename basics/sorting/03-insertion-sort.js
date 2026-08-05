const array = [100, 45, 55, 25, 10, 98, 87, 11];

// Insertion Sort:
// Pick one element at a time (key).
// Shift all larger elements to the right.
// Insert the key into its correct position.

for (let i = 1; i < array.length; i++) {
  // Current element to be inserted
  let key = array[i];

  // Start comparing from the previous element
  let j = i - 1;

  // While we are inside the array
  // and the current element is larger than the key,
  // keep shifting elements to the right.
  while (j >= 0 && array[j] > key) {
    array[j + 1] = array[j]; // Shift element to the right
    j--; // Move one position to the left
  }

  // Insert the key into its correct position
  array[j + 1] = key;
}

console.log(array);

// TODO :- SIMPLE ONE
// const array = [100, 45, 55, 25, 10, 98, 87, 11];

// for (let i = 1; i < array.length; i++) {
//   let key = array[i];
//   let j = i - 1;
//   while (key >= 0 && array[j] > key) {
//     array[j + 1] = array[j];
//     j--;
//   }
//   array[j + 1] = key;
// }

// console.log(array, "array");
