const array = [100, 45, 55, 25, 10, 98, 87, 11];

for (let i = 0; i < array.length - 1; i++) {
  let minIndex = i;
  // console.log(minIndex, "min");

  for (let j = i + 1; j < array.length; j++) {
    // console.log(array[j], array[minIndex]);
    // console.log("---------------------------------------------------------");
    if (array[j] < array[minIndex]) {
      minIndex = j;
    }
  }

  // console.log(minIndex, array[minIndex]);
  if (minIndex != i) {
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
}
console.log(array);
