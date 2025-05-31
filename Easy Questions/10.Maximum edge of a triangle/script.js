//! Maximum Edge of a Triangle
//* Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

//! Note :
//! Sum of two side in a triangle  >  third side of triangle

//? Output :
// nextEdge( 8 , 10) -----> 17
// nextEdge(5, 7) ------> 11
// nextEdge(9, 2) ------> 10

function nextEdge(sideOne, sideTwo) {
  if (sideOne < 0 || sideTwo < 0) {
    return "Please input Positive Integer";
  }

  const thirdSide = sideOne + sideTwo - 1;

  return thirdSide;
}; 



console.log(nextEdge(8,10)); // Output : 17 
console.log(nextEdge(5,7)); // Output : 11 
console.log(nextEdge(9,2)); // Output : 10 
