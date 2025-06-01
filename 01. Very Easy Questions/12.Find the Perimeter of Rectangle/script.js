//! Find the Perimeter of Rectangle
//* Create a function that takes length and width and finds the perimeter of a rectangle.

//? Output :
// perimeterOfRectangle(6,7) ----> 26
// perimeterOfRectangle(20,10) -----> 60
// perimeterOfRectangle(9,2)  -----> 22

function perimeterOfRectangle(length, width) {
  const totalWidth = 2 * width;
  const totalLength = 2 * length;

  const perimeter = totalLength + totalWidth;

  return perimeter;
}


console.log(perimeterOfRectangle(6,7));   // Output : 26 
console.log(perimeterOfRectangle(20,10)); // Output : 60 
console.log(perimeterOfRectangle(9,2));  // Output : 22 