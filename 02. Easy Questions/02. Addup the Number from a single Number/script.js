//! Addup the Number from a single Number 
//* Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

//? Example
// addUp(4) ----> 10
// addUp(13) ---> 91
// addUp(600) ----> 180300  


//? Note : 
// Expect any positive number between 1 and 1000.


function addUp(number) {
    if(number > 0 && number <= 1000 ) { 
       let addNum = 0 ; 
       for(let i = 1; i <= number; i++) {
          addNum = i + addNum; 
       }; 

       return addNum; 
 
    }else {
        return 'Please give range of number between 1 to 1000';
    };
}; 

// console.log(addUp(-2));
console.log(addUp(4)); // Output : 10 
console.log(addUp(13)); // Output : 91 
console.log(addUp(600)); // Output : 180300