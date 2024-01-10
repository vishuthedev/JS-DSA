/**
 * Squre root of a number = 25
 * output = 5
 */

function squreRoot(num, iteration = 10) {
    if (num <= 0) {
        return NaN;
    }
    let guessNum = num / 2;
    for (let i = 0; i < iteration; i++) {
        guessNum = 0.5 * (guessNum + num / guessNum)
    }
    return guessNum;
}

const result = squreRoot(25);
console.log(result);
