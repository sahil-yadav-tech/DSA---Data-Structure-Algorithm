const arrayValue = [41, 25, 63, 56, 41, 45, 45, 100, 10, 500, 45, 10, 25];

const countOccurrences = (array) => {
  let arrayObj = {}; // Move inside function for better encapsulation
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    arrayObj[element] = (arrayObj[element] || 0) + 1;
  }
  return arrayObj; // Return the object
};



const result = countOccurrences(arrayValue);
console.log("The count of occurrences is:", result);
// Output: The count of occurrences is: { '10': 2, '25': 2, '41': 2, '45': 3, '56': 1, '63': 1, '100': 1, '500': 1 }

