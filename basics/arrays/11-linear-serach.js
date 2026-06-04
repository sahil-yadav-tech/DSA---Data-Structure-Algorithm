const array = [5, 10, 15, 20];
let target = 15;

let found = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
        console.log("Target found at index:", i);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Target not found");
}