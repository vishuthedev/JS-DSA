/**
 * Linear search programe = [3, 7, 1, 9, 5, 2]
 * find valu (target) = 9
 * output = 3 (index)
 */

/**
 * The linearSearch function iterates through each element in the array and compares it with the target value. 
 * If a match is found, it returns the index of the target; 
 * otherwise, it returns -1 to indicate that the target is not present in the array.
 */

function linearSearch(arr,target){
    for(let i=0; i<=arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

const originalArr = [3, 7, 1, 9, 5, 2]
const targetValue = 9

const result = linearSearch(originalArr, targetValue)
console.log(result);