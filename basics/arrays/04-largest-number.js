const array = [1, 0, 2, 3, 0, 4, 5, 0, 8];
let maxValue = array[0];
let minValue = array[0];

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


const smallestNumber = (arr) => {
  console.log("Original array:", arr);
  let minValue = arr[0];    
    for(let i=1; i<arr.length; i++) {   
        if(arr[i]< minValue) {
            minValue = arr[i];
        }   
    }
    console.log("Smallest number:", minValue);
}
smallestNumber(array)
