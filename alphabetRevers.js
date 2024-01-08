/**
 * Reverse a string by alphabetic order = 'vishal'
 * output = 'ahilsv'
 */

const alphabeticSort = (str = '') => {
    const sortStr = str.length;
    let splitArr = [];
    for (let i = 0; i < sortStr; i++) {
        splitArr[i] = str[i]
    }

    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (splitArr[i] > splitArr[j]) {
                const temp = splitArr[i];
                splitArr[i] = splitArr[j];
                splitArr[j] = temp
            }
        }
    }
    let res = '';
    for(const str of splitArr){
        res += str;
    }
    return res;
}

console.log(alphabeticSort('vishal'))