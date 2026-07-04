const findLargetValue = (array) => {
  let maxValue = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > maxValue) {
      maxValue = element;
    }
  }

  return maxValue;
};

let array = [4, 8, 9, 5, 3, 7, 15];
console.log(findLargetValue(array));
