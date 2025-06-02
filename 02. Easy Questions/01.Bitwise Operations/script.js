//! Bitwise Operations 
// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

//? Example : 
// bitwiseAND(7,12) ----> 4
// bitwiseOR(7,12)  ----> 12
// bitwiseXOR(7,12) ----> 11 

//! Here we use Bitwise operator to perform bit related operation on our operand and we use .toString() method which help to convert decimal number to binary number 

function bitwiseAND(numberOne, numberTwo) {
    const resultedOperation = numberOne & numberTwo; 
    //* Here we used the Bitwise AND operator "&"

    // return resultedOperation.toString(2);
    //* Here in this .toString(2) we passed the radix argument or we say base of number system 2 which means binary number.
    return resultedOperation
}; 


function bitwiseOR(numberOne, numberTwo) {
    const resultedOperation = numberOne | numberTwo; 
    //* Here we used the Bitwise OR operator "|"

    // return resultedOperation.toString(2);
     //* Here in this .toString(2) we passed the radix argument or we say base of number system 2 which means binary number.

     return resultedOperation;
}; 


function bitwiseXOR(numberOne, numberTwo) {
    const resultedOperation = numberOne ^ numberTwo; 
    //* Here we used the Bitwise XOR Operation "^" 

    // return resultedOperation.toString(2); 
     //* Here in this .toString(2) we passed the radix argument or we say base of number system 2 which means binary number.
    return resultedOperation
}; 

console.log(bitwiseAND(7,12)); // Output : 4 
console.log(bitwiseOR(7,12));  // Output : 12 
console.log(bitwiseXOR(7,12)); // Output : 11

