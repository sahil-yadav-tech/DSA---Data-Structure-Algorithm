// TODO:-Selection Sort repeatedly finds the smallest element from the unsorted part of the array and places it at the beginning.

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
