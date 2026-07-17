// const factorial = (number) => {
//   // console.log(number, "Number");
//   let result = 1;

//   for (let i = result; i <= number; i++) {
//     console.log(i);
//     result = result * i;
//   }

//   console.log(result, "result");
// };

// factorial(4);

// TODO USING RECUSERSION

const factorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
};

console.log(factorial(4)); // 24

// const printCount = (number) => {
//     console.log(number, "number");
    
//   if (number === 20) {
//     console.log("done");
//     return;
//   }

//   printCount(number + 1);
// };

// printCount(5);
