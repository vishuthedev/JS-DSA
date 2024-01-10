/**
 * remove duplicate number for and array = [1, 2, 3, 4, 2, 7, 8, 3]
 * output = [1, 2, 3, 4, 7, 8]
 * 
 */

function removeDuplicates(arr) {
    const originalArr = [];

    for (let i = 0; i < arr.length -1; i++) {
        let isDuplicate = false;
        for(let j=0; j< originalArr.length; j++){
            if(arr[i] === originalArr[j]){
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            originalArr[originalArr.length] = arr[i];
        }
    }

    return originalArr;
}

const duplicatesArray = removeDuplicates([1, 2, 3, 4, 2, 7, 8, 3]);
console.log(duplicatesArray);
