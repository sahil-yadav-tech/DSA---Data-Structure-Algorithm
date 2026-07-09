//TODO ===================================== FIRST  Method =============================================================

const array = [5, 10, 15, 20];
let value = 15;

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // return index
    }
  }
  return -1; // not found
};

console.log(linearSearch(array, value)); // 1

//TODO ===================================== Second Method =============================================================
let targetIndex = 15;

const index = array.indexOf(targetIndex);

if (index !== -1) {
  console.log("Target found at index:", index);
} else {
  console.log("Target not found");
}

//TODO ===================================== THIRD Method =============================================================
let found = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === targetIndex) {
    console.log("Target found at index:", i);
    found = true;
    break;
  }
}

if (!found) {
  console.log("Target not found");
}
