function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found
        }

        if (arr[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }

    return -1; // Not found
}

const arr = [10, 20, 30, 40, 50, 60, 70];
console.log(binarySearch(arr, 50)); // 4
console.log(binarySearch(arr, 25)); // -1