// ============================================
// METHOD 1: Using for loop
// ============================================
const characterFrequencyUsingForLoop = (string) => {
  const frequencyObj = {};

  console.log("=== METHOD 1: For Loop ===");
  console.log(`Input String: "${string}"`);
  console.log("Step-by-step execution:");
  console.log("----------------------------------------");

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const currentCount = frequencyObj[currentChar] || 0;
    const newCount = currentCount + 1;
    
    frequencyObj[currentChar] = newCount;
    
    console.log(`Index ${i}: Character "${currentChar}" → Previous count: ${currentCount} → New count: ${newCount}`);
  }

  console.log("----------------------------------------");
  console.log("Final Result:", frequencyObj);
  console.log("==========================================\n");
  
  return frequencyObj;
};

// ============================================
// METHOD 2: Using forEach loop
// ============================================
const characterFrequencyUsingForEach = (string) => {
  const frequencyObj = {};

  console.log("=== METHOD 2: forEach Loop ===");
  console.log(`Input String: "${string}"`);
  console.log("Step-by-step execution:");
  console.log("----------------------------------------");

  const charactersArray = string.split("");
  
  charactersArray.forEach((character, index) => {
    const previousCount = frequencyObj[character] || 0;
    const updatedCount = previousCount + 1;
    
    frequencyObj[character] = updatedCount;
    
    console.log(`Index ${index}: Character "${character}" → Previous count: ${previousCount} → Updated count: ${updatedCount}`);
  });

  console.log("----------------------------------------");
  console.log("Final Result:", frequencyObj);
  console.log("==========================================\n");
  
  return frequencyObj;
};

// ============================================
// METHOD 3: Using for...of loop (Bonus)
// ============================================
const characterFrequencyUsingForOf = (string) => {
  const frequencyObj = {};

  console.log("=== METHOD 3: for...of Loop ===");
  console.log(`Input String: "${string}"`);
  console.log("Step-by-step execution:");
  console.log("----------------------------------------");

  let index = 0;
  for (const character of string) {
    const previousCount = frequencyObj[character] || 0;
    const updatedCount = previousCount + 1;
    
    frequencyObj[character] = updatedCount;
    
    console.log(`Index ${index}: Character "${character}" → Previous count: ${previousCount} → Updated count: ${updatedCount}`);
    index++;
  }

  console.log("----------------------------------------");
  console.log("Final Result:", frequencyObj);
  console.log("==========================================\n");
  
  return frequencyObj;
};

// ============================================
// METHOD 4: Using reduce (Bonus)
// ============================================
const characterFrequencyUsingReduce = (string) => {
  console.log("=== METHOD 4: reduce Method ===");
  console.log(`Input String: "${string}"`);
  console.log("----------------------------------------");

  const frequencyObj = string.split("").reduce((accumulator, character) => {
    const previousCount = accumulator[character] || 0;
    const updatedCount = previousCount + 1;
    
    accumulator[character] = updatedCount;
    
    console.log(`Character "${character}" → Previous count: ${previousCount} → Updated count: ${updatedCount}`);
    console.log("Current accumulator:", accumulator);
    console.log("---");
    
    return accumulator;
  }, {});

  console.log("----------------------------------------");
  console.log("Final Result:", frequencyObj);
  console.log("==========================================\n");
  
  return frequencyObj;
};

// ============================================
// TESTING ALL METHODS
// ============================================
const testString = "shailsahiln";

console.log("🚀 TESTING CHARACTER FREQUENCY FUNCTIONS");
console.log(`📝 Input: "${testString}"`);
console.log("============================================\n");

// Call all methods
const result1 = characterFrequencyUsingForLoop(testString);
const result2 = characterFrequencyUsingForEach(testString);
const result3 = characterFrequencyUsingForOf(testString);
const result4 = characterFrequencyUsingReduce(testString);

// ============================================
// VERIFICATION
// ============================================
console.log("=== VERIFICATION ===");
console.log("All results are identical:", 
  JSON.stringify(result1) === JSON.stringify(result2) &&
  JSON.stringify(result2) === JSON.stringify(result3) &&
  JSON.stringify(result3) === JSON.stringify(result4)
);
console.log("Final Output:", result1);
console.log("\nCharacter frequency breakdown:");
for (const [character, count] of Object.entries(result1)) {
  console.log(`  "${character}": ${count} time${count > 1 ? 's' : ''}`);
}