const array = [1,5,9,1,9,7,5]
let target = 5
let count =0 

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(array[i] === target){
        count++
    }
    
}
console.log(`occurrence of ${target} count is`, count  );


// Another Interview question approach
function countOccurrences(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrences([1, 5, 9, 1, 9, 7, 5], 5));