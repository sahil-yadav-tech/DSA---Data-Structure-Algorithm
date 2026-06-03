const array = [1, 2, 3, 4, 5, 6, 7, 8];

function findEvenOdd(arr) {
    let even = [];
    let odd = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }

    return { even, odd };
}

const result = findEvenOdd(array);

console.log("Even Numbers:", result.even, result.even.length);
console.log("Odd Numbers:", result.odd, result.odd.length);