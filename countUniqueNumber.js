// count unique number
/**
 * [1,1,2,2,3,4,5,5,6,7,7,7,8,9,9]
 * output :- 9
 */

function countUnique(array) {
    if (array.length > 0) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j]
            }
        }
        return i + 1;
    } else {
        throw new Error('Array is empty')
    }

}
const result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9]);
console.log(result);