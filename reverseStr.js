/**
 * Reverse a string :- 'vishal'
 * output:- 'lahsiv'
 */

function reverseStr(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const result = reverseStr('vishal');
console.log(result);