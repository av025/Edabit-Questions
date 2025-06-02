//! Left Shift by Powers of Two
//* Problem Link : https://edabit.com/challenge/pB6CF3rFBi8ykJ3Br

function shiftToLeft(operandOne, operandTwo) {
  if (operandTwo < 0) {
    return "operandTwo value should be in positive integer";
  }

  const powerOfTwo = 2 ** operandTwo;
  const customLeftShiftBitwise = operandOne * powerOfTwo;
  return customLeftShiftBitwise;
}; 

// console.log(shiftToLeft(5,-2));
console.log(shiftToLeft(5,2));
console.log(shiftToLeft(10 , 3)); 
console.log(shiftToLeft(-32, 2));
console.log(shiftToLeft(-6, 5));
console.log(shiftToLeft(12, 4));
console.log(shiftToLeft(46,6));


