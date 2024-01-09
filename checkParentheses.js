/**
 * fnction to check if a given string of parentheses is balanced = { ')': '(', '}': '{', ']': '[' }
 * condition:- {[()]} = true
 * {([])} = false
 * [{()}] = false
 * output = true or false
 */

function checkParentheses(str) {
    const stack = [];
    let top = -1;
    const paranthesesMap = { ')': '(', '}': '{', ']': '[' };
    for (let i = 0; i < str.length; i++) {
        const currentChr = str[i];
        if (currentChr === ')' || currentChr === '}' || currentChr === ']') {
            const topElement = top >= 0 ? stack[top] : '#';
            if (paranthesesMap[currentChr] !== topElement) {
                return false;
            }
            top--;
        } else {
            top++
            stack[top] = currentChr;
        }
    }
    return top === -1;
}

console.log(checkParentheses('{([])}'));
console.log(checkParentheses('{[(})]')); 
console.log(checkParentheses('[}(]{)'));