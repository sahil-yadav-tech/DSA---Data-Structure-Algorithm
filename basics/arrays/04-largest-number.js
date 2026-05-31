const array = [1, 0, 2, 3, 0, 4, 5, 0, 8];
let maxValue = array[0];


const largestNumber = (arr) => {
  console.log("Original array:", arr);
  for(let i=1; i<arr.length; i++) {
    if(arr[i]> maxValue) {
      maxValue = arr[i];
    }
  }
  console.log("Largest number:", maxValue);
};
largestNumber(array);
