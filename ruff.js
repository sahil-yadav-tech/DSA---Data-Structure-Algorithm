const arrayValue = [41, 25, 63, 56,41, 45,45, 100, 10, 500, 45];
let target = 45
let count = 0
const countOccurrences = (array) => {
    console.log(array, "count-occurrences.js");
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element===target){
            count++
        }
    }
    return count
};

console.log("The maxDifference of array is ", countOccurrences(arrayValue));
