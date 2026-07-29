// Starting array
const array = [45, 55, 25, 10, 98, 87, 10];

// Repeat the process (array length - 1) times
for (let i = 0; i < array.length - 1; i++) {
  
  // Check each pair of numbers (skip already sorted ones at the end)
  for (let j = 0; j < array.length - 1 - i; j++) {
    
    console.log(`Comparing: ${array[j]} and ${array[j + 1]}`);
    
    // If left number is bigger than right number, swap them
    if (array[j] > array[j + 1]) {
      let temp = array[j];        // Save left number
      array[j] = array[j + 1];    // Move right number to left
      array[j + 1] = temp;        // Move saved number to right
      console.log(`Swapped: ${array[j]} and ${array[j + 1]}`);
    }
    
  }
}

// Print final sorted array
console.log("Sorted array:", array);

/*
========================================================================
📖 SIMPLE EXPLANATION IN MY OWN WORDS:
========================================================================

We need to compare two numbers at a time: 
- First number = array[j] 
- Second number = array[j + 1] (the next one)

Let's trace what happens with our array: [45, 55, 25, 10, 98, 87, 10]

🔹 STEP 1: Compare 45 and 55
   - Is 45 > 55? NO ❌ 
   - So we DON'T swap (they are already in correct order)
   - Array stays: [45, 55, 25, 10, 98, 87, 10]

🔹 STEP 2: Compare 55 and 25  
   - Is 55 > 25? YES ✅
   - So we SWAP them
   - 55 goes to right, 25 goes to left
   - Array becomes: [45, 25, 55, 10, 98, 87, 10]

🔹 STEP 3: Compare 55 and 10
   - Is 55 > 10? YES ✅
   - So we SWAP them
   - 55 goes to right, 10 goes to left
   - Array becomes: [45, 25, 10, 55, 98, 87, 10]

🔹 STEP 4: Compare 55 and 98
   - Is 55 > 98? NO ❌
   - So we DON'T swap (55 is smaller, already in order)
   - Array stays: [45, 25, 10, 55, 98, 87, 10]

🔹 STEP 5: Compare 98 and 87
   - Is 98 > 87? YES ✅
   - So we SWAP them
   - 98 goes to right, 87 goes to left
   - Array becomes: [45, 25, 10, 55, 87, 98, 10]

🔹 STEP 6: Compare 98 and 10
   - Is 98 > 10? YES ✅
   - So we SWAP them
   - 98 goes to right, 10 goes to left
   - Array becomes: [45, 25, 10, 55, 87, 10, 98]

✅ After first pass, 98 (biggest) is at the end!
   Now we repeat this process for remaining numbers...

========================================================================
💡 KEY POINTS TO REMEMBER:
========================================================================

1. We ALWAYS compare a number with the NEXT number (j and j+1)
2. If left > right → SWAP (move bigger to right)
3. If left < right → DO NOTHING (they are already sorted)
4. After each full pass, the biggest number reaches the end
5. Then we ignore the last number and repeat for remaining ones

========================================================================
🎯 THE SWAP PROCESS (when we swap):
========================================================================

Before swap: [ ... , X , Y , ... ]  where X > Y

Step 1: temp = X     (save X in temporary box)
Step 2: X = Y        (put Y in X's position)
Step 3: Y = temp     (put saved X in Y's position)

After swap:  [ ... , Y , X , ... ]  ← Now Y comes before X (correct order!)

========================================================================
*/