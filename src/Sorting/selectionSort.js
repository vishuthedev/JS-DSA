/**
 * Selection sort:-  [64, 34, 25, 12, 22, 11, 90]
 *  Output:- [11, 12, 22, 25, 34, 64, 90]
 */

/**
 * This selectionSort function iterates through the array and selects the minimum element from the unsorted portion, 
 * swapping it with the first unsorted element. The process repeats until the entire array is sorted. 
 * Selection sort also has a time complexity of O(n^2) and may not be the most efficient for large datasets.
 */

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        const temp = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = temp;
    }
    return arr;
}

const result = selectionSort([64, 34, 25, 12, 22, 11, 90])
console.log(result);
