/**
 * find the duplicate number for and array = [1, 2, 3, 4, 2, 7, 8, 3]
 * output = [2, 3]
 * 
 */

function findDuplicates(arr) {
    const duplicates = [];

    for (let i = 0; i < arr.length -1; i++) {
        for(let j=i+1; j< arr.length; j++){
            if(arr[i] === arr[j]){
                let isDuplicate = false;
                for (let k = 0; k < duplicates.length; k++) {
                    if (duplicates[k] === arr[i]) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    duplicates[duplicates.length] = arr[i];
                }
            }
        }
    }

    return duplicates;
}

const duplicatesArray = findDuplicates([1, 2, 3, 4, 2, 7, 8, 3]);
console.log(duplicatesArray);
