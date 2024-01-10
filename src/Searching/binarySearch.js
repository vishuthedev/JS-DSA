/**
 * Binary search programe = [3, 7, 1, 9, 5, 2]
 * find valu (target) = 9
 * output = 3 (index)
 */

/**
 * The binarySearch takes a sorted array and a target value. 
 * It repeatedly divides the search range in half until the target is found or the search range is empty. 
 * If the target is found, the index of the target is returned; 
 * otherwise, -1 is returned to indicate that the target is not present in the array.
*/

function binarySearch(arr,target){
   let min = 0;
   let max = arr.length -1;
   while(min <= max){
    const mid = Math.floor((min + max) /2)

    if(arr[mid] === target){
        return mid;
    }else if(arr[mid] < target){
        min = mid + 1;
    }else{
        max = mid - 1;
    }
   }
   return -1;
}

const originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const targetValue = 5

const result = binarySearch(originalArr, targetValue)
console.log(result);