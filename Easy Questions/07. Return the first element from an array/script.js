//! Returns the First Element in an Array 
//* Create a Function that takes an array containing only numbers and return first element 

//? Output : 
// getFirstValue([1, 2, 3])  ----> 1 
// getFirstValue([80, 5, 100]) -----> 80 
// getFirstValue([-500, 0, 50]) -----> -500 

function getFirstValue(arr) {
    // return arr[0] 
    return arr.at(0);
}; 

console.log(getFirstValue([1 , 2, 3])); // Output : 1 
console.log(getFirstValue([80, 5, 100]));  // Output : 80 
console.log(getFirstValue([-500, 0, 50]));  // Output : -500 