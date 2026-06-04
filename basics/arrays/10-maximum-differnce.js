const array = [1, 9, 3, 10, 52, 65];
let maxDifference = -Infinity;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        const difference = array[j] - array[i];
        console.log(maxDifference, "maxDifference");
        
        if (difference > maxDifference) {
            maxDifference = difference;
        }
    }
}

console.log(maxDifference); // 8