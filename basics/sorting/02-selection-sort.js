// TODO:-Selection Sort repeatedly selects the smallest element from the unsorted part of the array and places it at its correct position.

// "Selection Sort always finds the smallest element from the unsorted part of the array, places it in the correct position, and ignores the already sorted part in the next rounds."

// NOTE 
// STEPS
// Answer: Store the index.
// Why?
// Because after we finish searching, we need to swap the first element with the smallest element.





// Suppose we have:[29, 10, 14, 37, 13]
// We found the smallest value:10
// If we only store:smallest = 10
// Now I ask you: Where is 10 in the array?

//! You don't know! To swap, we need to know which position it is at.

//! We store the index of the smallest element because swapping is done using array positions (indices), not just values.

// We store the index of the smallest element because swapping is done using array positions (indices), not just values.


const array = [45, 55, 25, 10, 98, 87, 10];

for (let i = 0; i < array.length - 1; i++) {

    // Assume current element is the smallest
    let minIndex = i;

    // Find the smallest element
    for (let j = i + 1; j < array.length; j++) {

        if (array[j] < array[minIndex]) {
            minIndex = j;
        }
    }

    // Swap
    if (minIndex !== i) {
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}

console.log(array);
