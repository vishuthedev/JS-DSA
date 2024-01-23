/**
 * Reverse a array :- [1, 2, 3]
 * output:- [3, 2, 1]
 */

function reverseStr(arr) {
    let reversedStr = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedStr += arr[i];
    }
    return reversedStr;
}

const result = reverseStr([1, 2, 3]);
console.log(result);