const array = [1, 2, 3, 4, 5, 1];
let newArrayValue = [];
let dublicateArrayValue =[]

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if(!newArrayValue.includes(array[i])){
        console.log("hey");
        newArrayValue.push(array[i])
    }else{
        console.log("Bye");
        dublicateArrayValue.push(array[i])
    }
    
}

console.log(newArrayValue, "newArray");
console.log(dublicateArrayValue, "dublicateArrayValue");


