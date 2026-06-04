const array = [5,10,15,20,]
let target = 15

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(array[i] === target){
        console.log("target value is one:", i , "index");
        
    }else{
        console.log("Not found proper Index");
    }
}