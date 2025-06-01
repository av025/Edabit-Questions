//! Sum of Polygon
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

//* The Polygon are closed geometrical figure bounded by one or more line segments

//? Note :
//* n will always be greater than 2.
//* The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

//? Examples :
// sumOfPolygon(3)  ---> 180
// sumOfPolygon(4)  ---> 360
// sumOfPolygon(6) ---> 720

function sumOfPolygon(nSide) {
  if (nSide < 3) {
    return "We need side for polygon greater than 2";
  }

  const polygon = (nSide - 2) * 180;
  return polygon;
};

console.log(sumOfPolygon(3));  // Output : 180
console.log(sumOfPolygon(4));  // Output : 360 
console.log(sumOfPolygon(6)); // Output : 720 
