/**
 * merge two give array element in a single array
 * let a = [1,3,2,4]
 * let b = [6,8,7,5]
 * output = [1,2,3,4,5,6,7,8]
 */

function mergeArrays(arr1, arr2) {
    const mergedArr = [];
    let i = 0, j = 0, k = 0
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr[k] = arr1[i];
            i++;
        } else {
            mergedArr[k] = arr2[j];
            j++;
        }
        k++;
    }
    while (i < arr1.length) {
        mergedArr[k] = arr1[i];
        i++;
        k++;
    }
    while (j < arr2.length) {
        mergedArr[k] = arr2[j];
        j++;
        k++;
    }
    for (let m = 0; m < mergedArr.length - 1; m++) {
        for (let n = m + 1; n < mergedArr.length; n++) {
            if (mergedArr[m] > mergedArr[n]) {
                const temp = mergedArr[m];
                mergedArr[m] = mergedArr[n];
                mergedArr[n] = temp;
            }
        }
    }
    return mergedArr;

}

const firstArr = [1, 3, 2, 4];
const secondArr = [6, 8, 7, 5];
const result = mergeArrays(firstArr, secondArr);
console.log(result);