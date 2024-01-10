/**
 * Find max element in a array = [36,5,41,17,53,78]
 * output = 78
 */

function findMaxElement(arr) {
    let maxArr = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxArr) {
            maxArr = arr[i];
        }
    }
    return maxArr;

}
const result = findMaxElement([36, 5, 41, 17, 53, 78]);
console.log(result)