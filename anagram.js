// check string anagram

/*
anagram is same length and same word in both string is anagram
'vishal' => 'ishavl' = is a anagram
'hello' => 'elllo' = is not a anagram
*/

function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    let counter = {}
    for (let letters of string1) {
        counter[letters] = (counter[letters] || 0) + 1;
    }
    for (let items of string2) {
        if (!counter[items]) {
            return false;
        }
        counter[items] -= 1;
    }
    return true;
}
const result = isAnagram('hello', 'elllo')
console.log(result);

// linear time complexity o(n)