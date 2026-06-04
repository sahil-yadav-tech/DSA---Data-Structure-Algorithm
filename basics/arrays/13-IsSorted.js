const array = [1, 2,8, 3, 4, 5];

let isSorted = true;

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
        isSorted = false;
        break;
    }
}

console.log(isSorted);