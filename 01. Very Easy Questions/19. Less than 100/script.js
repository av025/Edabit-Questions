//!  Less than 100 
//* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

//? Output : 
// lessThanHundred(22, 15)  -----> true 
// lessThanHundred(83, 34)  -----> false 
// lessThanHundred(3 , 77)  -----> true 

function lessThanHundred(numberOne, numberTwo) {
    const sumOfNum = numberOne + numberTwo;

    if(sumOfNum < 100) {
        return true;
    }else {
        return false; 
    }; 
};


console.log(lessThanHundred(22, 15));  // Output : true 
console.log(lessThanHundred(83, 34));  // Output : false 
console.log(lessThanHundred(3,77));   // Output : true 