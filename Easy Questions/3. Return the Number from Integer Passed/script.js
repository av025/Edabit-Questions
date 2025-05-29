//! Return the Number from Integer Passed 
//* Create the function that makes a number as an argument, increase the number by +1 and return the result 

//? Output : 
//  addition(0)  ----> 1
//  addition(2)  ----> 3
//  addition(-3) ----> -2  


function addition(num) { 
    //* Returning the next number from integer passed
     return ++num;
 }; 


 console.log(addition(0));
 console.log(addition(2));
 console.log(addition(-3));