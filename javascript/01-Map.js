// ==========================================
// 1. Implement map() as a normal function
// ==========================================

function myMap(arr, callback) {
  const result = [];

//   console.log(callback, "callback");
  

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  console.log(result, "result");
  

  process.exit()

  return result;
}


// ==========================================
// 2. Example 1: Multiply every number by 2
// ==========================================

const numbers = [1, 2, 3, 4, 5];

const doubled = myMap(numbers, (num) => {
  return num * 2;
});

console.log("Doubled:", doubled);


// // ==========================================
// // 3. Example 2: Get names from users
// // ==========================================

// const users = [
//   { id: 1, name: "Sahil", age: 25 },
//   { id: 2, name: "Rahul", age: 28 },
//   { id: 3, name: "Amit", age: 30 }
// ];

// const names = myMap(users, (user) => {
//   return user.name;
// });

// console.log("Names:", names);


// // ==========================================
// // 4. Example 3: Using index
// // ==========================================

// const userList = ["Sahil", "Rahul", "Amit"];

// const formattedUsers = myMap(userList, (user, index) => {
//   return `${index + 1}. ${user}`;
// });

// console.log("Formatted:", formattedUsers);


// // ==========================================
// // 5. Implement map() on Array.prototype
// // ==========================================

// Array.prototype.myMap = function (callback) {
//   const result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }

//   return result;
// };


// // ==========================================
// // 6. Using Array.prototype.myMap()
// // ==========================================

// const prices = [100, 200, 300];

// const updatedPrices = prices.myMap((price) => {
//   return price * 1.18;
// });

// console.log("Updated Prices:", updatedPrices);


// // ==========================================
// // 7. Original array is NOT modified
// // ==========================================

// const original = [1, 2, 3];

// const newArray = original.myMap((num) => {
//   return num * 10;
// });

// console.log("Original:", original);
// console.log("New:", newArray);