/**
 * Recursin : when function call itself
 * otherwise it will get called for infinite time
 * if function call itself then there must be an end point
 */

// example :- 1
function demo(){  // function with defination
    console.log("hey how are you!");
    demo() // function call itself
}
demo(); // calling



// example :- 2
let counter = 1;
function demo(number){  
 if(counter > number){  
    return;
 }
    console.log("hey how are you!" + counter);
    counter ++;
    demo(number)  // recursion function
}
demo(10);