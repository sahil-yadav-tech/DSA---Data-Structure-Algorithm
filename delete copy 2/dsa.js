const deleteElement = (array, value) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (value !== array[i]) {
      result.push(array[i]);
    }
  }
  return result;
};

const array = [11, 22, 44, 33, 55];
let value = 22;

const data = deleteElement(array, value);
console.log(data, "data");
