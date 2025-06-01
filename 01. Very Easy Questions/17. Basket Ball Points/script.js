//! Basket Ball Points 
//* You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value. 

//? Output : 
//  point(1,1)  -----> 5 
//  point(7, 5) ------> 29 
//  point(38 , 8) -----> 100  


function points(twoPointer , ThreePointer) {
  const twoPointerScore = twoPointer * 2 ; 
  const threePointerScore = ThreePointer * 3 ; 
  
  const totalPoints = twoPointerScore + threePointerScore;
  return totalPoints; 
}; 


console.log(points(1,1));  // Output : 5 
console.log(points(7,5));  // Output : 29 
console.log(points(38, 8));  // Output : 100 

