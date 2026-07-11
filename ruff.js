const arrayValue = [41, 25, 63, 56, 45, 100, 10, 500];

const checkEvenOrOdd = (array) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if(element%2 ===0){
      console.log(element, "Its Even Number");
    }else{
      console.log(element, "Its Odd Number");
    }
  }
};

console.log("The Avg of array is ", checkEvenOrOdd(arrayValue));
