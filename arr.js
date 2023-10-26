/**
 * arrays :- An array is a collection of items stored at contiguous memory locations.
 * Each item can be accessed through its index (position) number. Arrays always start at index 0, 
 * so in an array of 4 elements we could access the 3rd element using the index number 2.
 */

// Function to find the maximum number in an array

function findtheMaxNumber(arr) {
    if (arr.lenght === 0) {
        return "Array is empty"
    } else {
        let maxVal = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxVal) {
                maxVal = arr[i]
            }
        }
        return maxVal;
    }

}
const result = findtheMaxNumber([2, 10, 7, 32, 54, 87, 110, 63, 45])
console.log(result);