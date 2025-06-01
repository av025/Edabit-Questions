//! Return the Sum of Two Numbers 
//* Create a function that takes two number as arguments and return their Sum 

//? Example 
// addition(3 , 2)  Output : 5 
// addition(-3 , -6) Output : 9  
// addition(7 , 3)  Output : 10 

const addition = function(inputNumOne, inputNumTwo) {
    const sumOfNumbers = inputNumOne + inputNumTwo; 
    return sumOfNumbers; 
}; 


console.log(addition(3 , 2)); 
console.log(addition(-3, -6)); 
console.log(addition(7 , 3)); 