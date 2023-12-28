/**
 * Sorting using recursive function
 * [2,3,1,4] => by default case
 * [2,1,3,4] => case 1
 * [1,2,3,4] final output
 */

let myArr = [2, 3, 1, 4, 11, 13, 25, 70, 37, 7, 9, 8, 0, 33, 27, 20, 45, 6, 5]
let myNewList = [];
let i = 0;
let j = 1;

function isSorted(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

function sortCheck(array) {
    if (isSorted(array)) {
        myNewList = array
        return ;
    }
    else if (array[i] < array[j]) {
        i++;
        j++;
        sortCheck(array)
    } else {
        [array[i], array[j]] = [array[j], array[i]]
        i = 0;
        j = 1;
        sortCheck(array)
    }
}


sortCheck(myArr);
console.log("Result", myNewList);


