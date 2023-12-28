/**
 * Helper recusive function
 * [1,2,3,4,5,6,7,8,9]
 * [1,3,5,7,9] => output
 * number % 2 !== 0;
 */

function findOdd(array){
    let newArr = [];
    function helperRecersive(inputArray){
        if(inputArray.length === 0){
            return;
        }if(inputArray[0] % 2 !== 0){
            newArr.push(inputArray[0]);
        }
        helperRecersive(inputArray.slice(1))
    }
    helperRecersive(array) // 1ist time calling
    return newArr;
}

const result = findOdd([1,2,3,4,5,6,7,8,9])
console.log("Result", result);