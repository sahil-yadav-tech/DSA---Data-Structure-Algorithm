const array = [45, 55, 25, 10, 98, 87, 10];

for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    console.log(`Comparing: ${array[j]} and ${array[j + 1]}`);
    if (array[j] > array[j + 1]) {
      // Swap elements
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      console.log(`Swapped: ${array[j]} and ${array[j + 1]}`);
    }
  }
}

console.log("Sorted array:", array);