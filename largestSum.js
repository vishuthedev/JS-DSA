/**
 * [1,2,3,4,3,5,4,6,7,8] => total element = 10
 * count largest sum of consecutive digits 
 */

/**
 * condition :- 
 * num = 4
 * output = 25
 * length -number +1 => 7
 * 10 - 4 + 1 => 7
 */

function findlargest(array, num) {
    if (num > array) {
        throw new Error("num is not greater then array")
    } else {
        let max = 0;
        for (let i = 0; i < array.length - num + 1; i++) {
            let temp = 0;
            for (let j = 0; j < num; j++) {
                temp += array[i + j];
            }
            if (temp > max) {
                max = temp;
            }
        }
        return max
    }
}

const result = findlargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("Result", result);