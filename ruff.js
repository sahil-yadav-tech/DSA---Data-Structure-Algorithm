const number = [88,44, 11, 52,  ,5,155];

let largest = Number.NEGATIVE_INFINITY;
let secondLargest = Number.NEGATIVE_INFINITY;

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
  if (number[i] > largest) {
    secondLargest = largest;
    largest = number[i];
  }
}

console.log(largest, secondLargest);
