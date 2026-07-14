const array = [41, 25, 63, 0, 0, 56, 0, 0, 41, 45, 45, 100, 0, 0, 0, 0];
let newArray = [];
let zeroCount = 0;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (!(element === 0)) {
    newArray.push(element);
  } else {
    zeroCount++;
  }


}

for (let i = 0; i < zeroCount; i++) {
  newArray.push(0);
}

console.log(zeroCount);
console.log(newArray, "newArray");

