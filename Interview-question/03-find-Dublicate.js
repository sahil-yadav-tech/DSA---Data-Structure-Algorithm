// Find the duplicate in an array of integers.
const array = [44, 64,64, 27,27,58,90, 58, 90, 10];
let FindDublicate = []
let oneElement  = []
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if(!oneElement.includes(array[i])){
        oneElement.push(array[i])
    }else{
        FindDublicate.push(array[i])

    }
}
console.log(FindDublicate);
console.log(oneElement);

