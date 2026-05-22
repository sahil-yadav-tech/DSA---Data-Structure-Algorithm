const data = [4, 5, 8, 9, 4];
let position = 3;
for (let i = 3; i < data.length - 1; i++) {
  console.log(data[i], i);
  data[i] = data[i + 1];
  data.length = data.length - 1;
}
console.log(data);
