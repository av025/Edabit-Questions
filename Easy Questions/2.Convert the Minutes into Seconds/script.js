//! Convert the Minutes into Seconds 
// Write a function which convert Minutes into Seconds 

//? Example : 
// convert(5)  Output : 300 
// convert(3)  Output : 180 
// convert(2)  Output : 120  

//* Hint : 1 Minutes : 60 Seconds 

const convert = function(min) {
    const convertIntoSec = min * 60; 
    return convertIntoSec; 
}; 


console.log(convert(5));  // Output : 300 
console.log(convert(3));  // Output : 180 
console.log(convert(2));  // Output : 120 