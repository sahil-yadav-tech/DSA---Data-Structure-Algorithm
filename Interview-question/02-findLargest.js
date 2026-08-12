const array = [44, 64, 27, 58, 90, 10];
let maxValue = array[0];
for (let i = 0; i < array.length; i++) {
  if (maxValue < array[i]) {
    maxValue = array[i];
  }
}

console.log(maxValue, "maxValue");

