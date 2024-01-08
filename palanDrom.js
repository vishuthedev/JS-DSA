/**
 * Check if given string is a palandrom or not = 'level'
 * output = 'level'
 */

function checkPalandrom(str) {
    const len = str.length;
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return 'Not a PalanDrom'
        } else {
            return 'Is a PalanDrom'
        }
    }
}

const result = checkPalandrom('mom');
console.log(result);