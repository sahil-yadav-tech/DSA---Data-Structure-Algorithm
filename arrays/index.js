const arr = [1, 2, 3, 4, 5];
function findMin(arr) {
    let min = arr[0];

    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }

    return min;
}

console.log(findMin([5, 2, 9, 1]));