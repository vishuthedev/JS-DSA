/**
 * Checking squre in another array
 * arr=[1,2,3,4], arr2=[1,16,4,9]
 * if(array1[i] * array[i] === array2[j])
 * let isSqure=true
 */

// example 1 :- 
function isSqureCheck(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        let isSqure = false;
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] * array1[i] === array2[j]) {
                isSqure = true;
            }
            if (j === array2.length - 1) {
                if (!isSqure) {
                    return false;
                }
            }
        }
    }
    return true;
}

const result = isSqureCheck([1, 2, 3, 4], [1, 16, 4, 9]);
console.log("Result", result);

// time complexity :- o(n)^2 => quarditick 


// example 2 :- 

/**
 * arr=[1,2,3,4], arr2=[1,16,4,9] = case 1
 * arr=[1,2,4,2], arr2=[1,4,4,16] = case 2
 * 
 * condition :- map1 = {1:1, 2:2, 4:1}
 *              map2 = {1:1, 4:2, 16:1}
 */

function checkSqure(array1, array2) {
    let map1 = {};
    let map2 = {};
    for (item of array1) {
        map1[item] = [map1[item] || 0] + 1;
    }
    for (item1 of array2) {
        map2[item1] = [map2[item1] || 0] + 1;
    }
    for (let key in map1) {
        if (!map2[key * key]) {
            return false;
        }
        if (map1[key] !== map2[key * key]) {
            return false;
        }
    }
    return true
}

const result1 = checkSqure([1, 2, 4, 2], [1, 4, 16,]);
console.log("Result", result1);


// time complexity :- o(n) => linear 