const array = [1, 2, 3, 4, 5];
const target = 5;


function twoSum(array, target) {
    // console.log('Two Sum: ', array, target);
    for(let i=0; i< array.length; i++){
        for(let j=0; j<array.length;j++){
            if(array[i] + array[j]=== target){
                console.log("Found the target: ", array[i], array[j]);
                return [i, j];
            }
        }
    }
}


twoSum(array, target);