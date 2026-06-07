const array = [1, 2, 3, 4, 5, 8, 15.2];

for (let i = 0; i < array.length - 1; i++) {
    let current = array[i];
    let next = array[i + 1];

    while (next - current > 1) {
        console.log("Missing Number:", current + 1);
        current++;
    }
}