//! Convert Hours into Seconds 
//* Write a function that converts hours into seconds 

//? Output : 
// howManySeconds(2) -----> 7200 
// howManySeconds(10) ------> 36000
// howManySeconds(24) ------> 86400 

function howManySeconds(hour) {
    const MINUTES = 60; 
    const SECONDS = 60;
  const totalSeconds = hour * MINUTES * SECONDS; 
  return `In ${hour} hour's there was ${totalSeconds} seconds`; 
}; 


console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));