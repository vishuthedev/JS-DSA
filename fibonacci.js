/**
 * Fibonacci series input = 5
 * output = 0+1 = 1
 * 1+1 = 2
 * 1+2 = 3
 * 2+3 = 5
 * 3+5 = 8
 * 5+8 = 13
 * 
 */

function Fibonacci(num) {
    let sequence = [0, 1];
    let sum = sequence[0] + sequence[1]
    for (let i = 2; i < num; i++) {
        const nextNum = sequence[i - 1] + sequence[i - 2];
        sequence[i] = nextNum;
        sum +=nextNum
    }
    return sum;
}

const result = Fibonacci(8);
console.log(result);