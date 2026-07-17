function checkPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        console.log(Math.sqrt(num), "Math.sqrt(num)");
        
        if (num % i === 0) {
            return false;
        }
    }

    return true;

    genratePrimeNumber
}

console.log(checkPrimeNumber(29)); // true
console.log(checkPrimeNumber(30)); // false

console.log(genratePrimeNumber());
