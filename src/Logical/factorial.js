/**
 * program to find factorial number = 5
 * fact = 5*4*3*2*1
 * output = 120
 */

function findFact(num) {
    let nexNum = 1;
    for (let i = 2; i <= num; i++) {
        nexNum *= i
    }
    return nexNum
}

const result = findFact(5);
console.log(result);