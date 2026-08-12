// Reverse an array in place.
const arrayValue = [4, 6, 7, 8, 9, 10];
let left = 0;
let right = arrayValue.length - 1;
console.log(left, right);

while (left < right) {
  let temp = arrayValue[left];
  arrayValue[left] = arrayValue[right];
  arrayValue[right] = temp;
  left++;
  right--;
}
console.log(arrayValue, "arrayValue");
