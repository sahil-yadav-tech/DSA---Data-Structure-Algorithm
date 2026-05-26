function deleteElement(arr, index) {
    // Edge case: if index is out of range
    if (index < 0 || index >= arr.length) {
        console.log("Index out of range");
        return arr;
    }
    
    // Shift elements to the left starting from the index
    for (let i = index; i < arr.length; i++) {
        arr[i] = arr[i + 1]; 
        console.log(arr);
        
    }
    
    // Decrease the length of the array
    arr.length = arr.length - 1;
    
    return arr;
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
console.log(deleteElement(arr, 2)); // Deletes the element at index 2 (which is 3)
