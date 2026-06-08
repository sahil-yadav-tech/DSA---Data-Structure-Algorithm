// Find Intersection of Two Arrays

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = [];

// Traverse first array
for (let i = 0; i < array1.length; i++) {
    const currentElement = array1[i];

    // Check if current element exists in second array
    for (let j = 0; j < array2.length; j++) {
        if (currentElement === array2[j]) {

            // Avoid duplicate entries in result
            let alreadyExists = false;

            for (let k = 0; k < intersection.length; k++) {
                if (intersection[k] === currentElement) {
                    alreadyExists = true;
                    break;
                }
            }

            if (!alreadyExists) {
                intersection.push(currentElement);
            }

            break;
        }
    }
}

console.log("Intersection:", intersection);

/*
Output:
Intersection: [3, 4, 5]
*/

// Time Complexity: O(n * m)
// Space Complexity: O(min(n, m))

