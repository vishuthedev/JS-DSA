/**
 * Check the given number is prime or not = 5
 * output = true
 * 4 = false
 */

function checkPrime(num){
    if(num <= 1){
        return false
    }
    for(let i=2; i*i<=num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
console.log(checkPrime(4));