/**
 * Quick sort:-  [64, 34, 25, 12, 22, 11, 90]
 *  Output:- [11, 12, 22, 25, 34, 64, 90]
 */

/**
 * The quickSort function recursively partitions the array into two subarrays based on a pivot element. 
 * Elements smaller than the pivot are placed in the left subarray, 
 * and elements greater than the pivot are placed in the right subarray. 
 * The process continues until the base case (when the array has one or zero elements). 
 * The subarrays are then concatenated to form the sorted array. 
 * QuickSort has an average time complexity of O(n log n).
 */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const isSorted = arr[0]
    const left = []
    const right = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < isSorted) {
            left[left.length] = arr[i]
        } else {
            right[right.length] = arr[i]
        }
    }
    return [...quickSort(left), isSorted, ...quickSort(right)]
}

const result = quickSort([64, 34, 25, 12, 22, 11, 90])
console.log(result);
