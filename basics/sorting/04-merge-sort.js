const array = [100, 45, 55, 25, 10, 98, 87, 11];

function mergeSort(arr, left, right) {

  // Base case: If the array has only one element, stop dividing.
  if (left >= right) return;

  // Find the middle index.
  let mid = Math.floor((left + right) / 2);

  // Sort the left half.
  mergeSort(arr, left, mid);

  // Sort the right half.
  mergeSort(arr, mid + 1, right);

  // Merge the two sorted halves.
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {

  let temp = [];

  let i = left;      // Pointer for left half
  let j = mid + 1;   // Pointer for right half

  // Compare both halves and store the smaller element.
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  // Copy remaining elements from the left half.
  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  // Copy remaining elements from the right half.
  while (j <= right) {
    temp.push(arr[j]);
    j++;
  }

  // Copy the sorted elements back into the original array.
  for (let k = 0; k < temp.length; k++) {
    arr[left + k] = temp[k];
  }
}

mergeSort(array, 0, array.length - 1);

console.log(array);