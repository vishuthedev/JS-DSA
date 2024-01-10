/**
 * BubblrSort:-  [64, 34, 25, 12, 22, 11, 90];
 * Output:- [11, 12, 22, 25, 34, 64, 90]
 */

/**
 * This bubbleSort function iterates through the array, 
 * compares adjacent elements, and swaps them if they are in the wrong order. 
 * The process repeats until the array is sorted. 
 * This is a basic sorting algorithm with a time complexity of O(n^2), 
 * so it may not be the most efficient for large datasets.
 */
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const result = bubbleSort([64, 34, 25, 12, 22, 11, 90])
console.log(result);