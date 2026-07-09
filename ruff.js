const arrayValue = [41, 25, 63, 56, 45];
let value = 25;
const linearSerch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element, "element");
    if(element===target){
        return [array[i], i]
    }
  }
};
console.log(linearSerch(arrayValue, value));

