const arrayValue = [41, 25, 63, 56, 45, 100, 10, 500];

const sumOfArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += array[i];
  }
  return sum;
};

console.log("The sum of array is ", sumOfArray(arrayValue));
