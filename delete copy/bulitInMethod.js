// TODO: Delete an element from an array using the filter method
const numbersArray = [1, 2, 5, 9, 8]; 
const filteredArray = numbersArray.filter((item) => {
    return item !== 2;
});
console.log(filteredArray); // Output: [1, 5, 9, 8]

// TODO: Delete elements from an array using the splice method
const numbersArray1 = [1, 2, 5, 9, 8]; 
const removedElements = numbersArray1.splice(2, 2); 
console.log(removedElements); // Output: [5, 9] 

// TODO: Remove the first element from an array using shift method
let numberArray2 = [1, 2, 3, 4, 5]; // Initial array
numberArray2.shift(); 
console.log(numberArray2); // Output: [2, 3, 4, 5]

//TODO:- Remove the last element from an array using pop method
numberArray2.pop();
console.log(numberArray2);


//TODO:- Remove the last element manually (like pop)
let numberArray3 = [2, 3, 4, 5]; 
numberArray3.length = numberArray3.length - 1;

console.log(numberArray3); // Output: [2, 3, 4]
