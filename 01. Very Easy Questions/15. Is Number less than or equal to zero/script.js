//! Is Number Less than or equal to Zero 
// Create a function which takes a number as an argument and returns true if the number was less than zero or equal to Zero otherwise it return false all ways

//? Output : 
//* lessThanOrEqualToZero(5)  -----> false 
//* lessThanOrEqualToZero(0)  -----> true
//* lessThanOrEqualToZero(-2) -----> true


function lessThanOrEqualToZero(number) {
    if(number <= 0) {
        return true;
    }else {
        return false;
    }
};


console.log(lessThanOrEqualToZero(5));  // false 
console.log(lessThanOrEqualToZero(0));  // true 
console.log(lessThanOrEqualToZero(-2)); // true 


