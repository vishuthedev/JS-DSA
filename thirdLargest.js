// sort arr without using built in method

// function findThirdLargest(arr) {
//     // Check if the array has at least 3 elements
//     if (arr.length < 3) {
//         return "The array does not have at least three elements.";
//     }
//     // Sort the array in descending order
//     arr.sort(function (a, b) {
//         return b - a;
//     });
//     // Return the element at index 2 (the third largest)
//     return arr[2];
// }
// const array = [3, 45, 64, 5, 10, 12, 97, 53, 24, 79];
// const thirdLargest = findThirdLargest(array);
// console.log("The third largest number is: " + thirdLargest);



// without using inbuilt method

function findThirdLargest(arr) {
    if (arr.length < 3) {
        return "The array does not have at least three elements.";
    }
    let first = arr[0];
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        if (current > first) {
            third = second;
            second = first;
            first = current;
        } else if (current > second && current < first) {
            third = second;
            second = current;
        } else if (current > third && current < second) {
            third = current;
        }
    }
    return third;
}
const array = [3, 45, 64, 5, 10, 12, 97, 53, 24, 79];
const thirdLargest = findThirdLargest(array);
console.log("The third largest number is: " + thirdLargest);