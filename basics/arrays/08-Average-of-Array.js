const array = [5, 7, 9, 5, 6, 8];

let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

console.log("Total sum is:", sum);

let arrayAvg =Number( (sum / array.length).toFixed(2));

console.log("Average of array is:", arrayAvg);