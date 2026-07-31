const array = [45, 55, 25, 10, 98, 87, 11];
const target = 100;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] + array[j] === target) {
      console.log(array[i] + array[j] === target, "Founded ");

      break;
    }
  }
}
